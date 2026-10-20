// Contenu centralisé du site GFlux.
// Tous les champs entre crochets, ex. "[URL_CALENDLY_AUDIT]", sont des placeholders
// à remplacer par les informations réelles avant mise en production.

export const CTA_LABEL = "Réserver mon audit offert";

// Placeholders de conversion et coordonnées ---------------------------------
export const URL_CALENDLY_AUDIT = "https://calendly.com/gawen-francois/appel-decouverte-gawen";
export const EMAIL_GFLUX = "gawen.francois@gflux.fr";
export const TELEPHONE_GFLUX = "06 51 21 17 96";
export const ADRESSE_GFLUX = "Grenoble, France";
export const URL_LINKEDIN_GFLUX = "https://www.linkedin.com/in/gawen-f";
export const RAISON_SOCIALE = "GFlux, entreprise individuelle";
export const SIRET = "980 655 567 00033";
export const URL_LOGO_GFLUX = "https://gflux.fr/logo-gflux.png";

// Navigation ------------------------------------------------------------
export const navLinks = [
  { label: "Problèmes", href: "#problemes" },
  { label: "Méthode", href: "#methode" },
  { label: "Preuves", href: "#preuves" },
  { label: "Audit offert", href: "#audit" },
  { label: "FAQ", href: "#faq" },
];

// SEO ---------------------------------------------------------------------
export const seo = {
  title: "GFlux | L'IA sur mesure pour cabinets d'expertise comptable",
  description:
    "GFlux prépare les mails clients, relances et restitutions des cabinets d'expertise comptable. Validation humaine, données hébergées en France. Audit offert.",
  canonical: "https://gflux.fr/",
  ogImageAlt: "GFlux, l'IA sur mesure pour cabinets d'expertise comptable.",
};

// Section 1 - Hero ---------------------------------------------------------
export const hero = {
  eyebrow: "Pour les experts-comptables qui veulent retrouver du temps pour le conseil.",
  h1: "L'IA qui libère l'expert-comptable, pas celle qui le remplace.",
  subtitle:
    "GFlux prépare vos réponses aux clients, vos relances de pièces et vos restitutions à partir de vos outils. Vos collaborateurs relisent et valident. Vous récupérez le temps du conseil.",
  ctaMicrocopy: "4 audits offerts par mois. 45 à 60 minutes en visio, sans engagement.",
  markers: [
    "Construit sur les process réels de votre cabinet.",
    "Rien ne part chez un client sans validation d'un collaborateur.",
    "Données hébergées en France.",
  ],
};

// Auteur des verbatims
const QUOTE_AUTHOR = "Expert-comptable, cabinet indépendant (exercice individuel)";

// Section 2 - Problèmes -----------------------------------------------------
export const problems = {
  h2: "Vous n'avez pas choisi ce métier pour vivre dans votre boîte mail.",
  intro:
    "Il y a des tâches qui absorbent vos journées sans qu'on les voie. Une par une, elles paraissent petites. Mises bout à bout, elles prennent toute la place du conseil.",
  items: [
    {
      h3: "Passer ses matinées dans sa boîte mail.",
      text: "Trente, quarante, cinquante mails clients par jour. Pour chacun, il faut retrouver le dossier, le contexte et la règle qui s'applique, avant d'écrire trois lignes.",
      quote: { text: "Je suis un psycho de la boîte mail.", author: QUOTE_AUTHOR },
    },
    {
      h3: "Courir après les mêmes pièces, chaque mois.",
      text: "Relancer trois fois le même client pour le même relevé, en restant aimable, en pleine période de bilans.",
    },
    {
      h3: "Passer une demi-journée sur chaque restitution.",
      text: "Copier les chiffres de Pennylane dans Excel, refaire les mêmes graphiques, recoller le tout dans PowerPoint. Tout ça pour un dirigeant qui veut surtout savoir quoi faire de ses chiffres.",
    },
    {
      h3: "Découvrir le retard à J-15 de l'échéance.",
      text: "Faire le tour des dossiers un par un pour savoir où en est chacun, parce qu'aucune vue d'ensemble n'existe.",
    },
    {
      h3: "Ressaisir ce qui existe déjà.",
      text: "La même information dans le mail, dans le logiciel et dans le fichier de suivi. Chaque ressaisie est une erreur possible et dix minutes perdues.",
    },
  ],
};

// Section 3 - Blocages ----------------------------------------------------
export const blockers = {
  h2: "Pourquoi vous travaillez plus sans conseiller plus.",
  intro:
    "Le problème vient rarement de vos équipes. Il vient de trois blocages qu'aucun logiciel ne règle seul.",
  items: [
    {
      h3: "Vos outils ne se parlent pas.",
      text: "Le mail, Pennylane, le fichier Excel de suivi : chacun garde sa part de l'information. C'est un collaborateur qualifié qui fait le lien, à la main, toute la journée.",
    },
    {
      h3: "Les logiciels standard s'arrêtent là où vos règles commencent.",
      text: "Le brouillon de réponse automatique, il faut le reprendre à chaque fois : il ignore le dossier, les pièges fiscaux, la façon dont vous parlez à ce client.",
      quote: {
        text: "On a beau avoir le meilleur système et ses relances automatisées, rien ne remplace un mail ou un appel en sachant comment parler au client.",
        author: QUOTE_AUTHOR,
      },
    },
    {
      h3: "L'IA est déjà dans votre cabinet, sans cadre.",
      text: "Vos collaborateurs utilisent sûrement déjà ChatGPT pour gagner du temps. Avec des données clients dedans, sur des serveurs dont personne ne sait où ils sont.",
    },
  ],
  conclusion:
    "Ajouter un logiciel de plus ne règle rien. Ce qui libère du temps, c'est de relier vos outils existants avec vos règles à vous.",
};

// Section 4 - La Méthode GFlux ----------------------------------------------
export const method = {
  h2: "La Méthode GFlux. L'IA prépare, vos collaborateurs valident, rien ne part sans contrôle.",
  intro:
    "Du sur-mesure, construit sur vos process réels. On part de la façon dont votre cabinet travaille déjà, on ne vous demande pas de changer vos habitudes.",
  pillars: [
    {
      h3: "Construit sur vos règles, pas sur un modèle générique.",
      text: "Votre façon de répondre à un client, vos vérifications, votre trame de restitution vous appartiennent. Un outil générique ne les devine pas, donc vous retouchez tout. Un système construit sur vos règles vous rend un brouillon que vous n'avez plus qu'à signer.",
    },
    {
      h3: "Un collaborateur valide avant chaque envoi.",
      text: "C'est votre signature et votre responsabilité qui sont engagées. L'IA prépare, votre collaborateur relit et décide. Vos clients gardent un interlocuteur humain qui connaît leur dossier.",
    },
    {
      h3: "Vos données restent en France, chaque étape est tracée.",
      text: "Le secret professionnel ne se négocie pas. Vous savez où sont vos données, qui y accède et ce qui a été fait. Vous pouvez le montrer à un client comme à un contrôle.",
    },
  ],
  scopeH3: "Ce que la Méthode GFlux prend en charge dans votre cabinet.",
  scopeItems: [
    "Vos mails clients triés, avec une réponse préparée dans votre ton.",
    "Vos restitutions préparées directement à partir de Pennylane.",
    "Vos relances de pièces envoyées au bon moment, avec le bon contexte.",
    "Vos rendez-vous de bilan préparés à l'avance.",
    "Vos échéances suivies, avec une alerte avant qu'il soit trop tard.",
    "Vos saisies et refacturations répétitives.",
    "L'arrivée de vos nouveaux clients, sans rien oublier.",
  ],
  scopeNote:
    "Et bien d'autres cas propres à votre cabinet. Liste non exhaustive : si une tâche se répète, on en parle pendant l'audit.",
};

// Section 5 - Bénéfices ---------------------------------------------------
export const benefits = {
  h2: "Plus de temps pour le conseil, c'est plus d'honoraires et des clients qui restent.",
  items: [
    {
      h3: "Du conseil facturé, au lieu d'heures perdues.",
      text: "La production est au forfait, le conseil se facture. Chaque heure récupérée peut devenir un rendez-vous de pilotage ou une mission de conseil en plus.",
    },
    {
      h3: "Des clients qui ont une réponse dans la journée.",
      text: "« Injoignable » est le reproche qui revient le plus souvent dans les avis laissés aux cabinets. Une réponse rapide et juste, c'est souvent tout ce que le client retient.",
      quote: { text: "Le client ne voit pas le reste.", author: QUOTE_AUTHOR },
    },
    {
      h3: "Des clients qui restent, et qui vous recommandent.",
      text: "Un dirigeant qui comprend ses chiffres et se sent suivi ne change pas de cabinet. Il en parle autour de lui.",
    },
  ],
};

// Section 6 - Preuves -------------------------------------------------------
export const proof = {
  h2: "On ne travaille qu'avec des cabinets d'expertise comptable. C'est pour ça que ça marche.",
  partner: {
    h3: "Un cabinet partenaire l'utilise déjà.",
    text: "Un cabinet indépendant partenaire utilise la Méthode GFlux pour préparer ses restitutions client.",
    resultLabel: "Résultat mesuré",
    result: "50 à 60 % de temps de préparation en moins sur la restitution client.",
  },
  survey: {
    h3: "16 experts-comptables nous ont décrit leurs journées.",
    text: "Entre juin et septembre 2026, 16 experts-comptables nous ont expliqué ce qui leur prend le plus de temps. La boîte mail arrive en premier, devant la production et la supervision. La Méthode GFlux est construite sur ces réponses.",
  },
  founder: {
    h3: "Le fondateur",
    photo: "/gawen-francois.jpg",
    name: "Gawen François",
    role: "Fondateur de GFlux",
    bio: "J'ai passé des journées dans un cabinet d'expertise comptable à décortiquer une restitution, clic par clic, du logiciel jusqu'au PowerPoint. Ce que j'en retiens : vos équipes savent faire, elles manquent de temps. Mon rôle est de récupérer les heures que la machine peut faire, pour les rendre au conseil.",
  },
};

// Section 7 - L'audit offert ------------------------------------------------
export const audit = {
  h2: "En une heure, vous savez quelle tâche vous coûte le plus cher.",
  intro:
    "L'audit offert, c'est 45 à 60 minutes en visio pour regarder ensemble comment travaille votre cabinet. Vous repartez avec :",
  takeaways: [
    "La tâche qui coûte le plus d'heures à votre cabinet, identifiée.",
    "Son coût réel, chiffré en heures par mois et en euros par an.",
    "Ce qui peut être pris en charge, et ce qui doit rester entre les mains de vos équipes.",
  ],
  reasons: [
    {
      h3: "Pourquoi c'est offert",
      text: "On ne construit rien sans avoir vu votre façon de travailler. Et si votre cabinet n'a pas besoin de nous, mieux vaut le savoir en une heure.",
    },
    {
      h3: "Pourquoi maintenant",
      text: "Le meilleur moment pour mettre un système en place, c'est avant la saison des bilans, pas pendant.",
    },
  ],
  microcopy: "4 audits offerts par mois. Quand ils sont pris, le suivant passe au mois d'après.",
  afterH3: "Et après l'audit ?",
  after: [
    {
      title: "Une proposition claire.",
      text: "Ce sur quoi on intervient, en combien de temps vous voyez les résultats, et combien ça coûte.",
    },
    {
      title: "Un système construit avec vous.",
      text: "On le construit sur vos dossiers, on le teste avec vos collaborateurs, on le valide ensemble.",
    },
    {
      title: "On ne vous laisse pas seuls.",
      text: "Vos équipes sont formées, et le système s'améliore avec vos retours et l'évolution de l'IA.",
    },
  ],
};

// Section 7 (suite) - Comparatif --------------------------------------------
export const comparison = {
  h3: "Faire seul, prendre un logiciel, ou passer par GFlux.",
  columns: ["En interne", "Logiciel standard", "Méthode GFlux"],
  rows: [
    {
      criterion: "Adapté à vos règles",
      values: ["Oui, mais tout à la main", "Ce que l'éditeur a prévu", "Construit sur vos process"],
    },
    {
      criterion: "Relié à vos outils",
      values: ["Par copier-coller", "Selon les connecteurs", "Branché sur vos outils existants"],
    },
    {
      criterion: "Validation humaine",
      values: ["Informelle", "Selon le logiciel", "Avant chaque envoi"],
    },
    {
      criterion: "Vos données",
      values: ["Souvent dans ChatGPT gratuit", "Chez l'éditeur", "Hébergées en France, tracées"],
    },
    {
      criterion: "Suivi dans le temps",
      values: ["Repose sur vous", "Support standard", "Formation et amélioration continue"],
    },
  ],
};

// Section 8 - FAQ -------------------------------------------------------
export const faq = {
  h2: "Les questions qu'on nous pose avant de réserver.",
  items: [
    {
      question: "Les données de mes clients sont-elles protégées ?",
      answer:
        "Oui. Elles sont hébergées en France et réduites au strict nécessaire, anonymisées quand c'est possible. Chaque projet précise qui accède à quoi et combien de temps les données sont gardées. Votre DPO ou votre conseil peut tout vérifier.",
    },
    {
      question: "Faut-il changer de logiciel comptable ?",
      answer:
        "Non. La Méthode GFlux se branche sur vos outils actuels. La compatibilité est vérifiée pendant l'audit.",
    },
    {
      question: "L'IA peut-elle envoyer un mail ou une restitution sans que personne ne la relise ?",
      answer:
        "Non. Tout ce qui part chez un client est validé par un collaborateur avant l'envoi.",
    },
    {
      question: "Mes clients vont-ils se retrouver face à un robot ?",
      answer:
        "Non. L'IA travaille en coulisses, elle prépare. Vos clients continuent de parler à votre équipe, qui leur répond simplement plus vite.",
    },
    {
      question: "Combien ça coûte ?",
      answer:
        "Ça dépend de la tâche et de votre cabinet, donc on ne donne pas de prix au hasard. Après l'audit, vous recevez une proposition avec le périmètre, le délai et l'investissement.",
    },
    {
      question: "Combien de temps ça va demander à mon équipe ?",
      answer:
        "L'audit, puis quelques échanges pour valider vos règles et tester le système. On s'adapte à votre calendrier, pas l'inverse.",
    },
    {
      question: "Vous garantissez un temps gagné ?",
      answer:
        "Non, et méfiez-vous de ceux qui le font. Le gain est chiffré pendant l'audit et mesuré sur votre propre process.",
    },
  ],
};

// Closing -----------------------------------------------------------------
export const closing = {
  h2: "Commencez par la tâche qui vous coûte le plus cher.",
  text: "Une tâche, un système, un résultat mesuré. On élargit ensuite si ça vaut le coup.",
  reassurance: "4 audits offerts par mois. 45 à 60 minutes en visio, sans engagement.",
};

// Footer --------------------------------------------------------------------
export const footer = {
  tagline: "L'IA qui libère l'expert-comptable, pas celle qui le remplace.",
  founder: "Gawen François, fondateur",
  legalMention: `${RAISON_SOCIALE}. SIRET : ${SIRET}`,
  hostingMention: "Données hébergées en France.",
  legalLinks: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  ],
};
