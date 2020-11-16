<template>
  <header>
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
  export default {
    mounted() {
      // console.log(this.navStatus)
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
    position: relative;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 30px;
    display: flex;
    // align-items: flex-end;
    align-items: center;
    justify-content: space-between;
    background: $primary;
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
      height: 100%;
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: $primary;
    }
  }
  .navOpen {
    #mainNav {
      z-index: 5;
    }
    .menu-btn {
      color: $white;
    }
  }
</style>