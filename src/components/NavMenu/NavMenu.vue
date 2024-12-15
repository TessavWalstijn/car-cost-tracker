<script lang="ts" setup></script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <i class="fa-light fa-2x fa-car-garage"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/add-trip">
          <i class="fa-light fa-2x fa-car-on"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/add-maintenance">
          <i class="fa-light fa-2x fa-car-wrench"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/add-wash">
          <i class="fa-light fa-2x fa-car-wash"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import url('./NavMenu.scss');
</style>
