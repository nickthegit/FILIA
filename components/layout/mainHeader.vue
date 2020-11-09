<template>
  <header>
    <section id="brand" @click="$store.dispatch('setNavPayload', false)">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </section>
    <main-nav @click="$store.dispatch('setNavPayload', false)">
      <!-- v-show="$store.state.navState" -->
      <!-- <socials /> -->
    </main-nav>
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
    align-items: flex-end;
    justify-content: space-between;
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
  .navOpen {
    #mainNav {
      z-index: 5;
    }
    .menu-btn {
      color: $white;
    }
  }
</style>