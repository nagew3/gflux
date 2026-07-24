// Contenu centralisé du site GFlux.
// Tous les champs entre crochets, ex. "[URL_CALENDLY_AUDIT]", sont des placeholders
// à remplacer par les informations réelles avant mise en production.

export const CTA_LABEL = "Réserver un audit gratuit";

// Placeholders de conversion et coordonnées ---------------------------------
export const URL_CALENDLY_AUDIT = "[URL_CALENDLY_AUDIT]";
export const EMAIL_GFLUX = "[EMAIL_GFLUX]";
export const TELEPHONE_GFLUX = "[TELEPHONE_GFLUX]";
export const ADRESSE_GFLUX = "[ADRESSE_GFLUX]";
export const URL_LINKEDIN_GFLUX = "[URL_LINKEDIN_GFLUX]";
export const URL_LINKEDIN_FONDATEUR = "[URL_LINKEDIN_FONDATEUR]";
export const RAISON_SOCIALE = "[RAISON_SOCIALE]";
export const URL_LOGO_GFLUX = "[URL_LOGO_GFLUX]";
export const HEBERGEUR_SITE = "[HEBERGEUR_SITE]";

// Drapeaux de visibilité (section 8 du brief) --------------------------------
// Tant que ces informations ne sont pas validées, les blocs correspondants
// restent masqués en production et affichés en pointillés en aperçu (DEV).
export const flags = {
  showPilotIdentity: false,
  showPilotMetrics: false,
  showPartnerLogo: false,
  showFounderBio: false,
  showDemo: false,
  showHostingMention: false,
};

// Navigation ------------------------------------------------------------
export const navLinks = [
  { label: "Problèmes", href: "#problemes" },
  { label: "Solution", href: "#solution" },
  { label: "Méthode", href: "#methode" },
  { label: "Preuves", href: "#preuves" },
  { label: "FAQ", href: "#faq" },
];

// SEO ---------------------------------------------------------------------
export const seo = {
  title: "GFlux | Automatisation IA sur mesure pour cabinets comptables",
  description:
    "GFlux conçoit des automatisations IA sur mesure pour les cabinets d'expertise comptable indépendants, avec validation humaine et traçabilité.",
  canonical: "https://gflux.fr/",
  ogImageAlt: "GFlux, automatisation IA sur mesure pour cabinets d'expertise comptable.",
};

// Section 1 - Hero ---------------------------------------------------------
export const hero = {
  eyebrow: "Automatisation IA sur mesure pour cabinets d'expertise comptable indépendants",
  h1: "L'IA qui libère l'expert-comptable, pas celle qui le remplace.",
  subtitle:
    "GFlux automatise les tâches répétitives de votre cabinet, avec validation humaine et traçabilité à chaque étape.",
  ctaMicrocopy:
    "30 minutes, sans engagement. Quatre audits gratuits par mois.",
  markers: [
    "Automatisation sur mesure",
    "Validation humaine systématique",
    "Architecture et flux documentés",
  ],
  diagram: [
    "E-mails, pièces, fichiers et logiciels comptables",
    "Orchestration GFlux",
    "Préparation par l'IA",
    "Validation par un collaborateur",
    "Restitution ou action dans l'outil concerné",
  ],
  diagramAlt:
    "Schéma d'un processus GFlux allant des données du cabinet à une sortie validée par un collaborateur.",
};

// Section 2 - Problèmes / qualification -------------------------------------
export const problems = {
  h2: "Quand l'opérationnel absorbe le temps de conseil",
  intro:
    "Ces tâches restent indispensables, mais leur répétition laisse moins de temps pour conseiller et piloter le cabinet.",
  items: [
    {
      h3: "Répondre aux e-mails clients",
      text: "Lire, prioriser, retrouver le contexte, rédiger une réponse proche d'une précédente.",
    },
    {
      h3: "Préparer les restitutions",
      text: "D'un export à un tableau, puis à une présentation commentée manuellement.",
    },
    {
      h3: "Relancer les pièces manquantes",
      text: "Au bon moment, avec le bon contexte, sans dégrader la relation client.",
    },
    {
      h3: "Traiter les saisies restantes",
      text: "Notes de frais, refacturations, pièces complexes difficiles à standardiser.",
    },
    {
      h3: "Superviser les délais",
      text: "Vérifier l'avancement dossier par dossier, faute d'une vue d'ensemble claire.",
    },
  ],
  transition:
    "Des processus dispersés entre plusieurs outils créent des ressaisies et des pertes de contexte.",
};

// Section 3 - Story / origine -------------------------------------------
export const origin = {
  h2: "Pourquoi GFlux se concentre sur l'expertise comptable",
  text: "La difficulté se loge entre les logiciels : récupérer l'information, appliquer les règles du cabinet, obtenir une validation, remettre le résultat au bon endroit. GFlux construit ces passerelles au cas par cas.",
  belief:
    "L'IA doit préparer, structurer et accélérer le travail. L'expert-comptable conserve le jugement métier, la relation client et la décision finale.",
  vision:
    "Automatiser un processus utile, mesurer son adoption, puis étendre ce qui fonctionne.",
  qualification:
    "Pour les cabinets indépendants de 5 à 30 collaborateurs qui veulent du temps de conseil, sans nouvelle plateforme générique à imposer aux équipes.",
};

// Section 4 - Blocages ----------------------------------------------------
export const blockers = {
  h2: "Quatre blocages entretiennent la charge opérationnelle",
  items: [
    {
      h3: "L'information reste dispersée",
      text: "E-mail, logiciel comptable, fichier de validation : le contexte se reconstitue à la main.",
    },
    {
      h3: "Les mêmes gestes sont répétés",
      text: "Copier, classer, reformuler, relancer : des opérations prévisibles sur des profils qualifiés.",
    },
    {
      h3: "Le contrôle intervient trop tard",
      text: "Erreurs et retards détectés à la restitution, quand une alerte plus tôt aurait suffi.",
    },
    {
      h3: "La confidentialité reste difficile à intégrer",
      text: "Données utilisées, accès, durée de conservation, validation : à préciser pour chaque automatisation.",
    },
  ],
  conclusion:
    "Automatiser une tâche isolée ne suffit pas : le gain dépend de tout le flux, jusqu'à la restitution.",
};

// Section 5 - Solution ------------------------------------------------------
export const solution = {
  h2: "Une automatisation construite autour d'un processus réel",
  intro:
    "GFlux part d'une tâche prioritaire : processus cartographié, règles formalisées, points de contrôle définis, puis orchestration autour des outils déjà en place.",
  whatH3: "Ce que GFlux peut automatiser",
  whatCaveat: "Selon la faisabilité technique, les accès disponibles et les règles du cabinet.",
  whatItems: [
    "Préparation d'une restitution client",
    "Première trame narrative à faire relire",
    "Classement et brouillons d'e-mails",
    "Relances de pièces manquantes",
    "Saisies ou refacturations répétitives",
    "Alertes de supervision et de délais",
    "Préparation des rendez-vous de bilan",
    "Organisation documentaire et onboarding",
  ],
  notH3: "Ce que GFlux ne vend pas",
  notText:
    "Ni un logiciel standard à paramétrer seul, ni un agent autonome sans contrôle. GFlux ne remplace pas le logiciel comptable existant.",
  resultH3: "Le résultat attendu",
  resultText:
    "Un workflow documenté, intégré à l'environnement du cabinet, avec validations identifiées, équipe formée et suivi dans le temps.",
  demo: {
    title: "Exemple de restitution automatisée",
    caption:
      "Démonstration à remplacer par une restitution réelle et autorisée. Les données utilisées devront être fictives ou correctement anonymisées.",
    poster: "[POSTER_DEMO_RESTITUTION]",
    videoUrl: "[URL_VIDEO_DEMO_RESTITUTION]",
    transcript: "[TRANSCRIPTION_DEMO]",
  },
};

// Section 6 - Expertise -----------------------------------------------------
export const expertise = {
  h2: "Métier, architecture et contrôle humain dans le même chantier",
  intro:
    "Une automatisation fiable ne se limite pas au choix d'un modèle d'IA : données, accès, sous-traitants, conservation, journalisation et validations doivent être documentés.",
  items: [
    {
      h3: "Architecture sur mesure",
      text: "Construite autour des pratiques du cabinet. Compatibilité vérifiée pendant l'audit.",
    },
    {
      h3: "Validation humaine",
      text: "Toute sortie engageante reste en attente de validation. L'IA prépare, le collaborateur décide.",
    },
    {
      h3: "Traçabilité",
      text: "Étapes, actions et validations journalisées pour faciliter le contrôle.",
    },
    {
      h3: "Conformité intégrée à la conception",
      text: "Secret professionnel, RGPD, règlement européen sur l'IA, déontologie de l'Ordre : selon l'usage concerné.",
    },
  ],
  note: "Cadrage technique et contractuel lié à la prestation. Ne remplace pas l'avis du conseil juridique ou du DPO du cabinet.",
  founder: {
    photo: "[PHOTO_FONDATEUR]",
    name: "[NOM_FONDATEUR]",
    role: "Fondateur de GFlux",
    bio: "[BIOGRAPHIE_FONDATEUR_VALIDEE]",
    expertise: "[EXPERTISES_FONDATEUR_VALIDÉES]",
    linkedin: URL_LINKEDIN_FONDATEUR,
  },
};

// Section 7 - Méthode ---------------------------------------------------
export const method = {
  h2: "Comment se déroule un chantier GFlux",
  steps: [
    {
      h3: "Audit gratuit",
      text: "30 minutes pour identifier la tâche prioritaire, les outils et les points de validation.",
    },
    {
      h3: "Proposition",
      text: "Périmètre, architecture, responsabilités, planning et investissement.",
    },
    {
      h3: "Construction et tests",
      text: "Prototype construit et testé avec les utilisateurs. Chaque étape est validée.",
    },
    {
      h3: "Formation",
      text: "Les équipes apprennent à utiliser et contrôler le workflow. Documentation remise au cabinet.",
    },
    {
      h3: "Maintenance et amélioration continue",
      text: "Suivi, ajustements selon les usages. De nouveaux processus peuvent suivre.",
    },
  ],
  delayNote:
    "Un premier prototype peut être livré en quelques semaines ; le calendrier exact est confirmé dans la proposition.",
};

// Section 8 - Accompagnement --------------------------------------------
export const accompaniment = {
  h2: "Un accompagnement sur mesure, structuré en trois temps",
  intro:
    "Pas de forfaits standardisés : le périmètre est défini après analyse du processus, des outils et des contraintes du cabinet.",
  blocks: [
    {
      h3: "Audit R1 gratuit",
      for: "Cabinets indépendants de 5 à 30 collaborateurs.",
      objective: "Comprendre le processus, les irritants, les points de contrôle.",
      result: "Une première lecture de la priorité et des prochaines étapes.",
      mention: "Quatre audits gratuits ouverts par mois.",
    },
    {
      h3: "Construction sur mesure",
      for: "Processus, accès et faisabilité déjà validés.",
      objective: "Construire, tester et documenter l'automatisation retenue.",
      result: "Un prototype, puis une version déployée selon la proposition.",
    },
    {
      h3: "Accompagnement mensuel",
      for: "Cabinets équipés d'un workflow GFlux.",
      objective: "Maintenance, hébergement si inclus, formation, amélioration continue.",
      result: "Un système suivi, documenté et ajusté dans le temps.",
    },
  ],
};

// Section 9 - Preuves et crédibilité --------------------------------------
export const proof = {
  h2: "Ce qui est déjà établi, et ce qui reste à valider",
  diagnostic: {
    h3: "Diagnostic exploratoire auprès de huit experts-comptables",
    text: "Diagnostic mené en juin et juillet 2026. Sujets récurrents : e-mails clients, restitution, production comptable, supervision.",
    caveat: "Aide à prioriser les sujets, sans valeur d'étude représentative de la profession.",
  },
  pilot: {
    h3: "Chantier pilote de restitution client en cours",
    context: "[IDENTITE_PUBLIQUE_DU_CABINET_PILOTE_OU_CABINET_ANONYMISE]",
    authorization: "[AUTORISATION_ECRITE_PILOTE]",
    city: "[VILLE_PILOTE]",
    size: "[TAILLE_PILOTE]",
    software: "[LOGICIEL_PILOTE]",
    initialTime: "[TEMPS_INITIAL_MESURE_ET_VALIDÉ]",
    publicText:
      "GFlux travaille avec un cabinet indépendant sur un prototype de restitution client, en cours de construction et de validation terrain.",
    objective:
      "Objectif à l'étude : 50 à 60 % de temps de préparation en moins. Pas encore un résultat obtenu.",
  },
  infrastructure: {
    h3: "Infrastructure et sous-traitants",
    text: "Hébergement, modèles et sous-traitants documentés pour chaque chantier selon les contraintes du cabinet.",
    partnerName: "[NOM_PARTENAIRE_HEBERGEMENT]",
    partnerLogo: "[LOGO_PARTENAIRE_HEBERGEMENT]",
    partnerAuthorization: "[AUTORISATION_LOGO_PARTENAIRE]",
    location: "[LOCALISATION_VALIDEE_DES_TRAITEMENTS]",
    certifications: "[CERTIFICATIONS_HEBERGEUR_VALIDÉES]",
  },
};

// Section 10 - Bénéfices ---------------------------------------------------
export const benefits = {
  h2: "Les bénéfices recherchés pour le cabinet",
  intro:
    "Évalués processus par processus, selon le périmètre, la qualité des données et l'adoption par les équipes.",
  items: [
    {
      h3: "Plus de temps pour le conseil",
      text: "Moins d'énergie à préparer, recopier ou reformuler des informations déjà disponibles.",
    },
    {
      h3: "Des processus plus clairs",
      text: "Étapes et validations formalisées, plutôt que dépendantes des habitudes individuelles.",
    },
    {
      h3: "Un contrôle humain visible",
      text: "Sorties importantes soumises à une personne identifiée, avec un historique utile au suivi.",
    },
    {
      h3: "Une charge opérationnelle mieux maîtrisée",
      text: "Tâches répétitives traitées plus régulièrement : supervision et continuité facilitées.",
    },
  ],
};

// Section 11 - Comparatif ---------------------------------------------------
export const comparison = {
  h2: "Comparer les modèles d'accompagnement, sans caricature",
  intro:
    "Le bon choix dépend du processus, du niveau d'autonomie recherché et des ressources du cabinet.",
  columns: ["Traitement interne", "Outil logiciel standard", "Prestataire IA généraliste", "GFlux"],
  rows: [
    {
      criterion: "Adaptation aux processus",
      values: [
        "Selon les habitudes et la disponibilité des équipes.",
        "Fonctionnalités définies par l'éditeur.",
        "Selon l'expérience du prestataire.",
        "Workflow défini après audit du processus comptable.",
      ],
    },
    {
      criterion: "Intégration aux outils existants",
      values: [
        "Ressaisies manuelles fréquentes.",
        "Connecteurs selon l'éditeur.",
        "Compatibilité à vérifier.",
        "Accès techniques vérifiés avant proposition.",
      ],
    },
    {
      criterion: "Validation humaine",
      values: [
        "Présente, mais peu formalisée.",
        "Selon les fonctionnalités disponibles.",
        "Selon l'architecture proposée.",
        "Prévue avant toute sortie engageante.",
      ],
    },
    {
      criterion: "Documentation des flux de données",
      values: [
        "Variable selon l'organisation.",
        "Fournie par l'éditeur.",
        "Selon le niveau d'accompagnement.",
        "Sources, traitements et validations documentés.",
      ],
    },
    {
      criterion: "Formation et maintenance",
      values: [
        "Portées par le cabinet.",
        "Support défini par l'abonnement.",
        "Selon le contrat.",
        "Prévues dans l'accompagnement.",
      ],
    },
  ],
};

// Section 12 - CTA central --------------------------------------------------
export const ctaCentral = {
  h2: "Commençons par la tâche qui vous coûte le plus de temps",
  text: "L'audit examine un processus prioritaire, les outils et les validations nécessaires, pour déterminer si une automatisation sur mesure est pertinente à ce stade.",
  microcopy: "Environ 30 minutes. Sans engagement. Quatre audits gratuits ouverts par mois.",
  note: "Ne saisissez aucune donnée confidentielle concernant vos propres clients dans le formulaire.",
};

// Section 13 - FAQ ------------------------------------------------------
export const faq = {
  h2: "Questions fréquentes",
  items: [
    {
      question: "Devons-nous changer de logiciel comptable ?",
      answer:
        "Non, GFlux travaille en priorité autour de l'existant. La compatibilité dépend des API et des accès disponibles : elle est vérifiée pendant l'audit.",
    },
    {
      question: "L'IA peut-elle envoyer un e-mail ou une restitution sans validation ?",
      answer:
        "Non. Toute sortie susceptible d'engager le cabinet reste en attente de validation humaine avant envoi.",
    },
    {
      question: "Comment les données du cabinet sont-elles protégées ?",
      answer:
        "Chaque chantier précise les données nécessaires, les accès, les sous-traitants, les lieux de traitement, la conservation et les mesures de sécurité, selon le processus retenu.",
    },
    {
      question: "Les données sont-elles anonymisées ?",
      answer:
        "Cela dépend du workflow. GFlux réduit les données au strict nécessaire et applique, selon le cas, une pseudonymisation ou une anonymisation techniquement justifiée.",
    },
    {
      question: "Que contient l'audit gratuit ?",
      answer:
        "30 minutes pour cerner une tâche prioritaire, les outils, les personnes impliquées, les validations nécessaires et les prochaines étapes.",
    },
    {
      question: "Combien de temps faut-il pour obtenir un premier prototype ?",
      answer:
        "Le délai varie selon le processus et les données disponibles. Souvent quelques semaines ; le calendrier exact est confirmé après l'audit.",
    },
    {
      question: "Que comprend l'accompagnement après le déploiement ?",
      answer:
        "Maintenance, hébergement, formation, documentation et amélioration continue, selon ce qui est précisé dans la proposition.",
    },
    {
      question: "Comment GFlux aborde-t-elle le RGPD, le secret professionnel et le règlement européen sur l'IA ?",
      answer:
        "Ces contraintes sont intégrées au cadrage du chantier : rôles, sous-traitants, flux et sécurité documentés. Le cabinet reste libre de faire valider le dispositif par son DPO ou son conseil juridique.",
    },
    {
      question: "GFlux garantit-elle un pourcentage de temps gagné ?",
      answer:
        "Non. GFlux intervient en obligation de moyens : les gains sont mesurés sur le processus concerné, sans résultat garanti identique pour tous les cabinets.",
    },
    {
      question: "Quel est le prix de l'accompagnement ?",
      answer:
        "Le périmètre et l'investissement sont définis après l'audit. Aucun prix standard n'est affiché sur le site.",
    },
  ],
};

// Section 14 - Closing ----------------------------------------------------
export const closing = {
  h2: "Libérez du temps de conseil, une automatisation à la fois",
  text: "Commencez par un processus répétitif, délimité et mesurable, puis étendez l'automatisation lorsque le terrain le justifie.",
  reassurance: "Quatre audits gratuits ouverts par mois. Environ 30 minutes. Sans engagement.",
};

// Footer --------------------------------------------------------------------
export const footer = {
  tagline: "Automatisation IA sur mesure pour cabinets d'expertise comptable indépendants.",
  legalLinks: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  ],
};
