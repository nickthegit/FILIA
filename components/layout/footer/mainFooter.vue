<template>
  <footer>
    <section class="top">
      <div class="container">
        <div class="newsletter__wrap">
          <newsletter />
        </div>
        <div class="contact__wrap">
          <div class="background">
            <sun-illustration class="sun" />
            <city class="city" />
          </div>
          <div class="copy">
            <h3>CONTACT MESSAGE HERE</h3>
            <p>
              Lorrem ipsum dolor sit amet, consectetur adipiscing elit. Ve
              stibulum posuere ex nec eros imperdiet, pretium rutrum ex auctor.
              Praesent pulvinar felis eget odio vulputate
            </p>
            <a href="mailto:info@filia.co.uk">info@filia.co.uk</a>
            <div class="socials">
              <a
                class="social"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <instagram />
              </a>
              <a
                class="social"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom">
      <ul class="terms">
        <li>
          <nuxt-link to="/">Privacy Policy</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Terms of Service</nuxt-link>
        </li>
      </ul>
      <p>© Filia {{ year }}, All rights reserved.</p>
      <Logo theme="black" />
    </section>
    <!-- <section>© company name {{ year }}, All rights reserved.</section> -->
  </footer>
</template>

<script>
  export default {
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
      bottom: -25%;
      left: 0;
      z-index: 2;
      @include breakpoint(tablet-mobile) {
        bottom: -10%;
      }
    }
    .sun {
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
    color: $black;
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
        color: $black;
        &:hover,
        &:focus,
        &:active {
          text-decoration: underline;
        }
      }
    }
    p {
      color: rgba($black, 0.3);
    }
  }
</style>