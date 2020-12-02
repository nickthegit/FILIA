<template>
  <footer>
    <section class="top">
      <div class="container">
        <div class="newsletter__wrap" id="newsletter">
          <newsletter
            :title="result.newsletter.title"
            :checkboxCopy="result.newsletter.checkboxCopy"
            :copy="result.newsletter.copy"
          />
        </div>
        <div class="contact__wrap" id="contact">
          <div class="background">
            <sun-illustration class="sun" />
            <city class="city" />
          </div>
          <div class="copy">
            <h3>{{ result.contact.title }}</h3>
            <SanityContent :blocks="result.contact.copy" />
            <div class="socials">
              <a
                class="social"
                :href="result.contact.socials.instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <instagram />
              </a>
              <a
                class="social"
                :href="result.contact.socials.twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom">
      <ul class="terms">
        <li>
          <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link to="/">Terms of Service</nuxt-link>
        </li> -->
      </ul>
      <p>© Filia {{ year }}, All rights reserved.</p>
      <Logo theme="warmred" />
    </section>
    <!-- <section>© company name {{ year }}, All rights reserved.</section> -->
  </footer>
</template>

<script>
  import { footerQuery } from '~/utils/groqQuery'
  export default {
    data() {
      return {
        result: {
          contact: {
            title: 'Get In Touch',
            copy: [
              'For more information or to talk to one of our team, you can find us at info@filia.solar',
            ],
            socials: {
              instagram: 'https://instagram.com/filia.solar',
              facebook: 'https://facebook.com',
              twitter: 'https://twitter.com/@FiliaSolar',
            },
          },
          newsletter: {
            title: `Join Us And Sign Up To Embrace A New Future You'Ll Be First To Hear About Launches In Your Area`,
          },
        },
      }
    },
    async fetch() {
      const vm = await this
      const query = await footerQuery(vm.$i18n.locale)
      this.result = await this.$sanity.fetch(query)
    },
    mounted() {
      console.log(this.result)
    },
    watch: {
      '$route.query': '$fetch',
    },
    computed: {
      year() {
        return new Date().getFullYear()
      },
    },
  }
</script>

<style lang="scss" scoped>
  footer {
    width: 100%;
  }
  .top {
    width: 100%;
    padding: 30px;
    background: $white;
    position: relative;
    @include breakpoint(mobile) {
      padding: 0;
    }
    .container {
      width: 100%;
      position: relative;
      display: grid;
      grid-template: auto / 50% 50%;
      @include breakpoint(mobile) {
        grid-template: auto auto / 100%;
      }
    }
  }
  .contact__wrap {
    width: 100%;
    background: $warmred;
    color: $vanilla;
    width: 100%;
    height: auto;
    min-height: 500px;
    // padding-bottom: 66%;
    position: relative;
    top: 0;
    left: 0;
    a {
      text-decoration: none;
      color: $vanilla;
      &:hover {
        text-decoration: underline;
      }
    }
    @include breakpoint(tablet-mobile) {
      min-height: 400px;
    }
  }
  .background,
  .copy {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .background {
    background: $warmred;
    z-index: 1;
    overflow: hidden;
    svg {
      position: absolute;
    }
    .city {
      width: 135%;
      bottom: -12%;
      left: 0;
      z-index: 2;
      @include breakpoint(tablet-mobile) {
        bottom: -10%;
      }
    }
    .sun {
      position: absolute;
      width: 75%;
      z-index: 1;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .copy {
    padding: 70px;
    text-align: center;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @include breakpoint(tablet-mobile) {
      // position: relative;
    }
    @include breakpoint(mobile) {
      padding: 50px 30px;
    }
    h3,
    p,
    a {
      max-width: 400px;
      margin-bottom: 20px;
    }
    .social {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin: 5px;
      svg {
        width: 100%;
      }
    }
  }
  .bottom {
    width: 100%;
    padding: 20px 30px 30px 30px;
    background: $white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $warmred;
    @include breakpoint(mobile) {
      flex-direction: column;
      align-items: flex-start;
    }
    svg {
      width: 80px;
      position: absolute;
      right: 30px;
    }
    ul {
      li {
        color: $black;
        display: inline-block;
        margin-right: 20px;
        @include breakpoint(mobile) {
          display: block;
          padding-bottom: 10px;
        }
      }
      a {
        text-decoration: none;
        color: $warmred;
        &:hover,
        &:focus,
        &:active {
          text-decoration: underline;
        }
      }
    }
    p {
      color: rgba($warmred, 0.3);
    }
  }
</style>