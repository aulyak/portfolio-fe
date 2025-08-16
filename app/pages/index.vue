<template>
  <div class="single-page-app" v-cloak>
    <!-- Scroll Progress Indicator -->
    <ScrollProgress :activeSection="activeSection" :scrollToSection="scrollToSection" />
    
    <!-- Cyberpunk Navigation -->
    <nav class="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-lg border border-purple-500/30 rounded-full px-2 sm:px-4 md:px-6 py-2 sm:py-3 shadow-xl w-[calc(100vw-1rem)] sm:w-auto max-w-[calc(100vw-1rem)] mx-auto">
      <div class="flex items-center justify-between sm:justify-center gap-1 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap">
        <a 
          href="#home" 
          @click="scrollToSection('home')"
          class="nav-link text-cyan-400 hover:text-purple-400 transition-colors duration-300 font-mono text-[9px] sm:text-sm flex-shrink-0 px-0.5 sm:px-2"
          :class="{ 'text-purple-400': activeSection === 'home', 'text-cyan-400': activeSection !== 'home' }"
        >
          01_HOME
        </a>
        <a 
          href="#about" 
          @click="scrollToSection('about')"
          class="nav-link text-cyan-400 hover:text-purple-400 transition-colors duration-300 font-mono text-[9px] sm:text-sm flex-shrink-0 px-0.5 sm:px-2"
          :class="{ 'text-purple-400': activeSection === 'about', 'text-cyan-400': activeSection !== 'about' }"
        >
          02_ABOUT
        </a>
        <a 
          href="#expertise" 
          @click="scrollToSection('expertise')"
          class="nav-link text-cyan-400 hover:text-purple-400 transition-colors duration-300 font-mono text-[9px] sm:text-sm flex-shrink-0 px-0.5 sm:px-2"
          :class="{ 'text-purple-400': activeSection === 'expertise', 'text-cyan-400': activeSection !== 'expertise' }"
        >
          03_SKILLS
        </a>
        <a 
          href="#experience" 
          @click="scrollToSection('experience')"
          class="nav-link text-cyan-400 hover:text-purple-400 transition-colors duration-300 font-mono text-[9px] sm:text-sm flex-shrink-0 px-0.5 sm:px-2"
          :class="{ 'text-purple-400': activeSection === 'experience', 'text-cyan-400': activeSection !== 'experience' }"
        >
          04_XP
        </a>
        <a 
          href="#projects" 
          @click="scrollToSection('projects')"
          class="nav-link text-cyan-400 hover:text-purple-400 transition-colors duration-300 font-mono text-[9px] sm:text-sm flex-shrink-0 px-0.5 sm:px-2"
          :class="{ 'text-purple-400': activeSection === 'projects', 'text-cyan-400': activeSection !== 'projects' }"
        >
          05_WORK
        </a>
        <a 
          href="#contact" 
          @click="scrollToSection('contact')"
          class="nav-link text-cyan-400 hover:text-purple-400 transition-colors duration-300 font-mono text-[9px] sm:text-sm flex-shrink-0 px-0.5 sm:px-2"
          :class="{ 'text-purple-400': activeSection === 'contact', 'text-cyan-400': activeSection !== 'contact' }"
        >
          06_LINK
        </a>
      </div>
    </nav>

    <!-- Home Section - Cyberpunk Hero -->
    <section id="home" class="section min-h-screen flex items-center relative overflow-hidden" ref="homeSection">
      <!-- Cyberpunk Matrix Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <div class="matrix-bg"></div>
        <div class="cyber-grid"></div>
      </div>
      
      <!-- Glitch overlay -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="glitch-overlay"></div>
      </div>

      <UContainer class="relative z-10">
        <div class="section-content text-center max-w-4xl mx-auto py-24">
          <!-- Terminal-style header -->
          <div class="terminal-header mb-8">
            <div class="flex items-center justify-center space-x-4 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style="animation-delay: 0.5s"></div>
              <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse" style="animation-delay: 1s"></div>
            </div>
            <div class="font-mono text-cyan-400 text-sm mb-4">
              <span class="typing-animation">> initializing_portfolio.exe...</span>
            </div>
          </div>

          <h1 class="hero-title text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span class="block text-white glitch-text" data-text="AULYA">AULYA</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 glitch-text-secondary text-3xl sm:text-5xl md:text-7xl" data-text="KHATULISTIVANI">KHATULISTIVANI</span>
          </h1>

          <div class="hero-subtitle mb-8">
            <div class="inline-block border-2 border-cyan-400 px-6 py-2 font-mono text-cyan-400 uppercase tracking-wider cyber-box">
              <span class="glitch-text-small">&lt; FULL_STACK_DEVELOPER /&gt;</span>
            </div>
          </div>

          <div class="hero-icons flex justify-center space-x-8 mb-8">
            <div class="cyber-icon">
              <UIcon name="i-heroicons-code-bracket" class="w-12 h-12 text-cyan-400 hover:text-purple-400 transition-colors duration-300 floating" />
            </div>
            <div class="cyber-icon">
              <UIcon name="i-heroicons-cpu-chip" class="w-12 h-12 text-cyan-400 hover:text-purple-400 transition-colors duration-300 floating" />
            </div>
            <div class="cyber-icon">
              <UIcon name="i-heroicons-command-line" class="w-12 h-12 text-cyan-400 hover:text-purple-400 transition-colors duration-300 floating" />
            </div>
            <div class="cyber-icon">
              <UIcon name="i-heroicons-cloud" class="w-12 h-12 text-cyan-400 hover:text-purple-400 transition-colors duration-300 floating" />
            </div>
          </div>

          <p class="hero-text text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Crafting <span class="text-cyan-400 font-mono">digital_experiences</span> through 
            <span class="text-purple-400 font-mono">clean_code</span> and 
            <span class="text-cyan-400 font-mono">innovative_solutions</span>
          </p>

          <div class="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button @click="scrollToSection('projects')" class="cyber-btn cyber-btn-primary">
              <span class="font-mono text-xs sm:text-sm">[VIEW_PROJECTS]</span>
            </button>
            <button @click="scrollToSection('contact')" class="cyber-btn cyber-btn-secondary">
              <span class="font-mono text-xs sm:text-sm">[CONNECT]</span>
            </button>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- About Section - Cyberpunk Terminal -->
    <section id="about" class="section min-h-screen flex items-center relative overflow-hidden" ref="aboutSection">
      <!-- Cyberpunk background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900">
        <div class="cyber-grid opacity-30"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="section-content py-24">
          <!-- Terminal window -->
          <div class="terminal-window max-w-4xl mx-auto">
            <div class="terminal-header-bar flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-t-lg">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <span class="ml-4 text-gray-400 font-mono text-sm">about_me.json</span>
            </div>
            
            <div class="bg-black/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-b-lg p-8">
              <div class="font-mono text-cyan-400 mb-4">
                <span class="text-purple-400">const</span> <span class="text-white">developer</span> = {
              </div>
              
              <div class="ml-4 space-y-4 text-gray-300">
                <div class="font-mono">
                  <span class="text-cyan-400">name:</span> <span class="text-green-400">"Aulya Khatulistivani"</span>,
                </div>
                <div class="font-mono">
                  <span class="text-cyan-400">role:</span> <span class="text-green-400">"Full Stack Developer"</span>,
                </div>
                <div class="font-mono">
                  <span class="text-cyan-400">passion:</span> [
                  <div class="ml-4">
                    <div><span class="text-green-400">"Creating innovative solutions"</span>,</div>
                    <div><span class="text-green-400">"Building scalable applications"</span>,</div>
                    <div><span class="text-green-400">"Exploring new technologies"</span>,</div>
                    <div><span class="text-green-400">"Solving complex problems"</span></div>
                  </div>
                  ],
                </div>
                <div class="font-mono">
                  <span class="text-cyan-400">description:</span> <span class="text-green-400">"Passionate about crafting digital experiences through clean, efficient code and modern design principles."</span>
                </div>
              </div>
              
              <div class="font-mono text-cyan-400 mt-4">
                };
              </div>
              
              <div class="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button @click="scrollToSection('contact')" class="cyber-btn cyber-btn-primary">
                  <span class="font-mono text-xs sm:text-sm">[GET_IN_TOUCH]</span>
                </button>
                <button @click="scrollToSection('projects')" class="cyber-btn cyber-btn-secondary">
                  <span class="font-mono text-xs sm:text-sm">[VIEW_WORK]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Expertise Section - Cyberpunk Code Matrix -->
    <section id="expertise" class="section min-h-screen flex items-center relative overflow-hidden" ref="expertiseSection">
      <!-- Cyberpunk background -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-gray-900">
        <div class="matrix-bg opacity-20"></div>
        <div class="cyber-grid"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="section-content py-24">
          <!-- Glitch title -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-6xl font-black text-white mb-4 glitch-text" data-text="<EXPERTISE/>">
              &lt;EXPERTISE/&gt;
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p class="text-gray-300 font-mono">&gt; comprehensive_toolkit.loaded()</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <!-- Frontend Development -->
            <div class="cyber-skill-card group">
              <div class="cyber-card-header">
                <UIcon name="i-heroicons-code-bracket" class="w-8 h-8 text-cyan-400" />
                <h3 class="text-xl font-bold text-white font-mono">FRONTEND_DEV</h3>
              </div>
              <div class="cyber-card-content">
                <div class="skill-grid">
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">Nuxt.js</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">Tailwind CSS</span>
                  <span class="skill-tag">SCSS</span>
                </div>
              </div>
            </div>

            <!-- Backend Development -->
            <div class="cyber-skill-card group">
              <div class="cyber-card-header">
                <UIcon name="i-heroicons-server" class="w-8 h-8 text-purple-400" />
                <h3 class="text-xl font-bold text-white font-mono">BACKEND_DEV</h3>
              </div>
              <div class="cyber-card-content">
                <div class="skill-grid">
                  <span class="skill-tag">Node.js</span>
                  <span class="skill-tag">Express.js</span>
                  <span class="skill-tag">Go</span>
                  <span class="skill-tag">PHP</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">PostgreSQL</span>
                  <span class="skill-tag">MongoDB</span>
                  <span class="skill-tag">Redis</span>
                </div>
              </div>
            </div>

            <!-- DevOps & Cloud -->
            <div class="cyber-skill-card group">
              <div class="cyber-card-header">
                <UIcon name="i-heroicons-cloud" class="w-8 h-8 text-cyan-400" />
                <h3 class="text-xl font-bold text-white font-mono">DEVOPS_CLOUD</h3>
              </div>
              <div class="cyber-card-content">
                <div class="skill-grid">
                  <span class="skill-tag">Docker</span>
                  <span class="skill-tag">AWS</span>
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">CI/CD</span>
                  <span class="skill-tag">Linux</span>
                  <span class="skill-tag">Nginx</span>
                </div>
              </div>
            </div>

            <!-- Tools & Technologies -->
            <div class="cyber-skill-card group">
              <div class="cyber-card-header">
                <UIcon name="i-heroicons-wrench-screwdriver" class="w-8 h-8 text-purple-400" />
                <h3 class="text-xl font-bold text-white font-mono">TOOLS_TECH</h3>
              </div>
              <div class="cyber-card-content">
                <div class="skill-grid">
                  <span class="skill-tag">VS Code</span>
                  <span class="skill-tag">Figma</span>
                  <span class="skill-tag">Postman</span>
                  <span class="skill-tag">Jest</span>
                  <span class="skill-tag">Webpack</span>
                  <span class="skill-tag">Vite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Experience Timeline Section - Cyberpunk Edgy Design -->
    <section id="experience" class="section min-h-screen flex items-center bg-black text-white overflow-hidden relative" ref="experienceSection">
      <!-- Matrix-style background -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-cyan-900/10"></div>
      
      <!-- Animated Grid Background -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid-background"></div>
      </div>

      <!-- Floating Glitch Elements -->
      <div class="absolute top-20 left-20 glitch-box w-4 h-4 bg-cyan-400"></div>
      <div class="absolute bottom-40 right-32 glitch-box w-6 h-6 bg-purple-400"></div>
      <div class="absolute top-1/3 right-16 glitch-box w-3 h-3 bg-cyan-400"></div>

      <UContainer class="relative z-10">
        <div class="py-24">
          <!-- Glitchy Title -->
          <div class="section-content text-center mb-20">
            <h1 class="text-6xl md:text-8xl font-black text-white mb-8 glitch-text relative">
              <span class="glitch-layer-1">EVOLUTION</span>
              <span class="glitch-layer-2">EVOLUTION</span>
              <span class="glitch-layer-3">EVOLUTION</span>
              EVOLUTION
            </h1>
            <p class="text-xl text-cyan-300 mb-12 max-w-2xl mx-auto font-mono">
              &gt;_ career.path.map(experience => breakthrough)
            </p>
          </div>

          <!-- Radical Experience Layout - No Timeline, Pure Chaos -->
          <div class="experience-chaos-grid">
            
            <!-- Current Role - Floating Card -->
            <div class="experience-card current-role floating-card" data-aos="glitch-in" data-aos-delay="100">
              <div class="card-glitch-border"></div>
              <div class="card-inner bg-gradient-to-br from-purple-900/80 to-black/90 backdrop-blur-sm p-8 rounded-none border-l-4 border-cyan-400">
                <div class="flex items-center justify-between mb-6">
                  <div class="status-indicator">
                    <span class="text-cyan-400 text-xs font-mono tracking-widest animate-pulse">[ACTIVE]</span>
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-ping ml-2 inline-block"></div>
                  </div>
                  <span class="text-purple-300 font-mono text-sm bg-purple-500/20 px-3 py-1 border border-purple-400/30">2019.PRESENT</span>
                </div>
                <h3 class="text-3xl font-black text-white mb-2 glitch-hover">Sr. Full Stack Dev</h3>
                <p class="text-cyan-200 text-sm mb-4 font-mono">&gt; AsiaQuest.kintone_specialist()</p>
                <div class="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-cyan-400/30 pl-4">
                  <span class="text-cyan-400 font-mono">function</span> architect() {<br/>
                  &nbsp;&nbsp;buildKintoneEcosystem();<br/>
                  &nbsp;&nbsp;helpTeamTransformation();<br/>
                  &nbsp;&nbsp;deployEnterpriseScaleSolutions();<br/>
                  }
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="tech-pill bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 text-xs font-mono">KINTONE</span>
                  <span class="tech-pill bg-purple-500/20 text-purple-300 border border-purple-500/40 px-3 py-1 text-xs font-mono">INTEGRATION</span>
                  <span class="tech-pill bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 text-xs font-mono">ENHANCEMENT</span>
                </div>
              </div>
            </div>

            <!-- FinTech Era - Skewed Card -->
            <div class="experience-card fintech-era skewed-card" data-aos="slide-left-glitch" data-aos-delay="300">
              <div class="card-inner bg-gradient-to-br from-purple-800/80 to-gray-900/90 backdrop-blur-sm p-8 transform skew-y-2 border-r-4 border-purple-400">
                <div class="flex items-center justify-between mb-6">
                  <div class="status-indicator">
                    <span class="text-purple-400 text-xs font-mono tracking-widest">[ARCHIVED]</span>
                  </div>
                  <span class="text-purple-300 font-mono text-sm bg-purple-500/20 px-3 py-1 border border-purple-400/30">2018.2019</span>
                </div>
                <h3 class="text-3xl font-black text-white mb-2 transform -skew-y-2 glitch-hover">FinTech Architect</h3>
                <p class="text-purple-200 text-sm mb-4 font-mono transform -skew-y-2">&gt; Faspay.payment_gateway.init()</p>
                <div class="text-gray-300 text-sm leading-relaxed mb-6 transform -skew-y-2 border-l-2 border-purple-400/30 pl-4">
                  Built the neural pathways of digital finance. API integrations that moved money at light speed. 
                  Banking reconciliation algorithms that never sleep.
                </div>
                <div class="flex flex-wrap gap-2 transform -skew-y-2">
                  <span class="tech-pill bg-purple-500/20 text-purple-300 border border-purple-500/40 px-3 py-1 text-xs font-mono">PHP.CORE</span>
                  <span class="tech-pill bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 text-xs font-mono">BANKING.API</span>
                  <span class="tech-pill bg-purple-500/20 text-purple-300 border border-purple-500/40 px-3 py-1 text-xs font-mono">FINTECH</span>
                </div>
              </div>
            </div>

            <!-- First Steps - Inverted Card -->
            <div class="experience-card genesis-era inverted-card" data-aos="fade-up-glitch" data-aos-delay="500">
              <div class="card-inner bg-gradient-to-br from-gray-900/80 to-purple-900/90 backdrop-blur-sm p-8 border-t-4 border-cyan-400">
                <div class="flex items-center justify-between mb-6">
                  <div class="status-indicator">
                    <span class="text-gray-400 text-xs font-mono tracking-widest">[GENESIS]</span>
                  </div>
                  <span class="text-gray-300 font-mono text-sm bg-gray-500/20 px-3 py-1 border border-gray-400/30">2017.ORIGIN</span>
                </div>
                <h3 class="text-3xl font-black text-white mb-2 glitch-hover">Code Genesis</h3>
                <p class="text-gray-200 text-sm mb-4 font-mono">&gt; BRI_Satelit.firstBoot()</p>
                <div class="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-gray-400/30 pl-4">
                  <span class="text-gray-400 font-mono">// First contact with production systems</span><br/>
                  Where it all began. Building bridges between satellite networks and human interfaces. 
                  The first lines of code that mattered.
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="tech-pill bg-gray-500/20 text-gray-300 border border-gray-500/40 px-3 py-1 text-xs font-mono">WEB.DEV</span>
                  <span class="tech-pill bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 text-xs font-mono">DB.DESIGN</span>
                  <span class="tech-pill bg-purple-500/20 text-purple-300 border border-purple-500/40 px-3 py-1 text-xs font-mono">GENESIS</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Cyberpunk Data Stream -->
          <div class="data-stream-container mt-16 relative overflow-hidden">
            <div class="data-stream font-mono text-cyan-400/30 text-xs">
              <span class="animate-pulse">[SYSTEM] Experience.loadComplete() → Success</span>
              <span class="animate-pulse" style="animation-delay: 1s;">[DEBUG] Timeline.render() → Unconventional</span>
              <span class="animate-pulse" style="animation-delay: 2s;">[INFO] Skills.evolving() → Continuous</span>
            </div>
          </div>

        </div>
      </UContainer>
    </section>

    <!-- Projects Section -->
    <ProjectsSection ref="projectsSection" />

    <!-- Contact Section - Cyberpunk Terminal -->
    <section id="contact" class="section min-h-screen flex items-center relative overflow-hidden" ref="contactSection">
      <!-- Cyberpunk background -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-gray-900">
        <div class="matrix-bg opacity-30"></div>
        <div class="cyber-grid"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="section-content py-24">
          <!-- Terminal-style contact -->
          <div class="max-w-4xl mx-auto">
            <!-- Terminal header -->
            <div class="terminal-window">
              <div class="terminal-header-bar flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-t-lg">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="ml-4 text-gray-400 font-mono text-sm">connect.sh</span>
              </div>
              
              <div class="bg-black/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-b-lg p-8">
                <!-- Terminal content -->
                <div class="font-mono text-green-400 mb-6">
                  <div class="typing-animation">$ ./establish_connection.sh</div>
                  <div class="mt-2 text-cyan-400">&gt; Initializing secure communication channels...</div>
                  <div class="mt-1 text-white">&gt; Status: READY_TO_CONNECT</div>
                </div>

                <div class="text-center mb-12">
                  <h2 class="text-4xl md:text-6xl font-black text-white mb-4 glitch-text" data-text="[CONNECT]">
                    [CONNECT]
                  </h2>
                  <p class="text-gray-300 font-mono">&gt; establishing_digital_handshake.exe</p>
                </div>

                <!-- Contact cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <!-- GitHub -->
                  <div class="cyber-contact-card group">
                    <div class="cyber-contact-icon">
                      <UIcon name="i-simple-icons-github" class="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 class="text-lg font-bold text-white font-mono mb-2">GITHUB</h3>
                    <a href="https://github.com/aulyak" target="_blank" rel="noopener" class="cyber-contact-link">
                      github.com/aulyak
                    </a>
                  </div>

                  <!-- LinkedIn -->
                  <div class="cyber-contact-card group">
                    <div class="cyber-contact-icon">
                      <UIcon name="i-simple-icons-linkedin" class="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 class="text-lg font-bold text-white font-mono mb-2">LINKEDIN</h3>
                    <a href="https://linkedin.com/in/aulyak" target="_blank" rel="noopener" class="cyber-contact-link">
                      linkedin.com/in/aulyak
                    </a>
                  </div>

                  <!-- Location -->
                  <div class="cyber-contact-card group">
                    <div class="cyber-contact-icon">
                      <UIcon name="i-heroicons-map-pin" class="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 class="text-lg font-bold text-white font-mono mb-2">LOCATION</h3>
                    <span class="cyber-contact-link">Jakarta, Indonesia</span>
                  </div>
                </div>

                <!-- Terminal footer -->
                <div class="mt-12 font-mono text-green-400 text-center">
                  <div>&gt; connection_established.success</div>
                  <div class="mt-2 text-cyan-400">&gt; ready_for_collaboration = true;</div>
                </div>
                
                <!-- Back to top button -->
                <div class="mt-8 text-center">
                  <button @click="scrollToSection('home')" class="cyber-btn cyber-btn-primary">
                    <span class="font-mono">[BACK_TO_TOP]</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script lang="ts" setup>
// Custom page transition for home page
definePageMeta({
  pageTransition: false // Disable since we're using single page
})

// Simple state management
const activeSection = ref('home')

// Section refs
const homeSection = ref<HTMLElement>()
const aboutSection = ref<HTMLElement>()
const expertiseSection = ref<HTMLElement>()
const experienceSection = ref<HTMLElement>()
const contactSection = ref<HTMLElement>()

// Smooth scrolling function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Setup intersection observer on mount
onMounted(() => {
  const sections = [
    { id: 'home', ref: homeSection },
    { id: 'about', ref: aboutSection },
    { id: 'expertise', ref: expertiseSection },
    { id: 'experience', ref: experienceSection },
    { id: 'projects', ref: null }, // Component-based section, handled separately
    { id: 'contact', ref: contactSection }
  ]

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Lower threshold for experience section to ensure it gets detected
        const isExperienceSection = entry.target.id === 'experience'
        const threshold = isExperienceSection ? 0.2 : 0.3
        
        if (entry.isIntersecting && entry.intersectionRatio > threshold) {
          activeSection.value = entry.target.id
          
          // Update URL hash without triggering scroll
          const newHash = entry.target.id === 'home' ? '' : `#${entry.target.id}`
          if (window.location.hash !== newHash) {
            history.replaceState(null, '', newHash || window.location.pathname)
          }
          
          // Add visible class for animations
          const content = entry.target.querySelector('.section-content')
          if (content) {
            content.classList.add('in-view')
          }
        }
      })
    },
    {
      threshold: [0.1, 0.2, 0.3, 0.5, 0.7],
      rootMargin: '-15% 0px -15% 0px'
    }
  )

  sections.forEach(({ ref }) => {
    if (ref && ref.value) {
      observer.observe(ref.value)
    }
  })

  // Special handling for projects section component
  setTimeout(() => {
    const projectsElement = document.getElementById('projects')
    if (projectsElement) {
      observer.observe(projectsElement)
      console.log('Projects section observed for navigation tracking')
    } else {
      console.log('Projects section not found')
    }
  }, 500) // Increased timeout to ensure component is mounted

  // Try multiple times if not found initially
  let retryCount = 0
  const maxRetries = 5
  const retryInterval = setInterval(() => {
    const projectsElement = document.getElementById('projects')
    if (projectsElement) {
      observer.observe(projectsElement)
      console.log('Projects section found and observed after retry', retryCount)
      clearInterval(retryInterval)
    } else if (retryCount >= maxRetries) {
      console.log('Projects section still not found after', maxRetries, 'retries')
      clearInterval(retryInterval)
    }
    retryCount++
  }, 200)

  // Setup experience card animations
  const experienceCardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          
          // Add staggered animation delay
          const cards = document.querySelectorAll('.experience-card')
          cards.forEach((card, index) => {
            if (card === entry.target) {
              setTimeout(() => {
                card.classList.add('animate-in')
              }, index * 200)
            }
          })
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    }
  )

  // Observe experience cards
  setTimeout(() => {
    const experienceCards = document.querySelectorAll('.experience-card')
    experienceCards.forEach((card) => {
      experienceCardObserver.observe(card)
    })
  }, 100)

  // Setup parallax scrolling
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll('.parallax')
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
      const yPos = -(scrolled * speed)
      ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
    })

    // Parallax backgrounds
    const parallaxBgs = document.querySelectorAll('.parallax-bg')
    parallaxBgs.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
      const yPos = scrolled * speed
      ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
    })

    // Cyberpunk glitch effects on scroll
    const glitchBoxes = document.querySelectorAll('.glitch-box')
    glitchBoxes.forEach((box, index) => {
      const speed = 0.1 + (index * 0.05)
      const rotation = scrolled * speed * 0.1
      const translateY = Math.sin(scrolled * speed * 0.01) * 10
      ;(box as HTMLElement).style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`
    })
  }

  // Add scroll listener with throttling
  let ticking = false
  const scrollListener = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', scrollListener, { passive: true })

  // Handle initial hash navigation
  const handleInitialHash = () => {
    const hash = window.location.hash.slice(1) // Remove the #
    if (hash) {
      // Wait for DOM to be fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          activeSection.value = hash
        }
      }, 100)
    }
  }

  // Handle hash navigation
  handleInitialHash()

  // Listen for hash changes (e.g., browser back/forward)
  window.addEventListener('hashchange', handleInitialHash)

  // Cleanup
  onUnmounted(() => {
    observer.disconnect()
    experienceCardObserver.disconnect()
    window.removeEventListener('scroll', scrollListener)
    window.removeEventListener('hashchange', handleInitialHash)
  })
})

// SEO Meta
useSeoMeta({
  title: 'Aulya Khatulistivani - Full Stack Developer',
  description: 'Passionate full stack developer creating innovative solutions through clean code and modern design.',
  ogTitle: 'Aulya Khatulistivani - Portfolio',
  ogDescription: 'Passionate full stack developer creating innovative solutions through clean code and modern design.',
})
</script>

<style scoped>
.single-page-app {
  scroll-behavior: smooth;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out 0.1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.section {
  scroll-margin-top: 0;
  position: relative;
  overflow: hidden;
}

/* Cyberpunk Matrix Background */
.matrix-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: matrix-scroll 20s linear infinite;
}

@keyframes matrix-scroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Cyber Grid */
.cyber-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: grid-pulse 4s ease-in-out infinite;
}

@keyframes grid-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Glitch Effects */
.glitch-text {
  position: relative;
  color: #fff;
  animation: glitch 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  animation: glitch-1 0.5s infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch-text::after {
  animation: glitch-2 0.5s infinite;
  color: #ff00ff;
  z-index: -2;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(1px, -1px); }
  40% { transform: translate(1px, 1px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(-1px, 1px); }
}

/* Terminal Elements */
.terminal-window {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.typing-animation {
  position: relative;
  overflow: hidden;
}

.typing-animation::after {
  content: '█';
  animation: blink 1s infinite;
  color: #00ffff;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Cyberpunk Buttons */
.cyber-btn {
  position: relative;
  padding: 14px 28px;
  background: transparent;
  border: 2px solid;
  color: white;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  overflow: hidden;
  transform: perspective(500px) rotateX(0deg);
  cursor: pointer;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .cyber-btn {
    padding: 10px 16px;
    font-size: 12px;
    letter-spacing: 1px;
    white-space: nowrap;
  }
}

.cyber-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cyber-btn:hover::before {
  left: 100%;
}

.cyber-btn-primary {
  border-color: #00ffff;
  color: #00ffff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.cyber-btn-primary:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
  transform: perspective(500px) rotateX(5deg) translateY(-2px);
}

.cyber-btn-secondary {
  border-color: #a855f7;
  color: #a855f7;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.cyber-btn-secondary:hover {
  background: rgba(168, 85, 247, 0.1);
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
  transform: perspective(500px) rotateX(5deg) translateY(-2px);
}

/* Cyber Cards */
.cyber-skill-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  padding: 24px;
  transition: all 0.3s ease;
  transform: perspective(1000px) rotateX(0deg);
}

.cyber-skill-card:hover {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3);
  transform: perspective(1000px) rotateX(5deg) translateY(-10px);
}

.cyber-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

.skill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 6px 12px;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 4px;
  color: #00ffff;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(168, 85, 247, 0.2);
  border-color: rgba(168, 85, 247, 0.5);
  color: #a855f7;
  transform: scale(1.1);
}

/* Contact Cards */
.cyber-contact-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  transform: perspective(1000px) rotateX(0deg);
}

.cyber-contact-card:hover {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.2);
  transform: perspective(1000px) rotateX(5deg) translateY(-10px);
}

.cyber-contact-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.cyber-contact-link {
  color: #00ffff;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cyber-contact-link:hover {
  color: #a855f7;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
}

/* Cyber Box */
.cyber-box {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  animation: cyber-pulse 2s ease-in-out infinite alternate;
}

@keyframes cyber-pulse {
  0% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
  100% { box-shadow: 0 0 30px rgba(0, 255, 255, 0.6); }
}

/* Floating animations */
.floating {
  animation: float 3s ease-in-out infinite;
}

.floating:nth-child(2) { animation-delay: -0.5s; }
.floating:nth-child(3) { animation-delay: -1s; }
.floating:nth-child(4) { animation-delay: -1.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Navigation */
.nav-link {
  position: relative;
  padding: 8px 0;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #00ffff, #a855f7);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.text-purple-400::after {
  width: 100%;
}

/* Glitch overlay */
.glitch-overlay {
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 255, 0.03) 2px,
      rgba(0, 255, 255, 0.03) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 0, 255, 0.03) 2px,
      rgba(255, 0, 255, 0.03) 4px
    );
  animation: glitch-overlay 0.5s infinite;
}

@keyframes glitch-overlay {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

/* Section entrance animations */
.section-content {
  opacity: 0;
  transform: translateY(40px);
  animation: sectionEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.section-content.in-view {
  opacity: 1;
  transform: translateY(0);
  animation: sectionSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes sectionEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sectionSlideIn {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Hero animations */
.hero-title {
  opacity: 0;
  animation: heroTitleEnter 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

.hero-icons {
  opacity: 0;
  animation: heroIconsEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
}

.hero-subtitle {
  opacity: 0;
  animation: heroSubtitleEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
}

.hero-text {
  opacity: 0;
  animation: heroTextEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
}

.hero-buttons {
  opacity: 0;
  animation: heroButtonsEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards;
}

@keyframes heroTitleEnter {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.8) rotateX(20deg);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0);
    filter: blur(0);
  }
}

@keyframes heroIconsEnter {
  from {
    opacity: 0;
    transform: translateY(40px) rotateY(30deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateY(0) scale(1);
  }
}

@keyframes heroSubtitleEnter {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes heroTextEnter {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes heroButtonsEnter {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.8);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .glitch-text {
    font-size: 2.5rem;
  }
  
  .cyber-skill-card,
  .cyber-project-card,
  .cyber-contact-card {
    transform: none !important;
  }
  
  .cyber-skill-card:hover,
  .cyber-project-card:hover,
  .cyber-contact-card:hover {
    transform: translateY(-5px) !important;
  }
}

/* Reduce animations for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .hero-title, .hero-icons, .hero-subtitle, .hero-text, .hero-buttons {
    animation: none !important;
    opacity: 1 !important;
  }
  
  .section-content {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
}

/* Experience Section Cyberpunk Styles */
.experience-chaos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.experience-card {
  opacity: 0;
  transform: translateY(50px) rotateX(10deg);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.experience-card.in-view {
  opacity: 1;
  transform: translateY(0) rotateX(0deg);
}

.experience-card.animate-in {
  animation: cardSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateY(100px) scale(0.8) rotateX(30deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
  }
}

.floating-card {
  animation: cardFloat 6s ease-in-out infinite;
}

.skewed-card {
  transform: skew(-2deg, 1deg);
}

.inverted-card {
  transform: rotateY(5deg);
}

@keyframes cardFloat {
  0%, 100% { transform: translateY(0px) rotateZ(0deg); }
  33% { transform: translateY(-10px) rotateZ(1deg); }
  66% { transform: translateY(-5px) rotateZ(-1deg); }
}

.card-glitch-border {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #00ffff, #a855f7, #00ffff);
  border-radius: 4px;
  z-index: -1;
  animation: borderPulse 2s ease-in-out infinite;
}

@keyframes borderPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

.tech-pill {
  transition: all 0.3s ease;
}

.tech-pill:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
}

.glitch-hover:hover {
  animation: glitchHover 0.3s ease;
}

@keyframes glitchHover {
  0% { transform: translate(0); }
  25% { transform: translate(-2px, 2px); }
  50% { transform: translate(2px, -2px); }
  75% { transform: translate(-1px, -1px); }
  100% { transform: translate(0); }
}

.data-stream {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}

.grid-background {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridMove 10s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

.glitch-box {
  animation: glitchFloat 2s ease-in-out infinite;
}

@keyframes glitchFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(90deg); }
  50% { transform: translateY(10px) rotate(180deg); }
  75% { transform: translateY(-5px) rotate(270deg); }
}

.glitch-layer-1,
.glitch-layer-2,
.glitch-layer-3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.glitch-layer-1 {
  color: #00ffff;
  animation: glitch-1 0.3s infinite;
  z-index: -1;
}

.glitch-layer-2 {
  color: #ff00ff;
  animation: glitch-2 0.3s infinite;
  z-index: -2;
}

.glitch-layer-3 {
  color: #ffff00;
  animation: glitch-3 0.3s infinite;
  z-index: -3;
}

@keyframes glitch-3 {
  0%, 100% { transform: translate(0); opacity: 0.8; }
  20% { transform: translate(2px, -2px); opacity: 0.6; }
  40% { transform: translate(-2px, 2px); opacity: 0.8; }
  60% { transform: translate(2px, 2px); opacity: 0.4; }
  80% { transform: translate(-2px, -2px); opacity: 0.9; }
}

.parallax-section {
  position: relative;
}

.parallax-bg {
  will-change: transform;
}

.parallax {
  will-change: transform;
}

/* Section entrance animations */
.section-content {
  opacity: 0;
  transform: translateY(40px);
  animation: sectionEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.section-content.in-view {
  opacity: 1;
  transform: translateY(0);
  animation: sectionSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes sectionEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sectionSlideIn {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Staggered hero animations */
.hero-title {
  opacity: 0;
  animation: heroTitleEnter 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

.hero-icons {
  opacity: 0;
  animation: heroIconsEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
}

.hero-subtitle {
  opacity: 0;
  animation: heroSubtitleEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
}

.hero-text {
  opacity: 0;
  animation: heroTextEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
}

.hero-buttons {
  opacity: 0;
  animation: heroButtonsEnter 1s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards;
}

@keyframes heroTitleEnter {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.8) rotateX(20deg);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0);
    filter: blur(0);
  }
}

@keyframes heroIconsEnter {
  from {
    opacity: 0;
    transform: translateY(40px) rotateY(30deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateY(0) scale(1);
  }
}

@keyframes heroSubtitleEnter {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes heroTextEnter {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes heroButtonsEnter {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.8);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Project cards hover effect with enhanced 3D */
.project-card {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.project-card:hover {
  transform: translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1.03);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 0 30px rgba(59, 130, 246, 0.1);
}

/* Contact items hover effect */
.contact-item {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

.contact-item:hover {
  transform: translateY(-6px) rotateX(5deg);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* Enhanced button effects with 3D transforms */
button {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

button:hover {
  transform: translateY(-3px) rotateX(10deg);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

button:active {
  transform: translateY(-1px) rotateX(5deg);
  transition-duration: 0.1s;
}

/* Floating animation for icons */
.hero-icons > * {
  animation: float 3s ease-in-out infinite;
}

.hero-icons > *:nth-child(2) { animation-delay: -0.5s; }
.hero-icons > *:nth-child(3) { animation-delay: -1s; }
.hero-icons > *:nth-child(4) { animation-delay: -1.5s; }
.hero-icons > *:nth-child(5) { animation-delay: -2s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
    animation-duration: 1s;
  }
  
  .section-content {
    animation-duration: 0.6s;
  }
  
  .project-card:hover {
    transform: translateY(-6px) scale(1.02);
  }

  .parallax, .parallax-bg {
    transform: none !important; /* Disable parallax on mobile for performance */
  }
}

/* Reduce animations for accessibility */
@media (prefers-reduced-motion: reduce) {
  .hero-title, .hero-icons, .hero-subtitle, .hero-text, .hero-buttons {
    animation: none !important;
    opacity: 1 !important;
  }
  
  .section-content {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }

  .parallax, .parallax-bg {
    transform: none !important;
  }

  .hero-icons > * {
    animation: none !important;
  }
}

/* Modal popup transitions */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-leave-to .cyber-terminal-window {
  transform: scale(0.9) translateY(-20px);
}

.cyber-terminal-window {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
  border: 2px solid rgba(34, 211, 238, 0.3);
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(34, 211, 238, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  overflow: hidden;
}

.cyber-terminal-header {
  background: linear-gradient(90deg, rgba(17, 24, 39, 0.9) 0%, rgba(55, 65, 81, 0.8) 100%);
  border-bottom: 1px solid rgba(34, 211, 238, 0.3);
  padding: 16px 24px;
  font-family: 'Courier New', monospace;
}

.cyber-terminal-content {
  padding: 24px;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(34, 211, 238, 0.5) transparent;
}

.cyber-terminal-content::-webkit-scrollbar {
  width: 8px;
}

.cyber-terminal-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.cyber-terminal-content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(34, 211, 238, 0.6), rgba(168, 85, 247, 0.6));
  border-radius: 4px;
}

.cyber-terminal-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgba(34, 211, 238, 0.8), rgba(168, 85, 247, 0.8));
}

.cyber-file-item {
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.6) 0%, rgba(31, 41, 55, 0.4) 100%);
  border: 1px solid rgba(75, 85, 99, 0.3);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.cyber-file-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.cyber-file-item:hover {
  border-color: rgba(34, 211, 238, 0.5);
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(34, 211, 238, 0.1);
}

.cyber-file-item:hover::before {
  transform: translateX(0);
}

.cyber-tag-small {
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1));
  border: 1px solid rgba(34, 211, 238, 0.3);
  color: rgba(34, 211, 238, 0.9);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
  transition: all 0.2s ease;
}

.cyber-tag-small:hover {
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2));
  border-color: rgba(34, 211, 238, 0.5);
  transform: scale(1.05);
}

.cyber-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.6));
  border: 1px solid rgba(75, 85, 99, 0.4);
  border-radius: 6px;
  color: rgba(156, 163, 175, 0.8);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.cyber-icon-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cyber-icon-btn:hover {
  border-color: rgba(34, 211, 238, 0.6);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(34, 211, 238, 0.2);
}

.cyber-icon-btn:hover::before {
  opacity: 1;
}

.cyber-icon-btn svg {
  position: relative;
  z-index: 1;
}

/* Enhanced cursor pointer for interactive elements */
.cursor-pointer {
  cursor: pointer;
}

/* Folder icon rotation animation */
.rotate-12 {
  transform: rotate(12deg);
}

.rotate-180 {
  transform: rotate(180deg);
}

/* Under Construction Styles */
.cyber-construction-visual {
  max-width: 500px;
  margin: 0 auto;
}

.cyber-progress-bar {
  width: 100%;
  height: 12px;
  background: linear-gradient(90deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.6));
  border: 1px solid rgba(75, 85, 99, 0.4);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.cyber-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(168, 85, 247, 0.8));
  border-radius: 3px;
  position: relative;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.4);
}

.cyber-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  animation: progressShine 2s ease-in-out infinite;
}

@keyframes progressShine {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

.terminal-text {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 6px;
  padding: 16px;
  margin: 0 auto;
  max-width: 400px;
}

/* Explore button with icon */
.cyber-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal specific styles */
.cyber-terminal-window {
  transform: translateZ(0); /* Force hardware acceleration */
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Prevent body scroll when modal is open */
.modal-open {
  overflow: hidden !important;
  height: 100vh !important;
  touch-action: none;
  -webkit-overflow-scrolling: touch;
  position: fixed !important;
  width: 100% !important;
}

/* Hide scrollbar for horizontal navigation */
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}
</style>