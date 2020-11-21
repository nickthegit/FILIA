<template>
  <nav @click="$store.dispatch('setNavPayload', false)">
    <anchor-button
      type="link"
      hrefLink="#newsletter"
      theme="vanilla"
      class="nav-cta"
      >Sign-up for release info</anchor-button
    >
    <nuxt-link to="#contact">Contact</nuxt-link>
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
    .nav-cta {
      margin-right: 20px;
    }
    a {
      color: $vanilla;
      text-decoration: none;
      margin-right: 20px;
      font-size: 12px;
      display: inline-block;
      &.btn {
        color: $warmred;
      }
      &:last-child {
        margin-right: 0;
      }
      @include breakpoint(mobile) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
    // @include breakpoint(mobile) {
    //   width: 100%;
    //   height: 100vh;
    //   position: fixed;
    // }
  }
</style>