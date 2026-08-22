export const translations = {
  en: {
    meta: {
      title: "Corsovault | Global Payment Gateway Consulting & Setup Support",
      description: "Independent consulting and technical integration for international payment gateways (Stripe, PayPal, Adyen). Free audit, 3DS2 optimization, fraud prevention, and global compliance."
    },
    topbar: {
      badge: "Independent FinTech & Payment Gateway Advisory Firm",
      phone: "+33 1 89 71 42 30",
      email: "contact@corsovault.com",
      hours: "Mon - Fri: 09:00 - 19:00 (CET / UTC+1)"
    },
    nav: {
      services: "Services & Solutions",
      guide: "Best Practices Guide",
      caseStudies: "Case Studies",
      pricing: "Pricing & Packages",
      faq: "FAQ",
      auditBtn: "Request Free Audit",
      langSwitch: "Français"
    },
    hero: {
      tag: "GLOBAL PAYMENT GATEWAY CONSULTING & SETUP SUPPORT",
      title: "Global Payment Gateway Consulting & Setup Support",
      subtitle: "We help startups and international e-commerce merchants configure, optimize, and secure their global payment gateways (Stripe, PayPal, Adyen, Braintree).",
      ctaPrimary: "Start My Free Payment Audit",
      ctaSecondary: "Explore Best Practices Guide",
      stats: [
        { value: "+28%", label: "Avg. authorization rate lift" },
        { value: "-52%", label: "Dispute & fraud reduction" },
        { value: "135+", label: "Currencies & local APMs supported" },
        { value: "99.99%", label: "Webhook & settlement reliability" }
      ],
      trustNotice: "Independent from Stripe, PayPal & Adyen • 100% GDPR & PCI-DSS Level 1 Compliant"
    },
    badges: {
      supported: "Supported Gateways & Payment Technologies",
      gateways: ["Stripe Connect & Elements", "PayPal Commerce Platform", "Braintree", "Adyen", "Klarna & Afterpay", "Apple Pay & Google Pay", "iDEAL & Bancontact", "Shopify Payments", "WooCommerce", "Custom API"]
    },
    services: {
      tag: "TECHNICAL & STRATEGIC EXPERTISE",
      title: "Tailored Solutions for Your Global Payment Infrastructure",
      subtitle: "From initial gateway architecture to automated ledger reconciliation, we safeguard and unlock your worldwide checkout conversions.",
      items: [
        {
          id: "setup-arch",
          icon: "Layers",
          title: "Stripe & PayPal Setup & Architecture",
          desc: "Optimal setup and hardening of your merchant accounts. Proper API key isolation, resilient webhook endpoints, sandbox testing, and zero-downtime go-live.",
          features: ["Multi-currency settlement configuration", "Custom Stripe Elements checkout integration", "Stripe Connect marketplace transfer logic"]
        },
        {
          id: "3ds-radar",
          icon: "ShieldCheck",
          title: "3DS2 Compliance & Radar Fraud Tuning",
          desc: "Fine-tuning Strong Customer Authentication (SCA) to maximize frictionless transactions while applying surgical predictive fraud blocking rules.",
          features: ["Velocity-based custom Radar rules", "3DS2 exemption optimization (TRA & Low-Value)", "Early chargeback alert feeds (Ethoca & Verifi)"]
        },
        {
          id: "intl-apms",
          icon: "Globe",
          title: "International Payments & Local APMs",
          desc: "Scale conversions across European, LatAm, and Asian markets by enabling preferred local payment methods (iDEAL, Bancontact, Klarna, Pix, etc.).",
          features: ["Smart multi-currency settlement routing", "Elimination of double FX conversion fees", "Geo-targeted checkout method sequencing"]
        },
        {
          id: "chargebacks",
          icon: "AlertTriangle",
          title: "Chargeback Defense & Account Health",
          desc: "Audit of merchant dispute ratios, Visa VAMP / Mastercard ECP compliance monitoring, and automated evidence pack generation.",
          features: ["Merchant health diagnostic & threshold check", "Early Fraud Warning (EFW) integration", "Compelling evidence dispute templates"]
        },
        {
          id: "reconciliation",
          icon: "FileSpreadsheet",
          title: "Webhooks, Dunning & ERP Reconciliation",
          desc: "Design and deployment of robust sync pipelines between payment gateways, subscription engines (Stripe Billing), and financial ERPs.",
          features: ["Fault-tolerant webhook queue architecture", "Automated smart dunning & retry engine", "Automated VAT & revenue recognition feeds"]
        },
        {
          id: "migration",
          icon: "ArrowLeftRight",
          title: "Token Migration & Multi-Acquiring",
          desc: "PCI-compliant card token migration between payment processors without disrupting active recurring subscriptions.",
          features: ["PCI-DSS compliant export/import coordination", "Multi-gateway redundant failover", "Automatic acquirer cascading on soft declines"]
        }
      ]
    },
    guide: {
      tag: "PRACTICAL GUIDE & BEST PRACTICES",
      title: "The Ultimate Payment Gateway Integration Handbook",
      subtitle: "Explore our technical documentation and operational blueprints to ensure seamless integration and avoid merchant account suspensions.",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      expertNoteTitle: "Corsovault Architecture Blueprint:",
      expertNoteContent: "Never deploy a fraud rule in immediate 'Block' mode without analyzing its impact for at least 14 days in 'Review' or 'Test' mode. This protects legitimate high-value buyers from unintended friction.",
      tabs: [
        {
          id: "stripe-best-practices",
          label: "1. Stripe & 3D Secure 2",
          title: "Stripe Optimization Handbook: SCA, Radar & Webhooks",
          intro: "Stripe is the industry gold standard, but uncalibrated 3D Secure 2 triggers and generic Radar rules can cause up to 25% false declines on legitimate customers.",
          checklistTitle: "Production Checklist for Stripe:",
          checkpoints: [
            "Utilize the modern Payment Intents API rather than the legacy Charges API.",
            "Implement Transaction Risk Analysis (TRA) exemption requests to maximize frictionless checkouts.",
            "Apply velocity checks to detect bot attacks without blocking legitimate high-value corporate cards.",
            "Enforce signature verification (stripe-signature) and idempotency keys on all webhook listeners.",
            "Simulate decline edge-cases and 3DS challenge flows thoroughly in test mode before launching."
          ],
          codeTitle: "Robust Node.js / Express Webhook Handler with Idempotency:",
          codeSnippet: `// Production-ready Stripe Webhook with error resilience
app.post('/webhook/stripe', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(\`⚠️ Webhook Signature Error: \${err.message}\`);
    return res.status(400).send(\`Webhook Error: \${err.message}\`);
  }

  // Handle specific event types
  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSuccess(event.data.object);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailure(event.data.object);
      break;
    case 'charge.dispute.created':
      await triggerDisputeAlert(event.data.object);
      break;
  }

  res.json({received: true});
});`
        },
        {
          id: "paypal-braintree",
          label: "2. PayPal & Braintree",
          title: "PayPal Commerce Platform & Braintree Configuration Guide",
          intro: "PayPal commands up to 40% of checkout volumes across Europe and the Americas. Providing a native, frictionless experience is essential for conversion.",
          checklistTitle: "Golden Rules for PayPal Commerce Security:",
          checkpoints: [
            "Integrate Smart Payment Buttons to dynamically render PayPal, Pay in 4, and local wallets.",
            "Ensure full Merchant Protection by systematically submitting delivery tracking IDs via the Trackers API.",
            "Establish native settlement bank accounts in key currencies (USD, EUR, GBP) to eliminate costly internal FX conversion markups.",
            "Subscribe to PayPal Dispute Resolution Webhooks for immediate notice of buyer claims.",
            "Align your return and shipping policy with PayPal guidelines to avoid rolling reserves."
          ],
          codeTitle: "Recommended Order Payload for Merchant Protection:",
          codeSnippet: `// PayPal Orders v2 with comprehensive shipping parameters
{
  "intent": "CAPTURE",
  "purchase_units": [{
    "reference_id": "ORDER-9842",
    "amount": {
      "currency_code": "EUR",
      "value": "129.00",
      "breakdown": {
        "item_total": { "currency_code": "EUR", "value": "119.00" },
        "shipping": { "currency_code": "EUR", "value": "10.00" }
      }
    },
    "shipping": {
      "name": { "full_name": "Jean Dupont" },
      "address": {
        "address_line_1": "15 Avenue des Champs-Élysées",
        "admin_area_2": "Paris",
        "postal_code": "75008",
        "country_code": "FR"
      }
    }
  }]
}`
        },
        {
          id: "apms-global",
          label: "3. Local Methods & Multi-Currency",
          title: "Global Checkout Expansion: iDEAL, Bancontact, Klarna & Pix",
          intro: "Credit cards represent a minority payment share in several top economies. Omitting local payment methods causes immediate bounce rates for cross-border shoppers.",
          checklistTitle: "Core Regional Payment Preferences:",
          checkpoints: [
            "Netherlands: iDEAL captures over 60% of all e-commerce transactions.",
            "Belgium: Bancontact is essential for domestic customer trust.",
            "Germany & DACH: Klarna Pay Now, Sofort, and Giropay are heavily favored.",
            "Brazil & LatAm: Pix instant payments and Boleto Bancário dominate online commerce.",
            "Asia-Pacific: Alipay and WeChat Pay enable direct capture from affluent travelers and international buyers."
          ],
          codeTitle: "Stripe Payment Element Dynamic Sorting Config:",
          codeSnippet: `// Recommended multi-payment method ordering
const elements = stripe.elements({
  clientSecret,
  appearance: { theme: 'night', labels: 'floating' },
  locale: 'en',
  paymentMethodOrder: ['card', 'apple_pay', 'google_pay', 'ideal', 'bancontact', 'klarna']
});`
        },
        {
          id: "fraud-chargeback",
          label: "4. Fraud & Chargeback Prevention",
          title: "Risk Mitigation Guide: Card Brand Thresholds & Dispute Defense",
          intro: "Exceeding a 0.9% chargeback ratio or 100 disputes/month can trigger Visa VAMP or Mastercard ECP fines and result in immediate placement on the MATCH / TMF blacklist.",
          checklistTitle: "Action Plan Recommended by Corsovault:",
          checkpoints: [
            "Integrate Verifi Rapid Dispute Resolution (RDR) to auto-refund dispute-bound charges prior to formal filing.",
            "Deploy Ethoca alerts to catch confirmed issuing bank fraud within 24 hours.",
            "Enforce strict velocity rules (e.g., max 3 attempts per IP/card per hour).",
            "Require Address Verification Service (AVS) match on high-ticket USD/GBP transactions.",
            "Maintain centralized, timestamped proof of delivery (PoD) and IP audit trails."
          ],
          codeTitle: "Recommended Custom Radar Rule Set:",
          codeSnippet: `// Custom Radar rule balancing fraud mitigation and conversion
BLOCK IF :risk_score: > 75 
      AND NOT :is_3d_secure:
      AND NOT :is_corporate_card:

REVIEW IF :risk_score: > 60 
       OR (:card_country: != :ip_country: AND :amount_in_eur: > 300)`
        }
      ]
    },
    audit: {
      tag: "FREE TECHNICAL AUDIT",
      title: "Evaluate Your Payment Gateway Health & Efficiency",
      subtitle: "Complete our 2-minute diagnostic questionnaire. Our senior consultants will evaluate your setup and provide a free, no-obligation optimization roadmap.",
      form: {
        step1Label: "Volume & Profile",
        step2Label: "Tech Infrastructure",
        step3Label: "Contact Details",
        step1Title: "1. Business Profile & Transaction Volume",
        step2Title: "2. Technical Stack & Gateway Setup",
        step3Title: "3. Contact Details & Submission",
        step3Subtitle: "Where should we send your preliminary diagnostic and optimization roadmap?",
        volumeLabel: "Estimated monthly transaction volume:",
        volumeOptions: [
          "< $10,000 / month (Startup / Launch)",
          "$10,000 - $50,000 / month (Growing)",
          "$50,000 - $250,000 / month (Scale-up)",
          "$250,000 - $1,000,000 / month (High Volume)",
          "> $1,000,000 / month (Enterprise / Multi-entity)"
        ],
        gatewayLabel: "Current payment gateway(s):",
        gatewayOptions: ["Stripe", "PayPal / Braintree", "Adyen", "Shopify Payments", "Square / SumUp", "Other / None"],
        cmsLabel: "E-Commerce / Software Platform:",
        cmsOptions: ["Shopify / Shopify Plus", "WooCommerce / WordPress", "PrestaShop", "Magento / Adobe Commerce", "Custom Application (Next.js, Node, Laravel, Python, etc.)", "Other"],
        marketsLabel: "Primary target markets:",
        marketsOptions: ["Domestic / US & Canada", "European Union (Multi-country)", "United Kingdom & Europe", "Global International (APAC, LatAm, MENA)"],
        frictionLabel: "Primary challenge or goal:",
        frictionOptions: [
          "High checkout abandonment or bank decline rates",
          "3D Secure 2 / SCA compliance and frictionless optimization",
          "Fraud attacks, chargebacks, or threat of account suspension",
          "Enabling local APMs & multi-currency settlements (iDEAL, Klarna...)",
          "Complex webhook synchronizations and ERP ledger reconciliation",
          "New Project: Clean, enterprise-grade setup from scratch"
        ],
        nameLabel: "Full Name:",
        namePlaceholder: "e.g., Alexander Smith",
        emailLabel: "Work Email Address:",
        emailPlaceholder: "alexander@your-company.com",
        phoneLabel: "Phone Number:",
        phonePlaceholder: "+1 (555) 382-9401",
        companyLabel: "Company Name / Website:",
        companyPlaceholder: "MyStore.com / Finflow Corp",
        notesLabel: "Specific notes or questions (Optional):",
        notesPlaceholder: "Share any relevant timeline, gateway challenges, or integration goals...",
        gdprConsent: "I agree that Corsovault may process my business details to conduct this technical audit and contact me. Per our privacy policy, data is never shared with third parties.",
        privacyLinkText: "Privacy Policy",
        prevBtn: "Previous",
        nextBtn: "Continue",
        submitBtn: "Request Free Audit & Optimization Roadmap",
        submitting: "Analyzing parameters and compiling diagnostic...",
        successTitle: "Audit Request Received Successfully!",
        successSubtitle: "A senior Corsovault consultant is reviewing your parameters. You will receive your customized optimization roadmap within 24 business hours.",
        successRecap: "Preliminary Diagnostic Summary:",
        recapCompany: "Company:",
        recapGateway: "Analyzed Gateway:",
        recapVolume: "Volume:",
        recapGoal: "Primary Challenge:",
        nextSteps: "Next step: A dedicated expert will reach out via the provided email to coordinate a 30-minute technical debrief if desired.",
        anotherDiagnosticBtn: "Run another diagnostic",
        errors: {
          name: "Full name is required",
          email: "A valid business email address is required",
          company: "Company name is required",
          gdpr: "Please accept the privacy terms to continue"
        }
      },
      diagnosticPreview: {
        title: "Estimated Optimization Opportunity",
        potentialLift: "+18% to +32%",
        liftDesc: "Projected revenue recovery from reduced false declines and local checkout localization.",
        securityScore: "SCA & 3DS2 Health: Optimization Recommended",
        multiCurrencyBadge: "Intelligent multi-currency routing enabled",
        confidentialNotice: "🔒 Your information is strictly confidential and never shared with third parties.",
        badge: "Instant diagnostic preview based on your input",
        expertCallTitle: "Need immediate expert guidance?",
        expertCallSubtitle: "Our senior payment consultants are available Mon-Fri, 9am-7pm CET.",
        expertCallPhone: "+33 1 89 71 42 30"
      }
    },
    caseStudies: {
      tag: "CLIENT RESULTS & CASE STUDIES",
      title: "Measurable Results for High-Growth Merchants",
      subtitle: "See how our gateway consulting and technical engineering solve critical checkout bottlenecks.",
      challengeLabel: "Initial Challenge:",
      solutionLabel: "Corsovault Solution:",
      ctaBtn: "Achieve Similar Results",
      items: [
        {
          id: "cs-1",
          category: "DTC Global E-Commerce",
          client: "AuraSkin Cosmetics (Paris & New York)",
          challenge: "Suffering an 18.4% cross-border decline rate on US/UK sales and high cart drop-off in Northern Europe due to lack of local checkout options.",
          solution: "Implemented Stripe Payment Element with intelligent multi-currency settlement routing (USD, EUR, GBP) and frictionless 1-click APMs (iDEAL, Klarna).",
          results: [
            { metric: "-31%", desc: "Drop in global cart abandonment" },
            { metric: "4.1%", desc: "Final decline rate (down from 18.4%)" },
            { metric: "+$260k", desc: "Additional revenue captured in 6 months" }
          ]
        },
        {
          id: "cs-2",
          category: "B2B SaaS & Recurring Subscriptions",
          client: "SaaSFlow Cloud (European Scale-up)",
          challenge: "Substantial involuntary churn from failed SEPA debit collections and expired cards, coupled with asynchronous webhook drops on Stripe Billing.",
          solution: "Engineered an idempotent Redis-backed webhook queue, automated Card Account Updater hooks, and smart multi-stage dunning sequences.",
          results: [
            { metric: "-47%", desc: "Reduction in involuntary subscription churn" },
            { metric: "99.98%", desc: "Webhook & invoice reconciliation reliability" },
            { metric: "3x", desc: "Faster month-end accounting close" }
          ]
        },
        {
          id: "cs-3",
          category: "Luxury Horology Marketplace",
          client: "LuxeHorlogerie Paris",
          challenge: "High average order value (> €3,500) triggered excessive 3DS false positives, alienating legitimate high-net-worth VIP clients.",
          solution: "Customized Stripe Radar risk scoring with TRA exemption routing and integrated Ethoca early fraud alerts for immediate dispute resolution.",
          results: [
            { metric: "-64%", desc: "Dispute reduction without declining VIP buyers" },
            { metric: "+94%", desc: "Client satisfaction on checkout experience" },
            { metric: "0", desc: "Zero merchant account holds or reserves" }
          ]
        }
      ]
    },
    testimonials: {
      tag: "CLIENT TESTIMONIALS",
      title: "Trusted by Fast-Moving Founders & Tech Leaders",
      items: [
        {
          quote: "Corsovault overhauled our Stripe setup in just 10 days. We were suffering unexplained cross-border declines on US traffic. Their multi-currency and 3DS architecture boosted our international revenue by 35%.",
          author: "Thomas Mercier",
          role: "Co-Founder & COO",
          company: "NordicLifestyle Store",
          avatar: "TM"
        },
        {
          quote: "Their engineering depth on webhooks and PayPal Braintree is outstanding. They helped us avert critical edge-case failures that would have cost us tens of thousands in disputes.",
          author: "Éléonore de Roche",
          role: "Head of E-Commerce & Growth",
          company: "Atelier Joaillerie Paris",
          avatar: "ER"
        },
        {
          quote: "Exemplary advisory and execution. The initial audit report pointed out exactly where our checkout was leaking conversions. The ROI paid for itself within three weeks.",
          author: "Marc Vasseur",
          role: "Chief Technology Officer / CTO",
          company: "Subscriptio SaaS",
          avatar: "MV"
        }
      ]
    },
    pricing: {
      tag: "TRANSPARENT FIXED PRICING",
      title: "Invest in Payment Reliability & Higher Conversions",
      subtitle: "Guaranteed fixed-price consulting packages. No hidden fees, no recurring lock-in.",
      guaranteeNotice: "All packages include post-launch warranty, regression testing, and dedicated engineering support.",
      plans: [
        {
          name: "Sprint Setup & Audit",
          badge: "Ideal for Startups & New Launches",
          price: "€1,450",
          period: "one-off fixed fee",
          desc: "The complete package to configure a hardened Stripe or PayPal gateway from scratch according to industry best practices.",
          features: [
            "Initial business review & optimal gateway selection",
            "Complete merchant account configuration & API keys",
            "Stripe Elements or PayPal Checkout integration",
            "Baseline 3DS2 & European SCA compliance setup",
            "Comprehensive sandbox testing suite & assisted Go-Live",
            "Dedicated engineering support for 14 days post-launch"
          ],
          cta: "Select Sprint Setup",
          popular: false
        },
        {
          name: "Growth Optimization",
          badge: "Most Popular",
          price: "€2,950",
          period: "one-off fixed fee",
          desc: "For growing e-commerce stores and scale-ups aiming to maximize acceptance and scale internationally.",
          features: [
            "Everything in the Sprint Setup package",
            "Activation of regional APMs (iDEAL, Klarna, Bancontact...)",
            "Tailored Stripe Radar rules & chargeback defense setup",
            "Multi-currency routing to remove hidden FX markups",
            "Hardened webhook pipeline & smart dunning retry flow",
            "Checkout UX speed & friction audit",
            "Dedicated priority support for 30 days"
          ],
          cta: "Select Growth Optimization",
          popular: true
        },
        {
          name: "Enterprise & Multi-Acquirer",
          badge: "Custom Architecture",
          price: "Custom Quote",
          period: "tailored scope",
          desc: "For complex marketplaces (Stripe Connect), high volume merchants (> $500k/mo), and multi-processor resilience.",
          features: [
            "Multi-processor cascading with automated failover",
            "Custom / Express Stripe Connect marketplace logic",
            "Custom ERP, NetSuite, SAP or Sage reconciliation feeds",
            "Proactive integration of Ethoca & Verifi pre-dispute alerts",
            "PCI-compliant token migration assistance",
            "Emergency technical SLA and standby coverage"
          ],
          cta: "Request Custom Proposal",
          popular: false
        }
      ]
    },
    faq: {
      tag: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything You Need to Know About Our Services",
      items: [
        {
          q: "Is Corsovault officially affiliated with Stripe or PayPal?",
          a: "No. Corsovault is a 100% independent technical and strategic consulting firm. This total independence ensures that our recommendations are completely unbiased and focused exclusively on what is best for your margins and technical architecture."
        },
        {
          q: "Why hire a consultant rather than using default e-commerce plugins?",
          a: "Out-of-the-box plugins frequently use generic fallback configurations: mismanaged 3DS challenges, absent local payment methods, untuned fraud filters that create false declines, and fragile webhook listeners. Our work raises approval rates by an average of 15% to 28% while protecting accounts against unexpected suspensions."
        },
        {
          q: "How long does an integration or optimization engagement take?",
          a: "A standard Sprint Setup is typically completed within 3 to 7 business days. Growth Optimization projects usually take 1 to 2 weeks depending on your stack. For enterprise architectures (Stripe Connect, ERP integrations), a clear roadmap is agreed upon during quoting."
        },
        {
          q: "How do you guarantee the security of our API credentials and financial data?",
          a: "We NEVER request access to customer credit card numbers. All our procedures strictly adhere to PCI-DSS Level 1 compliance guidelines. For Stripe and PayPal, you grant us restricted 'Developer' access via official team delegation features, with zero access to bank transfers or payouts."
        },
        {
          q: "How does the free payment audit process work?",
          a: "Upon receiving your form, our consultants analyze your business profile (volume, target markets, gateways, platform). We generate a comprehensive diagnostic report highlighting optimization opportunities and provide a 30-minute technical strategy call with no obligation."
        }
      ]
    },
    footer: {
      aboutTitle: "About Corsovault",
      aboutDesc: "Corsovault Advisory SAS is the leading independent consulting and technical integration firm specializing in global payment gateways for e-commerce, startups, and international platforms.",
      navTitle: "Navigation",
      legalTitle: "Legal Information & Compliance",
      contactTitle: "Contact Information",
      address: "38 Rue de la Boétie, 75008 Paris, France",
      phone: "+33 1 89 71 42 30",
      email: "contact@corsovault.com",
      companyReg: "SAS with capital of €25,000 • Paris Trade Register B 921 843 710 • SIRET: 921 843 710 00024 • VAT: FR 48 921843710",
      disclaimer: "Non-Affiliation Notice: Corsovault Advisory SAS is an independent advisory firm. Stripe, PayPal, Braintree, Adyen, Apple Pay, Google Pay, Klarna, and iDEAL are registered trademarks of their respective owners. Use of these names does not imply any affiliation, sponsorship, or endorsement.",
      copyright: "© 2026 Corsovault Advisory SAS. All rights reserved.",
      gdprCompliant: "GDPR Compliant (EU 2016/679)",
      scaCompliant: "3DS2 / SCA Compliance Audit",
      legalLinks: {
        mentions: "Legal Notice",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        refund: "Refund Policy",
        cookies: "Cookie Settings"
      }
    },
    cookie: {
      title: "Privacy and Cookie Preferences",
      text: "We use essential cookies for technical functionality and anonymous analytics compliant with GDPR and CNIL guidelines to enhance your browsing experience.",
      accept: "Accept All",
      decline: "Continue Without Accepting",
      learnMore: "Learn more"
    },
    modal: {
      docOfficialBadge: "Corsovault Advisory SAS • Official Regulatory Disclosure",
      printTitle: "Print Document",
      closeBtn: "Close",
      legalInquiryText: "For any legal inquiries:",
      closeModalBtn: "Close Window"
    }
  },
  fr: {
    meta: {
      title: "Corsovault | Global Payment Gateway Consulting & Setup Support",
      description: "Conseil indépendant et intégration technique de passerelles de paiement internationales (Stripe, PayPal, Adyen). Audit gratuit et conformité mondiale."
    },
    topbar: {
      badge: "Cabinet Indépendant de Conseil FinTech & Passerelles de Paiement",
      phone: "+33 1 89 71 42 30",
      email: "contact@corsovault.com",
      hours: "Lun - Ven : 09:00 - 19:00 (Paris / CET)"
    },
    nav: {
      services: "Services & Solutions",
      guide: "Guide & Bonnes Pratiques",
      caseStudies: "Études de Cas",
      pricing: "Tarifs & Formules",
      faq: "FAQ",
      auditBtn: "Demander un Audit Gratuit",
      langSwitch: "English"
    },
    hero: {
      tag: "CONSEIL & INTÉGRATION DE PASSERELLES DE PAIEMENT",
      title: "Global Payment Gateway Consulting & Setup Support",
      subtitle: "Nous accompagnons les startups et e-commerçants dans la configuration, l'optimisation et la sécurisation de leurs passerelles de paiement internationales (Stripe, PayPal, Adyen).",
      ctaPrimary: "Lancer mon Audit Paiement Gratuit",
      ctaSecondary: "Explorer le Guide des Bonnes Pratiques",
      stats: [
        { value: "+28%", label: "Hausse moy. du taux d'acceptation" },
        { value: "-52%", label: "Réduction des litiges & fraudes" },
        { value: "135+", label: "Devises & méthodes locales gérées" },
        { value: "99.99%", label: "Fiabilité des webhooks et flux" }
      ],
      trustNotice: "Indépendant de Stripe, PayPal & Adyen • Conformité 100% RGPD & PCI-DSS Niveau 1"
    },
    badges: {
      supported: "Technologies & Passerelles maîtrisées",
      gateways: ["Stripe Connect & Elements", "PayPal Commerce Platform", "Braintree", "Adyen", "Klarna & Afterpay", "Apple Pay & Google Pay", "iDEAL & Bancontact", "Shopify Payments", "WooCommerce", "Custom API"]
    },
    services: {
      tag: "EXPERTISES TECHNIQUES & MÉTIER",
      title: "Des solutions sur-mesure pour votre infrastructure de paiement",
      subtitle: "De l'analyse d'architecture initiale jusqu'à la réconciliation comptable automatisée, nous sécurisons et débloquez votre potentiel de conversion mondial.",
      items: [
        {
          id: "setup-arch",
          icon: "Layers",
          title: "Configuration & Architecture Stripe / PayPal",
          desc: "Création et paramétrage optimal de vos comptes marchands. Structuration des clés API, webhooks redondants, environnements sandbox et passage en production sans friction.",
          features: ["Paramétrage multi-devises & comptes bancaires", "Configuration Stripe Elements / Custom Checkout", "Gestion des flux de transfert Stripe Connect"]
        },
        {
          id: "3ds-radar",
          icon: "ShieldCheck",
          title: "Conformité 3DS2 & Règles Anti-Fraude Radar",
          desc: "Optimisation de l'authentification forte (SCA) pour maximiser les exemptions sans risque et configuration chirurgicale des règles de blocage prédictif.",
          features: ["Règles Radar personnalisées par vélocité", "Exemptions 3DS2 (Low Value, Transaction Risk Analysis)", "Intégration des alertes pré-litiges (Ethoca/Verifi)"]
        },
        {
          id: "intl-apms",
          icon: "Globe",
          title: "Paiements Internationaux & Méthodes Locales (APMs)",
          desc: "Augmentez vos conversions européennes et globales en activant les moyens de paiement préférés de vos clients locaux (iDEAL, Bancontact, Klarna, Pix, etc.).",
          features: ["Routage intelligent de devises de règlement", "Élimination des frais de conversion superflus", "Localisation des checkouts par pays de l'acheteur"]
        },
        {
          id: "chargebacks",
          icon: "AlertTriangle",
          title: "Protection Anti-Chargebacks & Défense de Compte",
          desc: "Diagnostic de votre ratio de litiges, mise en conformité avec les programmes de surveillance Visa VAMP / Mastercard ECP et dossiers de contestation automatisés.",
          features: ["Audit de santé de compte marchand", "Système d'alerte anticipée de fraude (EFW)", "Scripts et preuves probantes pour litiges"]
        },
        {
          id: "reconciliation",
          icon: "FileSpreadsheet",
          title: "Webhooks, Réconciliation & Intégration ERP",
          desc: "Développement et fiabilisation de pipelines de synchronisation entre votre passerelle de paiement, vos bases de données, Stripe Billing et vos logiciels de comptabilité.",
          features: ["Architecture de webhooks avec reprise sur erreur", "Gestion automatisée du dunning et des relances", "Export comptable et TVA automatisée"]
        },
        {
          id: "migration",
          icon: "ArrowLeftRight",
          title: "Migration de Tokens & Multi-Acquéreurs",
          desc: "Accompagnement dans la migration sécurisée PCI de vos tokens de cartes bancaires entre processeurs sans interruption de vos abonnements récurrents.",
          features: ["Exportation / Importation conforme PCI-DSS", "Architecture multi-passerelles de secours", "Fallback automatique en cas de panne acquéreur"]
        }
      ]
    },
    guide: {
      tag: "GUIDE PRATIQUE & BONNES PRATIQUES",
      title: "Le Guide Ultime de Configuration des Passerelles de Paiement",
      subtitle: "Consultez notre documentation technique et nos recommandations opérationnelles pour réussir votre intégration et éviter les blocages de compte.",
      copyBtn: "Copier",
      copiedBtn: "Copié !",
      expertNoteTitle: "Conseil d'Architecture Corsovault :",
      expertNoteContent: "Ne déployez jamais une règle anti-fraude en mode 'Block' immédiat sans avoir analysé son impact pendant au moins 14 jours en mode 'Review' ou 'Test'. Cela protège vos acheteurs VIP d'un blocage intempestif.",
      tabs: [
        {
          id: "stripe-best-practices",
          label: "1. Stripe & 3D Secure 2",
          title: "Guide d'Optimisation Stripe : SCA, Radar & Webhooks",
          intro: "Stripe est le standard de l'industrie, mais une mauvaise configuration de 3D Secure 2 ou des règles Radar trop strictes peut détruire jusqu'à 25% de vos ventes légitimes.",
          checklistTitle: "Checklist de Mise en Production Stripe :",
          checkpoints: [
            "Activer l'API Payment Intents au lieu de l'ancienne API Charges (obligatoire pour SCA/3DS2).",
            "Mettre en place une logique de 'Frictionless Flow' avec demande d'exemption TRA (Transaction Risk Analysis).",
            "Configurer des règles de détection d'adresses IP anonymes (VPN/Tor) sans bloquer systématiquement les cartes corporate.",
            "Déployer un endpoint webhook avec vérification stricte de signature cryptographique (stripe-signature) et idempotence.",
            "Tester les codes d'erreur 3DS et les cartes de test officielles en environnement sandbox avant ouverture des ventes."
          ],
          codeTitle: "Exemple de vérification robuste de webhook Stripe (Node.js/Express) :",
          codeSnippet: `// Vérification sécurisée du webhook avec gestion d'idempotence
app.post('/webhook/stripe', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(\`⚠️ Erreur de signature Webhook: \${err.message}\`);
    return res.status(400).send(\`Webhook Error: \${err.message}\`);
  }

  // Traitement sécurisé selon l'événement
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      await handlePaymentSuccess(paymentIntent);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailure(event.data.object);
      break;
    case 'charge.dispute.created':
      await triggerDisputeAlert(event.data.object);
      break;
    default:
      console.log(\`Unhandled event type \${event.type}\`);
  }

  res.json({received: true});
});`
        },
        {
          id: "paypal-braintree",
          label: "2. PayPal & Braintree",
          title: "Guide de Configuration PayPal Commerce Platform & Braintree",
          intro: "PayPal représente entre 20% et 40% des volumes de vente en ligne en Europe et aux États-Unis. Une intégration fluide élimine la friction pour les acheteurs sans carte bancaire.",
          checklistTitle: "Règles d'or pour sécuriser PayPal Commerce :",
          checkpoints: [
            "Intégrer les 'Smart Payment Buttons' pour afficher dynamiquement PayPal, Pay in 4X et les portefeuilles locaux.",
            "Activer la protection des marchands PayPal en transmettant systématiquement les numéros de suivi de livraison (Trackers API).",
            "Paramétrer des comptes de règlement en devises multiples (USD, EUR, GBP) pour éviter les taux de change majorés de PayPal.",
            "Configurer la synchronisation automatique des litiges via PayPal Resolution Center Webhooks.",
            "Mettre en conformité vos conditions de retour et politique de livraison pour accélérer la levée des réserves financières."
          ],
          codeTitle: "Structure recommandée des données de commande pour la protection marchand :",
          codeSnippet: `// Payload PayPal Orders v2 avec données complètes de livraison
{
  "intent": "CAPTURE",
  "purchase_units": [{
    "reference_id": "ORDER-9842",
    "amount": {
      "currency_code": "EUR",
      "value": "129.00",
      "breakdown": {
        "item_total": { "currency_code": "EUR", "value": "119.00" },
        "shipping": { "currency_code": "EUR", "value": "10.00" }
      }
    },
    "shipping": {
      "name": { "full_name": "Jean Dupont" },
      "address": {
        "address_line_1": "15 Avenue des Champs-Élysées",
        "admin_area_2": "Paris",
        "postal_code": "75008",
        "country_code": "FR"
      }
    }
  }]
}`
        },
        {
          id: "apms-global",
          label: "3. Méthodes Locales & Multi-Devises",
          title: "Guide d'Expansion Internationale : iDEAL, Bancontact, Klarna & Pix",
          intro: "Dans de nombreux pays, la carte bancaire traditionnelle est minoritaire. Ignorer les méthodes de paiement locales réduit drastiquement vos ventes transfrontalières.",
          checklistTitle: "Cartographie des méthodes de paiement incontournables :",
          checkpoints: [
            "Pays-Bas : iDEAL représente plus de 60% des transactions e-commerce.",
            "Belgique : Bancontact est indispensable pour capter la clientèle belge.",
            "Allemagne & Autriche : Sofort / Klarna Pay Now et Giropay sont prédominants.",
            "Brésil & LatAm : Pix (instantané) et Boleto Bancário dominent le marché.",
            "Asie : Alipay et WeChat Pay pour capter la clientèle internationale et touristique."
          ],
          codeTitle: "Stratégie d'affichage dynamique des paiements selon la géolocalisation :",
          codeSnippet: `// Configuration recommandée Stripe Payment Element (auto-tri par pays)
const elements = stripe.elements({
  clientSecret,
  appearance: { theme: 'night', labels: 'floating' },
  locale: 'fr',
  paymentMethodOrder: ['card', 'apple_pay', 'google_pay', 'ideal', 'bancontact', 'klarna']
});`
        },
        {
          id: "fraud-chargeback",
          label: "4. Prévention Fraude & Litiges",
          title: "Guide de Gestion du Risque : Seuils Visa/Mastercard & Chargebacks",
          intro: "Dépasser un taux de litige de 0.9% ou 100 contestations par mois peut entraîner l'inscription sur le fichier MATCH / Terminated Merchant File et la fermeture immédiate de vos comptes marchands.",
          checklistTitle: "Plan d'action préventif recommandé par Corsovault :",
          checkpoints: [
            "Utiliser les alertes RDR (Rapid Dispute Resolution) de Verifi pour rembourser automatiquement avant émission du chargeback officiel.",
            "Connecter Ethoca Alerts pour intercepter la fraude confirmée par les banques émettrices dans les 24h.",
            "Mettre en place un contrôle de vélocité (max 3 tentatives de paiement par IP / par carte par heure).",
            "Exiger la correspondance obligatoire de l'adresse de facturation (AVS) pour les commandes à fort panier en USD/GBP.",
            "Conserver et archiver automatiquement les preuves de livraison avec signature (PoD) et adresses IP de commande."
          ],
          codeTitle: "Règle Radar personnalisée recommandée (Seuil de risque modéré) :",
          codeSnippet: `// Exemple de règle Stripe Radar personnalisée pour transactions à risque
BLOCK IF :risk_score: > 75 
      AND NOT :is_3d_secure:
      AND NOT :is_corporate_card:

REVIEW IF :risk_score: > 60 
       OR (:card_country: != :ip_country: AND :amount_in_eur: > 300)`
        }
      ]
    },
    audit: {
      tag: "AUDIT TECHNIQUE GRATUIT",
      title: "Évaluez la performance et la sécurité de vos paiements",
      subtitle: "Remplissez ce formulaire en 2 minutes. Nos consultants analysent votre configuration et vous remettent un rapport d'optimisation personnalisé sans engagement.",
      form: {
        step1Label: "Volumétrie",
        step2Label: "Infrastructure",
        step3Label: "Coordonnées",
        step1Title: "1. Votre activité et volumétrie",
        step2Title: "2. Votre infrastructure technique",
        step3Title: "3. Vos coordonnées professionnelles",
        step3Subtitle: "Où devons-nous vous transmettre le rapport d'analyse préliminaire ?",
        volumeLabel: "Volume mensuel de transactions estimé :",
        volumeOptions: [
          "< 10 000 € / mois (Startup / Lancement)",
          "10 000 € - 50 000 € / mois (En croissance)",
          "50 000 € - 250 000 € / mois (Scale-up)",
          "250 000 € - 1 000 000 € / mois (Grand Compte)",
          "> 1 000 000 € / mois (Enterprise / Multi-entités)"
        ],
        gatewayLabel: "Passerelle(s) de paiement actuelle(s) :",
        gatewayOptions: ["Stripe", "PayPal / Braintree", "Adyen", "Shopify Payments", "Square / SumUp", "Autre / Aucune"],
        cmsLabel: "Plateforme / CMS utilisé :",
        cmsOptions: ["Shopify / Shopify Plus", "WooCommerce / WordPress", "PrestaShop", "Magento / Adobe Commerce", "Application Custom (Next.js, Node, Laravel, Python, etc.)", "Autre"],
        marketsLabel: "Principaux marchés cibles :",
        marketsOptions: ["France & Europe francophone", "Union Européenne (Multi-pays)", "Royaume-Uni & États-Unis", "International Global (APAC, LatAm, MENA)"],
        frictionLabel: "Votre principal défi actuel :",
        frictionOptions: [
          "Taux d'abandon de panier ou de déclin trop élevé",
          "Mise en place de 3D Secure / SCA et conformité légale",
          "Gestion des fraudes, litiges et blocages de compte",
          "Activation de devises et méthodes locales (iDEAL, Klarna...)",
          "Réconciliation comptable et synchronisation webhooks complexe",
          "Nouveau projet : Besoin d'une configuration optimale de A à Z"
        ],
        nameLabel: "Nom complet :",
        namePlaceholder: "ex: Alexandre Martin",
        emailLabel: "Adresse e-mail professionnelle :",
        emailPlaceholder: "alexandre@votre-entreprise.com",
        phoneLabel: "Numéro de téléphone :",
        phonePlaceholder: "+33 6 12 34 56 78",
        companyLabel: "Nom de l'entreprise / Site web :",
        companyPlaceholder: "MaBoutique.com / SAS Finflow",
        notesLabel: "Précisions ou questions spécifiques (facultatif) :",
        notesPlaceholder: "Indiquez tout détail utile sur votre projet, vos délais ou vos passerelles...",
        gdprConsent: "J'accepte que Corsovault traite mes données professionnelles afin de réaliser l'audit technique et me contacter. Conformément à notre politique de confidentialité, aucune donnée n'est cédée à des tiers.",
        privacyLinkText: "Politique de confidentialité",
        prevBtn: "Précédent",
        nextBtn: "Continuer",
        submitBtn: "Recevoir mon Audit Gratuit & Rapport d'Optimisation",
        submitting: "Analyse des données et génération du diagnostic...",
        successTitle: "Demande d'audit reçue avec succès !",
        successSubtitle: "Un consultant senior Corsovault examine vos paramètres. Vous recevrez votre diagnostic d'optimisation et votre synthèse personnalisée sous 24h ouvrées.",
        successRecap: "Récapitulatif de votre diagnostic préliminaire :",
        recapCompany: "Entreprise :",
        recapGateway: "Passerelle analysée :",
        recapVolume: "Volumétrie :",
        recapGoal: "Défi sélectionné :",
        nextSteps: "Prochaine étape : Un expert dédié vous contactera à l'adresse indiquée pour convenir d'un échange technique de 30 minutes si vous le souhaitez.",
        anotherDiagnosticBtn: "Effectuer un autre diagnostic",
        errors: {
          name: "Le nom est requis",
          email: "Une adresse e-mail professionnelle valide est requise",
          company: "Le nom de l'entreprise est requis",
          gdpr: "Veuillez accepter les conditions de confidentialité"
        }
      },
      diagnosticPreview: {
        title: "Score d'Optimisation Prévisionnel",
        potentialLift: "+18% à +32%",
        liftDesc: "Potentiel moyen de récupération de chiffre d'affaires sur vos paniers abandonnés et déclins bancaires.",
        securityScore: "Niveau de conformité SCA & 3DS2 : Recommandé pour révision",
        multiCurrencyBadge: "Routage intelligent de devises disponible",
        confidentialNotice: "🔒 Vos informations sont strictement confidentielles et ne sont jamais partagées avec des tiers.",
        badge: "Diagnostic instantané basé sur vos réponses",
        expertCallTitle: "Besoin d'un avis d'expert immédiat ?",
        expertCallSubtitle: "Nos consultants répondent du lundi au vendredi de 9h à 19h CET.",
        expertCallPhone: "+33 1 89 71 42 30"
      }
    },
    caseStudies: {
      tag: "RÉSULTATS CLIENTS & ÉTUDES DE CAS",
      title: "Des résultats mesurables pour des commerçants ambitieux",
      subtitle: "Découvrez comment nos interventions d'ingénierie et de conseil en passerelles de paiement transforment les métriques clés.",
      challengeLabel: "Défi Initial :",
      solutionLabel: "Solution Corsovault :",
      ctaBtn: "Obtenir les mêmes résultats",
      items: [
        {
          id: "cs-1",
          category: "E-Commerce DTC International",
          client: "AuraSkin Cosmetics (Paris & New York)",
          challenge: "Taux de déclin bancaire de 18.4% sur les commandes transfrontalières (US/UK) et abandon de panier élevé en Europe du Nord par manque de méthodes de paiement locales.",
          solution: "Déploiement de Stripe Payment Element avec routage dynamique des devises de règlement (USD, EUR, GBP) et activation en un clic d'iDEAL et Klarna sans double conversion de change.",
          results: [
            { metric: "-31%", desc: "D'abandon de panier global" },
            { metric: "4.1%", desc: "Taux de déclin final (au lieu de 18.4%)" },
            { metric: "+240k€", desc: "Volume additionnel capté en 6 mois" }
          ]
        },
        {
          id: "cs-2",
          category: "SaaS B2B & Abonnements",
          client: "SaaSFlow Cloud (Scale-up Européenne)",
          challenge: "Churn involontaire massif dû à des échecs de prélèvements bancaires SEPA et cartes expirées, combiné à des désynchronisations de webhooks sur Stripe Billing.",
          solution: "Refonte complète du pipeline de webhooks avec idempotence et queue Redis, mise en place de la mise à jour automatique des cartes (Card Account Updater) et séquence de dunning intelligente.",
          results: [
            { metric: "-47%", desc: "De churn involontaire sur abonnements" },
            { metric: "99.98%", desc: "Fiabilité des webhooks et factures" },
            { metric: "x3", desc: "Gain de temps sur la clôture comptable" }
          ]
        },
        {
          id: "cs-3",
          category: "Marketplace Luxe & Horlogerie",
          client: "LuxeHorlogerie Paris",
          challenge: "Panier moyen élevé (> 3 500 €) générant des faux positifs 3DS2 et des alertes de fraude excessives, bloquant des acheteurs VIP légitimes.",
          solution: "Calibrage sur-mesure des règles Stripe Radar, intégration d'une authentification 3DS2 adaptative avec exemptions TRA et connexion aux flux d'alerte pré-litige Ethoca.",
          results: [
            { metric: "-64%", desc: "De réduction des chargebacks sans rejet VIP" },
            { metric: "+94%", desc: "Taux de satisfaction des clients grand compte" },
            { metric: "0", desc: "Aucun blocage de compte marchand" }
          ]
        }
      ]
    },
    testimonials: {
      tag: "TÉMOIGNAGES CLIENTS",
      title: "Ce que disent les fondateurs et directeurs e-commerce",
      items: [
        {
          quote: "Corsovault a transformé notre configuration Stripe en 10 jours. Nous avions des refus inexpliqués sur le marché américain. Grâce à leur paramétrage 3DS et multi-devises, nos ventes internationales ont bondi de 35%.",
          author: "Thomas Mercier",
          role: "Co-fondateur & COO",
          company: "NordicLifestyle Store",
          avatar: "TM"
        },
        {
          quote: "L'expertise technique sur les webhooks et l'intégration PayPal Braintree est bluffante. Ils nous ont évité des erreurs critiques qui nous auraient coûté des dizaines de milliers d'euros en litiges.",
          author: "Éléonore de Roche",
          role: "Head of E-commerce & Growth",
          company: "Atelier Joaillerie Paris",
          avatar: "ER"
        },
        {
          quote: "Un accompagnement d'une clarté exemplaire. Le rapport d'audit initial a pointé exactement là où notre checkout fuyait. Le ROI de leur intervention a été amorti en moins de trois semaines.",
          author: "Marc Vasseur",
          role: "Directeur Technique / CTO",
          company: "Subscriptio SaaS",
          avatar: "MV"
        }
      ]
    },
    pricing: {
      tag: "FORMULES CLAIRES & TRANSPARENTES",
      title: "Investissez dans la fiabilité de vos revenus",
      subtitle: "Des prestations de conseil et d'intégration à tarif forfaitaire garanti, sans coûts cachés ni engagement récurrent.",
      guaranteeNotice: "Toutes nos prestations incluent une période de garantie, tests de non-régression et assistance technique post-lancement.",
      plans: [
        {
          name: "Sprint Setup & Audit",
          badge: "Idéal Lancement / Startups",
          price: "1 450 €",
          period: "forfait unique",
          desc: "La solution parfaite pour configurer une passerelle Stripe ou PayPal de zéro selon les normes d'excellence.",
          features: [
            "Audit initial de l'activité & choix de la passerelle adaptée",
            "Configuration complète du compte marchand & clés API",
            "Mise en place de Stripe Elements ou PayPal Checkout",
            "Paramétrage de base 3DS2 & conformité SCA européenne",
            "Tests fonctionnels complets en Sandbox & Go-Live assisté",
            "Support technique dédié pendant 14 jours après lancement"
          ],
          cta: "Choisir le Sprint Setup",
          popular: false
        },
        {
          name: "Growth Optimization",
          badge: "Le Plus Recommandé",
          price: "2 950 €",
          period: "forfait unique",
          desc: "Pour les e-commerçants et scale-ups souhaitant maximiser l'acceptation et se déployer à l'international.",
          features: [
            "Tout le contenu du forfait Sprint Setup",
            "Activation des moyens de paiement locaux (iDEAL, Klarna, etc.)",
            "Règles Stripe Radar sur-mesure & protection anti-fraude",
            "Routage multi-devises pour éliminer les frais de change cachés",
            "Fiabilisation du pipeline de webhooks et gestion du dunning",
            "Audit de vitesse et d'ergonomie UX du checkout",
            "Support prioritaire dédié pendant 30 jours"
          ],
          cta: "Choisir Growth Optimization",
          popular: true
        },
        {
          name: "Enterprise & Multi-Acquéreurs",
          badge: "Sur-Mesure",
          price: "Sur Devis",
          period: "selon cahier des charges",
          desc: "Pour les marketplaces complexes (Stripe Connect), volumes > 500k€/mois et architectures résilientes multi-processeurs.",
          features: [
            "Architecture multi-passerelles avec fallback de secours",
            "Intégration Stripe Connect Custom / Express (Marketplace)",
            "Interfaçage sur-mesure ERP, SAP, NetSuite ou Sage",
            "Gestion proactive des alertes pré-litiges Ethoca / Verifi",
            "Assistance à la migration sécurisée de tokens de carte (PCI)",
            "Accord de niveau de service (SLA) d'astreinte technique"
          ],
          cta: "Demander une Étude Sur-Mesure",
          popular: false
        }
      ]
    },
    faq: {
      tag: "QUESTIONS FRÉQUENTES",
      title: "Tout ce que vous devez savoir sur nos services",
      items: [
        {
          q: "Corsovault est-il affilié officiellement à Stripe ou PayPal ?",
          a: "Non. Corsovault est une société de conseil technique et stratégique 100% indépendante. Cette indépendance totale nous permet de vous conseiller en toute objectivité sur la passerelle la plus avantageuse pour vos marges, sans biais commercial."
        },
        {
          q: "Pourquoi faire appel à un consultant plutôt que d'utiliser les plugins par défaut ?",
          a: "Les modules et plugins génériques installent souvent une configuration par défaut sous-optimale : déclins 3DS non gérés, absence de méthodes de paiement locales par pays, absence de règles anti-fraude adaptées ou pertes de webhooks. Nos interventions augmentent en moyenne les taux d'acceptation de 15% à 28% et protègent votre compte contre les suspensions inattendues."
        },
        {
          q: "Combien de temps dure une mission d'intégration ou d'optimisation ?",
          a: "Un Sprint Setup standard est livré en 3 à 7 jours ouvrés. Les missions de Growth Optimization prennent généralement entre 1 et 2 semaines selon la complexité de votre stack technique. Pour les architectures d'envergure (Stripe Connect, ERP), un planning précis est défini lors du devis."
        },
        {
          q: "Comment garantissez-vous la sécurité de nos clés d'API et données bancaires ?",
          a: "Nous ne demandons JAMAIS l'accès direct aux numéros de carte de vos clients. Toutes nos interventions respectent scrupuleusement la norme PCI-DSS. Pour vos comptes Stripe ou PayPal, vous nous accordez un accès restreint 'Développeur' via les outils officiels de gestion d'équipe sans accès aux retraits de fonds."
        },
        {
          q: "Comment se déroule l'audit gratuit ?",
          a: "Après réception de votre formulaire, nos experts examinent les indicateurs de votre boutique (volume, pays cibles, passerelle, technologies). Nous préparons un rapport diagnostic complet identifiant vos points de friction et vous proposons un débriefing stratégique de 30 minutes sans aucun engagement."
        }
      ]
    },
    footer: {
      aboutTitle: "À propos de Corsovault",
      aboutDesc: "Corsovault Advisory SAS est le cabinet de référence en conseil indépendant et intégration de passerelles de paiement pour les commerçants du web, startups et plateformes internationales.",
      navTitle: "Navigation",
      legalTitle: "Informations Légales & Conformité",
      contactTitle: "Nous Contacter",
      address: "38 Rue de la Boétie, 75008 Paris, France",
      phone: "+33 1 89 71 42 30",
      email: "contact@corsovault.com",
      companyReg: "SAS au capital de 25 000 € • RCS Paris B 921 843 710 • SIRET : 921 843 710 00024 • TVA Intracommunautaire : FR 48 921843710",
      disclaimer: "Avis de non-affiliation : Corsovault Advisory SAS est une société de conseil indépendante. Stripe, PayPal, Braintree, Adyen, Apple Pay, Google Pay, Klarna, et iDEAL sont des marques déposées de leurs propriétaires respectifs. L'utilisation de ces noms n'implique aucune affiliation, parrainage ni approbation directe de leur part.",
      copyright: "© 2026 Corsovault Advisory SAS. Tous droits réservés.",
      gdprCompliant: "Conforme RGPD 2016/679",
      scaCompliant: "Audit de conformité 3DS2 / SCA",
      legalLinks: {
        mentions: "Mentions Légales",
        privacy: "Politique de Confidentialité",
        terms: "Conditions Générales de Service (CGV)",
        refund: "Politique de Remboursement",
        cookies: "Gestion des Cookies"
      }
    },
    cookie: {
      title: "Gestion de vos préférences de confidentialité",
      text: "Nous utilisons des cookies techniques indispensables au bon fonctionnement du site, ainsi que des outils de mesure d'audience anonymes conformes aux directives de la CNIL et du RGPD pour améliorer votre expérience.",
      accept: "Tout Accepter",
      decline: "Continuer sans accepter",
      learnMore: "En savoir plus"
    },
    modal: {
      docOfficialBadge: "Corsovault Advisory SAS • Document Réglementaire Officiel",
      printTitle: "Imprimer le document",
      closeBtn: "Fermer",
      legalInquiryText: "Pour toute question juridique :",
      closeModalBtn: "Fermer la fenêtre"
    }
  }
};

export const legalDocs = {
  en: {
    mentions: {
      title: "Legal Notice & Regulatory Disclosures",
      subtitle: "Published in accordance with international digital commerce transparency requirements and corporate disclosure directives.",
      sections: [
        {
          heading: "1. Corporate Entity & Site Publisher",
          content: `The website corsovault.com is published and operated by **Corsovault Advisory SAS**, a simplified joint-stock company (Société par Actions Simplifiée) with a share capital of €25,000.00, registered with the Trade and Companies Register under SIREN number **921 843 710**.
          
• **Company Registration (SIRET)**: 921 843 710 00024
• **APE / NAF Code**: 6202A (Computer systems & software consulting)
• **EU VAT ID**: FR 48 921843710
• **Registered Head Office**: 38 Rue de la Boétie, 75008 Paris, France
• **Director of Publication**: Alexandre Corsovault, President & Managing Director
• **Direct Telephone**: +33 1 89 71 42 30
• **Official Email**: contact@corsovault.com`
        },
        {
          heading: "2. Cloud Infrastructure & Hosting Provider",
          content: `This website is hosted on high-availability, PCI-compliant infrastructure by:
• **Provider**: Vercel Inc. / Amazon Web Services EMEA SARL
• **Corporate Address**: 38 Avenue John F. Kennedy, L-1855 Luxembourg / 440 N Barranca Ave #4133 Covina, CA 91723, USA
• **Website**: https://vercel.com / https://aws.amazon.com`
        },
        {
          heading: "3. Scope of Business & Independent Disclaimer",
          content: `Corsovault Advisory SAS is a professional systems architecture, software engineering, and strategic advisory firm specializing in international payment gateway integration.
          
**IMPORTANT NON-AFFILIATION DISCLAIMER**: Corsovault Advisory SAS is an independent consulting agency and is NOT a bank, credit institution, or licensed money services business. Corsovault does not hold, custody, transmit, or handle customer transaction funds at any time.
          
All third-party trademarks and brand names cited (including Stripe®, PayPal®, Braintree®, Adyen®, Apple Pay®, Google Pay®, Klarna®, iDEAL®) are the exclusive property of their respective owners. Mention of these names is purely descriptive of technical compatibility and does not imply any sponsorship, official partnership, or commercial endorsement.`
        },
        {
          heading: "4. Intellectual Property",
          content: `All original content, technical documentation, code architectures, visual assets, and diagnostic tools appearing on this site are the exclusive property of Corsovault Advisory SAS. Any unauthorized reproduction, scraping, or distribution is strictly prohibited.`
        }
      ]
    },
    privacy: {
      title: "Privacy Policy & GDPR/CCPA Compliance Statement",
      subtitle: "Last updated: February 1, 2026. Compliant with the General Data Protection Regulation (EU 2016/679) and global privacy standards.",
      sections: [
        {
          heading: "1. Data Controller",
          content: `The Data Controller responsible for personal data processed on this site is:
**Corsovault Advisory SAS**, 38 Rue de la Boétie, 75008 Paris, France.
Designated Data Protection Officer (DPO): **dpo@corsovault.com**.`
        },
        {
          heading: "2. Data Collected & Processing Purposes",
          content: `We collect and process only strictly necessary professional information:
1. **Free Audit & Contact Form**: Full name, business email, phone number, company name, monthly transaction volume, and payment technology stack. *(Legal basis: Execution of pre-contractual measures at the request of the user - Art. 6.1.b GDPR)*.
2. **Consulting Engagements**: Business contact coordinates and technical integration specifications. *(Legal basis: Contract execution)*.
3. **Anonymized Technical Metrics**: Aggregated performance metrics without individual user tracking.`
        },
        {
          heading: "3. Zero Direct Cardholder Data Policy",
          content: `Corsovault Advisory SAS NEVER collects, stores, or processes complete customer primary account numbers (PAN), expiration dates, or security codes (CVC/CVV). All technical audits and configurations strictly focus on API logic interacting with PCI-DSS Level 1 certified processors.`
        },
        {
          heading: "4. Data Retention Periods",
          content: `• **Prospective Inquiry Data**: Retained for a maximum of 3 years following the last commercial communication.
• **Client Engagement Records**: Retained for the duration of the contractual relationship, then archived for 5 years for evidentiary purposes and 10 years for statutory accounting and tax compliance.`
        },
        {
          heading: "5. Your Privacy Rights & DPO Contact",
          content: `Under applicable law, you have the right to access, rectify, port, or erase your personal data, as well as the right to restrict or object to processing. To exercise these rights, contact our DPO at **dpo@corsovault.com**.`
        }
      ]
    },
    terms: {
      title: "Terms of Service & Consulting Agreement",
      subtitle: "Standard terms governing professional advisory and technical integration services rendered by Corsovault Advisory SAS.",
      sections: [
        {
          heading: "Article 1 - Purpose & Scope",
          content: `These Terms of Service define the terms and conditions under which Corsovault Advisory SAS ('Provider') renders technical consulting, systems architecture audits, and payment gateway integration support to commercial clients ('Client').`
        },
        {
          heading: "Article 2 - Work Orders, Scope & Execution",
          content: `Each engagement is defined by a proposal or work order detailing scope, deliverables, and estimated timelines. Orders become binding upon signature and receipt of the designated deposit payment. Timelines are indicative and depend on timely receipt of necessary technical access credentials.`
        },
        {
          heading: "Article 3 - Client Responsibilities & Security",
          content: `The Client agrees to grant restricted, role-based developer access (with zero payout or banking transfer permissions) necessary to execute technical tasks. The Client remains solely responsible for its own regulatory compliance and commercial relationship with merchant processors.`
        },
        {
          heading: "Article 4 - Pricing & Payment Terms",
          content: `All fees are quoted exclusive of applicable taxes. Fixed-fee sprint packages are invoiced 50% upon booking and 50% upon final delivery of validation documentation. Invoices are payable within 15 business days.`
        },
        {
          heading: "Article 5 - Limitation of Liability",
          content: `Corsovault Advisory SAS provides its services under an obligation of best efforts (obligation de moyens). Corsovault cannot be held liable for unilateral underwriting, reserve, or closure decisions made by third-party payment gateways or acquiring banks.`
        },
        {
          heading: "Article 6 - Governing Law & Jurisdiction",
          content: `These terms are governed by French law. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the **Commercial Court of Paris (Tribunal de Commerce de Paris)**.`
        }
      ]
    },
    refund: {
      title: "Refund, Cancellation & Delivery Policy",
      subtitle: "Standard commercial policies for technical advisory and sprint engagements.",
      sections: [
        {
          heading: "1. B2B Commercial Services",
          content: `Agreements entered into between Corsovault Advisory SAS and commercial entities are strictly business-to-business transactions.`
        },
        {
          heading: "2. Cancellation Prior to Project Start",
          content: `If a Client requests cancellation prior to the commencement of any technical diagnostic or configuration work, the initial deposit will be refunded minus a standard administrative setup fee of €150.`
        },
        {
          heading: "3. Post-Delivery Engineering Warranty",
          content: `Sprint Setup and Growth Optimization packages include 14 to 30 days of post-launch engineering support to ensure all integrated endpoints, webhooks, and workflows operate according to documented specifications.`
        }
      ]
    },
    cookies: {
      title: "Cookie & Tracking Policy",
      subtitle: "Transparent disclosure of cookies and local storage items.",
      sections: [
        {
          heading: "1. What Are Cookies?",
          content: `Cookies are small data files stored on your device when navigating a web service. They facilitate secure sessions and remember display preferences.`
        },
        {
          heading: "2. Cookies Employed on This Site",
          content: `• **Essential Cookies**: Strictly necessary for page routing, language selection, and consent state.
• **Anonymized Metrics**: Aggregated performance metrics without tracking across third-party properties.`
        },
        {
          heading: "3. Managing Your Choices",
          content: `You may adjust your cookie preferences at any time via the cookie settings toggle located in the site footer.`
        }
      ]
    }
  },
  fr: {
    mentions: {
      title: "Mentions Légales & Informations Réglementaires",
      subtitle: "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).",
      sections: [
        {
          heading: "1. Éditeur du Site",
          content: `Le site web corsovault.com est édité par la société **Corsovault Advisory SAS**, Société par Actions Simplifiée au capital social de 25 000,00 Euros, immatriculée au Registre du Commerce et des Sociétés (RCS) de Paris sous le numéro **921 843 710**.
          
• **Numéro SIRET** : 921 843 710 00024
• **Code NAF / APE** : 6202A (Conseil en systèmes et logiciels informatiques)
• **Numéro de TVA Intracommunautaire** : FR 48 921843710
• **Siège Social** : 38 Rue de la Boétie, 75008 Paris, France
• **Directeur de la Publication** : M. Alexandre Corsovault, en qualité de Président
• **Contact Téléphonique** : +33 1 89 71 42 30
• **Contact Électronique** : contact@corsovault.com`
        },
        {
          heading: "2. Hébergeur du Site",
          content: `Le site est hébergé sur une infrastructure de haute disponibilité par :
• **Société** : Vercel Inc. / Amazon Web Services EMEA SARL
• **Adresse** : 38 Avenue John F. Kennedy, L-1855 Luxembourg / 440 N Barranca Ave #4133 Covina, CA 91723, USA
• **Site Web** : https://vercel.com / https://aws.amazon.com`
        },
        {
          heading: "3. Nature de l'Activité & Avertissement d'Indépendance",
          content: `Corsovault Advisory SAS est une société de prestations intellectuelles, de conseil en ingénierie logicielle et d'intégration technique spécialisée dans les passerelles de paiement.
          
**AVERTISSEMENT STRICT D'INDÉPENDANCE** : Corsovault Advisory SAS est un cabinet indépendant et n'est ni un établissement bancaire, ni un établissement de paiement au sens du Code monétaire et financier. Corsovault ne conserve, ne transite et ne manipule à aucun moment les fonds des clients finaux.
          
Les marques citées (notamment Stripe®, PayPal®, Braintree®, Adyen®, Apple Pay®, Google Pay®, Klarna®, iDEAL®) appartiennent exclusivement à leurs propriétaires légitimes. Leur citation a une vocation descriptive des compétences techniques proposées et n'indique aucun lien capitalistique, d'affiliation officielle ou de mandat d'agence.`
        },
        {
          heading: "4. Propriété Intellectuelle",
          content: `L'ensemble des éléments figurant sur le site (textes, graphismes, logos, codes, icônes, guides techniques) sont la propriété exclusive de Corsovault Advisory SAS ou font l'objet d'une licence d'utilisation. Toute reproduction ou représentation, intégrale ou partielle, sans l'accord préalable écrit de Corsovault Advisory SAS est formellement interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`
        }
      ]
    },
    privacy: {
      title: "Politique de Confidentialité & Protection des Données (RGPD)",
      subtitle: "Dernière mise à jour : 1er Février 2026. Conforme au Règlement Général sur la Protection des Données (RGPD 2016/679) et à la loi Informatique et Libertés.",
      sections: [
        {
          heading: "1. Responsable du Traitement des Données",
          content: `Le responsable du traitement des données à caractère personnel collectées sur ce site est :
**Corsovault Advisory SAS**, 38 Rue de la Boétie, 75008 Paris, France.
Délégué à la Protection des Données (DPO) : dpo@corsovault.com.`
        },
        {
          heading: "2. Données Collectées & Finalités du Traitement",
          content: `Nous collectons uniquement les données strictement nécessaires aux finalités suivantes :
1. **Formulaire d'Audit & Contact** : Nom, prénom, adresse e-mail professionnelle, numéro de téléphone, nom de l'entreprise, volumétrie mensuelle, technologies de paiement utilisées. *(Base légale : Exécution de mesures précontractuelles à la demande de l'utilisateur - Art. 6.1.b RGPD)*.
2. **Exécution des missions de conseil** : Coordonnées professionnelles et paramètres d'intégration technique. *(Base légale : Exécution du contrat)*.
3. **Statistiques anonymisées de navigation** : Mesure d'audience sans traçage nominatif. *(Base légale : Intérêt légitime de sécurisation et d'amélioration du service)*.`
        },
        {
          heading: "3. Absence de Données Bancaires Directes",
          content: `Corsovault Advisory SAS ne collecte, ne stocke et ne traite JAMAIS les numéros complets de cartes bancaires (PAN), dates d'expiration ou cryptogrammes visuels (CVC) des clients de ses utilisateurs. Les audits de sécurité portent sur les flux d'API et la configuration des passerelles partenaires certifiées PCI-DSS Niveau 1.`
        },
        {
          heading: "4. Durée de Conservation des Données",
          content: `• **Données prospects / audits** : Conservées pendant une durée maximale de 3 ans à compter du dernier contact émanant du prospect.
• **Données clients** : Conservées pendant la durée de la relation contractuelle, puis archivées pendant 5 ans à des fins probatoires et 10 ans pour les obligations comptables et fiscales légales.`
        },
        {
          heading: "5. Vos Droits & Exercice",
          content: `Conformément à la réglementation applicable, vous disposez des droits suivants sur vos données personnelles :
• Droit d'accès, de rectification et d'effacement (droit à l'oubli)
• Droit à la limitation du traitement et d'opposition
• Droit à la portabilité des données
• Droit de définir des directives relatives au sort de vos données post-mortem

Pour exercer ces droits, vous pouvez contacter notre DPO par e-mail à : **dpo@corsovault.com** ou par courrier à notre siège social. En cas de désaccord persistant, vous disposez du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés - www.cnil.fr).`
        }
      ]
    },
    terms: {
      title: "Conditions Générales de Vente & de Prestations de Services (CGV)",
      subtitle: "Régissant les relations contractuelles entre Corsovault Advisory SAS et ses clients professionnels.",
      sections: [
        {
          heading: "Article 1 - Objet & Champ d'Application",
          content: `Les présentes Conditions Générales de Vente (CGV) définissent les modalités selon lesquelles Corsovault Advisory SAS (« Le Prestataire ») fournit à ses clients professionnels (« Le Client ») des prestations de conseil technique, d'audit d'architecture et d'assistance à l'intégration de passerelles de paiement électronique. Toute commande implique l'acceptation pleine et entière des présentes CGV.`
        },
        {
          heading: "Article 2 - Devis, Commandes & Exécution",
          content: `Chaque mission fait l'objet d'un devis préalable ou d'un bon de commande détaillant le périmètre, les livrables et le calendrier prévisionnel. La commande devient ferme à réception du bon de commande signé et du versement de l'acompte prévu. Les délais sont indicatifs et dépendent de la transmission par le Client des accès techniques nécessaires.`
        },
        {
          heading: "Article 3 - Obligations & Sécurité du Client",
          content: `Le Client s'engage à collaborer activement et à fournir des accès développeur restreints (sans droits de virement ni de modification des bénéficiaires bancaires). Le Client demeure seul responsable de la conformité de son modèle d'affaires avec les conditions d'utilisation des processeurs de paiement choisis.`
        },
        {
          heading: "Article 4 - Tarifs & Modalités de Paiement",
          content: `Les tarifs sont exprimés en Euros Hors Taxes (HT). Sauf accord spécifique, les forfaits sont payables à hauteur de 50% à la commande et 50% à la livraison finale des livrables et du rapport de validation technique. Tout retard de paiement entraîne l'application d'intérêts de retard légaux et d'une indemnité forfaitaire de 40 € pour frais de recouvrement.`
        },
        {
          heading: "Article 5 - Limitation de Responsabilité",
          content: `Corsovault Advisory SAS est soumise à une obligation de moyens dans l'exécution de ses prestations. Corsovault ne saurait être tenue responsable des décisions discrétionnaires prises par les établissements bancaires ou processeurs de paiement tiers (telles que le gel de fonds, le refus d'octroi de compte, l'application de réserves financières ou la modification unilatérale des grilles tarifaires des acquéreurs).`
        },
        {
          heading: "Article 6 - Droit Applicable & Tribunal Compétent",
          content: `Les présentes CGV sont soumises au droit français. En cas de litige relatif à leur interprétation ou à leur exécution, compétence expresse est attribuée au **Tribunal de Commerce de Paris**, nonobstant pluralité de défendeurs ou appel en garantie.`
        }
      ]
    },
    refund: {
      title: "Politique de Remboursement, Annulation & Rétractation",
      subtitle: "Conditions applicables aux prestations d'audit et de conseil.",
      sections: [
        {
          heading: "1. Prestations de Conseil B2B & Droit de Rétractation",
          content: `Les prestations conclues entre Corsovault Advisory SAS et des professionnels agissant dans le cadre de leur activité commerciale, industrielle ou libérale ne bénéficient pas du droit de rétractation réservé aux consommateurs par le Code de la consommation, conformément à l'article L.221-3.`
        },
        {
          heading: "2. Annulation Avant Démarrage des Travaux",
          content: `Si le Client souhaite annuler une mission commandée avant tout début effectif des travaux d'audit ou de développement par Corsovault (constaté par l'absence d'analyse technique ou d'échanges d'architecture), l'acompte versé sera remboursé déduction faite d'un forfait administratif de 150 € HT.`
        },
        {
          heading: "3. Garantie de Satisfaction & Ajustements Techniques",
          content: `Dans le cadre de nos forfaits Sprint Setup et Growth Optimization, Corsovault inclut une période de support et d'ajustement technique de 14 à 30 jours calendaires après la livraison pour corriger tout dysfonctionnement imputable aux scripts ou configurations déployées.`
        }
      ]
    },
    cookies: {
      title: "Politique relative aux Cookies & Traceurs",
      subtitle: "Transparence totale sur les témoins de connexion utilisés.",
      sections: [
        {
          heading: "1. Qu'est-ce qu'un Cookie ?",
          content: `Un cookie est un petit fichier texte déposé sur votre terminal lors de la consultation d'un site internet. Il permet de mémoriser temporairement des informations utiles à votre navigation.`
        },
        {
          heading: "2. Cookies Utilisés sur ce Site",
          content: `• **Cookies Techniques Essentiels** : Nécessaires à la sécurité, à la mémorisation de la langue choisie (FR/EN) et de vos préférences de consentement. Ils ne requièrent pas de consentement préalable.
• **Mesure d'Audience Anonymisée** : Données statistiques globales permettant de mesurer la fréquentation du site sans identification personnelle et sans croisement de données.`
        },
        {
          heading: "3. Gestion de Votre Consentement",
          content: `Vous pouvez à tout moment modifier ou révoquer vos choix en utilisant le bandeau de configuration des cookies accessible en bas de page.`
        }
      ]
    }
  }
};
