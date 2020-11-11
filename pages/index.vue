<template>
  <main>
    <article class="hero">
      <section class="headline">
        <h1>
          SOLAR HEADLINE STATEMENT THAT WILL GRAB ATTENTION AT THE TOP OF THE
          PAGE
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          posuere ex nec eros imperdiet, pretium rutrum ex auctor. Praesent
          pulvinar felis eget odio vulputate, ut iaculis nulla vehicula.
        </p>
        <a href="#" class="btn">Sign-up for release info</a>
      </section>
      <section class="illustration">
        <hero-illustration />
      </section>
      <section class="sun">
        <sun-illustration />
      </section>
    </article>
  </main>
</template>

<script>
  export default {
    mounted() {
      // * Access ENV with:
      // process.env.ENV_TEST
      // or
      // context.env.ENV_TEST
      // console.log(process.env.HOST_NAME)
    },
  }
</script>

<style lang="scss" scoped>
  main {
    height: 200vh;
    width: 100%;
  }
  .hero {
    width: 100%;
    position: relative;
    background: $warmred;
    color: $vanilla;
    overflow: hidden;
    section {
      width: 100%;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      overflow: hidden;
    }
    .headline {
      max-width: 600px;
      padding: 30px;
      text-align: center;

      h1,
      p {
        margin-bottom: 30px;
      }
    }
    .illustration {
      max-width: 1020px;
      min-width: 540px;
      padding: 70px 30px;
      @include breakpoint(mobile) {
        transform: translateX(-15%);
      }
    }
    .sun {
      position: absolute;
      z-index: 1;
      width: 390px;
      top: 0;
      left: 0;
      transform: rotate(180deg);
    }
  }
</style>
