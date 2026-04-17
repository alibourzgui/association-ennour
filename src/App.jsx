import React from "react";

const activitiesData = {
  fr: [
    {
      title: "Campagne de sensibilisation aux dangers de la pandémie de coronavirus",
      text: "Le 10 octobre 2020, l'association Al-Nour pour le développement et les œuvres caritatives a organisé une campagne de sensibilisation au sein du complexe scolaire d'Oulad Saïd afin d'informer les élèves sur les dangers du nouveau coronavirus, la COVID-19. L'association a distribué des masques de protection et du gel hydroalcoolique à tous les élèves. Un remerciement particulier est adressé au directeur de l'établissement et aux autorités locales : M. Mohamed El-Qasmi, préfet du district d'Oulad Saïd, M. Abdel Salam Baatouti et M. Abdelilah Habib, maire d'Oulad Saïd.",
      image: "/corona.jpg",
    },
    {
      title: "Soutien aux enfants",
      text: "Accompagnement scolaire, fournitures, vêtements et actions sociales pour redonner espoir aux plus jeunes.",
      image: "/hichaa.jpeg",
    },
    {
      title: "Création d'une antenne régionale dans la ville de Laâyoune-Sakia El Hamra",
      text: "Dans le cadre de l'expansion de ses activités et du renforcement de sa présence sur le terrain, Mme Aisha Nour El Islam, présidente générale de l'Association Al Nour pour le développement et les œuvres caritatives - Bureau central de Settat, a supervisé la création de la nouvelle branche régionale dans la ville de Laâyoune - région de Sakia El Hamra, le vendredi 14 novembre 2025.",
      image: "/sahra.jpg",
    },
  ],
  ar: [
    {
      title: "حملة تحسيسية لخطورة وباء كورونا",
      text: "نظمت جمعية النور للتنمية والاعمال الخيرية يوم 10.10.2020 حملة تحسيسية بمجموعة مدارس اولاد سعيد لتوعية تلاميذ المؤسسة من خطورة فيروس كورونا المستجد كوفيد 19 وقامت الجمعية بتوزيع كمامات واقية ومعقمات على جميع تلاميذ المؤسسة وشكرا خاص لمدير المؤسسة ورجال السلطة السيد قائد قيادة أولاد سعيد محمد القاسمي والسيد الخلفية عبد السلام بعتوتي والسيد عبد الإله حبيب رئيس جماعة اولاد سعيد",
      image: "/corona.jpg",
    },
    {
      title: "دعم الأطفال",
      text: "مواكبة دراسية ولوازم مدرسية وملابس ومبادرات اجتماعية لإعادة الأمل للأطفال.",
      image: "/hichaa.jpeg",
    },
    {
      title: "تأسيس فرع جهوي بمدينة العيون الساقية الحمراء",
      text: "في إطار توسيع أنشطتها وتعزيز حضورها الميداني، أشرفت السيدة عائشة نور الإسلام، الرئيسة العامة لجمعية النور للتنمية والأعمال الخيرية – المكتب المركزي سطات، على تأسيس الفرع الجهوي الجديد بمدينة العيون – جهة الساقية الحمراء، وذلك يوم الجمعة 14 نونبر 2025.",
      image: "/sahra.jpg",
    },
  ],
};

const galleryImages = [
  "/gal1.jpeg",
  "/gal2.jpg",
  "/gal3.jpg",
  "/gal4.jpg",
  "/gal5.jpg",
  "/gal6.jpg",
  "/gal7.jpg",
  "/gal8.jpg",
  "/gal9.jpg",
];

const content = {
  fr: {
    brandTitle: "Association Ennour",
    brandSubtitle: "Pour Le Développement et Charité",
    nav: ["Accueil", "À propos", "Activités", "Galerie", "Don", "Contact"],
    donateBtn: "Faire un don",
    badge: "Association caritative engagée et humaine",
    heroTitle1: "Ensemble, apportons",
    heroHope: "espoir",
    heroHelp: "aide",
    heroTitle2: "et dignité.",
    heroText:
      "L’Association Ennour agit pour soutenir les familles, accompagner les enfants et développer des actions solidaires durables au cœur de la communauté.",
    heroDonate: "Donner maintenant",
    heroDiscover: "Découvrir l’association",
    stat1: "Familles aidées",
    stat2: "Actions menées",
    stat3: "Engagement humain",
    trustTitle: "Une association de confiance",
    trustText: "Des actions concrètes, transparentes et proches des besoins réels.",
    aboutLabel: "À propos",
    aboutTitle: "Une mission fondée sur la solidarité, la dignité et le partage.",
    aboutText1:
      "L’Association Ennour pour le Développement et la Charité œuvre pour améliorer les conditions de vie des personnes en difficulté à travers des projets d’aide sociale, de soutien éducatif et d’accompagnement humain.",
    aboutText2:
      "Notre objectif est simple : agir avec bienveillance, efficacité et transparence pour construire un impact durable dans la vie des familles et des enfants.",
    aboutCard1: "Approche humaine",
    aboutCard1Text: "Une proximité réelle avec les bénéficiaires et leurs besoins.",
    aboutCard2: "Impact concret",
    aboutCard2Text: "Chaque don soutient des actions utiles et visibles sur le terrain.",
    activitiesLabel: "Nos activités",
    activitiesTitle: "Des actions solidaires pour aider durablement.",
    activitiesText:
      "Nous intervenons dans plusieurs domaines pour répondre aux besoins essentiels des personnes les plus fragiles.",
    supportAction: "Soutenir cette action",
    galleryLabel: "Galerie",
    galleryTitle: "Nos actions en images",
    galleryText:
      "Découvrez quelques moments de partage, d’aide et d’engagement qui illustrent la mission de l’association.",
    galleryCard: "Action solidaire",
    donLabel: "Faire un don",
    donTitle: "Soutenez l’association par virement bancaire.",
    donText:
      "Pour faciliter les dons, vous pouvez effectuer un virement direct vers le compte bancaire de l’association. Toutes les informations sont disponibles ci-dessous.",
    bankTitle: "Informations bancaires",
    bankText: "Utilisez ces coordonnées pour faire un don par virement.",
    rib: "RIB",
    bank: "Banque",
    accountOwner: "Titulaire du compte",
    copy: "Copier",
    bankNote: "Remplace ces informations par les vraies coordonnées bancaires de l’association.",
    contactLabel: "Contact",
    contactTitle: "Restons en contact",
    contactText:
      "Pour toute question, proposition d’aide, partenariat ou information sur nos activités, contactez-nous directement.",
    formTitle: "Envoyer un message",
    fullName: "Nom complet",
    email: "Email",
    message: "Votre message",
    send: "Envoyer",
    footerText:
      "Nous œuvrons avec engagement pour soutenir les familles, accompagner les enfants et renforcer les actions solidaires au service de la communauté.",
    footerNav: "Navigation",
    footerContact: "Contact & Réseaux",
    footerContactBtn: "Nous contacter",
    footerRights: "© 2026 Association Ennour pour le Développement et la Charité. Tous droits réservés.",
    footerMotto: "Solidarité • Confiance • Engagement",
    mapLocation: "Maison des jeunes sidi Abdelkrim settat",
  },
  ar: {
    brandTitle: "جمعية النور",
    brandSubtitle: "للتنمية والأعمال الخيرية",
    nav: ["الرئيسية", "من نحن", "الأنشطة", "المعرض", "التبرع", "اتصل بنا"],
    donateBtn: "تبرع الآن",
    badge: "جمعية خيرية إنسانية ملتزمة",
    heroTitle1: "معًا نصنع",
    heroHope: "الأمل",
    heroHelp: "العطاء",
    heroTitle2: "والكرامة.",
    heroText:
      "تعمل جمعية النور على دعم الأسر ومواكبة الأطفال وتطوير مبادرات تضامنية مستدامة في قلب المجتمع.",
    heroDonate: "تبرع الآن",
    heroDiscover: "اكتشف الجمعية",
    stat1: "أسرة مستفيدة",
    stat2: "مبادرة منجزة",
    stat3: "التزام إنساني",
    trustTitle: "جمعية موثوقة",
    trustText: "مبادرات عملية وشفافة وقريبة من الحاجيات الحقيقية.",
    aboutLabel: "من نحن",
    aboutTitle: "رسالة قائمة على التضامن والكرامة وروح العطاء.",
    aboutText1:
      "تعمل جمعية النور للتنمية والأعمال الخيرية على تحسين ظروف عيش الأشخاص في وضعية صعبة عبر مشاريع اجتماعية ودعم تربوي ومواكبة إنسانية.",
    aboutText2:
      "هدفنا واضح: العمل بإنسانية وفعالية وشفافية من أجل أثر مستدام في حياة الأسر والأطفال.",
    aboutCard1: "مقاربة إنسانية",
    aboutCard1Text: "قرب حقيقي من المستفيدين واحتياجاتهم.",
    aboutCard2: "أثر ملموس",
    aboutCard2Text: "كل تبرع يساهم في مبادرات مفيدة وواقعية على أرض الميدان.",
    activitiesLabel: "أنشطتنا",
    activitiesTitle: "مبادرات تضامنية للمساعدة بشكل مستدام.",
    activitiesText:
      "نتدخل في عدة مجالات لتلبية الحاجات الأساسية للفئات الأكثر هشاشة.",
    supportAction: "ادعم هذه المبادرة",
    galleryLabel: "المعرض",
    galleryTitle: "صور من أنشطتنا",
    galleryText:
      "اكتشف بعض لحظات العطاء والتضامن التي تجسد رسالة الجمعية.",
    galleryCard: "مبادرة تضامنية",
    donLabel: "التبرع",
    donTitle: "ادعم الجمعية عبر تحويل بنكي.",
    donText:
      "لتسهيل التبرعات، يمكنكم القيام بتحويل مباشر إلى الحساب البنكي الخاص بالجمعية. جميع المعلومات متوفرة أسفله.",
    bankTitle: "المعلومات البنكية",
    bankText: "استعمل هذه المعلومات لإرسال تبرع عبر تحويل بنكي.",
    rib: "رقم الحساب البنكي",
    bank: "البنك",
    accountOwner: "صاحب الحساب",
    copy: "نسخ",
    bankNote: "قم بتغيير هذه المعلومات بالمعلومات البنكية الحقيقية الخاصة بالجمعية.",
    contactLabel: "اتصل بنا",
    contactTitle: "ابقَ على تواصل معنا",
    contactText:
      "لأي سؤال أو اقتراح أو شراكة أو معلومات حول أنشطتنا، تواصل معنا مباشرة.",
    formTitle: "أرسل رسالة",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    message: "رسالتك",
    send: "إرسال",
    footerText:
      "نعمل بكل التزام من أجل دعم الأسر ومواكبة الأطفال وتعزيز المبادرات التضامنية في خدمة المجتمع.",
    footerNav: "روابط سريعة",
    footerContact: "التواصل والشبكات",
    footerContactBtn: "تواصل معنا",
    footerRights: "© 2026 جمعية النور للتنمية والأعمال الخيرية. جميع الحقوق محفوظة.",
    footerMotto: "تضامن • ثقة • التزام",
    mapLocation: "جمعية النور للتنمية والأعمال الخيرية (المكتب المركزي سطات)، دار الشباب، سطات 26000",
  },
};

function HeartIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-6.7-4.35-9.33-8.32C.4 9.24 2.06 4.5 6.3 4.5c2.12 0 3.45 1.17 4.2 2.3.75-1.13 2.08-2.3 4.2-2.3 4.24 0 5.9 4.74 3.63 8.18C18.7 16.65 12 21 12 21Z" />
    </svg>
  );
}

function UsersIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 11a3 3 0 1 0-2.999-3A3 3 0 0 0 16 11Zm-8 0A3 3 0 1 0 5.001 8 3 3 0 0 0 8 11Zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.4.76-2.6 2.02-3.53C10.76 13.17 9.2 13 8 13Zm8 0c-.15 0-.32.01-.49.02 1.26.93 2.49 2.13 2.49 3.98v2h6v-2c0-2.66-5.33-4-8-4Z" />
    </svg>
  );
}

function CoinsIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 4C7.58 4 4 5.79 4 8s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4Zm-8 6v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c-1.73 1.39-4.74 2.25-8 2.25S5.73 11.39 4 10Zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c-1.73 1.39-4.74 2.25-8 2.25S5.73 16.39 4 15Z" />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2L11.6 6.4 13 5Z" />
    </svg>
  );
}

function ImageIconSvg({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 11A1.5 1.5 0 1 1 10 9.5 1.5 1.5 0 0 1 8.5 11Zm-3.5 8 4.5-6 3.5 4.5 2.5-3 3.5 4.5Z" />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3Zm-1 14-3-3 1.41-1.41L11 13.17l3.59-3.58L16 11l-5 5Z" />
    </svg>
  );
}

function CopyIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12Zm4 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h12Z" />
    </svg>
  );
}

function BankIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2 2 7v2h20V7L12 2Zm-8 9v8H2v2h20v-2h-2v-8h-2v8h-2v-8h-2v8h-2v-8H8v8H6v-8H4Z" />
    </svg>
  );
}

function MailIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 2 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1l-2.21 2.21Z" />
    </svg>
  );
}

function MapPinIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-6 w-6 text-white" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-2.6 0-4.2 1.6-4.2 4.4V11H7.5v3H10v7h3.5Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-6 w-6 text-white" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
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
  const [lang, setLang] = React.useState("fr");
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  const t = content[lang];
  const activities = activitiesData[lang];
  const isArabic = lang === "ar";

  const whatsappMessage = encodeURIComponent(
    "السلام عليكم، أود التواصل مع جمعية النور للتنمية والأعمال الخيرية."
  );
  const whatsappLink = `https://wa.me/212613196865?text=${whatsappMessage}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t.formTitle} - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nEmail: ${form.email}`);
    window.location.href = `mailto:contact.association.ennour@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${t.copy} : ${text}`);
    } catch {
      alert("Copie impossible pour le moment.");
    }
  };

  const pageClass = isDark
    ? "min-h-screen scroll-smooth overflow-x-hidden bg-slate-950 text-slate-100"
    : "min-h-screen scroll-smooth overflow-x-hidden bg-white text-slate-800";

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
    <div className={pageClass} dir={isArabic ? "rtl" : "ltr"}>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm sm:h-12 sm:w-12">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-contain" />
            </div>

            <div className="min-w-0">
              <h1
                className={
                  isDark
                    ? "truncate text-xs font-bold text-green-400 sm:text-lg"
                    : "truncate text-xs font-bold text-green-700 sm:text-lg"
                }
              >
                {t.brandTitle}
              </h1>

              <p
                className={
                  isDark
                    ? "hidden text-xs text-slate-400 sm:block sm:text-sm"
                    : "hidden text-xs text-slate-500 sm:block sm:text-sm"
                }
              >
                {t.brandSubtitle}
              </p>
            </div>
          </div>

          <nav className={navClass}>
            <a href="#accueil" className="transition hover:text-green-500">{t.nav[0]}</a>
            <a href="#apropos" className="transition hover:text-green-500">{t.nav[1]}</a>
            <a href="#activites" className="transition hover:text-green-500">{t.nav[2]}</a>
            <a href="#galerie" className="transition hover:text-green-500">{t.nav[3]}</a>
            <a href="#don" className="transition hover:text-green-500">{t.nav[4]}</a>
            <a href="#contact" className="transition hover:text-green-500">{t.nav[5]}</a>
          </nav>

            <div className="ml-1 flex shrink-0 items-center gap-2 sm:ml-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === "fr" ? "ar" : "fr"))}
              className={
                isDark
                  ? "rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/10 sm:px-4 sm:py-3 sm:text-sm"
                  : "rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 sm:px-4 sm:py-3 sm:text-sm"
              }
            >
              {lang === "fr" ? "AR" : "FR"}
            </button>

            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              aria-label="Toggle dark mode"
              className={
                isDark
                  ? "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-yellow-300 transition hover:bg-white/10 sm:h-12 sm:w-12"
                  : "flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 sm:h-12 sm:w-12"
              }
            >
              <ThemeToggleIcon isDark={isDark} />
            </button>

            <a
              href="#don"
              className="hidden rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex"
            >
              {t.donateBtn}
            </a>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 md:hidden sm:px-6">
          <a href="#accueil" className="whitespace-nowrap rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">{t.nav[0]}</a>
          <a href="#apropos" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">{t.nav[1]}</a>
          <a href="#activites" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">{t.nav[2]}</a>
          <a href="#galerie" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">{t.nav[3]}</a>
          <a href="#don" className="whitespace-nowrap rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">{t.donateBtn}</a>
          <a href="#contact" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">{t.nav[5]}</a>
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span
              className={
                isDark
                  ? "inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 ring-1 ring-orange-400/20"
                  : "inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700"
              }
            >
              {t.badge}
            </span>

            <h2 className={isDark ? "mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl" : "mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-6xl"}>
              {t.heroTitle1} <span className="text-green-700">{t.heroHope}</span>,
              <span className="text-orange-500"> {t.heroHelp}</span> {t.heroTitle2}
            </h2>

            <p className={isDark ? "mt-6 max-w-xl text-lg leading-8 text-slate-300" : "mt-6 max-w-xl text-lg leading-8 text-slate-600"}>
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#don"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-6 py-4 font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-1 hover:bg-green-800"
              >
                {t.heroDonate} <ArrowIcon className="h-4 w-4" />
              </a>

              <a
                href="#apropos"
                className={
                  isDark
                    ? "rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-slate-100 transition hover:border-green-500 hover:text-green-300"
                    : "rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700"
                }
              >
                {t.heroDiscover}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className={statCardClass}>
                <p className="text-2xl font-bold text-green-700">500+</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>{t.stat1}</p>
              </div>
              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm" : "rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"}>
                <p className="text-2xl font-bold text-orange-500">120+</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>{t.stat2}</p>
              </div>
              <div className={statCardClass}>
                <p className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-800"}>100%</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>{t.stat3}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-orange-200/50 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-green-200/50 blur-3xl" />
            <div className={isDark ? "relative overflow-hidden rounded-[32px] bg-white/5 p-3 shadow-2xl shadow-black/30 ring-1 ring-white/10" : "relative overflow-hidden rounded-[32px] bg-white p-3 shadow-2xl shadow-slate-200"}>
              <img
                src="/propos.jpg"
                alt="Action caritative"
                className="h-[320px] w-full rounded-[24px] object-cover sm:h-[420px] md:h-[520px]"
              />
              <div className={isDark ? "absolute bottom-8 left-8 right-8 rounded-3xl bg-slate-950/75 p-5 backdrop-blur ring-1 ring-white/10" : "absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 backdrop-blur"}>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                    <ShieldIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>{t.trustTitle}</p>
                    <p className={isDark ? "text-sm text-slate-300" : "text-sm text-slate-600"}>
                      {t.trustText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[28px] shadow-xl">
            <img
              src="/propos.jpg"
              alt="Bénévolat et entraide"
              className="h-64 w-full object-cover sm:h-[420px]"
            />
          </div>

          <div>
            <p className={isDark ? "text-sm font-bold uppercase tracking-[0.2em] text-orange-300" : "text-sm font-bold uppercase tracking-[0.2em] text-orange-500"}>{t.aboutLabel}</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              {t.aboutTitle}
            </h3>
            <p className={isDark ? "mt-6 text-lg leading-8 text-slate-300" : "mt-6 text-lg leading-8 text-slate-600"}>
              {t.aboutText1}
            </p>
            <p className={isDark ? "mt-4 text-lg leading-8 text-slate-300" : "mt-4 text-lg leading-8 text-slate-600"}>
              {t.aboutText2}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className={isDark ? "rounded-2xl bg-green-500/10 p-5 ring-1 ring-green-400/10" : "rounded-2xl bg-green-50 p-5"}>
                <UsersIcon className="mb-3 h-8 w-8 text-green-700" />
                <h4 className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>{t.aboutCard1}</h4>
                <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>
                  {t.aboutCard1Text}
                </p>
              </div>

              <div className={isDark ? "rounded-2xl bg-orange-500/10 p-5 ring-1 ring-orange-400/10" : "rounded-2xl bg-orange-50 p-5"}>
                <CoinsIcon className="mb-3 h-8 w-8 text-orange-500" />
                <h4 className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>{t.aboutCard2}</h4>
                <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>
                  {t.aboutCard2Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activites" className={isDark ? "bg-slate-900 py-16 sm:py-20" : "bg-slate-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">{t.activitiesLabel}</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              {t.activitiesTitle}
            </h3>
            <p className={isDark ? "mt-4 text-lg text-slate-300" : "mt-4 text-lg text-slate-600"}>
              {t.activitiesText}
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
                    {t.supportAction} <ArrowIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className={isDark ? "text-sm font-bold uppercase tracking-[0.2em] text-orange-300" : "text-sm font-bold uppercase tracking-[0.2em] text-orange-500"}>{t.galleryLabel}</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              {t.galleryTitle}
            </h3>
          </div>
          <p className={isDark ? "max-w-2xl text-lg text-slate-300" : "max-w-2xl text-lg text-slate-600"}>
            {t.galleryText}
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
                <ImageIconSvg className="h-5 w-5" />
                <span className="font-medium">{t.galleryCard} {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="don" className="bg-gradient-to-r from-green-700 to-green-800 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">{t.donLabel}</p>
            <h3 className="mt-3 text-3xl font-extrabold md:text-5xl">{t.donTitle}</h3>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">{t.donText}</p>
          </div>

          <div className={isDark ? "rounded-[30px] bg-slate-950 p-5 text-slate-100 shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:p-8" : "rounded-[30px] bg-white p-5 text-slate-800 shadow-2xl sm:p-8"}>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                <BankIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>{t.bankTitle}</h4>
                <p className={isDark ? "mt-1 text-slate-300" : "mt-1 text-slate-600"}>{t.bankText}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>{t.rib}</p>
                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className={isDark ? "w-full break-all font-bold text-white" : "w-full break-all font-bold text-slate-900"}>230610566047522100160028</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("230610566047522100160028")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                  >
                    <CopyIcon className="h-4 w-4" /> {t.copy}
                  </button>
                </div>
              </div>

              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>{t.bank}</p>
                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className={isDark ? "w-full break-words font-bold text-white" : "w-full break-words font-bold text-slate-900"}>Cih Bank</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("Cih Bank")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                  >
                    <CopyIcon className="h-4 w-4" /> {t.copy}
                  </button>
                </div>
              </div>

              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>{t.accountOwner}</p>
                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className={isDark ? "w-full break-words font-bold text-white" : "w-full break-words font-bold text-slate-900"}>Association Ennour pour le Développement et la Charité</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("Association Ennour pour le Développement et la Charité")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                  >
                    <CopyIcon className="h-4 w-4" /> {t.copy}
                  </button>
                </div>
              </div>
            </div>

            <p className={isDark ? "mt-5 text-sm text-slate-400" : "mt-5 text-sm text-slate-500"}>{t.bankNote}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">{t.contactLabel}</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>{t.contactTitle}</h3>
            <p className={isDark ? "mt-5 text-lg leading-8 text-slate-300" : "mt-5 text-lg leading-8 text-slate-600"}>{t.contactText}</p>

            <div className="mt-8 space-y-5">
              <div className={isDark ? "flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10" : "flex items-center gap-4 rounded-2xl bg-slate-50 p-5"}>
                <MailIcon className="h-6 w-6 text-orange-500" />
                <span className={isDark ? "break-all text-sm text-slate-200 sm:text-base" : "break-all text-sm text-slate-700 sm:text-base"}>contact.association.ennour@gmail.com</span>
              </div>
              <div className={isDark ? "flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10" : "flex items-center gap-4 rounded-2xl bg-slate-50 p-5"}>
                <PhoneIcon className="h-6 w-6 text-green-700" />
                <span className={isDark ? "text-slate-200" : "text-slate-700"}>+212 5 29 88 10 03</span>
              </div>
              <div className={isDark ? "flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10" : "flex items-center gap-4 rounded-2xl bg-slate-50 p-5"}>
                <MapPinIcon className="h-6 w-6 text-orange-500" />
                <span className={isDark ? "break-words text-sm text-slate-200 sm:text-base" : "break-words text-sm text-slate-700 sm:text-base"}>{t.mapLocation}</span>
              </div>
            </div>
          </div>

          <div className={isDark ? "rounded-[30px] border border-white/10 bg-slate-950 p-5 shadow-xl shadow-black/30 sm:p-8" : "rounded-[30px] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200 sm:p-8"}>
            <h4 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>{t.formTitle}</h4>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={isDark ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder={t.fullName}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={isDark ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder={t.email}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={isDark ? "min-h-[150px] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "min-h-[150px] rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder={t.message}
              />
              <button
                type="submit"
                className="rounded-2xl bg-green-700 px-6 py-4 font-bold text-white transition hover:bg-green-800"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-[999] flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-2xl transition hover:scale-105 hover:bg-green-600"
      >
        <WhatsAppIcon className="h-5 w-5 text-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <footer className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-transparent to-orange-900/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-white">{t.brandTitle}</h3>
                  <p className="text-sm text-slate-400">{t.brandSubtitle}</p>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">{t.footerText}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#don" className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                  {t.donateBtn}
                </a>
                <a href="#contact" className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-300">
                  {t.footerContactBtn}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400">{t.footerNav}</h4>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li><a href="#accueil" className="transition hover:text-green-400">{t.nav[0]}</a></li>
                <li><a href="#apropos" className="transition hover:text-green-400">{t.nav[1]}</a></li>
                <li><a href="#activites" className="transition hover:text-green-400">{t.nav[2]}</a></li>
                <li><a href="#galerie" className="transition hover:text-green-400">{t.nav[3]}</a></li>
                <li><a href="#don" className="transition hover:text-green-400">{t.nav[4]}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400">{t.footerContact}</h4>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>contact.association.ennour@gmail.com</p>
                <p>+212 5 29 88 10 03</p>
                <p>+212 6 13 19 68 65</p>
                <p>Settat, Maroc</p>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://www.facebook.com/Associationennour9/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <FacebookIcon className="h-6 w-6 text-white" />
                </a>

                <a
                  href="https://wa.me/212613196865"
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
            <p className="text-center md:text-start">{t.footerRights}</p>
            <p className="text-center md:text-start">{t.footerMotto}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
