<template>
  <div class="d-flex bd-highlight sidebar">
    <div class="p-3 text-white bg-dark">
      <router-link
        to="/dashboard"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">Dashboard</span>
      </router-link>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link
            to="/employees"
            class="nav-link text-white"
            aria-current="page"
          >
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#home" />
            </svg>
            Employees
          </router-link>
        </li>
        <li>
          <router-link to="/reports" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#table" />
            </svg>
            Reports
          </router-link>
        </li>
        <li>
          <router-link to="/admin" @click="clear" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#people-circle" />
            </svg>
            Logout
          </router-link>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clear() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  height: 100%;
}
</style>
~
