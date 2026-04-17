import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function assistantApiPlugin(env) {
  return {
    name: "assistant-api",
    configureServer(server) {
      server.middlewares.use("/api/assistant", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        const apiKey = env.AI_API_KEY || env.VITE_AI_API_KEY;
        const baseUrl = env.AI_BASE_URL || env.VITE_AI_BASE_URL || "https://api.openai.com/v1";
        const model = env.AI_MODEL || env.VITE_AI_MODEL || "gpt-4o-mini";

        if (!apiKey) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ reply: null }));
          return;
        }

        try {
          let raw = "";
          for await (const chunk of req) raw += chunk;
          const payload = raw ? JSON.parse(raw) : {};

          const question = (payload.question || "").toString();
          const context = (payload.context || "").toString();
          const history = Array.isArray(payload.history) ? payload.history : [];

          const response = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model,
              temperature: 0.2,
              messages: [
                {
                  role: "system",
                  content:
                    "You are an assistant for a Moroccan charity website. Reply in the user's language (Darija/French/Arabic). For association questions, prioritize exact facts from provided context only. For general logical questions, answer briefly and clearly.",
                },
                { role: "system", content: context },
                ...history,
                { role: "user", content: question },
              ],
            }),
          });

          if (!response.ok) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ reply: null }));
            return;
          }

          const data = await response.json();
          const reply = data?.choices?.[0]?.message?.content?.trim() || null;

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ reply }));
        } catch {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ reply: null }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), assistantApiPlugin(env)],
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
