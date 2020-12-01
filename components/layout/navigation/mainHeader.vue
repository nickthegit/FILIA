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
    <section class="lang" :class="langOpen ? 'open' : 'closed'">
      <div class="current" @click="openLang">
        {{ currentLocale[0].name
        }}<span
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path d="M100 175.8l96.4-151.6H3.6z" /></svg
        ></span>
      </div>
      <div class="dropdown" v-if="langOpen" @click="openLang">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link
        >
      </div>
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
        langOpen: false,
      }
    },
    computed: {
      currentLocale() {
        return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)
      },
      availableLocales() {
        return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
      },
    },
    methods: {
      openLang() {
        this.langOpen = !this.langOpen
      },
    },
    mounted() {
      // console.log(this.$i18n)
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
    justify-content: flex-end;
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
    position: absolute;
    z-index: 9;
    display: block;
    left: 30px;
    width: 90px;
  }

  .lang {
    width: 140px;
    display: block;
    box-sizing: border-box;
    position: relative;
    margin-right: 20px;
    text-align: center;
    text-transform: capitalize;
    background: transparent;
    &.open {
      background: $vanilla;
      .current {
        color: $warmred;
        svg {
          fill: $warmred;
        }
      }
    }
    @include breakpoint(mobile) {
      margin-right: 2px;
      width: 90px;
      font-size: 12px;
    }
  }
  .current {
    width: 100%;
    position: relative;
    padding: 10px;
    text-decoration: underline;
    color: $vanilla;
    cursor: pointer;
    span {
      width: 12px;
      height: 100%;
      display: inline-block;
      vertical-align: top;
      margin-left: 7px;
      padding-top: 2px;
      svg {
        width: 100%;
        fill: $vanilla;
      }
    }
  }
  .dropdown {
    position: absolute;
    // top: 0;
    left: 0;
    width: 100%;
    // display: none;
    background: $vanilla;
    a {
      display: block;
      width: 100%;
      color: $warmred;
      text-decoration: none;
      padding: 10px;
      position: relative;
    }
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