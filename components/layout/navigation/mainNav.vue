<template>
  <nav @click="$store.dispatch('setNavPayload', false)">
    <anchor-button
      type="link"
      hrefLink="#newsletter"
      theme="vanilla"
      class="nav-cta"
      :forNav="true"
      >{{ result.headerBtnText }}</anchor-button
    >
    <nuxt-link to="#contact">{{ result.headerContactText }}</nuxt-link>
    <slot></slot>
  </nav>
</template>

<script>
  import { headerQuery } from '~/utils/groqQuery'
  export default {
    data() {
      return {
        result: {
          headerBtnText: 'Join the solar revolution',
          headerContactText: 'Contact',
        },
      }
    },
    async fetch() {
      const vm = await this
      const query = await headerQuery(vm.$i18n.locale)
      this.result = await this.$sanity.fetch(query)
    },
    mounted() {},
    watch: {
      '$route.query': '$fetch',
    },
  }
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
      @include breakpoint(mobile) {
        margin-right: 0;
        margin-bottom: 20px;

        a {
          font-size: 20px;
        }
      }
    }
    a {
      color: $vanilla;
      text-decoration: none;
      margin-right: 20px;
      font-size: 16px;
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
        font-size: 22px;
        margin-top: 0px;
      }
    }
    .nav_mobile {
      .nav-cta {
        @include breakpoint(mobile) {
          a {
            font-size: 22px;
          }
        }
      }
    }

    // @include breakpoint(mobile) {
    //   width: 100%;
    //   height: 100vh;
    //   position: fixed;
    // }
  }
</style>