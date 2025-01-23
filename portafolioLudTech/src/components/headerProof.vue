<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-dark py-3">
    <div class="container px-5">
      <router-link class="navbar-brand" to="/">
        <span class="fw-bolder text-primary"><p class="h3">Ludwing's Website</p></span>
      </router-link>
      <button
        class="navbar-toggler border border-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list text-primary"></i>
        <!-- <span class="navbar-toggler-icon "></span> -->
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <li class="nav-item">
            <!-- <a class="nav-link" href="{% url 'inicio' %}"
              >Home
              <i class="bi bi-house-door-fill"></i>
            </a> -->
            <router-link class="nav-link text-secondary" to="/">
              Home
              <i class="bi bi-house-door-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="{% url 'resume' %}"
              >Resume
              <i class="bi bi-file-earmark-person-fill"></i>
            </a> -->
            <router-link class="nav-link text-secondary" to="/resume">
              Resume
              <i class="bi bi-file-earmark-person-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-secondary" to="/proyects">
              Proyects
              <i class="bi bi-file-earmark-code-fill"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
