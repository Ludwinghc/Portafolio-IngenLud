<script setup>
import {
  useTemplateRef,
} from 'vue'

import {
  Autoplay,
  Pagination,
} from 'swiper/modules'

import {
  Swiper,
  SwiperSlide,
} from 'swiper/vue'

import {
  usePortfolioEffects,
} from '@/composables/usePortfolioEffects'

import {
  usePortfolioNavigation,
} from '@/composables/usePortfolioNavigation'

import AppSidebar from '@/components/layout/AppSidebar.vue'

const typedElement =
  useTemplateRef('typedElement')

const skillsElement =
  useTemplateRef('skillsElement')

const isotopeContainer =
  useTemplateRef('isotopeContainer')

const swiperModules = [
  Autoplay,
  Pagination,
]

const projectFilters = [
  { label: 'Todos', value: '*' },
  { label: 'IA y automatización', value: '.filter-ai' },
  { label: 'Aplicaciones web', value: '.filter-web' },
  { label: 'Sistemas de información', value: '.filter-system' },
]

const projects = [
  {
    title: 'EduBot',
    description: 'Chatbot designed to automate administrative tasks for the Software Engineering program at Manuela Beltrán University.',
    year: '2024',
    image: '/images/projects/edubot.png',
    category: 'filter-ai',
    gallery: 'portfolio-gallery-ai',
  },
  {
    title: 'Virtual Closet',
    description: 'Web application for registering clothing items, creating season-filtered outfits, and scheduling them in a calendar.',
    year: '2024',
    image: '/images/projects/virtualcloset.png',
    category: 'filter-web',
    gallery: 'portfolio-gallery-web',
  },
  {
    title: 'H-Sanity',
    description: 'Information system for conducting sanitation audits in hotels across Bogotá.',
    year: '2023',
    image: '/images/projects/hsanity.png',
    category: 'filter-system',
    gallery: 'portfolio-gallery-system',
  },
  {
    title: 'Automatic Door',
    description: 'Mobile application designed to control the automatic opening of home doors through voice commands and Bluetooth connectivity.',
    year: '2021',
    image: '/images/projects/puerta.jpg',
    category: 'filter-ai',
    gallery: 'portfolio-gallery-ai',
  },
  {
    title: 'Sistema de atención de urgencias',
    description: 'Information system designed to improve patient admission records and data management in a hospital emergency room.',
    year: '2019',
    image: '/images/projects/cardio.png',
    category: 'filter-system',
    gallery: 'portfolio-gallery-system',
  },
]

const {
  isHeaderOpen,
  isScrollTopVisible,
  isPreloading,
  activeSection,
  toggleHeader,
  scrollToSection,
  scrollToTop,
} = usePortfolioNavigation()

const {
  activePortfolioFilter,
  filterPortfolio,
} = usePortfolioEffects({
  typedElement,
  skillsElement,
  isotopeContainer,
  typedItems: [
    'DevOps Engineer',
    'Cloud Engineer',
    'Platform Engineer',
    'Software Engineer',
  ],
})
</script>

<template>
  <!-- Header Sections -->
      <header 
  id="header"
  class="header dark-background d-flex flex-column"
  :class="{
    'header-show': isHeaderOpen,
  }">
    <i class="header-toggle d-xl-none bi"
    :class="
      isHeaderOpen
        ? 'bi-x'
        : 'bi-list'
    "
    @click="toggleHeader"></i>

    <div class="profile-img">
      <img src="../assets/images/lud.jpg" alt="" class="img-fluid rounded-circle">
    </div>

    <a href="index.html" class="logo d-flex align-items-center justify-content-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> -->
      <h1 class="sitename">Ludwing Hernandez</h1>
    </a>

    <div class="social-links text-center">
      <a href="https://github.com/Ludwinghc" class="twitter"><i class="bi bi-github"></i></a>
      <a href="https://www.tiktok.com/@ingenlud.20?_r=1&_t=ZS-98N2y4PqteP" class="facebook"><i class="bi bi-tiktok"></i></a>
      <a href="https://www.instagram.com/ludwing.devops?igsh=MW4xMXRzZHB1cW1ucA%3D%3D&utm_source=qr" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="https://www.linkedin.com/in/ludwing-hernandez-caro/" class="linkedin"><i class="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a  href="#hero"
    :class="{
      active: activeSection === 'hero',
    }"
    @click.prevent="scrollToSection('hero')"><i class="bi bi-house navicon"></i>Home</a></li>
        <li><a  href="#about"
    :class="{
      active: activeSection === 'about',
    }"
    @click.prevent="scrollToSection('about')"><i class="bi bi-person navicon"></i> About Me</a></li>
        <li><a  href="#resume"
    :class="{
      active: activeSection === 'resume',
    }"
    @click.prevent="scrollToSection('resume')"><i class="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a  href="#portfolio"
    :class="{
      active: activeSection === 'portfolio',
    }"
    @click.prevent="scrollToSection('portfolio')"><i class="bi bi-images navicon"></i> Portfolio</a></li>
        <li><a  href="#services"
    :class="{
      active: activeSection === 'services',
    }"
    @click.prevent="scrollToSection('services')"><i class="bi bi-hdd-stack navicon"></i> Services</a></li>


        <!-- <li   class="dropdown"
  :class="{
    active: isDropdownOpen,
  }"><a  href="#"
    @click.prevent="
      isDropdownOpen = !isDropdownOpen
    "><i class="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul     :class="{
      'dropdown-active': isDropdownOpen,
    }">
            <li><a href="#">Dropdown 1</a></li>
            <li  class="dropdown"
      :class="{
        active: isDeepDropdownOpen,
      }"><a  href="#"
        @click.prevent.stop="
          isDeepDropdownOpen =
            !isDeepDropdownOpen
        "><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul  :class="{
          'dropdown-active': isDeepDropdownOpen,
        }">
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li> -->
        <li><a href="#contact"
    :class="{
      active: activeSection === 'contact',
    }"
    @click.prevent="scrollToSection('contact')"><i class="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

  </header>
    <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <img src="../assets/images/lud-bg.jpg" alt="" data-aos="fade-in" class="">

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Ludwing Hernandez</h2>
        <p>I'm 
            <span ref="typedElement"></span>
        </p>
      </div>

    </section><!-- /Hero Section -->

    <!-- About Section -->
    <section id="about" class="about section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>About Me</h2>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src="../assets/images/lud.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 content">
            <h2>Platform Engineering | AWS | Terraform | GitHub Actions | Backstage | AI Automation.</h2>
            <p class="fst-italic py-3">
              I design cloud platforms, deployment workflows and intelligent automations that help engineering teams deliver software faster, more securely and with less operational effort.            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>20 Sept 2002</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://ludwing.netlify.app/</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+57 3058111107</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bogotá, Colombia</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ludwing20h@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Status:</strong> <span>Open to opportunities</span></li>
                </ul>
              </div>
            </div>
            <p class="py-3">
              Hi, I’m Ludwing, a software engineer passionate about building cloud platforms, automation workflows and developer tools that simplify complex processes.

I enjoy turning technical challenges into practical and scalable solutions, especially when they help engineering teams work faster, reduce repetitive tasks and deliver software with greater confidence. I’m a curious, hands-on professional who is always learning and looking for better ways to create meaningful impact through technology.
            </p>
          </div>
        </div>

      </div>

    </section><!-- /About Section -->

    <!-- Stats Section -->
    <section id="stats" class="stats section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-diagram-3" aria-hidden="true"></i>
              <span data-purecounter-start="0" data-purecounter-end="2000" data-purecounter-duration="1" data-purecounter-separator="true" data-purecounter-suffix="+" class="purecounter"></span>
              <p><strong>2,000+ Repositories Ecosystem</strong> <span>Experience supporting Professional environments.</span></p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-trophy" aria-hidden="true"></i>
              <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1" data-purecounter-suffix="st" class="purecounter"></span>
              <p><strong>AWS AI League - Competition Winner</strong> <span>Recognized at AWS Summit Bogotá 2025.</span></p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-globe2" aria-hidden="true"></i>
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>Top 15 Global - AWS re:Invent 2025</strong> <span>International recognition in an AWS AI competition.</span></p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-gear-wide-connected" aria-hidden="true"></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>Automations - Built for Engineering Teams</strong> <span>Reducing repetitive work and improving delivery processes.</span></p>
            </div>
          </div><!-- End Stats Item -->

        </div>

      </div>

    </section><!-- /Stats Section -->

    <!-- Skills Section -->
    <section id="skills" class="skills section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Technical Expertise</h2>
        <p>I combine cloud infrastructure, automation and software development to build reliable platforms and improve the way engineering teams deliver software.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div  ref="skillsElement" class="row skills-content skills-animation">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>AWS Cloud</span> <i class="val">88%</i></span>
              <span>Experience with Lambda, ECS, API Gateway, VPC, RDS, DynamoDB and other services.</span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Terraform & Infrastructure as Code</span> <i class="val">80%</i></span>
              <span>Creation, maintenance and automation of cloud infrastructure.</span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>GitHub Actions & CI/CD</span> <i class="val">85%</i></span>
              <span>Pipeline design, validations, deployments, and automations.</span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>Backstage & Platform Engineering</span> <i class="val">70%</i></span>
              <span>Internal Developer Platforms, Golden Paths, catalog and developer experience.</span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Python & Workflow Automation</span> <i class="val">85%</i></span>
              <span>Automations for operational processes, repositories, infrastructure and support.</span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>AI Automation</span> <i class="val">78%</i></span>
              <span>Agents, document processing, AI governance, and Human-in-the-Loop flows.</span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

          </div>

        </div>

      </div>

    </section><!-- /Skills Section -->

    <!-- Resume Section -->
    <section id="resume" class="resume section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Software Engineer with 2+ years of experience in Cloud DevOps, Platform Engineering, automation and AI-powered solutions. I build AWS infrastructure, CI/CD pipelines and internal developer tools using Terraform, CloudFormation, GitHub Actions, Backstage and Python. My experience includes ECS, Lambda, EC2, RDS, DynamoDB, VPC, API Gateway, Amazon Bedrock and SageMaker, as well as workflow automation with n8n, Power Automate and Copilot Studio. I also have a software development background working with Vue.js, TypeScript, JavaScript, PHP and MySQL.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Sumary</h3>

            <div class="resume-item pb-0">
              <h4>Ludwing Hernandez</h4>
              <p><em>Software Engineer with 2+ years of experience, focused on building scalable cloud infrastructure, automation workflows and developer tools that improve engineering productivity and operational efficiency.</em></p>
              <ul>
                <li>Bogotá D.C., Colombia</li>
                <li>(+57) 305-811-1107</li>
                <li>ludwing20hc@gmail.com</li>
              </ul>
            </div><!-- Edn Resume Item -->

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>BACHELOR’S DEGREE IN SOFTWARE ENGINEERING</h4>
              <h5>2020 - 2025</h5>
              <p><em>University Manuela Beltran, Bogotá, Colombia</em></p>
              <p>Academic background in software development, requirements analysis, databases, cloud computing and software solution design.</p>
            </div><!-- Edn Resume Item -->

            <div class="resume-item">
              <h4>Technical Degree in Software Development</h4>
              <h5>2018 - 2019</h5>
              <p><em>SENA, Bogotá, Colombia</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div><!-- Edn Resume Item -->
            <h3 class="resume-title">Certifications & Complementarias</h3>
            <div class="resume-item">
              <h4>DIPLOMA IN AI FOR OPERATIONAL AND ORGANIZATIONAL EXCELLENCE</h4>
              <h5>2025</h5>
              <p><em>University Manuela Beltran, Bogotá, Colombia</em></p>
              <p>Training focused on applying artificial intelligence to process optimization, automation and organizational improvement.</p>
            </div><!-- Edn Resume Item -->

            <div class="resume-item">
              <h4>AWS Certified Cloud Practitioner</h4>
              <h5>2025</h5>
              <p><em>Amazon Web Services</em></p>
            </div><!-- Edn Resume Item -->
            <div class="resume-item">
              <h4>Oracle AI Foundations Associate</h4>
              <h5>2025</h5>
              <p><em>Oracle</em></p>
            </div><!-- Edn Resume Item -->
            <div class="resume-item">
              <h4>Oracle Foundations Associate </h4>
              <h5>2025</h5>
              <p><em>Oracle</em></p>
            </div><!-- Edn Resume Item -->
            <div class="resume-item">
              <h4>Business Intelligence Foundation Professional</h4>
              <h5>2023</h5>
              <p><em>Certiprof Partners</em></p>
            </div><!-- Edn Resume Item -->
            <div class="resume-item">
              <h4>CCNAv7: Introduction to Networks</h4>
              <h5>2022</h5>
              <p><em>Cisco</em></p>
            </div><!-- Edn Resume Item -->
            <div class="resume-item">
              <h4>CCNAv7: Switching, Routing, and Wireless Essentials</h4>
              <h5>2022</h5>
              <p><em>Cisco</em></p>
            </div><!-- Edn Resume Item -->

          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>DEVOPS CLOUD ENGINEER</h4>
              <h5>2025 - Present</h5>
              <p><em>Banco de Bogotá, Bogotá, Colombia </em></p>
              <ul>
                <li>Design, implement, and manage cloud infrastructure on AWS using Terraform and CloudFormation, leverag-
ing services such as ECS, Lambda, EC2, RDS, DynamoDB, VPC, and API Gateway.</li>
                <li>Create and optimize CI/CD pipelines with GitHub Actions and custom actions, automating deployment pro-
cesses, version updates, and infrastructure-as-code rollbacks.</li>
                <li>Develop and evolve a Backstage-based Internal Developer Platform, including the creation and manage-
ment of custom plugins, Golden Paths, service catalogs, and integrations with internal tools, supporting self-
service capabilities, standardization, technology governance, and an improved developer experience.</li>
                <li>Design AI agents and solutions using Amazon Bedrock, SageMaker, Python, n8n, and OpenCode, integrating
Spec-Driven Development practices to structure requirements, design solutions, automate processes, and
improve implementation quality.</li>
              </ul>
            </div><!-- Edn Resume Item -->

            <div class="resume-item">
              <h4>DevOps Intern</h4>
              <h5>2024 - 2025</h5>
              <p><em>Banco de Bogotá, Bogotá, Colombia</em></p>
              <ul>
                <li>Supported the design and provisioning of AWS infrastructure using Terraform and services such as VPC, API
Gateway, Lambda, and RDS for the implementation of cloud solutions.</li>
                <li>Configured CI/CD pipelines with GitHub Actions, contributing to the automation of integration, deployment,
and change-management processes.</li>
                <li>Contributed to the development and evolution of a Backstage-based Internal Developer Platform by inte-
grating tools and capabilities focused on standardizing processes and improving the developer experience.</li>
                <li>Designed and implemented process automations with Power Automate, Copilot Studio, and Python, inte-
grated with AWS services to reduce manual tasks and optimize operational workflows.</li>
              </ul>
            </div><!-- Edn Resume Item -->
            <div class="resume-item">
              <h4>Project Lead and Software Developer</h4>
              <h5>2023</h5>
              <p><em>TST Solutions S.A.S, Bogotá, Colombia</em></p>
              <ul>
                <li>Analyzed requirements and designed custom software solutions, defining functionalities, user flows, and
UX/UI proposals in Figma according to each client’s needs.</li>
                <li>Developed and implemented web applications and new features using PHP, Vue.js, HTML, CSS, Bootstrap,
and MySQL, including database design, modeling, and implementation.</li>
                <li>Provided support, maintenance, and incident resolution for previously developed applications, implementing
functional and technical adjustments to ensure stability and operational continuity.</li>
              </ul>
            </div><!-- Edn Resume Item -->

          </div>

        </div>

      </div>

    </section><!-- /Resume Section -->

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Proyectos</h2>
        <p>Una selección de soluciones de automatización, aplicaciones web y sistemas de información desarrollados durante mi formación y experiencia profesional.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div v-if="false" class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li   :class="{
    'filter-active':
      activePortfolioFilter === '*',
  }"
  @click="filterPortfolio('*')">All</li>
            <li   :class="{
    'filter-active':
      activePortfolioFilter === '.filter-app',
  }"
  @click="
    filterPortfolio('.filter-app')
  ">App</li>
            <li   :class="{
    'filter-active':
      activePortfolioFilter === '.filter-product',
  }"
  @click="
    filterPortfolio('.filter-product')
  ">Product</li>
            <li   :class="{
    'filter-active':
      activePortfolioFilter === '.filter-branding',
  }"
  @click="
    filterPortfolio('.filter-branding')
  ">Branding</li>
            <li   :class="{
    'filter-active':
      activePortfolioFilter === '.filter-books',
  }"
  @click="
    filterPortfolio('.filter-books')
  ">Books</li>
          </ul><!-- End Portfolio Filters -->

          <div ref="isotopeContainer" class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/app-1.jpg" class="img-fluid" alt="App 1">
                <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/product-1.jpg" class="img-fluid" alt="Product 1">
                <div class="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/branding-1.jpg" class="img-fluid" alt="Branding 1">
                <div class="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/books-1.jpg" class="img-fluid" alt="Books 1">
                <div class="portfolio-info">
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/books-1.jpg" title="Books 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/app-2.jpg" class="img-fluid" alt="App 2">
                <div class="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/product-2.jpg" class="img-fluid" alt="Product 2">
                <div class="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/branding-2.jpg" class="img-fluid" alt="Branding 2">
                <div class="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/books-2.jpg" class="img-fluid" alt="Books 2">
                <div class="portfolio-info">
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/books-2.jpg" title="Books 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/app-3.jpg" class="img-fluid" alt="App 3">
                <div class="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/product-3.jpg" class="img-fluid" alt="Product 3">
                <div class="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/branding-3.jpg" class="img-fluid" alt="Branding 3">
                <div class="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/branding-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img src="/images/portfolio/books-3.jpg" class="img-fluid" alt="Books 3">
                <div class="portfolio-info">
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="/images/portfolio/books-3.jpg" title="Books 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

          </div><!-- End Portfolio Container -->

        </div>

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li
              v-for="filter in projectFilters"
              :key="filter.value"
              :class="{ 'filter-active': activePortfolioFilter === filter.value }"
              @click="filterPortfolio(filter.value)"
            >
              {{ filter.label }}
            </li>
          </ul>

          <div ref="isotopeContainer" class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <article
              v-for="project in projects"
              :key="project.title"
              class="col-lg-4 col-md-6 portfolio-item isotope-item"
              :class="project.category"
            >
              <div class="portfolio-content h-100">
                <img :src="project.image" class="img-fluid" :alt="project.title">
                <div class="portfolio-info">
                  <h4>{{ project.title }}</h4>
                  <p>{{ project.description }} · {{ project.year }}</p>
                  <a
                    :href="project.image"
                    :title="project.title"
                    :data-gallery="project.gallery"
                    class="glightbox preview-link"
                    aria-label="Ver imagen del proyecto"
                  ><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section><!-- /Portfolio Section -->

    <!-- Services Section -->
    <section id="services" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>What I Do</h2>
        <p>I build cloud platforms, automation workflows and developer tools that help engineering teams deliver software faster, reduce repetitive work and operate more efficiently.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="icon flex-shrink-0"><i class="bi bi-cloud-check" aria-hidden="true"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">Cloud Infrastructure</a></h4>
              <p class="description">Design and manage scalable AWS infrastructure using Terraform, CloudFormation and services such as ECS, Lambda, EC2, RDS, DynamoDB, VPC and API Gateway.</p>
            </div>
          </div>
          <!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="icon flex-shrink-0"><i class="bi bi-git" aria-hidden="true"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">CI/CD Automation</a></h4>
              <p class="description">Build automated pipelines with GitHub Actions and Jenkins for code validation, infrastructure changes, deployments and release processes.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="icon flex-shrink-0"><i class="bi bi-boxes" aria-hidden="true"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">Platform Engineering</a></h4>
              <p class="description">Develop to Internal Developer Platforms using Backstage, Golden Paths, software templates and custom integrations that improve developer experience.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div class="icon flex-shrink-0"><i class="bi bi-gear-wide-connected" aria-hidden="true"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">Workflow Automation</a></h4>
              <p class="description">Automate repetitive engineering and operational processes using Python, n8n, Power Automate and Copilot Studio.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div class="icon flex-shrink-0"><i class="bi bi-cpu" aria-hidden="true"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">AI-Powered Solutions</a></h4>
              <p class="description">Build intelligent workflows with Amazon Bedrock, SageMaker and AI agents, including document processing, governance and Human-in-the-Loop solutions.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div class="icon flex-shrink-0"><i class="bi bi-code-slash" aria-hidden="true"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">Software Development</a></h4>
              <p class="description">Develop and integrate web solutions using Vue.js, TypeScript, JavaScript, PHP and MySQL, with a focus on maintainable and practical implementations.</p>
            </div>
          </div><!-- End Service Item -->

        </div>

      </div>

    </section>
    <!-- /Services Section -->

    <!-- Testimonials section temporarily disabled.
    <section id="testimonials" class="testimonials section light-background">

      <div class="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <Swiper
          class="init-swiper"
          :modules="swiperModules"
          :loop="true"
          :speed="600"
          :autoplay="{ delay: 5000 }"
          :slides-per-view="'auto'"
          :pagination="{ clickable: true }"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 1 },
          }"
        >

            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </SwiperSlide>
        </Swiper>

      </div>

    </section>
    -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Let’s Connect</h2>
        <p>Interested in working together or discussing a new opportunity? Feel free to reach out. I’m always open to connecting with professionals, engineering teams and organizations building meaningful technology solutions.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-5">

            <div class="info-wrap">
              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Location</h3>
                  <p>Bogotá, Colombia</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+57 305-811-1107</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email </h3>
                  <a href="mailto:ludwing20h@gmail.com">
  ludwing20h@gmail.com
</a>
                </div>
              </div><!-- End Info Item -->

             <iframe src="https://www.google.com/maps?q=Bogot%C3%A1%2C%20Colombia&output=embed" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div class="col-lg-7">
            <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <label for="name-field" class="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" class="form-control" required="">
                </div>

                <div class="col-md-6">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email-field" required="">
                </div>

                <div class="col-md-12">
                  <label for="subject-field" class="pb-2">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject-field" required="">
                </div>

                <div class="col-md-12">
                  <label for="message-field" class="pb-2">Message</label>
                  <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->

  </main>
    <!-- Scroll Top -->
  <a id="scroll-top"
  href="#"
  class="scroll-top d-flex align-items-center justify-content-center"
  :class="{
    active: isScrollTopVisible,
  }"
  @click.prevent="scrollToTop"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div   
  v-if="isPreloading"
  id="preloader"></div>
</template>
