export async function initApp(lang) {
    // 1. Carica il file config in base alla lingua passata
    const module = await import(`/config_${lang}.js`);
    const config = module.config;
    const ui = config.ui;

    const currentYear = new Date().getFullYear();

    // 2. Genera blocchi HTML Dinamici
    const aboutHtml = config.about.map(p => `<p>${p}</p>`).join('');

    const projectsHtml = config.projects.map((proj, index) => {
        const isEven = index % 2 === 0;
        const altText = `Luca Podavini - ${ui.previewAlt} ${proj.title}${proj.subtitle ? ', ' + proj.subtitle : ''}`;

        const mediaTag = proj.preview.endsWith('.mp4')
            ? `<video src="${proj.preview}" autoplay muted loop playsinline aria-label="${altText}" title="${altText}" class="w-full rounded border border-gray-600/50 shadow-md bg-gray-900 object-cover"></video>`
            : `<img src="${proj.preview}" alt="${altText}" title="${altText}" class="w-full rounded border border-gray-600/50 shadow-md bg-gray-900 object-cover">`;

        let buttonsHtml = '';
        if (proj.report && proj.report.trim() !== "") buttonsHtml += `<a href="${proj.report}" target="_blank" class="btn-outline"><i class="fa-regular fa-file-lines"></i> REPORT</a>`;
        if (proj.github && proj.github.trim() !== "") buttonsHtml += `<a href="${proj.github}" target="_blank" class="btn-outline"><i class="fa-brands fa-github"></i> GITHUB</a>`;
        if (proj.demo && proj.demo.trim() !== "") buttonsHtml += `<a href="${proj.demo}" target="_blank" class="btn-outline"><i class="fa-brands fa-youtube"></i> DEMO</a>`;

        const hasSubtitle = proj.subtitle && proj.subtitle.trim() !== "";
        const titleMargin = hasSubtitle ? 'mb-1' : 'mb-4';
        const subtitleHtml = hasSubtitle ? `<p class="text-[0.8rem] tracking-[0.1em] text-gray-200 mb-4 uppercase font-medium">${proj.subtitle}</p>` : '';

        return `
            <div id="${proj.id}" class="project-card flex flex-col w-full opacity-0 transition-opacity duration-500">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                    <div class="order-1 ${isEven ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center project-text-header">
                        <h3 class="text-[0.9rem] tracking-[0.15em] font-bold text-white ${titleMargin} leading-snug uppercase">${proj.title}</h3>
                        ${subtitleHtml}
                        <p class="text-sm text-gray-400 italic font-medium leading-relaxed">${proj.topics}</p>
                        <div class="side-content hidden mt-6">
                            <p class="text-sm text-gray-300 leading-relaxed text-justify mb-8">${proj.description}</p>
                            <div class="w-full flex flex-wrap justify-center gap-4">${buttonsHtml}</div>
                        </div>
                    </div>
                    <div class="order-2 ${isEven ? 'md:order-2' : 'md:order-1'} project-media">
                        <div class="p-1.5 bg-gray-800/40 rounded-lg border border-gray-700/50 shadow-lg">${mediaTag}</div>
                    </div>
                </div>
                <div class="order-3 bottom-content">
                    <p class="text-sm text-gray-300 leading-relaxed text-justify mb-8">${proj.description}</p>
                    <div class="w-full flex flex-wrap justify-center gap-4">${buttonsHtml}</div>
                </div>
                ${index !== config.projects.length - 1 ? '<div class="divider-wide w-full mt-12 mb-10 order-4"></div>' : ''}
            </div>
        `;
    }).join('');

    const educationHtml = config.education.map((edu, index) => {
        let buttonsHtml = '';
        if (edu.thesisPdf || edu.github) {
            buttonsHtml += `<div class="mt-8 flex flex-wrap justify-center gap-4 w-full">`;
            if (edu.thesisPdf && edu.thesisPdf.trim() !== "") buttonsHtml += `<a href="${edu.thesisPdf}" target="_blank" class="btn-outline"><i class="fa-solid fa-graduation-cap"></i> ${ui.thesis}</a>`;
            if (edu.github && edu.github.trim() !== "") buttonsHtml += `<a href="${edu.github}" target="_blank" class="btn-outline"><i class="fa-brands fa-github"></i> GITHUB</a>`;
            buttonsHtml += `</div>`;
        }

        return `
            <div>
                <div class="flex justify-between items-center gap-4 mb-6">
                    <div>
                        <h3 class="text-[0.9rem] tracking-[0.15em] font-bold text-white uppercase"><span class="font-bold">${edu.title}</span></h3>
                        <p class="text-sm text-gray-300 mt-1 font-medium">${edu.course}</p>
                    </div>
                    <img src="${edu.logo}" alt="${edu.title} Logo" class="w-14 h-14 rounded object-cover border border-gray-600 bg-white shrink-0">
                </div>
                <div class="w-full mb-6 bg-gray-800/20 p-4 rounded border border-gray-700/50 shadow-md">
                    <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.period}</span> <span class="text-gray-200">${edu.period}</span></div>
                    <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.gradDate}</span> <span class="text-gray-200">${edu.graduationDate}</span></div>
                    <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.grade}</span> <span class="text-gray-200">${edu.finalGrade}</span></div>
                    <div class="table-row-custom border-b-0"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.thesis}</span> <span class="text-gray-200">${edu.thesisTitle}</span></div>
                </div>
                <p class="text-xs font-medium text-gray-400 leading-relaxed">${edu.skills}</p>
                ${buttonsHtml}
                ${index !== config.education.length - 1 ? '<div class="divider-wide mt-10"></div>' : ''}
            </div>
        `;
    }).join('');

    const jobsHtml = config.jobs.map((job, index) => {
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
                    <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.period}</span> <span class="text-gray-200">${job.period}</span></div>
                    <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.jobKind}</span> <span class="text-gray-200">${job.jobKind}</span></div>
                    <div class="table-row-custom"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.role}</span> <span class="text-gray-200">${job.role}</span></div>
                    <div class="table-row-custom border-b-0"><span class="text-gray-400 tracking-wider text-xs font-semibold">${ui.stack}</span> <span class="text-gray-200">${job.stack}</span></div>
                </div>
                <p class="text-xs italic text-gray-400 mb-4 border-l-2 border-gray-600 pl-3">${job.note}</p>
                <p class="text-xs font-medium text-gray-300 leading-relaxed">${job.tech}</p>
                ${index !== config.jobs.length - 1 ? '<div class="divider-wide mt-10"></div>' : ''}
            </div>
        `;
    }).join('');

    // 3. Inietta l'intero Layout nel DOM
    document.getElementById('app').innerHTML = `
        <div class="max-w-3xl mx-auto central-band min-h-screen relative flex flex-col">
            
            <div class="absolute top-6 right-8 z-50 flex gap-2 items-center text-white">
                <button onclick="localStorage.setItem('preferredLang', 'en'); window.location.href='/en/';" class="lang-btn ${lang === 'en' ? 'active' : ''}">EN</button>
                <span class="text-gray-500 text-xs">|</span>
                <button onclick="localStorage.setItem('preferredLang', 'it'); window.location.href='/';" class="lang-btn ${lang === 'it' ? 'active' : ''}">IT</button>
            </div>

            <div class="px-6 py-16 md:px-14 flex-grow">
                <header class="text-center mb-16">
                    <img src="${config.hero.profilePicture}" alt="Luca Podavini" class="w-24 md:w-28 mx-auto rounded-lg object-cover mb-6 shadow-xl border border-gray-600 mt-8 md:mt-0">
                    <h1 class="text-3xl md:text-5xl tracking-[0.3em] font-light mb-8 text-white">${config.hero.name}</h1>
                    <h2 class="text-base md:text-lg tracking-widest mb-2 font-medium">${config.hero.title}</h2>
                    <h3 class="text-sm md:text-md text-gray-300 font-light mb-3">${config.hero.subtitle}</h3>
                    <p class="text-xs md:text-sm italic text-gray-400 mb-8">${config.hero.university}</p>
                    <div class="flex justify-center gap-4 mb-10">
                        <a href="${config.hero.socials.github}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" target="_blank" title="${ui.githubTitle}"><i class="fa-brands fa-github text-lg"></i></a>
                        <a href="${config.hero.socials.linkedin}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" target="_blank" title="${ui.linkedinTitle}"><i class="fa-brands fa-linkedin text-lg"></i></a>
                        <a href="${config.hero.socials.email}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" title="${ui.emailTitle}"><i class="fa-solid fa-envelope text-lg"></i></a>
                        <a href="${config.hero.socials.cv}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" target="_blank" title="${ui.cvTitle}"><i class="fa-solid fa-address-card text-lg"></i></a>
                        <a href="${lang === 'it' ? '/links/' : '/en/links/'}" class="btn-outline w-10 h-10 flex items-center justify-center rounded-full !px-0" title="${ui.linksTitle}"><i class="fa-solid fa-link text-lg"></i></a>
                    </div>
                    <div class="flex flex-wrap justify-center gap-3">
                        <a href="#about" class="btn-outline text-xs">${ui.aboutTitle}</a>
                        <a href="#projects" class="btn-outline text-xs">${ui.projectsTitle}</a>
                        <a href="#education" class="btn-outline text-xs">${ui.educationTitle}</a>
                        <a href="#jobs" class="btn-outline text-xs">${ui.jobsTitle}</a>
                    </div>
                </header>

                <section id="about" class="pt-8 scroll-mt-4">
                    <div class="divider-short"></div>
                    <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">${ui.aboutTitle}</h2>
                    <div class="divider-wide"></div>
                    <div class="space-y-6 text-sm leading-relaxed text-gray-300 italic text-justify">${aboutHtml}</div>
                </section>

                <section id="projects" class="pt-16 scroll-mt-4">
                    <div class="divider-short"></div>
                    <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">${ui.projectsTitle}</h2>
                    <div class="divider-wide mb-10"></div>
                    ${projectsHtml}
                </section>

                <section id="education" class="pt-16 scroll-mt-4">
                    <div class="divider-short"></div>
                    <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">${ui.educationTitle}</h2>
                    <div class="divider-wide"></div>
                    ${educationHtml}
                </section>

                <section id="jobs" class="pt-16 scroll-mt-4">
                    <div class="divider-short"></div>
                    <h2 class="text-center text-xl tracking-[0.3em] font-medium uppercase mb-6 text-white">${ui.jobsTitle}</h2>
                    <div class="divider-wide"></div>
                    ${jobsHtml}
                </section>
            </div>

            <footer class="mt-auto border-t border-gray-600/50 pt-10 pb-8 text-center relative bg-black/20">
                <h3 class="text-sm tracking-widest uppercase mb-8 text-gray-300">${ui.connect}</h3>
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
                <p class="text-xs text-gray-500 mt-10">&copy; ${currentYear} Podavini Luca. ${ui.rights}</p>
            </footer>
        </div>

        <button id="scrollTopBtn" class="fixed bottom-8 right-8 bg-[#374151] hover:bg-gray-200 hover:text-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 pointer-events-none z-50 transition-all border border-gray-500">
            <i class="fa-solid fa-chevron-up"></i>
        </button>
    `;

    // 4. Logica Funzionale Post-Render
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.remove("opacity-0", "pointer-events-none");
            scrollTopBtn.classList.add("opacity-100");
        } else {
            scrollTopBtn.classList.add("opacity-0", "pointer-events-none");
            scrollTopBtn.classList.remove("opacity-100");
        }
    });
    
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    function alignProjectCards() {
        const isMobile = window.innerWidth < 768;
        document.querySelectorAll('.project-card').forEach(card => {
            const media = card.querySelector('.project-media');
            const sideContent = card.querySelector('.side-content');
            const bottomContent = card.querySelector('.bottom-content');
            const textHeader = card.querySelector('.project-text-header');

            if (isMobile) {
                sideContent.classList.add('hidden');
                bottomContent.classList.remove('hidden');
            } else {
                sideContent.classList.remove('hidden');
                bottomContent.classList.add('hidden');
                if (textHeader.offsetHeight > media.offsetHeight + 70) {
                    sideContent.classList.add('hidden');
                    bottomContent.classList.remove('hidden');
                }
            }
            card.classList.remove('opacity-0');
        });
    }

    // Esegui allineamento dopo il caricamento delle immagini
    setTimeout(alignProjectCards, 150);
    window.addEventListener('resize', alignProjectCards);

    // 5. Gestione dell'ancora al caricamento (Scroll to Hash)
    if (window.location.hash) {
        // Aspettiamo un istante che le immagini e le card si allineino
        setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200); 
    }
}

export async function initLinks(lang) {
    const module = await import(`/config_${lang}.js`);
    const config = module.config;
    const linksData = config.links;

    const sectionsHtml = linksData.sections.map(section => `
        <div class="mb-12 w-full">
            <h3 class="text-[0.75rem] tracking-[0.3em] text-gray-300 font-bold uppercase mb-6 text-center drop-shadow-md">${section.title}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                ${section.items.map(item => {
                    // Se l'elemento è un sottotitolo/divisore
                    if (item.type === 'subtitle') {
                        return `
                            <div class="col-span-1 md:col-span-6 flex items-center gap-4 mt-2 mb-1">
                                <div class="h-px bg-gray-600/50 flex-grow"></div>
                                <span class="text-[0.65rem] tracking-[0.2em] text-gray-500 font-bold uppercase">${item.label}</span>
                                <div class="h-px bg-gray-600/50 flex-grow"></div>
                            </div>
                        `;
                    }
                    
                    // Se è un normale bottone link
                    return `
                        <a href="${item.url}" target="_blank" class="w-full py-4 px-6 bg-gray-800/60 border border-gray-600/50 hover:bg-gray-700/80 hover:border-gray-400 transition-all rounded-xl flex items-center justify-between group backdrop-blur-sm shadow-lg ${item.desktopClass || 'md:col-span-3'}">
                            <i class="${item.icon} text-lg text-gray-400 group-hover:text-white w-8 text-left transition-colors"></i>
                            <span class="text-sm font-medium text-gray-200 group-hover:text-white flex-grow text-center tracking-wide transition-colors">${item.label}</span>
                            <i class="fa-solid fa-chevron-right text-[10px] text-gray-500 group-hover:text-gray-300 w-8 text-right transition-colors"></i>
                        </a>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');

    document.getElementById('app').innerHTML = `
        <div class="max-w-4xl mx-auto px-4 py-8 md:py-16 min-h-screen flex flex-col items-center justify-center">
            
                <div class="w-full bg-[#1a1e24]/70 backdrop-blur-md rounded-[2rem] p-6 md:p-12 shadow-2xl border border-gray-700/50">
                    <div class="absolute top-6 right-8 z-50 flex gap-2 items-center text-white">
                    <button onclick="localStorage.setItem('preferredLang', 'en'); window.location.href='/en/links';" class="lang-btn ${lang === 'en' ? 'active' : ''}">EN</button>
                    <span class="text-gray-500 text-xs">|</span>
                    <button onclick="localStorage.setItem('preferredLang', 'it'); window.location.href='/links';" class="lang-btn ${lang === 'it' ? 'active' : ''}">IT</button>
                </div>


                <header class="text-center mb-12">
                    <img src="${config.hero.profilePicture}" alt="Luca Podavini" class="w-28 h-28 mx-auto rounded-full object-cover mb-6 shadow-xl border-2 border-gray-500">
                    <h1 class="text-2xl md:text-3xl tracking-[0.2em] font-bold text-white mb-3 drop-shadow-lg">${config.hero.name}</h1>
                    <p class="text-xs md:text-sm tracking-widest text-gray-300 leading-relaxed px-4 font-medium">${linksData.bio}</p>
                </header>

                <main class="w-full flex-grow">
                    ${sectionsHtml}
                </main>
            </div>

            <footer class="mt-8 pb-4 text-center">
                <p class="text-[10px] text-gray-400 tracking-widest uppercase">&copy; ${new Date().getFullYear()} Luca Podavini</p>
            </footer>
        </div>
    `;
}