<template>
  <header
    class="mainHeader"
    :class="[scrollUp ? 'scrollUp' : '', scrollTop ? 'scrollTop' : '']"
  >
    <section id="brand" @click="$store.dispatch('setNavPayload', false)">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </section>
    <main-nav
      @click="$store.dispatch('setNavPayload', false)"
      class="nav_main"
    />
    <!-- v-show="$store.state.navState" -->
    <main-nav
      @click="$store.dispatch('setNavPayload', false)"
      class="nav_mobile"
      v-show="$store.state.navState"
    />
    <main-nav-btn />
  </header>
</template>

<script>
  import { throttle } from 'lodash'
  export default {
    data() {
      return {
        scrollUp: false,
        scrollTop: true,
      }
    },
    methods: {},
    mounted() {
      let vm = this
      var lastScrollTop = 0
      // Detect the scroll.
      window.addEventListener(
        'scroll',
        _.throttle(function () {
          let st = window.pageYOffset || document.documentElement.scrollTop
          if (st === 0) {
            vm.scrollUp = false
            vm.scrollTop = true
          } else {
            vm.scrollTop = false
            if (st > lastScrollTop) {
              // Downscroll code
              vm.scrollUp = false
            } else {
              // Upscroll code
              vm.scrollUp = true
            }
          }
          lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
        }, 300),
        false
      )
    },
    head() {
      return {
        bodyAttrs: {
          class: this.$store.state.navState ? 'navOpen' : 'navClosed',
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-200px);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $primary;
    z-index: 999999;
    transition: all 0.3s ease-out;
    &.scrollTop {
      transform: translateY(0px);
    }
    &.scrollUp {
      position: fixed;
      // background: $vanilla;
      // color: $warmred;
      transform: translateY(0px);
    }
    @include breakpoint(mobile) {
      padding-right: 20px;
    }
  }
  #brand {
    position: relative;
    z-index: 9;
    display: block;
    left: 0;
    width: 90px;
  }
  #mainNav {
    padding-top: $headerHeight;
    z-index: 10;
  }
  .nav_main {
    display: block;
    @include breakpoint(mobile) {
      display: none;
    }
  }
  .nav_mobile {
    @include breakpoint(mobile) {
      width: 100%;
      height: 100vh;
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: $primary;
      top: 0;
      left: 0;
      transform: translateY(-101%);
      transition: transform 0.3s ease-out;
      z-index: 5;
    }
  }
  .navOpen {
    .nav_mobile {
      transform: translateY(0);
    }
  }
  .navOpen {
    #mainNav {
    }
    .menu-btn {
      color: $vanilla;
    }
  }
</style>