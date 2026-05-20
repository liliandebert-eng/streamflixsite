import React from 'react'

const officialLogoUrls = {
  Netflix: 'https://cdn.simpleicons.org/netflix/E50914',
  'Disney+': 'https://cdn.simpleicons.org/disneyplus/113CCF',
  'Paramount+': 'https://cdn.simpleicons.org/paramountplus/0064FF',
  'YouTube Premium': 'https://cdn.simpleicons.org/youtube/FF0000',
  'Prime Video': 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/13.16.0/primevideo.svg',
  'Spotify Premium': 'https://cdn.simpleicons.org/spotify/1DB954',
  'ChatGPT+': 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/13.16.0/openai.svg',
  'CyberGhost VPN': 'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-9/512/CyberGhost-icon.png',
  NordVPN: 'https://cdn.simpleicons.org/nordvpn/4687FF',
}

const gameAccountLogos = {
  'GTA V Online': 'https://cdn.simpleicons.org/grandtheftauto/FFFFFF',
  CS2: 'https://cdn.simpleicons.org/counterstrike/FFFFFF',
  Fortnite: 'https://cdn.simpleicons.org/fortnite/FFFFFF',
  'Apex Legends': 'https://cdn.simpleicons.org/apexlegends/D22630',
  Valorant: 'https://cdn.simpleicons.org/valorant/FD4556',
  'Red Dead Redemption 2':
    'https://img.icons8.com/ios-filled/100/ffffff/red-dead-redemption-2.png',
  Minecraft: 'https://cdn.simpleicons.org/minecraft/4A7F46',
  'UFC 5': 'https://cdn.simpleicons.org/ufc/D20A0A',
  Steam: 'https://cdn.simpleicons.org/steam/FFFFFF',
  'FC 26': 'https://cdn.simpleicons.org/ea/FFFFFF',
}

const allProductLogos = { ...officialLogoUrls, ...gameAccountLogos }

const productImageGalleries = {
  Netflix: [
    'https://images.unsplash.com/photo-1616469829935-c2f334624b38?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574267432553-9b4628088309?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1603738233112-769c91911b58?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  'Disney+': [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593428939659-393993243699?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611162616801-6944179469e3?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  'Paramount+': [
    'https://images.unsplash.com/photo-1663402918871-693b5a4a2583?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515622472342-856df365432a?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  'YouTube Premium': [
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598653222008-7b74e782db54?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  'Prime Video': [
    'https://images.unsplash.com/photo-1595754773999-191225c6a3b4?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616469829523-f478493f917a?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559142833-c6b8334b33c7?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  'Spotify Premium': [
    'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1587223235949-c6ba020f355f?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  'ChatGPT+': [
    'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1678099231839-aa37a995404c?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1696232842639-479842895433?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  'CyberGhost VPN': [
    'https://images.unsplash.com/photo-1614064548237-096537e032f5?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1633310959459-35d3d3b3d8b7?q=80&w=800&h=450&auto=format&fit=crop',
  ],
  NordVPN: [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605810230464-47124075211a?q=80&w=800&h=450&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614064548237-096537e032f5?q=80&w=800&h=450&auto=format&fit=crop',
  ],
}

const defaultUsers = [
  {
    email: 'admin@streamflix.com',
    // NOTE: Le mot de passe ne devrait jamais être stocké en clair côté client.
    // Ceci est uniquement à des fins de démonstration pour le fonctionnement hors-ligne.
    // Dans une application réelle, l'authentification doit se faire sur un serveur sécurisé.
    password: 'admin123',
    name: 'Admin',
    role: 'admin',
  },
  {
    email: 'user@streamflix.com',
    password: 'user123',
    name: 'Client',
    role: 'user',
  },
]

const gameAccounts = [
  {
    name: 'GTA V Online',
    price: '19,99EUR',
    description:
      'Compte GTA V Online avec millions de dollars, niveau élevé et contenu exclusif.',
    accent: 'from-green-500 to-lime-600',
  },
  {
    name: 'CS2',
    price: '14,99EUR',
    description:
      'Compte Counter-Strike 2 avec statut Prime et un inventaire de skins de valeur.',
    accent: 'from-yellow-500 to-amber-600',
  },
  {
    name: 'Fortnite',
    price: '24,99EUR',
    description:
      'Compte Fortnite chargé avec des skins rares, V-Bucks et le Passe de Combat.',
    accent: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'Apex Legends',
    price: '17,99EUR',
    description:
      'Compte Apex Legends avec des personnages débloqués et des skins légendaires.',
    accent: 'from-red-600 to-orange-700',
  },
  {
    name: 'Valorant',
    price: '21,99EUR',
    description:
      "Compte Valorant avec des agents débloqués et des skins d'armes premium.",
    accent: 'from-red-500 to-rose-600',
  },
  {
    name: 'Red Dead Redemption 2',
    price: '15,99EUR',
    description:
      'Compte Red Dead Redemption 2 avec une progression avancée en mode histoire et online.',
    accent: 'from-red-700 to-stone-800',
  },
  {
    name: 'Minecraft',
    price: '9,99EUR',
    description:
      'Compte Minecraft Java & Bedrock Edition. Accès complet aux serveurs multijoueurs.',
    accent: 'from-emerald-600 to-green-800',
  },
  {
    name: 'UFC 5',
    price: '29,99EUR',
    description: 'Compte avec le jeu UFC 5 et des combattants bonus débloqués.',
    accent: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Steam',
    price: '49,99EUR',
    description: "Compte Steam avec une large bibliothèque de jeux. Prêt à l'emploi.",
    accent: 'from-blue-800 to-slate-900',
  },
  {
    name: 'FC 26',
    price: '34,99EUR',
    description: 'Compte EA FC 26 avec une équipe Ultimate Team compétitive et des crédits.',
    accent: 'from-teal-400 to-cyan-600',
  },
].map((p) => ({
  ...p,
  type: 'game',
  logo: p.name.substring(0, 3).toUpperCase(),
  status: 'Sur Discord',
  stock: 999,
  featureImages: [], // Added for consistency
}))

const defaultBundles = [
  {
    title: 'Pack Cinéma UHD',
    desc: 'Netflix + Disney+ + Prime Video',
    price: '14,99EUR',
    productNames: ['Netflix', 'Disney+', 'Prime Video'],
  },
  {
    title: 'Pack Musique Premium',
    desc: 'Spotify Premium',
    price: '7,99EUR',
    productNames: ['Spotify Premium', 'YouTube Premium'],
  },
  {
    title: 'Pack Sécurité Streaming',
    desc: 'Netflix + NordVPN',
    price: '9,99EUR',
    productNames: ['Netflix', 'NordVPN'],
  },
  {
    title: 'Pack Ultimate',
    desc: 'Toutes les plateformes premium',
    price: '24,99EUR',
    productNames: [], // This will be dynamically populated
  },
];

const defaultAdvantages = [
  'UHD / 4K',
  'Sans publicite',
  'Multi-utilisateurs',
  'Garantie incluse',
  'Livraison instantanee',
  'Support rapide',
]

const defaultProducts = [
  {
    name: 'Netflix',
    logo: 'N',
    price: '7,99EUR',
    status: 'Disponible',
    stock: 24,
    description:
      'Compte Premium UHD avec acces instantane, profils multi-utilisateurs et streaming illimite.',
    accent: 'from-red-600 to-red-800',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries.Netflix,
  },
  {
    name: 'Disney+',
    logo: 'D+',
    price: '6,99EUR',
    status: 'Disponible',
    stock: 18,
    description:
      'Films Marvel, Star Wars et Disney en qualite 4K sans publicite avec activation rapide.',
    accent: 'from-blue-500 to-blue-800',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries['Disney+'],
  },
  {
    name: 'Paramount+',
    logo: 'P+',
    price: '5,49EUR',
    status: 'Disponible',
    stock: 11,
    description: 'Streaming premium Paramount+ avec acces rapide et garantie incluse.',
    accent: 'from-sky-500 to-blue-900',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries['Paramount+'],
  },
  {
    name: 'YouTube Premium',
    logo: 'YT',
    price: '4,99EUR',
    status: 'Rupture',
    stock: 0,
    description:
      'Navigation sans publicite, lecture en arriere-plan et YouTube Music inclus.',
    accent: 'from-red-500 to-red-700',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries['YouTube Premium'],
  },
  {
    name: 'Prime Video',
    logo: 'PV',
    price: '5,99EUR',
    status: 'Disponible',
    stock: 14,
    description: 'Acces Prime Video UHD avec catalogue exclusif et livraison instantanee.',
    accent: 'from-cyan-500 to-cyan-900',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries['Prime Video'],
  },
  {
    name: 'Spotify Premium',
    logo: 'S',
    price: '3,99EUR',
    status: 'Disponible',
    stock: 31,
    description:
      'Musique illimitee, mode hors ligne et audio haute qualite sans publicite.',
    accent: 'from-green-500 to-green-800',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries['Spotify Premium'],
  },
  {
    name: 'ChatGPT+',
    logo: 'C+',
    price: '9,99EUR',
    status: 'Disponible',
    stock: 28,
    description:
      'Acces illimite a ChatGPT+ avec reponses plus rapides, nouvelles fonctionnalites et priorite.',
    accent: 'from-emerald-500 to-emerald-800',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries['ChatGPT+'],
  },
  {
    name: 'CyberGhost VPN',
    logo: 'CG',
    price: '2,75EUR',
    status: 'Disponible',
    stock: 45,
    description:
      'Securite VPN complete avec serveurs dans 91 pays et streaming securise.',
    accent: 'from-red-500 to-pink-800',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries['CyberGhost VPN'],
  },
  {
    name: 'NordVPN',
    logo: 'NV',
    price: '3,49EUR',
    status: 'Disponible',
    stock: 52,
    description:
      'VPN ultra-rapide avec chiffrement avance, aucune restriction geographique ni logs.',
    accent: 'from-blue-600 to-indigo-900',
    type: 'streaming',
    advantages: defaultAdvantages,
    featureImages: productImageGalleries.NordVPN,
  },
]

const defaultSiteLogoUrl = '/streamflix-logo.png'
const SITE_LOGO_VERSION = '4'
const SITE_LOGO_SRC = `${defaultSiteLogoUrl}?v=${SITE_LOGO_VERSION}`
const legacySiteLogoPaths = new Set(['/streamflix-logo.svg', '/streamflix-logo.png'])

const normalizeSiteLogoUrl = (stored) => {
  const base = String(stored || '').split('?')[0]
  if (!base || legacySiteLogoPaths.has(base)) {
    return SITE_LOGO_SRC
  }
  return stored
}

const PAYPAL_EMAIL = 'depaquis.alexis@gmail.com'

const buildPayPalTransferUrl = (amount, user) => {
  const params = new URLSearchParams()
  params.set('cmd', '_xclick')
  params.set('business', PAYPAL_EMAIL)
  params.set('item_name', `Commande StreamFlix (${user?.email || 'invité'})`)
  const value = Number(amount)
  if (Number.isFinite(value) && value > 0) {
    params.set('amount', value.toFixed(2))
    params.set('currency_code', 'EUR')
  }
  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`
}

const applyLogos = (productList) =>
  productList.map((product) => ({
    ...product,
    logoUrl: allProductLogos[product.name] || product.logoUrl,
  }))

const loadStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

const parsePrice = (price) => {
  const normalized = String(price)
    .replace('EUR', '')
    .replace('€', '')
    .replace(',', '.')
    .replace(/[^\d.]/g, '')

  return Number.parseFloat(normalized) || 0
}

const formatPrice = (value) =>
  `${value.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}EUR`

const getPlanDetails = (productName) => {
  if (productName.includes('VPN')) {
    return {
      variant: 'Protection mondiale',
      duration: '30 jours',
      color: 'Bleu nuit',
    }
  }

  if (productName.includes('Spotify') || productName.includes('YouTube')) {
    return {
      variant: 'Audio Premium',
      duration: '1 mois',
      color: 'Vert neon',
    }
  }

  return {
    variant: 'Premium UHD',
    duration: '1 mois',
    color: 'Rouge StreamFlix',
  }
}

function SiteLogoMark({ className = 'h-11 w-11' }) {
  return (
    <div
      className={`${className} shrink-0 rounded-2xl bg-black border border-white/10 shadow-[0_0_30px_rgba(229,9,20,0.5)] flex items-center justify-center overflow-hidden p-1`}
    >
      <img
        src={SITE_LOGO_SRC}
        alt="StreamFlix logo"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  )
}

function ProductLogo({ product, size = 'md' }) {
  const sizes = {
    sm: 'h-12 w-12 rounded-xl p-2 text-lg',
    md: 'h-16 w-16 rounded-2xl p-2 text-2xl',
    lg: 'h-24 w-24 rounded-3xl p-3 text-5xl',
  }

  return (
    <div
      className={`${sizes[size]} shrink-0 bg-white border border-white/20 flex items-center justify-center overflow-hidden font-black text-zinc-900 shadow-inner`}
    >
      {product.logoUrl ? (
        <img
          src={product.logoUrl}
          alt={`${product.name} logo`}
          className="h-full w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
      ) : (
        product.logo
      )}
    </div>
  )
}

function CGUPage() {
  return (
    <main className="relative z-10 max-w-5xl mx-auto px-5 py-8 lg:py-12">
      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 sm:p-12 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        <button
          onClick={() => window.history.back()}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:text-white transition"
        >
          &lt;- Retour
        </button>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide mb-8">
          Conditions Générales de Vente
        </h2>
        <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">Article 1 : Objet</h3>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent la vente de comptes de
              services numériques (streaming, VPN, jeux, etc.) sur le site StreamFlix. En passant
              commande, le client accepte sans réserve les présentes conditions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">Article 2 : Produits</h3>
            <p>
              StreamFlix propose des comptes numériques pour diverses plateformes. Les
              caractéristiques de chaque produit (durée, qualité, etc.) sont décrites sur sa page
              respective. Les comptes de jeux sont vendus exclusivement via notre serveur Discord.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">
              Article 3 : Commande et Paiement
            </h3>
            <p>
              Pour commander, le client doit créer un compte sur le site, ajouter les produits à
              son panier et procéder au paiement. Le seul moyen de paiement accepté est le
              virement manuel via PayPal à l'adresse{' '}
              <strong className="text-white">{PAYPAL_EMAIL}</strong>. Le client doit indiquer son
              email de commande dans la note du virement pour identification. La commande n'est
              validée qu'après réception et vérification du paiement.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">Article 4 : Livraison</h3>
            <p>
              La livraison des comptes de streaming et utilitaires est numérique. Les identifiants
              sont envoyés à l'adresse email du client après validation du paiement (ce processus
              peut être manuel et géré par le support). Les comptes de jeux sont livrés et gérés
              via notre serveur Discord.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">
              Article 5 : Garantie et Support
            </h3>
            <p>
              Une garantie de 30 jours est offerte sur la plupart des comptes, couvrant les
              problèmes d'accès (mot de passe incorrect, compte suspendu). En cas de problème, le
              client doit contacter le support sur Discord. La garantie ne s'applique pas si le
              client modifie les informations du compte (email, mot de passe) ou ne respecte pas
              les règles d'utilisation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">
              Article 6 : Obligations du Client
            </h3>
            <p>
              Le client s'engage à ne pas modifier les informations de connexion (email, mot de
              passe) des comptes fournis, sauf indication contraire. Le partage de compte en dehors
              du cercle autorisé est interdit. Toute violation de ces règles peut entraîner
              l'annulation de la garantie sans remboursement.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">
              Article 7 : Droit de Rétractation
            </h3>
            <p>
              Conformément à la loi, le droit de rétractation ne s'applique pas aux produits
              numériques livrés instantanément. Une fois les identifiants de connexion fournis,
              aucun remboursement ne sera possible, sauf dans le cadre de la garantie.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">Article 8 : Litiges et Contact</h3>
            <p>
              Pour toute question ou en cas de litige, le client est invité à contacter le support
              exclusivement via notre serveur Discord :{' '}
              <a
                href="https://discord.gg/streamflix-support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://discord.gg/streamflix-support
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

function FAQPage() {
  return (
    <main className="relative z-10 max-w-5xl mx-auto px-5 py-8 lg:py-12">
      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 sm:p-12 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        <button
          onClick={() => window.history.back()}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:text-white transition"
        >
          &lt;- Retour
        </button>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide mb-6">
          Foire Aux Questions (FAQ)
        </h2>
        <div className="text-zinc-300 space-y-6 text-lg">
          <p>
            Cette page est en cours de construction. Pour toute question, veuillez rejoindre notre
            support sur Discord.
          </p>
        </div>
      </div>
    </main>
  )
}

function Header({
  navigateTo,
  isCartPage,
  isCheckoutPage,
  searchQuery,
  setSearchQuery,
  user,
  handleLogout,
  setShowLogin,
  setAuthMode,
  setMessage,
  cartCount,
  setShowBundleModal,
  setSelectedBundle,
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-5 sm:px-6 py-4 gap-4">
        <button onClick={() => navigateTo('/')} className="flex items-center gap-3 text-left hover:opacity-90 transition-opacity">
          <SiteLogoMark />
          <div>
            <h1 className="text-2xl font-black tracking-wide">STREAMFLIX</h1>
            <p className="text-xs text-zinc-400">Premium Streaming Accounts</p>
          </div>
        </button>

        {!isCartPage && !isCheckoutPage && (
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-red-500 transition-all"
              placeholder="Rechercher une plateforme..."
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">
              Search
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {user ? (
            <>
              <div className="max-w-[220px] truncate rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
                {user.role === 'admin' ? 'Admin' : 'Client'} : {user.email}
              </div>
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-xl border border-white/10 hover:border-red-500 transition-all bg-white/5"
              >
                Deconnexion
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setShowLogin(true)
                setAuthMode('login')
                setMessage('')
              }}
              className="px-5 py-2 rounded-xl border border-white/10 hover:border-red-500 transition-all bg-white/5"
            >
              Connexion
            </button>
          )}

          <button
            onClick={() => navigateTo('/panier.html')}
            className={`relative px-5 py-2 rounded-xl transition-all ${
              isCartPage
                ? 'bg-white text-black'
                : 'bg-red-600 hover:bg-red-500 shadow-[0_0_25px_rgba(229,9,20,0.5)]'
            }`}
          >
            Panier
              {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-green-500 px-1 text-xs text-black font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

function BundleDetailsModal({
  bundle,
  allProducts,
  onClose,
  onAddBundleToCart,
  user,
  setShowLogin,
  setMessage,
  navigateTo,
}) {
  if (!bundle) return null

  const bundleProducts = bundle.productNames
    .map((name) => allProducts.find((p) => p.name === name))
    .filter(Boolean)

  const handleAddAllToCart = () => {
    if (!user) {
      setMessage('Connectez-vous pour ajouter l\'offre au panier.')
      setShowLogin(true)
      return
    }

    for (const product of bundleProducts) {
      const currentProductInList = allProducts.find((p) => p.name === product.name)
      if (!currentProductInList || currentProductInList.stock < 1) {
        setMessage(`Stock insuffisant pour le produit "${product.name}" de l'offre.`)
        return
      }
    }

    bundleProducts.forEach((product) => {
      onAddBundleToCart(product, 1, false)
    })
    setMessage(`L'offre "${bundle.title}" a été ajoutée au panier.`)
    onClose()
    navigateTo('/panier.html')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950/95 p-8 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div>
            <h2 className="text-3xl font-black">{bundle.title}</h2>
            <p className="text-sm text-zinc-400 mt-2">{bundle.desc}</p>
          </div>
          <button onClick={onClose} className="text-zinc-300 hover:text-white">
            X
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-bold text-red-300">Produits inclus :</h3>
          {bundleProducts.map((product) => (
            <div key={product.name} className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-3">
              <ProductLogo product={product} size="sm" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-zinc-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-zinc-400">Prix de l'offre</span>
          <strong className="text-4xl font-black text-red-500">{bundle.price}</strong>
        </div>

        <button
          onClick={handleAddAllToCart}
          className="w-full rounded-2xl bg-red-600 py-4 text-lg font-bold shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:bg-red-500 hover:scale-[1.01] transition"
        >
          Ajouter l'offre au panier
        </button>
      </div>
    </div>
  )
}

function ProductListItem({ item, selected, onSelect }) {
  const isSelected = selected?.name === item.name;
  return (
    <button
      onClick={() => onSelect(item)}
      className={`group relative w-full overflow-hidden rounded-3xl border transition-all duration-300 p-5 text-left bg-zinc-900/80 hover:-translate-y-1 ${
        isSelected
          ? 'border-red-500 shadow-[0_0_40px_rgba(229,9,20,0.45)]'
          : 'border-white/10 hover:border-red-400/50'
      }`}
    >
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <ProductLogo product={item} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold truncate">{item.name}</h3>
              <span className="whitespace-nowrap px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs border border-yellow-500/20">
                Premium
              </span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              {item.type === 'game' ? (
                <span className="text-sm text-blue-400">{item.status}</span>
              ) : (
                <>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === 'Disponible' ? 'bg-green-400' : 'bg-red-500'
                    }`}
                  />
                  <span className="text-sm text-zinc-400">{item.status}</span>
                  <span className="text-sm text-zinc-400">- {item.stock} en stock</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="text-zinc-500 group-hover:text-white transition-colors">-&gt;</div>
      </div>
    </button>
  );
}

function TrendingProducts({ products }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-6 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl" />
      <div className="flex items-center justify-between mb-5 relative z-10">
        <h3 className="text-xl font-bold">Top ventes</h3>
        <span className="text-red-400 text-sm">Trending</span>
      </div>

      <div className="space-y-4 relative z-10">
        {products.slice(0, 3).map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 border border-white/5 p-4 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <ProductLogo product={item} size="sm" />
              <div className="min-w-0">
                <p className="font-medium truncate">{item.name}</p>
                <p className="text-sm text-zinc-400">#{index + 1} meilleure vente</p>
              </div>
            </div>
            <div className="text-red-400 font-semibold whitespace-nowrap">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StorePage({
  searchQuery,
  setSearchQuery,
  category,
  setCategory,
  filteredProducts,
  selected,
  setSelected,
  products,
  addProductToCart,
  message,
  showLogin,
  user,
  adminForm,
  setAdminForm,
  adminSiteLogoUrl,
  setAdminSiteLogoUrl,
  adminView,
  setAdminView,
  handleAdminSave,
  users,
  handleAdminSaveSiteLogo,
  bundles,
  handleAdminSaveBundle,
  setShowBundleModal,
  setSelectedBundle,
}) {
  const handleBuyNow = () => addProductToCart(selected, 1, true)
  const handleAddToCart = () => addProductToCart(selected)

  console.log('StorePage - filteredProducts:', filteredProducts);
  console.log('StorePage - selected:', selected);

  return (
    <main className="max-w-7xl mx-auto px-5 py-8 grid lg:grid-cols-[360px_1fr] gap-8 relative z-10">
      <section className="space-y-6">
        <div className="md:hidden relative">
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-red-500 transition-all"
            placeholder="Rechercher une plateforme..."
          />
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/50 p-2 mb-4">
          <button
            onClick={() => setCategory('streaming')}
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              category === 'streaming'
                ? 'bg-red-600 text-white shadow'
                : 'text-zinc-300 hover:bg-white/10'
            }`}
          >
            Comptes Streaming
          </button>
          <button
            onClick={() => setCategory('game')}
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              category === 'game' ? 'bg-red-600 text-white shadow' : 'text-zinc-300 hover:bg-white/10'
            }`}
          >
            Comptes de Jeux
          </button>
        </div>

        <div className="space-y-4 max-h-[760px] overflow-auto pr-2 custom-scroll pt-2">
          {filteredProducts.map((item) => (
            <ProductListItem key={item.name} item={item} selected={selected} onSelect={setSelected} />
          ))}
        </div>

        <TrendingProducts products={products} />
      </section>

      <section className="space-y-8">
        <div className="relative rounded-[36px] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 shadow-[0_0_60px_rgba(0,0,0,0.8)] p-8 lg:p-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/20 blur-3xl" />

          <div className="relative z-10 flex flex-col xl:flex-row gap-10 justify-between">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-red-600 text-sm font-semibold shadow-lg">
                  Premium
                </span>
                <span className="px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-semibold">
                  Best Seller
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                <ProductLogo product={selected} size="lg" />
                <div>
                  <h2 className="text-4xl font-black tracking-wide">{selected.name}</h2>
                  <p className="text-zinc-400 mt-2">Compte streaming premium instantane</p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed max-w-2xl text-lg">
                {selected.description}
              </p>

              {selected.featureImages && selected.featureImages.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-zinc-300 mb-4">
                    Aperçu des fonctionnalités
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selected.featureImages.map((imgUrl, index) => (
                      <div
                        key={index}
                        className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-zinc-800 hover:border-red-500/50 transition-all duration-300"
                      >
                        <img
                          src={imgUrl}
                          alt={`${selected.name} feature ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.type !== 'game' && (
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {(selected.advantages || []).map((advantage) => (
                    <div
                      key={advantage}
                      className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/5 px-4 py-4 hover:bg-white/10 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center text-red-400">
                        OK
                      </div>
                      <span className="font-medium">{advantage}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="xl:w-[360px]">
              <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-2xl sticky top-28">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-zinc-400">Prix Premium</p>
                    <h3 className="text-5xl font-black text-red-500 mt-2">{selected.price}</h3>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/20 text-green-300 text-sm">
                    {selected.type === 'game' ? 'Sur Discord' : `Stock ${selected.stock}`}
                  </div>
                </div>

                <div className="space-y-4">
                  {selected.type === 'game' ? (
                    <button
                      onClick={() =>
                        window.open('https://discord.gg/streamflix-support', '_blank')
                      }
                      className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all font-bold text-lg shadow-[0_0_30px_rgba(80,120,255,0.5)] hover:scale-[1.02]"
                    >
                      Commander sur Discord
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleBuyNow}
                        className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition-all font-bold text-lg shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:scale-[1.02]"
                      >
                        Acheter maintenant
                      </button>
                      <button
                        onClick={handleAddToCart}
                        className="w-full py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-semibold hover:border-red-500/40"
                      >
                        Ajouter au panier
                      </button>
                    </>
                  )}
                </div>

                {message && !showLogin && <p className="mt-5 text-sm text-red-300">{message}</p>}

                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Livraison</span>
                    <span className="text-green-400">Instantanee</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Garantie</span>
                    <span>30 jours</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Qualite</span>
                    <span>Ultra HD</span>
                  </div>
                </div>

                {user?.role === 'admin' && (
                  <div className="mt-8 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
                    <div className="mb-6 flex flex-wrap gap-3">
                      <button
                        onClick={() => setAdminView('product')}
                        className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                          adminView === 'product'
                            ? 'bg-red-600 text-white'
                            : 'bg-white/10 text-zinc-200 hover:bg-white/20'
                        }`}
                      >
                        Modifier le produit
                      </button>
                      <button
                        onClick={() => setAdminView('offers')}
                        className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                          adminView === 'offers'
                            ? 'bg-red-600 text-white'
                            : 'bg-white/10 text-zinc-200 hover:bg-white/20'
                        }`}
                      >
                        Modifier les offres
                      </button>
                      <button
                        onClick={() => setAdminView('accounts')}
                        className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                          adminView === 'accounts'
                            ? 'bg-red-600 text-white'
                            : 'bg-white/10 text-zinc-200 hover:bg-white/20'
                        }`}
                      >
                        Liste des comptes
                      </button>
                    </div>

                    {adminView === 'product' && selected && (
                      <>
                        <AdminProductEditor
                          selected={selected}
                          adminForm={adminForm}
                          setAdminForm={setAdminForm}
                          handleAdminSave={handleAdminSave}
                        />
                        <label className="block text-sm text-zinc-300 mb-3 mt-4">
                          Logo du site
                          <input
                            type="text"
                            value={adminSiteLogoUrl}
                            onChange={(event) => setAdminSiteLogoUrl(event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
                            placeholder="https://.../site-logo.svg"
                          />
                        </label>
                        <button
                          onClick={handleAdminSaveSiteLogo}
                          className="w-full rounded-2xl bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-500"
                        >
                          Enregistrer les modifications globales
                        </button>
                      </>
                    )}

                    {adminView === 'offers' && (
                      <AdminOffersEditor
                        bundles={bundles}
                        handleAdminSaveBundle={handleAdminSaveBundle}
                      />
                    )}

                    {adminView === 'accounts' && (
                      <AdminAccountsViewer users={users} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Offres Premium</h2>
            <span className="text-zinc-400">Streaming bundles</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {bundles.map((offer) => (
              <div
                key={offer.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="mb-5 inline-flex px-3 py-2 rounded-full bg-red-600/20 border border-red-500/20 text-red-300 text-sm">
                    Offre Exclusive
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                  <p className="text-zinc-400 mb-6">{offer.desc}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-3xl font-black text-red-500">{offer.price}</span>
                    <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-red-600 transition-all">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent parent button's click from firing
                          setSelectedBundle(offer);
                          setShowBundleModal(true);
                        }}
                      >
                        Voir l'offre
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function AdminProductEditor({
  selected,
  adminForm,
  setAdminForm,
  handleAdminSave,
}) {
  return (
    <>
      <h3 className="text-xl font-bold text-red-300 mb-4">
        Admin : modifier le produit
      </h3>
      <label className="block text-sm text-zinc-300 mb-3">
        Prix
        <input
          type="text"
          value={adminForm.price}
          onChange={(event) =>
            setAdminForm((prev) => ({ ...prev, price: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
        />
      </label>
      <label className="block text-sm text-zinc-300 mb-3">
        Description
        <textarea
          value={adminForm.description}
          onChange={(event) =>
            setAdminForm((prev) => ({ ...prev, description: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
          rows="3"
        ></textarea>
      </label>
      <label className="block text-sm text-zinc-300 mb-3">
        Avantages (une par ligne)
        <textarea
          value={adminForm.advantages}
          onChange={(event) =>
            setAdminForm((prev) => ({ ...prev, advantages: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
          rows="5"
        ></textarea>
      </label>
      {selected.type !== 'game' && (
        <label className="block text-sm text-zinc-300 mb-3">
          Stock
          <input
            type="number"
            min="0"
            value={adminForm.stock}
            onChange={(event) =>
              setAdminForm((prev) => ({ ...prev, stock: event.target.value }))
            }
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
          />
        </label>
      )}
      <label className="block text-sm text-zinc-300 mb-3">
        URL du logo
        <input
          type="text"
          value={adminForm.logoUrl}
          onChange={(event) =>
            setAdminForm((prev) => ({ ...prev, logoUrl: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
          placeholder="https://.../logo.svg"
        />
      </label>
      <button
        onClick={handleAdminSave}
        className="w-full rounded-2xl bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-500"
      >
        Enregistrer les modifications
      </button>
    </>
  );
}

function AdminOffersEditor({ bundles, handleAdminSaveBundle }) {
  const [selectedBundleIndex, setSelectedBundleIndex] = React.useState(0);
  const selectedBundle = bundles[selectedBundleIndex]; // This might be undefined if bundles is empty
  const [adminBundleForm, setAdminBundleForm] = React.useState(() => {
    const initialBundle = bundles[0]; // Default to the first bundle if available
    return {
      title: initialBundle?.title || '',
      desc: initialBundle?.desc || '',
      price: initialBundle?.price || '',
      productNames: initialBundle?.productNames.join(', ') || '',
    };
  });

  React.useEffect(() => {
    if (selectedBundle) {
      setAdminBundleForm({
        title: selectedBundle.title,
        desc: selectedBundle.desc,
        price: selectedBundle.price,
        productNames: selectedBundle.productNames.join(', '),
      });
    }
  }, [selectedBundle]);

  return (
    <>
      <h3 className="text-xl font-bold text-red-300 mb-4">
        Admin : modifier les offres premium
      </h3>
      <label className="block text-sm text-zinc-300 mb-3">
        Selectionner une offre
        <select
          value={selectedBundleIndex}
          onChange={(e) => setSelectedBundleIndex(Number(e.target.value))}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
        >
          {bundles.map((bundle, index) => (
            <option key={bundle.title} value={index}>
              {bundle.title}
            </option>
          ))}
        </select>
      </label>

      {selectedBundle && (
        <>
          <label className="block text-sm text-zinc-300 mb-3">
            Titre de l'offre
            <input
              type="text"
              value={adminBundleForm.title}
              onChange={(e) => setAdminBundleForm((prev) => ({ ...prev, title: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
            />
          </label>
          <label className="block text-sm text-zinc-300 mb-3">
            Description de l'offre
            <textarea
              value={adminBundleForm.desc}
              onChange={(e) => setAdminBundleForm((prev) => ({ ...prev, desc: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
              rows="2"
            ></textarea>
          </label>
          <label className="block text-sm text-zinc-300 mb-3">
            Prix de l'offre
            <input
              type="text"
              value={adminBundleForm.price}
              onChange={(e) => setAdminBundleForm((prev) => ({ ...prev, price: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
            />
          </label>
          <label className="block text-sm text-zinc-300 mb-3">
            Produits inclus (séparés par des virgules)
            <textarea
              value={adminBundleForm.productNames}
              onChange={(e) => setAdminBundleForm((prev) => ({ ...prev, productNames: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
              rows="3"
            ></textarea>
          </label>
          <button
            onClick={() => handleAdminSaveBundle(selectedBundleIndex, adminBundleForm)}
            className="w-full rounded-2xl bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-500"
          >
            Enregistrer les modifications de l'offre
          </button>
        </>
      )}
    </>
  );
}

function AdminAccountsViewer({ users }) {
  return (
    <>
      <h3 className="text-xl font-bold text-red-300 mb-4">
        Admin : liste des comptes
      </h3>
      <p className="text-sm text-zinc-300 mb-4">
        Voir tous les comptes crees et leur role. Cette liste se met a jour
        automatiquement.
      </p>
      <div className="space-y-3">
        {users.map((account) => (
          <div
            key={account.email}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-black/30 border border-white/10 p-4"
          >
            <div>
              <p className="font-semibold text-white">{account.email}</p>
              <p className="text-sm text-zinc-400">
                {account.name} - {account.role}
              </p>
            </div>
            <span className="mt-3 sm:mt-0 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 uppercase tracking-[0.2em]">
              {account.role}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function CartPage({
  products,
  cart,
  navigateTo,
  cartCount,
  accountCount,
  cartItems,
  changeCartQuantity,
  removeFromCart,
  subtotal,
  promoDiscount,
  promoCode,
  setPromoCode,
  orderTotal,
  user,
  setMessage,
  setShowLogin,
  message,
  addProductToCart,
  setSelected,
}) {
  const recommendations = products
    .filter((product) => !cart[product.name] && product.stock > 0)
    .slice(0, 4)

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-5 py-8 lg:py-12">
      <div className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <SiteLogoMark className="h-14 w-14" />
            <span className="text-lg font-black tracking-[0.2em]">STREAMFLIX</span>
          </div>
          <button
            onClick={() => navigateTo('/catalogue.html')}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:text-white transition"
          >
            &lt;- Continuer les achats
          </button>
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">Checkout premium</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-wide">Votre panier</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Une page panier claire, rapide et integree au parcours StreamFlix.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:min-w-[420px]">
          {[
            ['Articles', cartCount],
            ['Comptes', accountCount],
            ['Livraison', 'Instant'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center"
            >
              <p className="text-xs text-zinc-500">{label}</p>
              <p className="mt-1 font-bold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {cartCount === 0 ? (
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 sm:p-12 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          <div className="absolute right-0 top-0 h-72 w-72 bg-red-600/20 blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-[1fr_360px] gap-10 items-center">
            <div>
              <span className="inline-flex rounded-full bg-red-600/20 border border-red-500/20 px-4 py-2 text-sm text-red-300">
                Panier vide
              </span>
              <h3 className="mt-6 text-3xl sm:text-4xl font-black">
                Votre selection attend son premier abonnement.
              </h3>
              <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
                Explorez les offres premium, ajoutez vos comptes favoris et revenez ici pour
                finaliser en quelques secondes.
              </p>
              <button
                onClick={() => navigateTo('/catalogue.html')}
                className="mt-8 rounded-2xl bg-red-600 px-6 py-4 font-bold hover:bg-red-500 transition shadow-[0_0_30px_rgba(229,9,20,0.45)]"
              >
                Voir les offres
              </button>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm text-zinc-400 mb-4">Suggestions rapides</p>
              <div className="space-y-3">
                {products.slice(0, 3).map((product) => (
                  <button
                    key={product.name}
                    onClick={() => {
                      setSelected(product)
                      navigateTo('/catalogue.html')
                    }}
                    className="w-full flex items-center justify-between gap-3 rounded-2xl bg-white/5 p-3 hover:bg-white/10 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <ProductLogo product={product} size="sm" />
                      <span className="font-semibold truncate">{product.name}</span>
                    </div>
                    <span className="text-red-400">{product.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid xl:grid-cols-[1fr_390px] gap-8 items-start">
          <section className="space-y-4">
            {cartItems.map(({ product, quantity }) => {
              const details = getPlanDetails(product.name)
              const unitPrice = parsePrice(product.price)
              const itemTotal = unitPrice * quantity

              return (
                <article
                  key={product.name}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/95 to-black p-4 sm:p-5 shadow-2xl transition duration-300 hover:border-red-500/40 hover:-translate-y-0.5"
                >
                  <div className="grid gap-5 lg:grid-cols-[1fr_150px_130px] lg:items-center">
                    <div className="flex gap-4 min-w-0">
                      <ProductLogo product={product} size="md" />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-bold">{product.name}</h3>
                          <span className="rounded-full bg-yellow-500/20 border border-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
                            Premium
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300">
                            {details.variant}
                          </span>
                          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300">
                            {details.duration}
                          </span>
                          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300">
                            {details.color}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between lg:block">
                      <p className="text-sm text-zinc-500 lg:mb-2">Quantite</p>
                      <div className="inline-flex h-11 items-center rounded-2xl border border-white/10 bg-black/40">
                        <button
                          onClick={() => changeCartQuantity(product.name, quantity - 1)}
                          className="h-11 w-11 rounded-l-2xl text-lg text-zinc-300 hover:bg-white/10 hover:text-white transition"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(event) =>
                            changeCartQuantity(product.name, Number(event.target.value))
                          }
                          className="h-11 w-14 bg-transparent text-center font-bold outline-none"
                        />
                        <button
                          onClick={() => changeCartQuantity(product.name, quantity + 1)}
                          className="h-11 w-11 rounded-r-2xl text-lg text-zinc-300 hover:bg-white/10 hover:text-white transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-4 lg:block lg:text-right">
                      <div>
                        <p className="text-sm text-zinc-500">Prix unitaire</p>
                        <p className="mt-1 text-zinc-300">{formatPrice(unitPrice)}</p>
                        <p className="mt-3 text-sm text-zinc-500">Sous-total</p>
                        <p className="mt-1 text-2xl font-black text-red-500">
                          {formatPrice(itemTotal)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.name)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:bg-red-600 hover:text-white transition"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </section>

          <aside className="xl:sticky xl:top-28 rounded-[32px] border border-white/10 bg-black/50 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-red-400">Resume</p>
                <h3 className="mt-2 text-2xl font-black">Commande</h3>
              </div>
              <span className="rounded-full bg-green-500/20 border border-green-500/20 px-3 py-1 text-sm text-green-300">
                Securise
              </span>
            </div>

            <div className="mt-6 space-y-4 border-y border-white/10 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Livraison</span>
                <span className="text-green-400">Offerte</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Code promo</span>
                <span className={promoDiscount > 0 ? 'text-green-400' : 'text-zinc-500'}>
                  {promoDiscount > 0 ? `-${formatPrice(promoDiscount)}` : 'Aucun'}
                </span>
              </div>
            </div>

            <label className="mt-6 block text-sm text-zinc-400">
              Code promo
              <div className="mt-2 flex gap-2">
                <input
                  value={promoCode}
                  onChange={(event) => setPromoCode(event.target.value)}
                  className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-red-500"
                  placeholder="STREAM10"
                />
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 font-semibold hover:bg-white/10 transition">
                  OK
                </button>
              </div>
            </label>

            <div className="mt-6 flex items-end justify-between">
              <span className="text-zinc-400">Total</span>
              <strong className="text-4xl font-black text-red-500">
                {formatPrice(orderTotal)}
              </strong>
            </div>

            <button
              onClick={() => {
                if (!user) {
                  setMessage('Connectez-vous pour finaliser la commande.')
                  setShowLogin(true)
                  return
                }

                navigateTo('/checkout.html')
              }}
              className="mt-6 w-full rounded-2xl bg-red-600 py-4 text-lg font-bold shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:bg-red-500 hover:scale-[1.01] transition"
            >
              Passer au checkout
            </button>

            {message && <p className="mt-4 text-sm text-red-300">{message}</p>}

            <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs text-zinc-400">
              <div className="rounded-2xl bg-white/5 border border-white/5 px-3 py-3">
                Activation instantanee
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 px-3 py-3">
                Garantie 30 jours
              </div>
            </div>
          </aside>
        </div>
      )}

      {recommendations.length > 0 && (
        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Recommendations</h3>
              <p className="mt-1 text-zinc-400">Completer votre setup premium.</p>
            </div>
            <button
              onClick={() => navigateTo('/catalogue.html')}
              className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-red-500/40 transition"
            >
              Catalogue
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recommendations.map((product) => (
              <article
                key={product.name}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-5 hover:border-red-500/40 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <ProductLogo product={product} size="sm" />
                  <span className="font-black text-red-500">{product.price}</span>
                </div>
                <h4 className="mt-5 text-lg font-bold">{product.name}</h4>
                <p className="mt-2 min-h-[40px] text-sm text-zinc-400 line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={() => addProductToCart(product)}
                  className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 py-3 font-semibold hover:bg-red-600 hover:border-red-600 transition"
                >
                  Ajouter
                </button>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

function CheckoutPage({
  cartCount,
  navigateTo,
  user,
  orderTotal,
  paypalTransferUrl,
  cartItems,
  subtotal,
  promoDiscount,
  message,
}) {
  if (cartCount === 0) {
    return (
      <main className="relative z-10 max-w-5xl mx-auto px-5 py-12">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">Checkout</p>
          <h2 className="mt-4 text-4xl font-black">Aucune commande a payer</h2>
          <p className="mt-4 text-zinc-400">
            Votre panier est vide. Ajoutez une offre avant de proceder au paiement.
          </p>
          <button
            onClick={() => navigateTo('/catalogue.html')}
            className="mt-8 rounded-2xl bg-red-600 px-6 py-4 font-bold hover:bg-red-500 transition"
          >
            Retour au catalogue
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-5 py-8 lg:py-12">
      <button
        onClick={() => navigateTo('/panier.html')}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:text-white transition"
      >
        &lt;- Retour au panier
      </button>

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-red-400">Paiement securise</p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-wide">
          Paiement par virement PayPal
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Reglez votre commande en envoyant le montant exact via PayPal. Le lien ouvre
          PayPal pour effectuer un virement vers notre compte.
        </p>
      </div>

      <div className="grid xl:grid-cols-[1fr_430px] gap-8 items-start">
        <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-5 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-zinc-500">Client</p>
              <h3 className="mt-1 text-xl font-bold">{user?.email || 'Invite'}</h3>
            </div>
            <span className="rounded-full bg-green-500/20 border border-green-500/20 px-3 py-1 text-sm text-green-300">
              Digital
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {cartItems.map(({ product, quantity }) => (
              <div
                key={product.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <ProductLogo product={product} size="sm" />
                  <div className="min-w-0">
                    <h3 className="font-bold truncate">{product.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {getPlanDetails(product.name).variant} - Quantite {quantity}
                    </p>
                  </div>
                </div>
                <strong className="text-red-500">
                  {formatPrice(parsePrice(product.price) * quantity)}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <aside className="xl:sticky xl:top-28 rounded-[32px] border border-white/10 bg-black/50 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(0,0,0,0.75)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-red-400">Total</p>
              <h3 className="mt-2 text-4xl font-black text-red-500">
                {formatPrice(orderTotal)}
              </h3>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-black">
              PayPal
            </span>
          </div>

          <div className="mt-6 space-y-4 border-y border-white/10 py-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Sous-total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Livraison numerique</span>
              <span className="text-green-400">Offerte</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Reduction</span>
              <span className={promoDiscount > 0 ? 'text-green-400' : 'text-zinc-500'}>
                {promoDiscount > 0 ? `-${formatPrice(promoDiscount)}` : 'Aucune'}
              </span>
            </div>
          </div>

          <a
            href={paypalTransferUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0070ba] px-6 py-4 text-center font-bold text-white transition hover:bg-[#005ea6]"
          >
            Payer {formatPrice(orderTotal)} par virement PayPal
          </a>
          <p className="mt-3 text-xs leading-relaxed text-zinc-500">
            Vous serez redirige vers PayPal pour envoyer le montant indique au compte{' '}
            <span className="text-zinc-300">{PAYPAL_EMAIL}</span>. Mentionnez votre email de
            commande ({user?.email || 'invite'}) dans la note du paiement.
          </p>

          {message && <p className="mt-4 text-sm text-red-300">{message}</p>}

          <p className="mt-5 text-xs leading-relaxed text-zinc-500">
            La commande sera traitee apres reception et verification du virement sur PayPal.
          </p>
        </aside>
      </div>
    </main>
  )
}

export default function StreamFlixStore() {
  const [products, setProducts] = React.useState(() => {
    const cached = loadStorage('streamflix-products', [
      ...defaultProducts,
      ...gameAccounts,
    ])
    // Simple check to reset if old data structure is detected
    if (cached && Array.isArray(cached) && !cached.some((p) => p.type === 'game')) {
      localStorage.removeItem('streamflix-products')
      return applyLogos([...defaultProducts, ...gameAccounts])
    }
    return applyLogos(cached)
  })

  const [bundles, setBundles] = React.useState(() => loadStorage('streamflix-bundles', defaultBundles));

  const [selected, setSelected] = React.useState(() => {
    const stored = loadStorage('streamflix-products', defaultProducts) // Keep this to select a streaming product by default
    return applyLogos(stored)[0] || defaultProducts[0]
  })
  const [users, setUsers] = React.useState(() => loadStorage('streamflix-users', defaultUsers))
  const [user, setUser] = React.useState(() => loadStorage('streamflix-user', null))
  const [cart, setCart] = React.useState(() => loadStorage('streamflix-cart', {}))
  const [route, setRoute] = React.useState(() => window.location.pathname)
  const [showLogin, setShowLogin] = React.useState(false)
  const [authMode, setAuthMode] = React.useState('login')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [promoCode, setPromoCode] = React.useState('')
  const [adminForm, setAdminForm] = React.useState(() => ({
    // Initialize with selected product's details, safely handling null
    price: selected?.price || '',
    stock: String(selected?.stock || 0),
    description: selected?.description || '',
    productIcon: selected?.productIcon || '',
    productHero: selected?.productHero || '',
    logoUrl: selected?.logoUrl || '',
    advantages: (selected?.advantages || []).join('\n'),
  })
  const [siteLogoUrl, setSiteLogoUrl] = React.useState(() => {
    const stored = loadStorage('streamflix-site-logo', defaultSiteLogoUrl) || defaultSiteLogoUrl
    return normalizeSiteLogoUrl(stored)
  })
  const [adminSiteLogoUrl, setAdminSiteLogoUrl] = React.useState(() => {
    const stored = loadStorage('streamflix-site-logo', defaultSiteLogoUrl) || defaultSiteLogoUrl
    return normalizeSiteLogoUrl(stored)
  })
  const [showBundleModal, setShowBundleModal] = React.useState(false)
  const [selectedBundle, setSelectedBundle] = React.useState(null)
  const [adminView, setAdminView] = React.useState('product')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [category, setCategory] = React.useState('streaming')

  React.useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  React.useEffect(() => {
    // Dynamically update Pack Ultimate productNames
    setBundles(prevBundles => {
      const updatedBundles = prevBundles.map(bundle => {
        if (bundle.title === 'Pack Ultimate') {
          return { ...bundle, productNames: products.filter(p => p.type === 'streaming').map(p => p.name) };
        }
        return bundle;
      });
      return updatedBundles;
    });
  }, [products]);

  React.useEffect(() => {
    localStorage.setItem('streamflix-products', JSON.stringify(products))
  }, [products])

  React.useEffect(() => {
    localStorage.setItem('streamflix-users', JSON.stringify(users))
  }, [users])

  React.useEffect(() => {
    localStorage.setItem('streamflix-user', JSON.stringify(user))
  }, [user])

  React.useEffect(() => {
    localStorage.setItem('streamflix-cart', JSON.stringify(cart))
  }, [cart])

  React.useEffect(() => {
    localStorage.setItem('streamflix-bundles', JSON.stringify(bundles))
  }, [bundles])

  React.useEffect(() => {
    const stored = loadStorage('streamflix-site-logo', defaultSiteLogoUrl)
    const normalized = normalizeSiteLogoUrl(stored)
    if (normalized !== siteLogoUrl) {
      setSiteLogoUrl(normalized)
      setAdminSiteLogoUrl(normalized)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('streamflix-site-logo', JSON.stringify(siteLogoUrl))
  }, [siteLogoUrl])

  React.useEffect(() => {
    if (selected) {
      setAdminForm({
        price: selected.price,
        stock: String(selected.stock),
        description: selected.description || '',
        productIcon: selected.productIcon || '',
        productHero: selected.productHero || '',
    logoUrl: selected.logoUrl || '',
        advantages: (selected.advantages || []).join('\n'),
      })
    }
  }, [selected])

  React.useEffect(() => {
    const filtered = searchQuery.trim()
      ? products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : products.filter((p) => p.type === category)
 
    if (filtered.length > 0) {
      setSelected(filtered[0])
    }
  }, [category, products, searchQuery])

  const cartItems = Object.entries(cart)
    .map(([name, quantity]) => {
      const product = products.find((item) => item.name === name)
      return product ? { product, quantity } : null
    })
    .filter(Boolean)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const accountCount = users.length
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0,
  )
  const shipping = cartCount > 0 ? 0 : 0
  const promoDiscount = promoCode.trim().toUpperCase() === 'STREAM10' ? subtotal * 0.1 : 0
  const orderTotal = Math.max(subtotal + shipping - promoDiscount, 0)
  const isCartPage = route === '/panier.html' || route === '/panier'
  const isCheckoutPage = route === '/checkout.html' || route === '/checkout'
  const isCGUPage = route === '/cgu.html' || route === '/cgu'
  const isFAQPage = route === '/faq.html' || route === '/faq'

  React.useEffect(() => {
    if (isCartPage || isCheckoutPage) {
      setSiteLogoUrl(SITE_LOGO_SRC)
      setAdminSiteLogoUrl(SITE_LOGO_SRC)
    }
  }, [isCartPage, isCheckoutPage])

  const filteredProducts = searchQuery.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : products.filter((product) => product.type === category)

  const navigateTo = (path) => {
    const nextPath = path || '/'
    if (window.location.pathname !== nextPath) {
      window.location.assign(nextPath)
      return
    }
    setRoute(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateSelectedProduct = (updatedProduct) => {
    const nextProducts = products.map((product) =>
      product.name === updatedProduct.name ? updatedProduct : product,
    )
    setProducts(nextProducts)
    setSelected((currentSelected) =>
      currentSelected.name === updatedProduct.name ? updatedProduct : currentSelected,
    )
  }

  const updateProductStock = (productName, delta) => {
    const product = products.find((item) => item.name === productName)
    if (!product) return null

    const nextStock = product.stock + delta
    const updatedProduct = {
      ...product,
      stock: nextStock,
      status: nextStock > 0 ? 'Disponible' : 'Rupture',
    }

    updateSelectedProduct(updatedProduct)
    return updatedProduct
  }

  const addProductToCart = (product, quantity = 1, redirectToCart = false) => {
    if (product.type === 'game') {
      setMessage('Cet article se commande uniquement sur Discord.')
      window.open('https://discord.gg/streamflix-support', '_blank')
      return
    }

    if (!user) {
      setMessage('Connectez-vous pour continuer.')
      setShowLogin(true)
      return
    }

    if (product.stock < quantity) {
      setMessage('Le produit est en rupture de stock.')
      return
    }

    updateProductStock(product.name, -quantity)
    setCart((currentCart) => ({
      ...currentCart,
      [product.name]: (currentCart[product.name] || 0) + quantity,
    }))
    setMessage(`Produit ajoute au panier (${product.name}).`)

    if (redirectToCart) {
      navigateTo('/panier.html')
    }
  }

  const removeFromCart = (productName) => {
    const quantity = cart[productName] || 0
    if (quantity <= 0) return

    updateProductStock(productName, quantity)
    setCart((currentCart) => {
      const nextCart = { ...currentCart }
      delete nextCart[productName]
      return nextCart
    })
    setMessage(`Produit retire du panier : ${productName}.`)
  }

  const changeCartQuantity = (productName, nextQuantity) => {
    const currentQuantity = cart[productName] || 0
    const product = products.find((item) => item.name === productName)

    if (!product || nextQuantity === currentQuantity) return

    if (nextQuantity <= 0) {
      removeFromCart(productName)
      return
    }

    if (nextQuantity > currentQuantity) {
      const amountToAdd = nextQuantity - currentQuantity
      if (product.stock < amountToAdd) {
        setMessage('Stock insuffisant pour cette quantite.')
        return
      }
      updateProductStock(productName, -amountToAdd)
    } else {
      updateProductStock(productName, currentQuantity - nextQuantity)
    }

    setCart((currentCart) => ({
      ...currentCart,
      [productName]: nextQuantity,
    }))
  }

  const handleAuthSubmit = (event) => {
    event.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()

    if (!normalizedEmail || !password) {
      setMessage("Merci de remplir l'email et le mot de passe.")
      return
    }

    // AVERTISSEMENT DE SÉCURITÉ :
    // Cette logique d'authentification est entièrement côté client et n'est PAS SÉCURISÉE.
    // Un utilisateur malveillant peut facilement la contourner.
    // Dans une application réelle, l'authentification doit se faire sur un serveur sécurisé.

    if (authMode === 'login') {
      const foundUser = users.find(
        (account) => account.email === normalizedEmail && account.password === password,
      )

      if (!foundUser) {
        setMessage('Email ou mot de passe incorrect.')
        return
      }

      setUser(foundUser)
      setMessage(`Bienvenue ${foundUser.name} !`)
      setShowLogin(false)
      setEmail('')
      setPassword('')
      return
    }

    const existingUser = users.find((account) => account.email === normalizedEmail)
    if (existingUser) {
      setMessage('Cet email est deja utilise. Connectez-vous.')
      setAuthMode('login')
      return
    }

    // AVERTISSEMENT DE SÉCURITÉ :
    // La création de compte côté client sans validation serveur est INSECURISÉE.
    // Cela permet à n'importe qui de créer un compte.

    const newUser = {
      email: normalizedEmail,
      password,
      name: normalizedEmail.split('@')[0],
      role: 'user',
    }

    setUsers((currentUsers) => [...currentUsers, newUser])
    setUser(newUser)
    setMessage(`Compte cree et connecte : ${newUser.email}`)
    setShowLogin(false)
    setAuthMode('login')
    setEmail('')
    setPassword('')
  }

  const handleLogout = () => {
    setUser(null)
    setMessage('Vous etes deconnecte.')
    setShowLogin(false)
  }

  const handleAdminSave = () => {
    // AVERTISSEMENT DE SÉCURITÉ :
    // Cette vérification de rôle est côté client et peut être facilement contournée.
    // Les actions d'administration doivent être validées par un serveur backend.
    if (!user || user.role !== 'admin') {
      setMessage("Seul l'admin peut modifier les produits.")
      return
    }

    const nextStock = Number(adminForm.stock)
    if (Number.isNaN(nextStock) || nextStock < 0) {
      setMessage('Quantite de stock invalide.')
      return
    }

    const nextAdvantages = adminForm.advantages
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)

    const nextLogoUrl = adminForm.logoUrl.trim()
    const updatedProduct = {
      ...selected,
      price: adminForm.price.trim() || selected.price,
      description: adminForm.description.trim() || selected.description,
      stock: nextStock,
      advantages: nextAdvantages,
      logoUrl: nextLogoUrl !== '' ? nextLogoUrl : selected.logoUrl,
      status: nextStock > 0 ? 'Disponible' : 'Rupture',
    }

    updateSelectedProduct(updatedProduct)

    setMessage('Mise a jour du produit enregistree.')
  }

  const handleAdminSaveSiteLogo = () => {
    if (!user || user.role !== 'admin') {
      setMessage("Seul l'admin peut modifier le logo du site.")
      return
    }
    if (adminSiteLogoUrl.trim() !== siteLogoUrl) {
      setSiteLogoUrl(adminSiteLogoUrl.trim())
      setMessage('Logo du site mis à jour.')
    } else {
      setMessage('Aucune modification du logo du site.')
    }
  }

  const handleAdminSaveBundle = (index, updatedForm) => {
    if (!user || user.role !== 'admin') {
      setMessage("Seul l'admin peut modifier les offres.")
      return;
    }

    const productNamesArray = updatedForm.productNames
      .split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0);

    const updatedBundle = {
      ...bundles[index],
      title: updatedForm.title,
      desc: updatedForm.desc,
      price: updatedForm.price,
      productNames: productNamesArray,
    };

    setBundles(prevBundles => prevBundles.map((b, i) => (i === index ? updatedBundle : b)));
    setMessage(`Offre "${updatedBundle.title}" mise à jour.`);
  };

  const loginDialog = showLogin ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/95 p-8 shadow-2xl">
          <div className="mb-6 flex items-start justify-between gap-5">
            <div>
              <h2 className="text-3xl font-black">
                {authMode === 'login' ? 'Connexion' : 'Creation de compte'}
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                {authMode === 'login'
                  ? 'Connectez-vous avec votre email et mot de passe.'
                  : 'Creez un compte pour acheter et gerer votre panier.'}
              </p>
            </div>
            <button onClick={() => setShowLogin(false)} className="text-zinc-300 hover:text-white">
              X
            </button>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <label className="block text-sm text-zinc-400">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
                placeholder="exemple@gmail.com"
              />
            </label>

            <label className="block text-sm text-zinc-400">
              Mot de passe
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
                placeholder="Mot de passe"
              />
            </label>

            {message && <p className="text-sm text-red-400">{message}</p>}

            <button
              type="submit"
              className="w-full rounded-2xl bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-500"
            >
              {authMode === 'login' ? 'Se connecter' : 'Creer un compte'}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-zinc-400">
            <span>{authMode === 'login' ? 'Pas de compte ?' : 'Deja un compte ?'}</span>
            <button
              onClick={() => {
                setAuthMode(authMode === 'login' ? 'register' : 'login')
                setMessage('')
              }}
              className="text-red-400 hover:text-red-300"
            >
              {authMode === 'login' ? 'Creer un compte' : 'Se connecter'}
            </button>
          </div>
        </div>
      </div>
    ) : null

  const paypalTransferUrl = buildPayPalTransferUrl(orderTotal, user)

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-hidden">
      <Header
        navigateTo={navigateTo}
        isCartPage={isCartPage}
        isCheckoutPage={isCheckoutPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        user={user}
        handleLogout={handleLogout}
        setShowLogin={setShowLogin}
        setAuthMode={setAuthMode}
        setMessage={setMessage}
        cartCount={cartCount}
        setShowBundleModal={setShowBundleModal}
        setSelectedBundle={setSelectedBundle}
      />
      {loginDialog}
      {isCGUPage ? (
        <CGUPage />
      ) : isFAQPage ? (
        <FAQPage />
      ) : isCheckoutPage ? (
        <CheckoutPage
          cartCount={cartCount}
          navigateTo={navigateTo}
          user={user}
          orderTotal={orderTotal}
          paypalTransferUrl={paypalTransferUrl}
          cartItems={cartItems}
          subtotal={subtotal}
          promoDiscount={promoDiscount}
          message={message}
        />
      ) : isCartPage ? (
        <CartPage
          products={products}
          cart={cart}
          navigateTo={navigateTo}
          cartCount={cartCount}
          accountCount={accountCount}
          cartItems={cartItems}
          changeCartQuantity={changeCartQuantity}
          removeFromCart={removeFromCart}
          subtotal={subtotal}
          promoDiscount={promoDiscount}
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          orderTotal={orderTotal}
          user={user}
          setMessage={setMessage}
          setShowLogin={setShowLogin}
          message={message}
          addProductToCart={addProductToCart}
          setSelected={setSelected}
        />
      ) : (
        <StorePage
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          category={category}
          setCategory={setCategory}
          filteredProducts={filteredProducts}
          selected={selected}
          setSelected={setSelected}
          products={products}
          addProductToCart={addProductToCart}
          message={message}
          showLogin={showLogin}
          user={user}
          adminForm={adminForm}
          setAdminForm={setAdminForm}
          adminSiteLogoUrl={adminSiteLogoUrl}
          setAdminSiteLogoUrl={setAdminSiteLogoUrl}
          adminView={adminView}
          setAdminView={setAdminView}
          handleAdminSave={handleAdminSave}
          users={users}
          handleAdminSaveSiteLogo={handleAdminSaveSiteLogo}
          bundles={bundles}
          handleAdminSaveBundle={handleAdminSaveBundle}
          setShowBundleModal={setShowBundleModal}
          setSelectedBundle={setSelectedBundle}
        />
      )}

      <footer className="border-t border-white/10 mt-16 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            {isCartPage && <SiteLogoMark className="h-10 w-10" />}
            <div>
              <h4 className="font-bold text-xl">STREAMFLIX</h4>
              <p className="text-zinc-500 text-sm mt-1">
                2026 Premium Streaming Marketplace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-zinc-400 text-sm">
            <button onClick={() => navigateTo('/cgu.html')} className="hover:text-red-400 transition-colors">
              Conditions
            </button>
            <button
              onClick={() => window.open('https://discord.gg/streamflix-support', '_blank')}
              className="hover:text-red-400 transition-colors"
            >
              Support
            </button>
            <button
              onClick={() => navigateTo('/faq.html')}
              className="hover:text-red-400 transition-colors"
            >
              FAQ
            </button>
          </div>
        </div>
      </footer>

      {showBundleModal && (
        <BundleDetailsModal
          bundle={selectedBundle}
          allProducts={products}
          onClose={() => setShowBundleModal(false)}
          onAddBundleToCart={addProductToCart}
          user={user}
          setShowLogin={setShowLogin}
          setMessage={setMessage}
          navigateTo={navigateTo}
        />
      )}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(229,9,20,0.5);
          border-radius: 999px;
        }

        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        body {
          background: #0B0B0F;
        }
      `}</style>
    </div>
  )
}

function CartPage({
  products,
  cart,
  navigateTo,
  cartCount,
  accountCount,
  cartItems,
  changeCartQuantity,
  removeFromCart,
  subtotal,
  promoDiscount,
  promoCode,
  setPromoCode,
  orderTotal,
  user,
  setMessage,
  setShowLogin,
  message,
  addProductToCart,
  setSelected,
}) {
  const recommendations = products
    .filter((product) => !cart[product.name] && product.stock > 0)
    .slice(0, 4)

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-5 py-8 lg:py-12">
      <div className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <SiteLogoMark className="h-14 w-14" />
            <span className="text-lg font-black tracking-[0.2em]">STREAMFLIX</span>
          </div>
          <button
            onClick={() => navigateTo('/catalogue.html')}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:text-white transition"
          >
            &lt;- Continuer les achats
          </button>
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">Checkout premium</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-wide">Votre panier</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Une page panier claire, rapide et integree au parcours StreamFlix.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:min-w-[420px]">
          {[
            ['Articles', cartCount],
            ['Comptes', accountCount],
            ['Livraison', 'Instant'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center"
            >
              <p className="text-xs text-zinc-500">{label}</p>
              <p className="mt-1 font-bold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {cartCount === 0 ? (
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 sm:p-12 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          <div className="absolute right-0 top-0 h-72 w-72 bg-red-600/20 blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-[1fr_360px] gap-10 items-center">
            <div>
              <span className="inline-flex rounded-full bg-red-600/20 border border-red-500/20 px-4 py-2 text-sm text-red-300">
                Panier vide
              </span>
              <h3 className="mt-6 text-3xl sm:text-4xl font-black">
                Votre selection attend son premier abonnement.
              </h3>
              <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
                Explorez les offres premium, ajoutez vos comptes favoris et revenez ici pour
                finaliser en quelques secondes.
              </p>
              <button
                onClick={() => navigateTo('/catalogue.html')}
                className="mt-8 rounded-2xl bg-red-600 px-6 py-4 font-bold hover:bg-red-500 transition shadow-[0_0_30px_rgba(229,9,20,0.45)]"
              >
                Voir les offres
              </button>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm text-zinc-400 mb-4">Suggestions rapides</p>
              <div className="space-y-3">
                {products.slice(0, 3).map((product) => (
                  <button
                    key={product.name}
                    onClick={() => {
                      setSelected(product)
                      navigateTo('/catalogue.html')
                    }}
                    className="w-full flex items-center justify-between gap-3 rounded-2xl bg-white/5 p-3 hover:bg-white/10 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <ProductLogo product={product} size="sm" />
                      <span className="font-semibold truncate">{product.name}</span>
                    </div>
                    <span className="text-red-400">{product.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid xl:grid-cols-[1fr_390px] gap-8 items-start">
          <section className="space-y-4">
            {cartItems.map(({ product, quantity }) => {
              const details = getPlanDetails(product.name)
              const unitPrice = parsePrice(product.price)
              const itemTotal = unitPrice * quantity

              return (
                <article
                  key={product.name}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/95 to-black p-4 sm:p-5 shadow-2xl transition duration-300 hover:border-red-500/40 hover:-translate-y-0.5"
                >
                  <div className="grid gap-5 lg:grid-cols-[1fr_150px_130px] lg:items-center">
                    <div className="flex gap-4 min-w-0">
                      <ProductLogo product={product} size="md" />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-bold">{product.name}</h3>
                          <span className="rounded-full bg-yellow-500/20 border border-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
                            Premium
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300">
                            {details.variant}
                          </span>
                          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300">
                            {details.duration}
                          </span>
                          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300">
                            {details.color}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between lg:block">
                      <p className="text-sm text-zinc-500 lg:mb-2">Quantite</p>
                      <div className="inline-flex h-11 items-center rounded-2xl border border-white/10 bg-black/40">
                        <button
                          onClick={() => changeCartQuantity(product.name, quantity - 1)}
                          className="h-11 w-11 rounded-l-2xl text-lg text-zinc-300 hover:bg-white/10 hover:text-white transition"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(event) =>
                            changeCartQuantity(product.name, Number(event.target.value))
                          }
                          className="h-11 w-14 bg-transparent text-center font-bold outline-none"
                        />
                        <button
                          onClick={() => changeCartQuantity(product.name, quantity + 1)}
                          className="h-11 w-11 rounded-r-2xl text-lg text-zinc-300 hover:bg-white/10 hover:text-white transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-4 lg:block lg:text-right">
                      <div>
                        <p className="text-sm text-zinc-500">Prix unitaire</p>
                        <p className="mt-1 text-zinc-300">{formatPrice(unitPrice)}</p>
                        <p className="mt-3 text-sm text-zinc-500">Sous-total</p>
                        <p className="mt-1 text-2xl font-black text-red-500">
                          {formatPrice(itemTotal)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.name)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:bg-red-600 hover:text-white transition"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </section>

          <aside className="xl:sticky xl:top-28 rounded-[32px] border border-white/10 bg-black/50 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-red-400">Resume</p>
                <h3 className="mt-2 text-2xl font-black">Commande</h3>
              </div>
              <span className="rounded-full bg-green-500/20 border border-green-500/20 px-3 py-1 text-sm text-green-300">
                Securise
              </span>
            </div>

            <div className="mt-6 space-y-4 border-y border-white/10 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Livraison</span>
                <span className="text-green-400">Offerte</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Code promo</span>
                <span className={promoDiscount > 0 ? 'text-green-400' : 'text-zinc-500'}>
                  {promoDiscount > 0 ? `-${formatPrice(promoDiscount)}` : 'Aucun'}
                </span>
              </div>
            </div>

            <label className="mt-6 block text-sm text-zinc-400">
              Code promo
              <div className="mt-2 flex gap-2">
                <input
                  value={promoCode}
                  onChange={(event) => setPromoCode(event.target.value)}
                  className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-red-500"
                  placeholder="STREAM10"
                />
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 font-semibold hover:bg-white/10 transition">
                  OK
                </button>
              </div>
            </label>

            <div className="mt-6 flex items-end justify-between">
              <span className="text-zinc-400">Total</span>
              <strong className="text-4xl font-black text-red-500">
                {formatPrice(orderTotal)}
              </strong>
            </div>

            <button
              onClick={() => {
                if (!user) {
                  setMessage('Connectez-vous pour finaliser la commande.')
                  setShowLogin(true)
                  return
                }

                navigateTo('/checkout.html')
              }}
              className="mt-6 w-full rounded-2xl bg-red-600 py-4 text-lg font-bold shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:bg-red-500 hover:scale-[1.01] transition"
            >
              Passer au checkout
            </button>

            {message && <p className="mt-4 text-sm text-red-300">{message}</p>}

            <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs text-zinc-400">
              <div className="rounded-2xl bg-white/5 border border-white/5 px-3 py-3">
                Activation instantanee
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 px-3 py-3">
                Garantie 30 jours
              </div>
            </div>
          </aside>
        </div>
      )}

      {recommendations.length > 0 && (
        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Recommendations</h3>
              <p className="mt-1 text-zinc-400">Completer votre setup premium.</p>
            </div>
            <button
              onClick={() => navigateTo('/catalogue.html')}
              className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-red-500/40 transition"
            >
              Catalogue
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recommendations.map((product) => (
              <article
                key={product.name}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-5 hover:border-red-500/40 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <ProductLogo product={product} size="sm" />
                  <span className="font-black text-red-500">{product.price}</span>
                </div>
                <h4 className="mt-5 text-lg font-bold">{product.name}</h4>
                <p className="mt-2 min-h-[40px] text-sm text-zinc-400 line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={() => addProductToCart(product)}
                  className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 py-3 font-semibold hover:bg-red-600 hover:border-red-600 transition"
                >
                  Ajouter
                </button>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

function CheckoutPage({
  cartCount,
  navigateTo,
  user,
  orderTotal,
  paypalTransferUrl,
  cartItems,
  subtotal,
  promoDiscount,
  message,
}) {
  if (cartCount === 0) {
    return (
      <main className="relative z-10 max-w-5xl mx-auto px-5 py-12">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">Checkout</p>
          <h2 className="mt-4 text-4xl font-black">Aucune commande a payer</h2>
          <p className="mt-4 text-zinc-400">
            Votre panier est vide. Ajoutez une offre avant de proceder au paiement.
          </p>
          <button
            onClick={() => navigateTo('/catalogue.html')}
            className="mt-8 rounded-2xl bg-red-600 px-6 py-4 font-bold hover:bg-red-500 transition"
          >
            Retour au catalogue
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-5 py-8 lg:py-12">
      <button
        onClick={() => navigateTo('/panier.html')}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-red-500/40 hover:text-white transition"
      >
        &lt;- Retour au panier
      </button>

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-red-400">Paiement securise</p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-wide">
          Paiement par virement PayPal
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Reglez votre commande en envoyant le montant exact via PayPal. Le lien ouvre
          PayPal pour effectuer un virement vers notre compte.
        </p>
      </div>

      <div className="grid xl:grid-cols-[1fr_430px] gap-8 items-start">
        <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-5 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-zinc-500">Client</p>
              <h3 className="mt-1 text-xl font-bold">{user?.email || 'Invite'}</h3>
            </div>
            <span className="rounded-full bg-green-500/20 border border-green-500/20 px-3 py-1 text-sm text-green-300">
              Digital
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {cartItems.map(({ product, quantity }) => (
              <div
                key={product.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <ProductLogo product={product} size="sm" />
                  <div className="min-w-0">
                    <h3 className="font-bold truncate">{product.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {getPlanDetails(product.name).variant} - Quantite {quantity}
                    </p>
                  </div>
                </div>
                <strong className="text-red-500">
                  {formatPrice(parsePrice(product.price) * quantity)}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <aside className="xl:sticky xl:top-28 rounded-[32px] border border-white/10 bg-black/50 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(0,0,0,0.75)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-red-400">Total</p>
              <h3 className="mt-2 text-4xl font-black text-red-500">
                {formatPrice(orderTotal)}
              </h3>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-black">
              PayPal
            </span>
          </div>

          <div className="mt-6 space-y-4 border-y border-white/10 py-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Sous-total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Livraison numerique</span>
              <span className="text-green-400">Offerte</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Reduction</span>
              <span className={promoDiscount > 0 ? 'text-green-400' : 'text-zinc-500'}>
                {promoDiscount > 0 ? `-${formatPrice(promoDiscount)}` : 'Aucune'}
              </span>
            </div>
          </div>

          <a
            href={paypalTransferUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0070ba] px-6 py-4 text-center font-bold text-white transition hover:bg-[#005ea6]"
          >
            Payer {formatPrice(orderTotal)} par virement PayPal
          </a>
          <p className="mt-3 text-xs leading-relaxed text-zinc-500">
            Vous serez redirige vers PayPal pour envoyer le montant indique au compte{' '}
            <span className="text-zinc-300">{PAYPAL_EMAIL}</span>. Mentionnez votre email de
            commande ({user?.email || 'invite'}) dans la note du paiement.
          </p>

          {message && <p className="mt-4 text-sm text-red-300">{message}</p>}

          <p className="mt-5 text-xs leading-relaxed text-zinc-500">
            La commande sera traitee apres reception et verification du virement sur PayPal.
          </p>
        </aside>
      </div>
    </main>
  )
}

export default function StreamFlixStore() {
  const [products, setProducts] = React.useState(() => {
    const cached = loadStorage('streamflix-products', [
      ...defaultProducts,
      ...gameAccounts,
    ])
    // Simple check to reset if old data structure is detected
    if (cached && Array.isArray(cached) && !cached.some((p) => p.type === 'game')) {
      localStorage.removeItem('streamflix-products')
      return applyLogos([...defaultProducts, ...gameAccounts])
    }
    return applyLogos(cached)
  })

  const [selected, setSelected] = React.useState(() => {
    const stored = loadStorage('streamflix-products', defaultProducts) // Keep this to select a streaming product by default
    return applyLogos(stored)[0] || defaultProducts[0]
  })
  const [users, setUsers] = React.useState(() => loadStorage('streamflix-users', defaultUsers))
  const [user, setUser] = React.useState(() => loadStorage('streamflix-user', null))
  const [cart, setCart] = React.useState(() => loadStorage('streamflix-cart', {}))
  const [route, setRoute] = React.useState(() => window.location.pathname)
  const [showLogin, setShowLogin] = React.useState(false)
  const [authMode, setAuthMode] = React.useState('login')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [promoCode, setPromoCode] = React.useState('')
  const [adminForm, setAdminForm] = React.useState(() => ({
    price: selected?.price || '',
    stock: String(selected?.stock || 0),
    description: selected?.description || '',
    logoUrl: selected?.logoUrl || '',
    advantages: (selected?.advantages || []).join('\n'),
  }))
  const [siteLogoUrl, setSiteLogoUrl] = React.useState(() => {
    const stored = loadStorage('streamflix-site-logo', defaultSiteLogoUrl) || defaultSiteLogoUrl
    return normalizeSiteLogoUrl(stored)
  })
  const [adminSiteLogoUrl, setAdminSiteLogoUrl] = React.useState(() => {
    const stored = loadStorage('streamflix-site-logo', defaultSiteLogoUrl) || defaultSiteLogoUrl
    return normalizeSiteLogoUrl(stored)
  })
  const [bundles, setBundles] = React.useState(() => loadStorage('streamflix-bundles', defaultBundles));
  const [selectedBundle, setSelectedBundle] = React.useState(null)
  const [adminView, setAdminView] = React.useState('product')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [category, setCategory] = React.useState('streaming')

  React.useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  React.useEffect(() => {
    // Dynamically update Pack Ultimate productNames
    setBundles(prevBundles => {
      const updatedBundles = prevBundles.map(bundle => {
        if (bundle.title === 'Pack Ultimate') {
          return { ...bundle, productNames: products.filter(p => p.type === 'streaming').map(p => p.name) };
        }
        return bundle;
      });
      return updatedBundles;
    });
  }, [products, setBundles]);

  React.useEffect(() => {
    localStorage.setItem('streamflix-products', JSON.stringify(products))
  }, [products])

  React.useEffect(() => {
    localStorage.setItem('streamflix-users', JSON.stringify(users))
  }, [users])

  React.useEffect(() => {
    localStorage.setItem('streamflix-bundles', JSON.stringify(bundles))
  }, [bundles])

  React.useEffect(() => {
    localStorage.setItem('streamflix-user', JSON.stringify(user))
  }, [user])

  React.useEffect(() => {
    localStorage.setItem('streamflix-cart', JSON.stringify(cart))
  }, [cart])

  React.useEffect(() => {
    const stored = loadStorage('streamflix-site-logo', defaultSiteLogoUrl)
    const normalized = normalizeSiteLogoUrl(stored)
    if (normalized !== siteLogoUrl) {
      setSiteLogoUrl(normalized)
      setAdminSiteLogoUrl(normalized)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('streamflix-site-logo', JSON.stringify(siteLogoUrl))
  }, [siteLogoUrl])

  React.useEffect(() => {
    if (selected) {
      setAdminForm({
        price: selected.price,
        stock: String(selected.stock),
        description: selected.description || '',
        logoUrl: selected.logoUrl || '',
        advantages: (selected.advantages || []).join('\n'),
      })
    }
  }, [selected])

  const filteredProducts = React.useMemo(() => {
    return searchQuery.trim()
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : products.filter((product) => product.type === category);
  }, [products, searchQuery, category]);

  React.useEffect(() => {
    if (!selected || !filteredProducts.some((p) => p.name === selected.name)) {
      setSelected(filteredProducts.length > 0 ? filteredProducts[0] : null);
    }
  }, [filteredProducts, selected]);

  const cartItems = Object.entries(cart)
    .map(([name, quantity]) => {
      const product = products.find((item) => item.name === name)
      return product ? { product, quantity } : null
    })
    .filter(Boolean)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const accountCount = users.length
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0,
  )
  const shipping = cartCount > 0 ? 0 : 0
  const promoDiscount = promoCode.trim().toUpperCase() === 'STREAM10' ? subtotal * 0.1 : 0
  const orderTotal = Math.max(subtotal + shipping - promoDiscount, 0)
  const isCartPage = route === '/panier.html' || route === '/panier'
  const isCheckoutPage = route === '/checkout.html' || route === '/checkout'
  const isCGUPage = route === '/cgu.html' || route === '/cgu'
  const isFAQPage = route === '/faq.html' || route === '/faq'

  React.useEffect(() => {
    if (isCartPage || isCheckoutPage) {
      setSiteLogoUrl(SITE_LOGO_SRC)
      setAdminSiteLogoUrl(SITE_LOGO_SRC)
    }
  }, [isCartPage, isCheckoutPage])

  const navigateTo = (path) => {
    const nextPath = path || '/'
    if (window.location.pathname !== nextPath) {
      window.location.assign(nextPath)
      return
    }
    setRoute(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateSelectedProduct = (updatedProduct) => {
    const nextProducts = products.map((product) =>
      product.name === updatedProduct.name ? updatedProduct : product,
    )
    setProducts(nextProducts)
    setSelected((currentSelected) =>
      currentSelected.name === updatedProduct.name ? updatedProduct : currentSelected,
    )
  }

  const updateProductStock = (productName, delta) => {
    const product = products.find((item) => item.name === productName)
    if (!product) return null

    const nextStock = product.stock + delta
    const updatedProduct = {
      ...product,
      stock: nextStock,
      status: nextStock > 0 ? 'Disponible' : 'Rupture',
    }

    updateSelectedProduct(updatedProduct)
    return updatedProduct
  }

  const addProductToCart = (product, quantity = 1, redirectToCart = false) => {
    if (product.type === 'game') {
      setMessage('Cet article se commande uniquement sur Discord.')
      window.open('https://discord.gg/streamflix-support', '_blank')
      return
    }

    if (!user) {
      setMessage('Connectez-vous pour continuer.')
      setShowLogin(true)
      return
    }

    if (product.stock < quantity) {
      setMessage('Le produit est en rupture de stock.')
      return
    }

    updateProductStock(product.name, -quantity)
    setCart((currentCart) => ({
      ...currentCart,
      [product.name]: (currentCart[product.name] || 0) + quantity,
    }))
    setMessage(`Produit ajoute au panier (${product.name}).`)

    if (redirectToCart) {
      navigateTo('/panier.html')
    }
  }

  const removeFromCart = (productName) => {
    const quantity = cart[productName] || 0
    if (quantity <= 0) return

    updateProductStock(productName, quantity)
    setCart((currentCart) => {
      const nextCart = { ...currentCart }
      delete nextCart[productName]
      return nextCart
    })
    setMessage(`Produit retire du panier : ${productName}.`)
  }

  const changeCartQuantity = (productName, nextQuantity) => {
    const currentQuantity = cart[productName] || 0
    const product = products.find((item) => item.name === productName)

    if (!product || nextQuantity === currentQuantity) return

    if (nextQuantity <= 0) {
      removeFromCart(productName)
      return
    }

    if (nextQuantity > currentQuantity) {
      const amountToAdd = nextQuantity - currentQuantity
      if (product.stock < amountToAdd) {
        setMessage('Stock insuffisant pour cette quantite.')
        return
      }
      updateProductStock(productName, -amountToAdd)
    } else {
      updateProductStock(productName, currentQuantity - nextQuantity)
    }

    setCart((currentCart) => ({
      ...currentCart,
      [productName]: nextQuantity,
    }))
  }

  const handleAuthSubmit = (event) => {
    event.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()

    if (!normalizedEmail || !password) {
      setMessage("Merci de remplir l'email et le mot de passe.")
      return
    }

    // AVERTISSEMENT DE SÉCURITÉ :
    // Cette logique d'authentification est entièrement côté client et n'est PAS SÉCURISÉE.
    // Un utilisateur malveillant peut facilement la contourner.
    // Une application en production DOIT utiliser une authentification côté serveur (backend).

    if (authMode === 'login') {
      const foundUser = users.find(
        (account) => account.email === normalizedEmail && account.password === password,
      )

      if (!foundUser) {
        setMessage('Email ou mot de passe incorrect.')
        return
      }

      setUser(foundUser)
      setMessage(`Bienvenue ${foundUser.name} !`)
      setShowLogin(false)
      setEmail('')
      setPassword('')
      return
    }

    const existingUser = users.find((account) => account.email === normalizedEmail)
    if (existingUser) {
      setMessage('Cet email est deja utilise. Connectez-vous.')
      setAuthMode('login')
      return
    }

    // AVERTISSEMENT DE SÉCURITÉ :
    // La création de compte côté client sans validation serveur est INSECURISÉE.
    // Cela permet à n'importe qui de créer un compte.

    const newUser = {
      email: normalizedEmail,
      password,
      name: normalizedEmail.split('@')[0],
      role: 'user',
    }

    setUsers((currentUsers) => [...currentUsers, newUser])
    setUser(newUser)
    setMessage(`Compte cree et connecte : ${newUser.email}`)
    setShowLogin(false)
    setAuthMode('login')
    setEmail('')
    setPassword('')
  }

  const handleLogout = () => {
    setUser(null)
    setMessage('Vous etes deconnecte.')
    setShowLogin(false)
  }

  const handleAdminSave = () => {
    // AVERTISSEMENT DE SÉCURITÉ :
    // Cette vérification de rôle est côté client et peut être facilement contournée.
    // Les actions d'administration doivent être validées par un serveur backend.
    if (!user || user.role !== 'admin') {
      setMessage("Seul l'admin peut modifier les produits.")
      return
    }

    const nextStock = Number(adminForm.stock)
    if (Number.isNaN(nextStock) || nextStock < 0) {
      setMessage('Quantite de stock invalide.')
      return
    }

    const nextAdvantages = adminForm.advantages
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)

    const nextLogoUrl = adminForm.logoUrl.trim()
    const updatedProduct = {
      ...selected,
      price: adminForm.price.trim() || selected.price,
      description: adminForm.description.trim() || selected.description,
      stock: nextStock,
      advantages: nextAdvantages,
      logoUrl: nextLogoUrl !== '' ? nextLogoUrl : selected.logoUrl,
      status: nextStock > 0 ? 'Disponible' : 'Rupture',
    }

    updateSelectedProduct(updatedProduct)

    setMessage('Mise a jour du produit enregistree.')
  }

  const loginDialog = showLogin ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/95 p-8 shadow-2xl">
          <div className="mb-6 flex items-start justify-between gap-5">
            <div>
              <h2 className="text-3xl font-black">
                {authMode === 'login' ? 'Connexion' : 'Creation de compte'}
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                {authMode === 'login'
                  ? 'Connectez-vous avec votre email et mot de passe.'
                  : 'Creez un compte pour acheter et gerer votre panier.'}
              </p>
            </div>
            <button onClick={() => setShowLogin(false)} className="text-zinc-300 hover:text-white">
              X
            </button>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <label className="block text-sm text-zinc-400">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
                placeholder="exemple@gmail.com"
              />
            </label>

            <label className="block text-sm text-zinc-400">
              Mot de passe
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-red-500"
                placeholder="Mot de passe"
              />
            </label>

            {message && <p className="text-sm text-red-400">{message}</p>}

            <button
              type="submit"
              className="w-full rounded-2xl bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-500"
            >
              {authMode === 'login' ? 'Se connecter' : 'Creer un compte'}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-zinc-400">
            <span>{authMode === 'login' ? 'Pas de compte ?' : 'Deja un compte ?'}</span>
            <button
              onClick={() => {
                setAuthMode(authMode === 'login' ? 'register' : 'login')
                setMessage('')
              }}
              className="text-red-400 hover:text-red-300"
            >
              {authMode === 'login' ? 'Creer un compte' : 'Se connecter'}
            </button>
          </div>
        </div>
      </div>
    ) : null

  const paypalTransferUrl = buildPayPalTransferUrl(orderTotal, user)

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-hidden">
      <Header
        navigateTo={navigateTo}
        isCartPage={isCartPage}
        isCheckoutPage={isCheckoutPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        user={user}
        handleLogout={handleLogout}
        setShowLogin={setShowLogin}
        setAuthMode={setAuthMode}
        setMessage={setMessage}
        cartCount={cartCount}
        setShowBundleModal={setShowBundleModal}
        setSelectedBundle={setSelectedBundle}
      />
      {loginDialog}
      {isCGUPage ? (
        <CGUPage />
      ) : isFAQPage ? (
        <FAQPage />
      ) : isCheckoutPage ? (
        <CheckoutPage
          cartCount={cartCount}
          navigateTo={navigateTo}
          user={user}
          orderTotal={orderTotal}
          paypalTransferUrl={paypalTransferUrl}
          cartItems={cartItems}
          subtotal={subtotal}
          promoDiscount={promoDiscount}
          message={message}
        />
      ) : isCartPage ? (
        <CartPage
          products={products}
          cart={cart}
          navigateTo={navigateTo}
          cartCount={cartCount}
          accountCount={accountCount}
          cartItems={cartItems}
          changeCartQuantity={changeCartQuantity}
          removeFromCart={removeFromCart}
          subtotal={subtotal}
          promoDiscount={promoDiscount}
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          orderTotal={orderTotal}
          user={user}
          setMessage={setMessage}
          setShowLogin={setShowLogin}
          message={message}
          addProductToCart={addProductToCart}
          setSelected={setSelected}
        />
      ) : (
        <StorePage
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          category={category}
          setCategory={setCategory}
          filteredProducts={filteredProducts}
          selected={selected}
          setSelected={setSelected}
          products={products}
          addProductToCart={addProductToCart}
          message={message}
          showLogin={showLogin}
          user={user}
          adminForm={adminForm}
          setAdminForm={setAdminForm}
          adminSiteLogoUrl={adminSiteLogoUrl}
          setAdminSiteLogoUrl={setAdminSiteLogoUrl}
          siteLogoUrl={siteLogoUrl}
          adminView={adminView}
          setAdminView={setAdminView}
          handleAdminSave={handleAdminSave}
          users={users}
          handleAdminSaveSiteLogo={handleAdminSaveSiteLogo}
          bundles={bundles}
          setBundles={setBundles}
          setShowBundleModal={setShowBundleModal}
          setSelectedBundle={setSelectedBundle}
        />
      )}

      <footer className="border-t border-white/10 mt-16 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            {isCartPage && <SiteLogoMark className="h-10 w-10" />}
            <div>
              <h4 className="font-bold text-xl">STREAMFLIX</h4>
              <p className="text-zinc-500 text-sm mt-1">
                2026 Premium Streaming Marketplace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-zinc-400 text-sm">
            <button onClick={() => navigateTo('/cgu.html')} className="hover:text-red-400 transition-colors">
              Conditions
            </button>
            <button
              onClick={() => window.open('https://discord.gg/streamflix-support', '_blank')}
              className="hover:text-red-400 transition-colors"
            >
              Support
            </button>
            <button
              onClick={() => navigateTo('/faq.html')}
              className="hover:text-red-400 transition-colors"
            >
              FAQ
            </button>
          </div>
        </div>
      </footer>

      {showBundleModal && (
        <BundleDetailsModal
          bundle={selectedBundle}
          allProducts={products}
          onClose={() => setShowBundleModal(false)}
          onAddBundleToCart={addProductToCart}
          user={user}
          setShowLogin={setShowLogin}
          setMessage={setMessage}
          navigateTo={navigateTo}
        />
      )}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(229,9,20,0.5);
          border-radius: 999px;
        }

        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        body {
          background: #0B0B0F;
        }
      `}</style>
    </div>
  )
}
