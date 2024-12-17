<script setup>
import { ref, computed } from 'vue'
import saveAs from 'file-saver'
const pdf = ref('../assets/pdf/HVLudwing.pdf')

const downloadPdf = () => {
  fetch(pdf.value)
    .then((Response) => response.blob())
    .then((blob) => saveAs(blob, 'HVLudwing.pdf'))
}
</script>

<template>
  <router-view />
  <div class="container px-5 my-5">
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bolder mb-0">
        <span class="text-gradient d-inline"
          >Resume
          <i class="bi bi-file-earmark-person-fill"></i>
        </span>
      </h1>
    </div>
    <div class="row gx-5 justify-content-center">
      <div class="col-lg-11 col-xl-9 col-xxl-8">
        <!-- Experience Section-->
        <section>
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 class="text-primary fw-bolder mb-2">Experience</h2>
            <!-- Download resume button-->
            <!-- Note: Set the link href target to a PDF file within your project-->
            <!-- <a class="btn btn-primary px-4 py-3" :href="pdf" v-on="prevent">
              <div class="d-inline-block bi bi-download me-2"></div>
              Download Resume
            </a> -->
          </div>
          <!-- Experience Card 1-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2024 - 2025</div>
                    <div class="small text-light fw-bolder">Junior DevOps Intern</div>
                    <div class="small text-muted">Banco de Bogotá</div>
                    <div class="small text-muted">Bogotá, Colombia</div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="text-light">
I implemented automations using technologies such as Power Automate, Copilot Studio, Python, and cloud services, applying the DevOps methodology to optimize processes and enhance operational efficiency.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Experience Card 2-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2022 - 2023</div>
                    <div class="small text-light fw-bolder">Junior Web Developer</div>
                    <div class="small text-muted">TST Solutions S.A.S</div>
                    <div class="small text-muted">Bogotá, Colombia</div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="text-light">
                    To gather and analyze information in meetings with clients for the respective
                    requested developments. Software development with PHP and Vue Js. Provide
                    support to previously developed software.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Experience Card 3-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2020 - 2022</div>
                    <div class="small fw-bolder text-light">Freelancer</div>
                    <div class="small text-muted">Independent</div>
                    <div class="small text-muted">Bogotá, Colombia</div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>Development of diverse software in web environment using PHP.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Education Section-->
        <section>
          <h2 class="text-secondary fw-bolder mb-4">Education</h2>
          <!-- Education Card 1-->
          <div class="card border-secondary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-light p-4 rounded-4 bg-dark">
                    <div class="text-secondary fw-bolder mb-2">2020 - Present</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">Manuela Beltran University</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Student</div>
                      <div class="small text-muted">Software Engineering</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>I am currently in my seventh semester of software engineering.</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Education Card 2-->
          <div class="card border-secondary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-secondary fw-bolder mb-2">2018 - 2019</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">SENA</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Technician's</div>
                      <div class="small text-muted">Software Development</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>I graduated with honors as a software development technician.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Courses Section-->
        <section>
          <h2 class="text-primary fw-bolder mb-4">Courses</h2>
          <!-- Education Card 1-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2024</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">CertiProf</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Studen's</div>
                      <div class="small text-muted">
                        Business Intelligence Foundation Professional Certification - BIFPC™
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>
                    This certification aims to prepare students in the fundamentals of Business
                    Intelligence. It will cover general topics, such as the history of BI, as well
                    as technical issues, such as the use of keys to create table relationships in a
                    data model.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Education Card 2-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2023</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">Cisco Networking Academy</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Student's</div>
                      <div class="small text-muted">Introduction to Cyber Security</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>
                    This course is taught by Cisco Networking Academy, where you learn about
                    cybersecurity concepts, types of attacks, protection against attacks, protection
                    against cyber attacks.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Education Card 3-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2023</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">ScrumStudy</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Studen's</div>
                      <div class="small text-muted">Scrum Fundamental Certified</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>
                    The course consists of learning the principles and fundamental concepts of the
                    Scrum of the Scrum methodology and was given by ScrumStudy. by ScrumStudy.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Education Card 4-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2023</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">Cisco Networking Academy</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Studen's</div>
                      <div class="small text-muted">Python Essentials 1</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>
                    the course program consisted of learning the basics of the Python 3 language,
                    which is used to develop Python 3 language, which is used to develop simple
                    scripts. scripts. This course was developed at Cisco Networking Academy.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Education Card 5-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2022</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">Cisco Networking Academy</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Studen's</div>
                      <div class="small text-muted">
                        CCNAv7: Switching, Routing, and Wireless Essentials
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>
                    Configure VLANs and inter-VLAN routing using security best practices. Configure
                    redundancy in a switched network using STP and EtherChannel. EtherChannel.
                    Troubleshoot EtherChannel problems on switched links. Explain how to support
                    available and reliable networks using dynamic routing and dynamic addressing and
                    redundancy protocols. Configure dynamic address assignment in IPv6 networks.
                    Configure WLANs using WLC and L2 security best practices. Configure switch
                    security to mitigate LAN attacks. Configure IPv4 and IPv6 static routing on
                    routers.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Education Card 6-->
          <div class="card border-primary rounded-4 mb-5 bg-dark">
            <div class="card-body p-5">
              <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                  <div class="bg-dark p-4 rounded-4">
                    <div class="text-primary fw-bolder mb-2">2022</div>
                    <div class="mb-2">
                      <div class="small fw-bolder text-light">Cisco Networking Academy</div>
                      <div class="small text-muted">Bogotá, Colombia</div>
                    </div>
                    <div class="fst-italic">
                      <div class="small text-muted">Studen's</div>
                      <div class="small text-muted">CCNAv7: Introduction to Networks</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 text-light">
                  <div>
                    Configure switches and end devices to provide access to local and remote network
                    resources. Explain how physical and data link layer protocols support Ethernet
                    operation in a switched network. support Ethernet operation in a switched
                    network Configure routers to enable end-to-end connectivity between remote
                    devices. Create IPv4 and IPv6 addressing schemes and verify network connectivity
                    between devices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Divider-->
        <div class="pb-5"></div>
        <!-- Skills Section-->
        <section>
          <!-- Skillset Card-->
          <div class="card border-secondary bg-dark rounded-4 mb-5">
            <div class="card-body p-5">
              <!-- Professional skills list-->
              <div class="mb-5">
                <div class="d-flex align-items-center mb-4">
                  <div
                    class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
                  >
                    <i class="bi bi-tools"></i>
                  </div>
                  <h3 class="fw-bolder mb-0">
                    <span class="text-gradient d-inline">Professional Skills</span>
                  </h3>
                </div>
                <div class="row row-cols-1 row-cols-md-3 mb-4 bg-dark text-light">
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      DevOps methodology
                    </div>
                  </div>
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Github Actions
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Power automate & Copilot
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 mb-4 bg-dark text-light">
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Scrum methodology
                    </div>
                  </div>
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Requirements analysis
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      UML Design
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 text-light">
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Frontend Development
                    </div>
                  </div>
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Backend Development Suite
                    </div>
                  </div>
                  <div class="col ">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      User Design
                    </div>
                  </div>
                </div>
              </div>
              <!-- Languages list-->
              <div class="mb-0">
                <div class="d-flex align-items-center mb-4">
                  <div
                    class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
                  >
                    <i class="bi bi-code-slash"></i>
                  </div>
                  <h3 class="fw-bolder mb-0">
                    <span class="text-gradient d-inline">Languages</span>
                  </h3>
                </div>
                <div class="row row-cols-1 row-cols-md-3 mb-4 text-light">
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Terraform
                    </div>
                  </div>
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      C #
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      JavaScript
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 text-light">
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      Python
                    </div>
                  </div>
                  <div class="col mb-4 mb-md-0">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      PHP
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="d-flex align-items-center rounded-4 p-3 h-100 border border-primary"
                    >
                      My SQL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
