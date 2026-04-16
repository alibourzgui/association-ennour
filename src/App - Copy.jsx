import React from "react";
import {
  Heart,
  HandCoins,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Image as ImageIcon,
  ShieldCheck,
  Copy,
  Landmark,
} from "lucide-react";

const activities = [
  {
    title: "Aide alimentaire",
    text: "Distribution de colis alimentaires, repas solidaires et soutien d’urgence pour les familles vulnérables.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soutien aux enfants",
    text: "Accompagnement scolaire, fournitures, vêtements et actions sociales pour redonner espoir aux plus jeunes.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Actions communautaires",
    text: "Campagnes locales, entraide de proximité et projets de développement humain au service de la communauté.",
    image:
      "https://images.unsplash.com/photo-1469571486292-b53601020f58?auto=format&fit=crop&w=900&q=80",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1469571486292-b53601020f58?auto=format&fit=crop&w=900&q=80",
];

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-2.6 0-4.2 1.6-4.2 4.4V11H7.5v3H10v7h3.5Z" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 12a8 8 0 0 1-11.7 7l-4.3 1.1 1.2-4.2A8 8 0 1 1 20 12Zm-8-6.5A6.5 6.5 0 0 0 6.4 15.4l-.3.5-.7 2.3 2.4-.6.5.3A6.5 6.5 0 1 0 12 5.5Zm3.9 8.3c-.2-.1-1.1-.5-1.3-.6-.2-.1-.3-.1-.5.1l-.4.6c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.6-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1.1-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.5 2.3 3.6 3.2.5.2.9.4 1.2.5.5.1 1 .1 1.4.1.4-.1 1.1-.5 1.2-1 .2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2Z" />
    </svg>
  );
}

function ThemeToggleIcon({ isDark }) {
  if (isDark) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm10-7a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2ZM4 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h2Zm15.07-5.66a1 1 0 0 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-1.42-1.42l1.42-1.41ZM6.34 17.66a1 1 0 0 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-1.42-1.42l1.42-1.41Zm12.73 2.83a1 1 0 0 1-1.41 0l-1.42-1.42a1 1 0 0 1 1.42-1.41l1.41 1.41a1 1 0 0 1 0 1.42ZM7.76 6.34a1 1 0 0 1-1.42 1.42L4.93 6.34a1 1 0 0 1 1.41-1.41l1.42 1.41Z" />
    </svg>
  );
}

export default function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nEmail: ${form.email}`);
    window.location.href = `mailto:contact@ennour.org?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copié : ${text}`);
    } catch {
      alert("Copie impossible pour le moment.");
    }
  };

  const pageClass = isDark
    ? "min-h-screen scroll-smooth bg-slate-950 text-slate-100"
    : "min-h-screen scroll-smooth bg-white text-slate-800";

  const headerClass = isDark
    ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur"
    : "sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur";

  const navClass = isDark
    ? "hidden gap-6 text-sm font-medium text-slate-200 md:flex"
    : "hidden gap-6 text-sm font-medium text-slate-700 md:flex";

  const statCardClass = isDark
    ? "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm"
    : "rounded-2xl border border-slate-100 bg-white p-5 shadow-sm";

  return (
    <div className={pageClass}>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className={isDark ? "text-lg font-bold text-green-400" : "text-lg font-bold text-green-700"}>
                Association Ennour
              </h1>
              <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                 Pour Le Développement et Charité
              </p>
            </div>
          </div>

          <nav className={navClass}>
            <a href="#accueil" className="transition hover:text-green-500">Accueil</a>
            <a href="#apropos" className="transition hover:text-green-500">À propos</a>
            <a href="#activites" className="transition hover:text-green-500">Activités</a>
            <a href="#galerie" className="transition hover:text-green-500">Galerie</a>
            <a href="#don" className="transition hover:text-green-500">Don</a>
            <a href="#contact" className="transition hover:text-green-500">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              aria-label="Toggle dark mode"
              className={
                isDark
                  ? "flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-yellow-300 transition hover:bg-white/10"
                  : "flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
              }
            >
              <ThemeToggleIcon isDark={isDark} />
            </button>

            <a
              href="#don"
              className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Faire un don
            </a>
          </div>
        </div>
      </header>

      <section
        id="accueil"
        className={
          isDark
            ? "relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            : "relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50"
        }
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span
              className={
                isDark
                  ? "inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 ring-1 ring-orange-400/20"
                  : "inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700"
              }
            >
              Association caritative engagée et humaine
            </span>
            <h2 className={isDark ? "mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl" : "mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"}>
              Ensemble, apportons <span className="text-green-700">espoir</span>,
              <span className="text-orange-500"> aide</span> et dignité.
            </h2>
            <p className={isDark ? "mt-6 max-w-xl text-lg leading-8 text-slate-300" : "mt-6 max-w-xl text-lg leading-8 text-slate-600"}>
              L’Association Ennour agit pour soutenir les familles, accompagner les enfants et développer des actions solidaires durables au cœur de la communauté.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#don"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-6 py-4 font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-1 hover:bg-green-800"
              >
                Donner maintenant <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#apropos"
                className={
                  isDark
                    ? "rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-slate-100 transition hover:border-green-500 hover:text-green-300"
                    : "rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700"
                }
              >
                Découvrir l’association
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className={statCardClass}>
                <p className="text-2xl font-bold text-green-700">500+</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>Familles aidées</p>
              </div>
              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm" : "rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"}>
                <p className="text-2xl font-bold text-orange-500">120+</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>Actions menées</p>
              </div>
              <div className={statCardClass}>
                <p className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-800"}>100%</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>Engagement humain</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-orange-200/50 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-green-200/50 blur-3xl" />
            <div className={isDark ? "relative overflow-hidden rounded-[32px] bg-white/5 p-3 shadow-2xl shadow-black/30 ring-1 ring-white/10" : "relative overflow-hidden rounded-[32px] bg-white p-3 shadow-2xl shadow-slate-200"}>
              <img
                src="/logo.jpg"
                alt="Action caritative"
                className="h-[600px] w-full rounded-[30px] object-cover"
              />
              <div className={isDark ? "absolute bottom-8 left-8 right-8 rounded-3xl bg-slate-950/75 p-5 backdrop-blur ring-1 ring-white/10" : "absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 backdrop-blur"}>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>Une association de confiance</p>
                    <p className={isDark ? "text-sm text-slate-300" : "text-sm text-slate-600"}>
                      Des actions concrètes, transparentes et proches des besoins réels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[28px] shadow-xl">
            <img
              src="/Propos.png"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className={isDark ? "text-sm font-bold uppercase tracking-[0.2em] text-orange-300" : "text-sm font-bold uppercase tracking-[0.2em] text-orange-500"}>À propos</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              Une mission fondée sur la solidarité, la dignité et le partage.
            </h3>
            <p className={isDark ? "mt-6 text-lg leading-8 text-slate-300" : "mt-6 text-lg leading-8 text-slate-600"}>
              L’Association Ennour pour le Développement et la Charité œuvre pour améliorer les conditions de vie des personnes en difficulté à travers des projets d’aide sociale, de soutien éducatif et d’accompagnement humain.
            </p>
            <p className={isDark ? "mt-4 text-lg leading-8 text-slate-300" : "mt-4 text-lg leading-8 text-slate-600"}>
              Notre objectif est simple : agir avec bienveillance, efficacité et transparence pour construire un impact durable dans la vie des familles et des enfants.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className={isDark ? "rounded-2xl bg-green-500/10 p-5 ring-1 ring-green-400/10" : "rounded-2xl bg-green-50 p-5"}>
                <Users className="mb-3 h-8 w-8 text-green-700" />
                <h4 className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>Approche humaine</h4>
                <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>
                  Une proximité réelle avec les bénéficiaires et leurs besoins.
                </p>
              </div>
              <div className={isDark ? "rounded-2xl bg-orange-500/10 p-5 ring-1 ring-orange-400/10" : "rounded-2xl bg-orange-50 p-5"}>
                <HandCoins className="mb-3 h-8 w-8 text-orange-500" />
                <h4 className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>Impact concret</h4>
                <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>
                  Chaque don soutient des actions utiles et visibles sur le terrain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activites" className={isDark ? "bg-slate-900 py-20" : "bg-slate-50 py-20"}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Nos activités</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              Des actions solidaires pour aider durablement.
            </h3>
            <p className={isDark ? "mt-4 text-lg text-slate-300" : "mt-4 text-lg text-slate-600"}>
              Nous intervenons dans plusieurs domaines pour répondre aux besoins essentiels des personnes les plus fragiles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className={isDark ? "overflow-hidden rounded-[28px] bg-slate-950 shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:-translate-y-2" : "overflow-hidden rounded-[28px] bg-white shadow-lg shadow-slate-200 transition hover:-translate-y-2"}
              >
                <img src={activity.image} alt={activity.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h4 className={isDark ? "text-xl font-bold text-white" : "text-xl font-bold text-slate-900"}>{activity.title}</h4>
                  <p className={isDark ? "mt-3 leading-7 text-slate-300" : "mt-3 leading-7 text-slate-600"}>{activity.text}</p>
                  <a href="#don" className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-orange-500">
                    Soutenir cette action <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className={isDark ? "text-sm font-bold uppercase tracking-[0.2em] text-orange-300" : "text-sm font-bold uppercase tracking-[0.2em] text-orange-500"}>Galerie</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              Nos actions en images
            </h3>
          </div>
          <p className={isDark ? "max-w-2xl text-lg text-slate-300" : "max-w-2xl text-lg text-slate-600"}>
            Découvrez quelques moments de partage, d’aide et d’engagement qui illustrent la mission de l’association.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[26px] shadow-lg">
              <img
                src={image}
                alt={`Galerie ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <ImageIcon className="h-5 w-5" />
                <span className="font-medium">Action solidaire {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="don" className="bg-gradient-to-r from-green-700 to-green-800 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">Faire un don</p>
            <h3 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Soutenez l’association par virement bancaire.
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">
              Pour faciliter les dons, vous pouvez effectuer un virement direct vers le compte bancaire de l’association. Toutes les informations sont disponibles ci-dessous.
            </p>
          </div>

          <div className={isDark ? "rounded-[30px] bg-slate-950 p-8 text-slate-100 shadow-2xl shadow-black/30 ring-1 ring-white/10" : "rounded-[30px] bg-white p-8 text-slate-800 shadow-2xl"}>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <h4 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>Informations bancaires</h4>
                <p className={isDark ? "mt-1 text-slate-300" : "mt-1 text-slate-600"}>
                  Utilisez ces coordonnées pour faire un don par virement.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>RIB</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>00000 00000 000000000000 00</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("00000 00000 000000000000 00")}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    <Copy className="h-4 w-4" /> Copier
                  </button>
                </div>
              </div>

              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>Banque</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>Banque Populaire</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("Banque Populaire")}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    <Copy className="h-4 w-4" /> Copier
                  </button>
                </div>
              </div>

              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>Titulaire du compte</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>
                    Association Ennour pour le Développement et la Charité
                  </p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("Association Ennour pour le Développement et la Charité")}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    <Copy className="h-4 w-4" /> Copier
                  </button>
                </div>
              </div>
            </div>

            <p className={isDark ? "mt-5 text-sm text-slate-400" : "mt-5 text-sm text-slate-500"}>
              Remplace ces informations par les vraies coordonnées bancaires de l’association.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Contact</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              Restons en contact
            </h3>
            <p className={isDark ? "mt-5 text-lg leading-8 text-slate-300" : "mt-5 text-lg leading-8 text-slate-600"}>
              Pour toute question, proposition d’aide, partenariat ou information sur nos activités, contactez-nous directement.
            </p>

            <div className="mt-8 space-y-5">
              <div className={isDark ? "flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10" : "flex items-center gap-4 rounded-2xl bg-slate-50 p-5"}>
                <Mail className="h-6 w-6 text-orange-500" />
                <span className={isDark ? "text-slate-200" : "text-slate-700"}>contact@ennour.org</span>
              </div>
              <div className={isDark ? "flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10" : "flex items-center gap-4 rounded-2xl bg-slate-50 p-5"}>
                <Phone className="h-6 w-6 text-green-700" />
                <span className={isDark ? "text-slate-200" : "text-slate-700"}>+212 6 00 00 00 00</span>
              </div>
              <div className={isDark ? "flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10" : "flex items-center gap-4 rounded-2xl bg-slate-50 p-5"}>
                <MapPin className="h-6 w-6 text-orange-500" />
                <span className={isDark ? "text-slate-200" : "text-slate-700"}>
                  جمعية النور للتنمية والأعمال الخيرية (المكتب المركزي سطات), دار الشباب, Settat 26000
                </span>
              </div>
            </div>
          </div>

          <div className={isDark ? "rounded-[30px] border border-white/10 bg-slate-950 p-8 shadow-xl shadow-black/30" : "rounded-[30px] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200"}>
            <h4 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>Envoyer un message</h4>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={isDark ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder="Nom complet"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={isDark ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder="Email"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={isDark ? "min-h-[150px] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "min-h-[150px] rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder="Votre message"
              />
              <button
                type="submit"
                className="rounded-2xl bg-green-700 px-6 py-4 font-bold text-white transition hover:bg-green-800"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-transparent to-orange-900/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400 ring-1 ring-green-400/20">
                  <Heart className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Association Ennour</h3>
                  <p className="text-sm text-slate-400">Développement et Charité</p>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Nous œuvrons avec engagement pour soutenir les familles, accompagner les enfants et renforcer les actions solidaires au service de la communauté.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#don" className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                  Faire un don
                </a>
                <a href="#contact" className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-300">
                  Nous contacter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400">Navigation</h4>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li><a href="#accueil" className="transition hover:text-green-400">Accueil</a></li>
                <li><a href="#apropos" className="transition hover:text-green-400">À propos</a></li>
                <li><a href="#activites" className="transition hover:text-green-400">Activités</a></li>
                <li><a href="#galerie" className="transition hover:text-green-400">Galerie</a></li>
                <li><a href="#don" className="transition hover:text-green-400">Faire un don</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400">Contact & Réseaux</h4>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>contact@ennour.org</p>
                <p>+212 6 00 00 00 00</p>
                <p>Settat, Maroc</p>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <FacebookIcon className="h-6 w-6 text-white" />
                </a>

                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:bg-green-500"
                >
                  <WhatsAppIcon className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Association Ennour pour le Développement et la Charité. Tous droits réservés.</p>
            <p>Solidarité • Confiance • Engagement</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
