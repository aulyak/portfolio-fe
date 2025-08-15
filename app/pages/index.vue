<template>
  <div class="single-page-app" v-cloak>
    <!-- Scroll Progress Indicator -->
    <ScrollProgress :activeSection="activeSection" :scrollToSection="scrollToSection" />
    
    <!-- Fixed Navigation -->
    <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-400/30">
      <div class="flex items-center gap-4">
        <a 
          href="#home" 
          @click="scrollToSection('home')"
          class="text-sm font-medium transition-colors hover:text-purple-400 cursor-pointer"
          :class="{ 'text-purple-400': activeSection === 'home', 'text-gray-300': activeSection !== 'home' }"
        >
          Home
        </a>
        <a 
          href="#about" 
          @click="scrollToSection('about')"
          class="text-sm font-medium transition-colors hover:text-purple-400 cursor-pointer"
          :class="{ 'text-purple-400': activeSection === 'about', 'text-gray-300': activeSection !== 'about' }"
        >
          About
        </a>
        <a 
          href="#expertise" 
          @click="scrollToSection('expertise')"
          class="text-sm font-medium transition-colors hover:text-purple-400 cursor-pointer"
          :class="{ 'text-purple-400': activeSection === 'expertise', 'text-gray-300': activeSection !== 'expertise' }"
        >
          Expertise
        </a>
        <a 
          href="#experience" 
          @click="scrollToSection('experience')"
          class="text-sm font-medium transition-colors hover:text-cyan-400 cursor-pointer"
          :class="{ 'text-cyan-400': activeSection === 'experience', 'text-gray-300': activeSection !== 'experience' }"
        >
          Experience
        </a>
        <a 
          href="#projects" 
          @click="scrollToSection('projects')"
          class="text-sm font-medium transition-colors hover:text-purple-400 cursor-pointer"
          :class="{ 'text-purple-400': activeSection === 'projects', 'text-gray-300': activeSection !== 'projects' }"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          @click="scrollToSection('contact')"
          class="text-sm font-medium transition-colors hover:text-purple-400 cursor-pointer"
          :class="{ 'text-purple-400': activeSection === 'contact', 'text-gray-300': activeSection !== 'contact' }"
        >
          Contact
        </a>
      </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="section min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white parallax-section" ref="homeSection">
      <div class="parallax-bg absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black" data-speed="0.5"></div>
      <UContainer class="relative z-10">
        <div class="w-full text-center">
          <h1 class="hero-title text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text">
            Aulya Khatulistivani
          </h1>
          <div class="hero-icons flex justify-center gap-6 mb-8 parallax" data-speed="0.3">
            <UIcon name="i-heroicons-code-bracket" class="w-12 h-12 text-purple-400/90" />
            <UIcon name="i-heroicons-cpu-chip" class="w-12 h-12 text-cyan-400/80" />
            <UIcon name="i-heroicons-command-line" class="w-12 h-12 text-purple-400/80" />
            <UIcon name="i-heroicons-cloud" class="w-12 h-12 text-cyan-400/80" />
            <UIcon name="i-heroicons-rocket-launch" class="w-12 h-12 text-purple-400/80" />
          </div>
          <h2 class="hero-subtitle text-2xl md:text-3xl font-bold mb-8 opacity-90 text-purple-200">Full Stack Developer</h2>
          <p class="hero-text mb-10 opacity-80 max-w-2xl mx-auto text-gray-300">
            Passionate about creating innovative solutions and bringing ideas to life through code.
          </p>
          <div class="hero-buttons flex gap-4 justify-center">
            <button 
              @click="scrollToSection('about')" 
              class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              About Me
            </button>
            <button 
              @click="scrollToSection('expertise')" 
              class="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105"
            >
              My Skills
            </button>
            <button 
              @click="scrollToSection('projects')" 
              class="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-black transition-all transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- About Section -->
    <section id="about" class="section min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white" ref="aboutSection">
      <UContainer>
        <div class="py-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="section-content">
              <h1 class="text-6xl font-black text-white drop-shadow-lg mb-6 glow-text">About Me</h1>
              <h2 class="text-2xl opacity-90 font-semibold text-purple-200 mb-6">Full Stack Developer & Creative Problem Solver</h2>
              <p class="text-lg font-normal text-gray-300 mb-8 leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-purple-400/20">
                I'm passionate about crafting exceptional digital experiences through clean code, innovative design, and user-centered thinking. With
                expertise spanning both frontend and backend development, I bring ideas to life with modern technologies.
              </p>
              <div class="flex gap-4">
                <button @click="scrollToSection('contact')" class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25">
                  Get In Touch
                </button>
                <button @click="scrollToSection('projects')" class="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all">
                  View My Work
                </button>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="relative">
                <div class="w-80 h-80 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
                  <div class="relative">
                    <UIcon name="i-heroicons-code-bracket" class="w-24 h-24 text-purple-400/90" />
                    <div class="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400/20 rounded-full flex items-center justify-center">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400/30 rounded-full"></div>
                    <div class="absolute top-1/2 -right-6 w-3 h-3 bg-cyan-400/25 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="section min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white" ref="expertiseSection">
      <UContainer>
        <div class="py-24">
          <div class="section-content text-center">
            <h1 class="text-6xl font-black text-white mb-8 glow-text">Expertise</h1>
            <p class="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and digital solutions
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <!-- Frontend Development -->
              <div class="expertise-card bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 bg-purple-500/20 rounded-lg">
                    <UIcon name="i-heroicons-code-bracket" class="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 class="text-xl font-bold text-white">Frontend Development</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">Vue.js</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">Nuxt.js</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">JavaScript</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">TypeScript</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-gray-500/20 text-gray-300 border border-gray-500/30">Tailwind CSS</span>
                </div>
              </div>

              <!-- Backend Development -->
              <div class="expertise-card bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 bg-cyan-500/20 rounded-lg">
                    <UIcon name="i-heroicons-server" class="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 class="text-xl font-bold text-white">Backend Development</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Node.js</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Express.js</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">Go</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">PHP</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Python</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">PostgreSQL</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">MongoDB</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-gray-500/20 text-gray-300 border border-gray-500/30">Redis</span>
                </div>
              </div>

              <!-- DevOps & Tools -->
              <div class="expertise-card bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 bg-purple-500/20 rounded-lg">
                    <UIcon name="i-heroicons-cloud" class="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 class="text-xl font-bold text-white">DevOps & Tools</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Docker</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">AWS</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-gray-500/20 text-gray-300 border border-gray-500/30">Git</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">CI/CD</span>
                  <span class="skill-badge px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">Linux</span>
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
    <section id="projects" class="section min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white" ref="projectsSection">
      <UContainer>
        <div class="py-24 text-center">
          <div class="section-content">
            <h1 class="text-6xl font-black text-white mb-8 glow-text">Projects</h1>
            <p class="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
              Explore my portfolio of creative and technical work, showcasing modern web development solutions.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <!-- Project Cards -->
              <div class="project-card bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-purple-400/20 hover:border-purple-400/40">
                <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <UIcon name="i-heroicons-code-bracket" class="w-6 h-6 text-purple-400" />
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Web Applications</h3>
                <p class="text-gray-300">Modern, responsive web applications built with cutting-edge technologies.</p>
              </div>
              
              <div class="project-card bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/40">
                <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <UIcon name="i-heroicons-cpu-chip" class="w-6 h-6 text-cyan-400" />
                </div>
                <h3 class="text-xl font-bold text-white mb-2">APIs & Backend</h3>
                <p class="text-gray-300">Scalable backend solutions and RESTful APIs for robust applications.</p>
              </div>
              
              <div class="project-card bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-purple-400/20 hover:border-purple-400/40">
                <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <UIcon name="i-heroicons-cloud" class="w-6 h-6 text-purple-400" />
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Cloud Solutions</h3>
                <p class="text-gray-300">Cloud-native applications and deployment strategies for modern workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section min-h-screen flex items-center bg-gradient-to-br from-black via-purple-900 to-gray-900 text-white" ref="contactSection">
      <UContainer>
        <div class="py-24">
          <div class="section-content text-center max-w-4xl mx-auto">
            <h1 class="text-6xl font-black text-white mb-8 glow-text">Get In Touch</h1>
            <p class="text-xl text-purple-200 mb-12">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="contact-item bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all">
                <UIcon name="i-simple-icons-github" class="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 class="text-lg font-semibold mb-2">GitHub</h3>
                <a href="https://github.com/aulya" target="_blank" rel="noopener" class="text-gray-300 hover:text-purple-400 transition-colors underline break-all">
                  github.com/aulyak
                </a>
                </div>
                
                <div class="contact-item bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                <UIcon name="i-simple-icons-linkedin" class="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 class="text-lg font-semibold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/aulya" target="_blank" rel="noopener" class="text-gray-300 hover:text-cyan-400 transition-colors underline break-all">
                  linkedin.com/in/aulyak
                </a>
                </div>
              
              <div class="contact-item bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all">
                <UIcon name="i-heroicons-map-pin" class="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 class="text-lg font-semibold mb-2">Location</h3>
                <p class="text-gray-300">Jakarta, Indonesia</p>
              </div>
            </div>

            <button @click="scrollToSection('home')" class="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25">
              Back to Top
            </button>
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
const projectsSection = ref<HTMLElement>()
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
    { id: 'projects', ref: projectsSection },
    { id: 'contact', ref: contactSection }
  ]

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
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
      threshold: [0.3, 0.7],
      rootMargin: '-20% 0px -20% 0px'
    }
  )

  sections.forEach(({ ref }) => {
    if (ref.value) {
      observer.observe(ref.value)
    }
  })

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
</style>