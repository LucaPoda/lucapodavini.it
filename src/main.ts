import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'
import { config } from './config'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App container not found')
}

type DesignId = '2' | '5'

const route = window.location.pathname.replace(/\/+$/, '') || '/'
const designId = (/^\/(2|5)$/.test(route) ? route.slice(1) : null) as DesignId | null

if (!designId) {
  document.title = 'Luca Podavini • Design Gallery'
  app.innerHTML = renderGallery()
} else {
  document.title = `Luca Podavini • Design ${designId}`
  document.body.className = `theme-${designId}`
  app.innerHTML = renderDesign(designId)

  if (designId === '5') {
    enhanceTerminalInteractions()
  }
}

function linkButtons(report: string, github: string, demo: string, toneClass = '') {
  const links = []
  if (report.trim()) {
    links.push(`<a href="${report}" target="_blank" class="action-link ${toneClass}"><i class="fa-regular fa-file-lines"></i> Report</a>`)
  }
  if (github.trim()) {
    links.push(`<a href="${github}" target="_blank" class="action-link ${toneClass}"><i class="fa-brands fa-github"></i> GitHub</a>`)
  }
  if (demo.trim()) {
    links.push(`<a href="${demo}" target="_blank" class="action-link ${toneClass}"><i class="fa-brands fa-youtube"></i> Demo</a>`)
  }
  return links.join('')
}

function mediaTag(preview: string, alt: string) {
  if (preview.endsWith('.mp4')) {
    return `<video src="${preview}" autoplay muted loop playsinline aria-label="${alt}"></video>`
  }
  return `<img src="${preview}" alt="${alt}">`
}

function topSwitcher() {
  return `
    <nav class="design-switcher">
      <a href="/">Gallery</a>
      <a href="/2">2</a>
      <a href="/5">5</a>
    </nav>
  `
}

function renderGallery() {
  return `
    <main class="gallery-home">
      <div class="gallery-noise"></div>
      <section class="gallery-hero">
        <p class="gallery-kicker">Two Signature Experiences</p>
        <h1>${config.hero.name}</h1>
        <p>
          Two deeply crafted versions: a refined editorial portfolio and a cinematic terminal interface.
        </p>
      </section>
      <section class="gallery-grid">
        <a href="/2" class="gallery-card gallery-card-2"><span>02</span><h2>Editorial Atelier</h2><p>Luxury print language with modern UI craft.</p></a>
        <a href="/5" class="gallery-card gallery-card-5"><span>05</span><h2>Neon Terminal</h2><p>Immersive command-line universe for robotics.</p></a>
      </section>
    </main>
  `
}

function renderDesign(id: DesignId) {
  if (id === '2') {
    return renderEditorial()
  }
  return renderTerminal()
}

function renderEditorial() {
  return `
    ${topSwitcher()}
    <main class="layout layout-editorial">
      <aside class="editorial-side">
        <p class="issue">Portfolio Chronicle • 2026</p>
        <h1>${config.hero.name}</h1>
        <p>${config.hero.title}</p>
        <p>${config.hero.subtitle}</p>
        <img src="${config.hero.profilePicture}" alt="${config.hero.name}">
        <div class="actions">
          <a href="${config.hero.socials.linkedin}" target="_blank" class="action-link">LinkedIn</a>
          <a href="${config.hero.socials.github}" target="_blank" class="action-link">GitHub</a>
          <a href="${config.hero.socials.cv}" target="_blank" class="action-link">CV</a>
        </div>
      </aside>
      <section class="editorial-main">
        <article>
          <h2>Manifesto</h2>
          ${config.about.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </article>
        <article>
          <h2>Selected Work</h2>
          ${config.projects
            .slice(0, 8)
            .map(
              (project) => `
              <div class="editorial-project">
                <div class="project-media">${mediaTag(project.preview, project.title)}</div>
                <div>
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <div class="actions">${linkButtons(project.report, project.github, project.demo)}</div>
                </div>
              </div>`
            )
            .join('')}
        </article>
        <article class="editorial-banner">
          <p>Interested in robotics, AI research collaborations, or live visual systems for events.</p>
          <a href="${config.hero.socials.email}" class="action-link">Contact</a>
        </article>
        <article class="editorial-columns">
          <div>
            <h2>Education</h2>
            ${config.education
              .map(
                (education) => `
                <div class="list-card">
                  <h3>${education.title} ${education.course}</h3>
                  <p>${education.period} • ${education.graduationDate}</p>
                  <p>${education.skills}</p>
                </div>`
              )
              .join('')}
          </div>
          <div>
            <h2>Experience</h2>
            ${config.jobs
              .map(
                (job) => `
                <div class="list-card">
                  <h3>${job.role}</h3>
                  <p>${job.company} • ${job.location}</p>
                  <p>${job.period} • ${job.jobKind}</p>
                  <p>${job.tech}</p>
                </div>`
              )
              .join('')}
          </div>
        </article>
      </section>
    </main>
  `
}

function renderTerminal() {
  const topProjects = config.projects.slice(0, 9)

  return `
    ${topSwitcher()}
    <main class="layout layout-terminal">
      <section class="terminal-hero">
        <img src="${config.hero.profilePicture}" alt="${config.hero.name}">
        <div>
          <p class="cmd">> boot --profile ${config.hero.name.toLowerCase().replaceAll(' ', '_')}</p>
          <h1>${config.hero.name}</h1>
          <p>${config.hero.title} · ${config.hero.subtitle} · ${config.hero.university}</p>
          <div class="actions">
            <a href="${config.hero.socials.github}" target="_blank" class="action-link">GitHub</a>
            <a href="${config.hero.socials.linkedin}" target="_blank" class="action-link">LinkedIn</a>
            <a href="${config.hero.socials.cv}" target="_blank" class="action-link">CV</a>
          </div>
        </div>
      </section>
      <section class="terminal-window">
        <header>
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <p>podavini@portfolio:~</p>
        </header>
        <div class="terminal-body">
          <p><span>$ whoami</span> ${config.hero.name}</p>
          <p><span>$ role</span> ${config.hero.title} / ${config.hero.subtitle}</p>
          <p><span>$ institute</span> ${config.hero.university}</p>
          <p><span>$ cat about.txt</span></p>
          ${config.about.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          <div class="terminal-info-split">
            <section class="terminal-info-block">
              <p class="cmd">$ cat education.log</p>
              ${config.education
                .map(
                  (education) => `
                  <article class="terminal-info-row">
                    <p><strong>${education.course}</strong></p>
                    <p>${education.period} · ${education.graduationDate}</p>
                    <p>${education.skills}</p>
                  </article>`
                )
                .join('')}
            </section>
            <section class="terminal-info-block">
              <p class="cmd">$ cat previous-experience.log</p>
              ${config.jobs
                .map(
                  (job) => `
                  <article class="terminal-info-row">
                    <p><strong>${job.role}</strong> @ ${job.company}</p>
                    <p>${job.period} · ${job.location}</p>
                    <p>${job.jobKind}</p>
                  </article>`
                )
                .join('')}
            </section>
          </div>
          <p><span>$ ls projects</span></p>
          <nav class="terminal-project-nav" aria-label="Project quick navigation">
            ${topProjects
              .map(
                (project, index) =>
                  `<a class="terminal-nav-link" href="#tp-${index + 1}" data-target="tp-${index + 1}">${String(index + 1).padStart(2, '0')} · ${project.title}</a>`
              )
              .join('')}
          </nav>
          ${topProjects
            .map(
              (project, index) => `
              <article id="tp-${index + 1}" class="terminal-project" tabindex="0">
                <details class="terminal-project-disclosure" ${index === 0 ? 'open' : ''}>
                  <summary>
                    <div class="terminal-project-head">
                      <p class="cmd">> [${String(index + 1).padStart(2, '0')}] ${project.title}</p>
                      <div class="terminal-tags">${project.topics
                        .split(',')
                        .map((tag) => tag.trim())
                        .filter(Boolean)
                        .slice(0, 3)
                        .map((tag) => `<span>${tag}</span>`)
                        .join('')}</div>
                    </div>
                    <span class="terminal-open-state"></span>
                  </summary>
                  <div class="terminal-project-content">
                    ${project.subtitle ? `<p class="terminal-subtitle">${project.subtitle}</p>` : ''}
                    <div class="project-media">${mediaTag(project.preview, project.title)}</div>
                    <p>${project.description}</p>
                    <div class="actions">${linkButtons(project.report, project.github, project.demo)}</div>
                  </div>
                </details>
              </article>`
            )
            .join('')}
        </div>
      </section>
    </main>
  `
}

function enhanceTerminalInteractions() {
  const cards = document.querySelectorAll<HTMLElement>('.terminal-project')
  const links = document.querySelectorAll<HTMLAnchorElement>('.terminal-nav-link')

  if (cards.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.2 }
    )

    cards.forEach((card) => observer.observe(card))
  } else {
    cards.forEach((card) => card.classList.add('in-view'))
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const targetId = link.dataset.target
      if (!targetId) {
        return
      }

      const target = document.getElementById(targetId)
      if (!target) {
        return
      }

      const disclosure = target.querySelector<HTMLDetailsElement>('details')
      if (disclosure && !disclosure.open) {
        disclosure.open = true
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
      links.forEach((item) => item.classList.remove('active'))
      link.classList.add('active')
    })
  })
}
