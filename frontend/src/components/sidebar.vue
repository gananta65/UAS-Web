<template>
  <div class="d-flex bd-highlight">
<div class="p-3 text-white bg-dark" style="width: 280px;">
    <a href="./dashboard" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Dashboard</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="./employees" class="nav-link text-white" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Employees
        </a>
      </li>
      <li>
        <a href="./reports" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Reports
        </a>
      </li>
      <li>
        <a href="./" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Logout
        </a>
      </li>
    </ul>
    <hr>
  </div>
  <div class="flex-shrink-1" style="height:100vh; width:100vh;">
      <slot></slot>  
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>