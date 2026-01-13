import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "oversikt/start",
      label: "Översikt",
    },
    {
      type: "category",
      label: "Projekt",
      items: [
        "projekt/arkitektur",
        "projekt/integrationer",
        "projekt/datamodell",
        "projekt/icke-funktionella-krav",
        "projekt/drift-och-overvakning",
        "projekt/migrering",
        "projekt/test-qa",
        "projekt/releaseplan",
        "projekt/riskregister",
        "projekt/beslutslogg",
        "projekt/oppna-fragor",
      ],
    },
    {
      type: "category",
      label: "Kravspecifikation",
      items: [
        "krav/krav-produktmal",
        "krav/krav-autentisering-anvandare",
        "krav/krav-katalog-sok",
        "krav/krav-priser-kampanjer",
        "krav/krav-sprak-valuta",
        "krav/krav-kassa-betalning",
        "krav/krav-b2b-offerter",
        "krav/krav-frakt-returer",
        "krav/krav-marknad",
        "krav/krav-admin-analys",
        "krav/krav-cms-seo",
        "krav/krav-ux-ui",
        "krav/krav-framtida",
      ],
    },
    {
      type: "doc",
      id: "anvandarberattelser/user-stories",
      label: "Användarberättelser",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
