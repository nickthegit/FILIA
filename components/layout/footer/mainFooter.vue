<template>
  <footer>
    <section class="top">
      <div class="container">
        <div class="newsletter__wrap"></div>
        <div class="contact__wrap">
          <div class="background"></div>
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
    <!-- <section>© company name {{ year }}, All rights reserved.</section> -->
  </footer>
</template>

<script>
  import Facebook from '~/components/icons/facebook.vue'
  import instagram from '~/components/icons/instagram.vue'
  export default {
    components: { instagram, Facebook },
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
      padding: 25px;
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
    height: 0;
    padding-bottom: 66%;
    background: silver;
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
    background: aquamarine;
    z-index: 1;
  }
  .copy {
    padding: 70px;
    text-align: center;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
</style>