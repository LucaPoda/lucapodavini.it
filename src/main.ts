import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'
import { config } from './config'

document.documentElement.classList.add('scroll-smooth')

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App container not found')
}

app.innerHTML = `
  <div class="min-h-screen antialiased">
    <div class="max-w-3xl mx-auto central-band min-h-screen relative flex flex-col">
      <div class="px-6 py-16 md:px-14 flex-grow">
        <header class="text-center mb-16" id="header-container"></header>

        <section id="about" class="pt-8 scroll-mt-4">
          <div class="divider-short"></div>
          <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">About Me</h2>
          <div class="divider-wide"></div>
          <div id="about-container" class="space-y-6 text-sm leading-relaxed text-gray-300 italic text-justify"></div>
        </section>

        <section id="projects" class="pt-16 scroll-mt-4">
          <div class="divider-short"></div>
          <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">Projects Portfolio</h2>
          <div class="divider-wide mb-10"></div>
          <div id="projects-container"></div>
        </section>

        <section id="education" class="pt-16 scroll-mt-4">
          <div class="divider-short"></div>
          <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">Education</h2>
          <div class="divider-wide"></div>
          <div id="education-container"></div>
        </section>

        <section id="jobs" class="pt-16 scroll-mt-4">
          <div class="divider-short"></div>
          <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">Past Jobs</h2>
          <div class="divider-wide"></div>
          <div id="jobs-container"></div>
        </section>
      </div>

      <footer class="mt-auto border-t border-gray-600/50 pt-10 pb-8 text-center relative bg-black/20">
        <h3 class="text-sm tracking-widest uppercase mb-8 text-gray-300">Let's build something great.</h3>
        <div id="footer-links"></div>
        <p class="text-xs text-gray-500 mt-10">&copy; <span id="year"></span> Podavini Luca. All rights reserved.</p>
      </footer>
    </div>

    <button id="scrollTopBtn" class="fixed bottom-8 right-8 bg-[#374151] hover:bg-gray-200 hover:text-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 pointer-events-none z-50 transition-all border border-gray-500">
      <i class="fa-solid fa-chevron-up"></i>
    </button>
  </div>
`

document.getElementById('year')!.textContent = String(new Date().getFullYear())

document.getElementById('header-container')!.innerHTML = `
  <img src="${config.hero.profilePicture}" alt="Luca Podavini Profile Picture" class="w-24 md:w-28 mx-auto rounded-lg object-cover mb-6 shadow-xl border border-gray-600">
  <h1 class="text-3xl md:text-5xl tracking-[0.3em] font-light mb-8 text-white">${config.hero.name}</h1>
  <h2 class="text-base md:text-lg tracking-widest mb-2 font-medium">${config.hero.title}</h2>
  <h3 class="text-sm md:text-md text-gray-300 font-light mb-3">${config.hero.subtitle}</h3>
  <p class="text-xs md:text-sm italic text-gray-400 mb-8">${config.hero.university}</p>
  <div class="flex justify-center gap-4 mb-10">
    <a href="${config.hero.socials.github}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" target="_blank" title="Github Page"><i class="fa-brands fa-github text-lg"></i></a>
    <a href="${config.hero.socials.linkedin}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" target="_blank" title="LinkedIn Profile"><i class="fa-brands fa-linkedin text-lg"></i></a>
    <a href="${config.hero.socials.email}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" title="Email Me"><i class="fa-solid fa-envelope text-lg"></i></a>
    <a href="${config.hero.socials.cv}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" target="_blank" title="Curriculum Vitae"><i class="fa-solid fa-address-card text-lg"></i></a>
  </div>
  <div class="flex flex-wrap justify-center gap-3">
    <a href="#about" class="btn-outline text-xs">About Me</a>
    <a href="#projects" class="btn-outline text-xs">Projects</a>
    <a href="#education" class="btn-outline text-xs">Education</a>
    <a href="#jobs" class="btn-outline text-xs">Jobs</a>
  </div>
`

document.getElementById('about-container')!.innerHTML = config.about.map((paragraph) => `<p>${paragraph}</p>`).join('')

const projectsHtml = config.projects
  .map((project, index) => {
    const isEven = index % 2 === 0
    const altText = `Preview: ${project.title}${project.subtitle ? `, ${project.subtitle}` : ''}`

    const mediaTag = project.preview.endsWith('.mp4')
      ? `<video src="${project.preview}" autoplay muted loop playsinline aria-label="${altText}" title="${altText}" class="w-full rounded border border-gray-600/50 shadow-md bg-gray-900 object-cover"></video>`
      : `<img src="${project.preview}" alt="${altText}" title="${altText}" class="w-full rounded border border-gray-600/50 shadow-md bg-gray-900 object-cover">`

    let buttonsHtml = ''
    if (project.report.trim() !== '') {
      buttonsHtml += `<a href="${project.report}" target="_blank" class="btn-outline"><i class="fa-regular fa-file-lines"></i> REPORT</a>`
    }
    if (project.github.trim() !== '') {
      buttonsHtml += `<a href="${project.github}" target="_blank" class="btn-outline"><i class="fa-brands fa-github"></i> GITHUB</a>`
    }
    if (project.demo.trim() !== '') {
      buttonsHtml += `<a href="${project.demo}" target="_blank" class="btn-outline"><i class="fa-brands fa-youtube"></i> DEMO</a>`
    }

    const hasSubtitle = project.subtitle.trim() !== ''
    const titleMargin = hasSubtitle ? 'mb-1' : 'mb-4'
    const subtitleHtml = hasSubtitle
      ? `<p class="text-[0.8rem] tracking-[0.1em] text-gray-200 mb-4 uppercase font-medium">${project.subtitle}</p>`
      : ''

    return `
      <div id="${project.id}" class="project-card flex flex-col w-full opacity-0 transition-opacity duration-500">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
          <div class="order-1 ${isEven ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center project-text-header">
            <h3 class="text-[0.9rem] tracking-[0.15em] font-bold text-white ${titleMargin} leading-snug uppercase">
              ${project.title}
            </h3>
            ${subtitleHtml}
            <p class="text-sm text-gray-400 italic font-medium leading-relaxed">
              ${project.topics}
            </p>

            <div class="side-content hidden mt-6">
              <p class="text-sm text-gray-300 leading-relaxed text-justify mb-8">
                ${project.description}
              </p>
              <div class="w-full flex flex-wrap justify-center gap-4">
                ${buttonsHtml}
              </div>
            </div>
          </div>

          <div class="order-2 ${isEven ? 'md:order-2' : 'md:order-1'} project-media">
            <div class="p-1.5 bg-gray-800/40 rounded-lg border border-gray-700/50 shadow-lg">
              ${mediaTag}
            </div>
          </div>
        </div>

        <div class="order-3 bottom-content">
          <p class="text-sm text-gray-300 leading-relaxed text-justify mb-8">
            ${project.description}
          </p>
          <div class="w-full flex flex-wrap justify-center gap-4">
            ${buttonsHtml}
          </div>
        </div>

        ${index !== config.projects.length - 1 ? '<div class="divider-wide w-full mt-12 mb-10 order-4"></div>' : ''}
      </div>
    `
  })
  .join('')

document.getElementById('projects-container')!.innerHTML = projectsHtml

const educationHtml = config.education
  .map((education, index) => {
    let buttonsHtml = ''
    if (education.thesisPdf || education.github) {
      buttonsHtml += `<div class="mt-8 flex flex-wrap justify-center gap-4 w-full">`
      if (education.thesisPdf.trim() !== '') {
        buttonsHtml += `<a href="${education.thesisPdf}" target="_blank" class="btn-outline"><i class="fa-solid fa-graduation-cap"></i> THESIS</a>`
      }
      if (education.github.trim() !== '') {
        buttonsHtml += `<a href="${education.github}" target="_blank" class="btn-outline"><i class="fa-brands fa-github"></i> GITHUB</a>`
      }
      buttonsHtml += `</div>`
    }

    return `
      <div>
        <div class="flex justify-between items-center gap-4 mb-6">
          <div>
            <h3 class="text-[0.9rem] tracking-[0.15em] font-bold text-white uppercase"><span class="font-bold">${education.title}</span></h3>
            <p class="text-sm text-gray-300 mt-1 font-medium">${education.course}</p>
          </div>
          <img src="${education.logo}" alt="${education.title} Logo" class="w-14 h-14 rounded object-cover border border-gray-600 bg-white shrink-0">
        </div>
        <div class="w-full mb-6 bg-gray-800/20 p-4 rounded border border-gray-700/50 shadow-md">
          <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">PERIOD:</span> <span class="text-gray-200">${education.period}</span></div>
          <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">GRADUATION DATE:</span> <span class="text-gray-200">${education.graduationDate}</span></div>
          <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">FINAL GRADE:</span> <span class="text-gray-200">${education.finalGrade}</span></div>
          <div class="table-row-custom border-b-0"><span class="text-gray-400 tracking-wider text-xs font-semibold">THESIS:</span> <span class="text-gray-200">${education.thesisTitle}</span></div>
        </div>
        <p class="text-xs font-medium text-gray-400 leading-relaxed">${education.skills}</p>
        ${buttonsHtml}
        ${index !== config.education.length - 1 ? '<div class="divider-wide mt-10"></div>' : ''}
      </div>
    `
  })
  .join('')

document.getElementById('education-container')!.innerHTML = educationHtml

const jobsHtml = config.jobs
  .map((job, index) => {
    return `
      <div>
        <div class="flex justify-between items-center gap-4 mb-6">
          <div>
            <h3 class="text-[0.9rem] tracking-[0.15em] font-bold text-white mb-1 uppercase">${job.role}</h3>
            <p class="text-sm font-semibold tracking-wider text-gray-200">${job.company} <span class="font-normal italic text-gray-400 ml-1">| ${job.location}</span></p>
          </div>
          <img src="${job.companyLogo}" alt="${job.company} Logo" class="h-8 md:h-10 object-contain shrink-0">
        </div>
        <div class="w-full mb-6 bg-gray-800/20 p-4 rounded border border-gray-700/50 shadow-md">
          <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">PERIOD:</span> <span class="text-gray-200">${job.period}</span></div>
          <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">JOB KIND:</span> <span class="text-gray-200">${job.jobKind}</span></div>
          <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">ROLE:</span> <span class="text-gray-200">${job.role}</span></div>
          <div class="table-row-custom border-b-0"><span class="text-gray-400 tracking-wider text-xs font-semibold">STACK:</span> <span class="text-gray-200">${job.stack}</span></div>
        </div>
        <p class="text-xs italic text-gray-400 mb-4 border-l-2 border-gray-600 pl-3">${job.note}</p>
        <p class="text-xs font-medium text-gray-300 leading-relaxed">${job.tech}</p>
        ${index !== config.jobs.length - 1 ? '<div class="divider-wide mt-10"></div>' : ''}
      </div>
    `
  })
  .join('')

document.getElementById('jobs-container')!.innerHTML = jobsHtml

document.getElementById('footer-links')!.innerHTML = `
  <div class="flex flex-col md:flex-row justify-center gap-6 md:gap-14 mb-4 text-sm px-6">
    <div class="flex flex-col gap-4 items-start mx-auto md:mx-0">
      <a href="${config.hero.socials.github}" target="_blank" class="text-gray-400 hover:text-white transition flex items-center gap-3">
        <i class="fa-brands fa-github text-lg w-5 text-center"></i> ${config.hero.socials.githubHandle}
      </a>
      <a href="${config.hero.socials.linkedin}" target="_blank" class="text-gray-400 hover:text-white transition flex items-center gap-3">
        <i class="fa-brands fa-linkedin text-lg w-5 text-center"></i> ${config.hero.socials.linkedinHandle}
      </a>
    </div>
    <div class="flex flex-col gap-4 items-start mx-auto md:mx-0">
      <a href="${config.hero.socials.email}" class="text-gray-400 hover:text-white transition flex items-center gap-3">
        <i class="fa-solid fa-envelope text-lg w-5 text-center"></i> ${config.hero.socials.emailAddress}
      </a>
      <a href="${config.hero.socials.uniEmail}" class="text-gray-400 hover:text-white transition flex items-center gap-3">
        <i class="fa-solid fa-graduation-cap text-lg w-5 text-center"></i> ${config.hero.socials.uniEmailAddress}
      </a>
    </div>
  </div>
`

const scrollTopButton = document.getElementById('scrollTopBtn') as HTMLButtonElement

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopButton.classList.remove('opacity-0', 'pointer-events-none')
    scrollTopButton.classList.add('opacity-100')
  } else {
    scrollTopButton.classList.add('opacity-0', 'pointer-events-none')
    scrollTopButton.classList.remove('opacity-100')
  }
})

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

function alignProjectCards() {
  const isMobile = window.innerWidth < 768

  document.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
    const media = card.querySelector<HTMLElement>('.project-media')
    const sideContent = card.querySelector<HTMLElement>('.side-content')
    const bottomContent = card.querySelector<HTMLElement>('.bottom-content')
    const textHeader = card.querySelector<HTMLElement>('.project-text-header')

    if (!media || !sideContent || !bottomContent || !textHeader) {
      return
    }

    if (isMobile) {
      sideContent.classList.add('hidden')
      bottomContent.classList.remove('hidden')
    } else {
      sideContent.classList.remove('hidden')
      bottomContent.classList.add('hidden')

      const textHeight = textHeader.offsetHeight
      const mediaHeight = media.offsetHeight

      if (textHeight > mediaHeight + 70) {
        sideContent.classList.add('hidden')
        bottomContent.classList.remove('hidden')
      }
    }

    card.classList.remove('opacity-0')
  })
}

window.addEventListener('load', () => {
  alignProjectCards()
  setTimeout(alignProjectCards, 500)
})

window.addEventListener('resize', alignProjectCards)
