<template>
  <nav @click="$store.dispatch('setNavPayload', false)">
    <nuxt-link class="btn" to="/">Sign-up for release info</nuxt-link>
    <nuxt-link to="/">contact</nuxt-link>
    <slot></slot>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  nav {
    position: relative;
    width: auto;
    height: auto;
    top: 0;
    left: 0;
    display: block;
    a {
      color: $vanilla;
      text-decoration: none;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
    .btn {
      padding: 7.5px 15px;
      border-radius: 20px;
      background: $vanilla;
      color: $warmred;
    }
    @include breakpoint(mobile) {
      width: 100%;
      height: 100vh;
      position: fixed;
    }
  }
</style>