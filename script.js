const header = document.querySelector('[data-header]')
const menu = document.querySelector('[data-menu]')
const menuToggle = document.querySelector('[data-menu-toggle]')
const revealItems = document.querySelectorAll('.reveal')
const magneticButtons = document.querySelectorAll('[data-magnetic]')
const loginOpenButtons = document.querySelectorAll('[data-login-open]')
const loginCloseButton = document.querySelector('[data-login-close]')
const loginModal = document.querySelector('[data-login-modal]')
const authForm = document.querySelector('[data-auth-form]')
const authTitle = document.querySelector('#auth-title')
const authSubtitle = document.querySelector('[data-auth-subtitle]')
const authSubmit = document.querySelector('[data-auth-submit]')
const authSwitch = document.querySelector('[data-auth-switch]')
const authSwitchLabel = document.querySelector('[data-auth-switch-label]')
const authMessage = document.querySelector('[data-auth-message]')
let authMode = 'login'

const defaultUsers = [
  {
    email: 'admin@streamflix.com',
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

const loadStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12)
}

updateHeader()
window.addEventListener('scroll', updateHeader, { passive: true })

menuToggle?.addEventListener('click', () => {
  const isOpen = menu?.classList.toggle('is-open')
  document.body.classList.toggle('menu-open', Boolean(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu')
})

const closeMobileMenu = () => {
  menu?.classList.remove('is-open')
  document.body.classList.remove('menu-open')
  menuToggle?.setAttribute('aria-label', 'Ouvrir le menu')
}

menu?.querySelectorAll('a[href^="#"]').forEach((item) => {
  item.addEventListener('click', (event) => {
    const hash = item.getAttribute('href')
    if (!hash || hash === '#') return

    event.preventDefault()
    closeMobileMenu()

    const target = document.querySelector(hash)
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', hash)
      })
    }
  })
})

menu?.querySelectorAll('a:not([href^="#"]), button').forEach((item) => {
  item.addEventListener('click', closeMobileMenu)
})

const renderAuthMode = () => {
  const isLogin = authMode === 'login'

  if (authTitle) authTitle.textContent = isLogin ? 'Connexion' : 'Création de compte'
  if (authSubtitle) {
    authSubtitle.textContent = isLogin
      ? 'Connectez-vous avec votre email et mot de passe.'
      : 'Créez un compte pour acheter et gérer votre panier.'
  }
  if (authSubmit) authSubmit.textContent = isLogin ? 'Se connecter' : 'Créer un compte'
  if (authSwitchLabel) authSwitchLabel.textContent = isLogin ? 'Pas de compte ?' : 'Déjà un compte ?'
  if (authSwitch) authSwitch.textContent = isLogin ? 'Créer un compte' : 'Se connecter'
  if (authMessage) {
    authMessage.textContent = ''
    authMessage.classList.remove('is-success')
  }
}

const openLoginModal = () => {
  authMode = 'login'
  renderAuthMode()
  loginModal?.classList.add('is-open')
  loginModal?.setAttribute('aria-hidden', 'false')
  document.body.classList.add('auth-open')
  authForm?.elements.email?.focus()
}

const closeLoginModal = () => {
  loginModal?.classList.remove('is-open')
  loginModal?.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('auth-open')
  authForm?.reset()
  if (authMessage) {
    authMessage.textContent = ''
    authMessage.classList.remove('is-success')
  }
}

loginOpenButtons.forEach((button) => {
  button.addEventListener('click', openLoginModal)
})

loginCloseButton?.addEventListener('click', closeLoginModal)

loginModal?.addEventListener('click', (event) => {
  if (event.target === loginModal) closeLoginModal()
})

loginModal?.querySelector('.auth-card')?.addEventListener('click', (event) => {
  event.stopPropagation()
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && loginModal?.classList.contains('is-open')) {
    closeLoginModal()
  }
})

authSwitch?.addEventListener('click', () => {
  authMode = authMode === 'login' ? 'register' : 'login'
  renderAuthMode()
})

authForm?.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(authForm)
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const password = String(formData.get('password') || '')
  const users = loadStorage('streamflix-users', defaultUsers)

  authMessage?.classList.remove('is-success')

  if (!email || !password) {
    if (authMessage) authMessage.textContent = 'Merci de remplir l’email et le mot de passe.'
    return
  }

  if (authMode === 'login') {
    const foundUser = users.find((account) => account.email === email && account.password === password)

    if (!foundUser) {
      if (authMessage) authMessage.textContent = 'Email ou mot de passe incorrect.'
      return
    }

    saveStorage('streamflix-user', foundUser)
    if (authMessage) {
      authMessage.textContent = `Bienvenue ${foundUser.name} !`
      authMessage.classList.add('is-success')
    }

    window.setTimeout(closeLoginModal, 650)
    return
  }

  if (users.some((account) => account.email === email)) {
    authMode = 'login'
    renderAuthMode()
    if (authMessage) authMessage.textContent = 'Cet email est déjà utilisé. Connectez-vous.'
    return
  }

  const newUser = {
    email,
    password,
    name: email.split('@')[0],
    role: 'user',
  }

  saveStorage('streamflix-users', [...users, newUser])
  saveStorage('streamflix-user', newUser)

  if (authMessage) {
    authMessage.textContent = `Compte créé et connecté : ${newUser.email}`
    authMessage.classList.add('is-success')
  }

  window.setTimeout(closeLoginModal, 750)
})

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.18 },
)

revealItems.forEach((item) => revealObserver.observe(item))

const faqItems = document.querySelectorAll('[data-faq-item]')
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return
    faqItems.forEach((other) => {
      if (other !== item) other.open = false
    })
  })
})

const faqNavLinks = document.querySelectorAll('.faq-nav a')
if (faqNavLinks.length > 0) {
  const faqSections = [...faqNavLinks]
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

  const setActiveFaqNav = () => {
    const offset = window.scrollY + 140
    let activeId = faqSections[0]?.id

    faqSections.forEach((section) => {
      if (section.offsetTop <= offset) activeId = section.id
    })

    faqNavLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${activeId}`)
    })
  }

  setActiveFaqNav()
  window.addEventListener('scroll', setActiveFaqNav, { passive: true })
}

magneticButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2

    button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px) scale(1.02)`
  })

  button.addEventListener('mouseleave', () => {
    button.style.transform = ''
  })
})
