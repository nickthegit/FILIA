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
        <anchor-button type="link" hrefLink="#" theme="vanilla"
          >Sign-up for release info</anchor-button
        >
      </section>
      <section class="illustration">
        <hero-illustration />
      </section>
      <section class="sun">
        <sun-illustration />
      </section>
    </article>
    <section class="intro">
      <div class="copy">
        <h2>
          PRODUCT HEADLINE THAT WILL GRAB ATTENTION AT THE TOP OF THE PAGE
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit vestib ulum
          posuere ex nec eros imperdiet, pretium rutrum ex auctor. Praesent
          pulvinar felis eget.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit vestib ulum
          posuere ex nec eros imperdiet.
        </p>
        <anchor-button type="link" hrefLink="#" theme="orange"
          >Sign-up for release info</anchor-button
        >
      </div>
      <figure>
        <img
          src="~/assets/Assets for build/JPG/Filia-InSitu-02.png"
          alt="Filia-InSitu"
        />
        <!-- <img
          srcset="~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 1.5x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 2x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 2.5x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 3x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 4x"
          src="~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png"
          alt="Filia-InSitu"
        /> -->
      </figure>
    </section>
    <section class="product-highlights">
      <div class="container">
        <figure class="background">
          <img
            src="~/assets/Assets for build/JPG/Filia-InSitu-01.png"
            alt="Filia-InSitu"
          />
          <!-- <img
          srcset="~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 1.5x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 2x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 2.5x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 3x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 4x"
          src="~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png"
          alt="Filia-InSitu"
        /> -->
        </figure>
        <div class="highlights">
          <div class="highlight">
            <figure class="highlight__icon">
              <img
                src="~/assets/Assets for build/SVG/Filia-Icon-Home.svg"
                alt="home-icon"
              />
            </figure>
            <h4>PRODUCT HIGHLIGHT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit vestib
              ulum posuere ex nec eros imperdiet, pretium rutrum ex auctor.
            </p>
          </div>
          <div class="highlight">
            <figure class="highlight__icon">
              <img
                src="~/assets/Assets for build/SVG/Filia-Icon-Sun.svg"
                alt="home-icon"
              />
            </figure>
            <h4>PRODUCT HIGHLIGHT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit vestib
              ulum posuere ex nec eros imperdiet, pretium rutrum ex auctor.
            </p>
          </div>
          <div class="highlight">
            <figure class="highlight__icon">
              <img
                src="~/assets/Assets for build/SVG/Filia-Icon-Renewable.svg"
                alt="home-icon"
              />
            </figure>
            <h4>PRODUCT HIGHLIGHT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit vestib
              ulum posuere ex nec eros imperdiet, pretium rutrum ex auctor.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="info">
      <figure>
        <img
          src="~/assets/Assets for build/JPG/Filia-InSitu-03.png"
          alt="Filia-InSitu"
        />
        <!-- <img
          srcset="~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 1.5x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 2x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 2.5x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 3x,
          ~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png 4x"
          src="~/assets/Assets for build/JPG/Filia-InSitu-02-Cropped.png"
          alt="Filia-InSitu"
        /> -->
      </figure>
      <div class="copy">
        <h2>AN INTRODUCTION HEADLINE TO SOME BULLET POINTS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit vestib ulum
          posuere ex nec eros imperdiet, pretium rutrum ex auctor. Praesent
          pulvinar felis eget.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit vestib ulum
          posuere ex nec eros imperdiet.
        </p>
        <anchor-button type="link" hrefLink="#" theme="orange"
          >Sign-up for release info</anchor-button
        >
      </div>
    </section>
  </main>
</template>

<script>
  import anchorButton from '~/components/layout/anchorButton.vue'
  export default {
    components: { anchorButton },
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
    min-height: 200vh;
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
      top: 30%;
      left: 47%;
      transform: translate(-50%, -50%) rotate(180deg);
      @include breakpoint(mobile) {
        width: 220px;
        top: 50%;
        left: 50%;
      }
    }
  }
  .intro {
    width: 100%;
    position: relative;
    display: grid;
    grid-template: auto / 50% 50%;
    background: $offWhite;
    @include breakpoint(mobile) {
      grid-template: auto auto / 100%;
    }
    // figure {
    //   width: 100%;
    // }
    .copy {
      width: 100%;
      max-width: 600px;
      padding: 70px;
      justify-self: end;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      @include breakpoint(mobile) {
        padding: 50px 25px;
        grid-row: 2 / 3;
        grid-column: 1 / 2;
      }
      h2 {
        margin-bottom: 50px;
      }
      p {
        margin: 25px 0;
      }
      a {
        margin-top: 50px;
        @include breakpoint(mobile) {
          margin-top: 25px;
        }
      }
    }
    figure {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      @include breakpoint(mobile) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        height: 50vh;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .product-highlights {
    width: 100%;
    padding: 30px;
    background: $white;
    @include breakpoint(mobile) {
      padding: 25px;
    }
    .container {
      width: 100%;
      position: relative;
      height: 0;
      padding-bottom: 56.25%;
      overflow: hidden;
      @include breakpoint(mobile) {
        height: auto;
        padding-bottom: unset;
      }
    }
    .background,
    .highlights {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      @include breakpoint(mobile) {
        height: auto;
        position: relative;
      }
    }
    .background {
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @include breakpoint(mobile) {
        height: 100%;
        position: absolute;
      }
    }
    .highlights {
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      @include breakpoint(mobile) {
        flex-direction: column;
        padding: 40px 0;
      }
    }
    .highlight {
      width: 100%;
      max-width: 200px;
      text-align: center;
      padding: 20px;
      margin: 25px;
      color: $white;
      @include breakpoint(mobile) {
        padding: 20px;
        margin: 0;
      }
      &__icon {
        width: 40px;
        height: 40px;
        margin: 0 auto 15px auto;
        display: block;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      h4 {
        margin-bottom: 20px;
      }
    }
  }
  .info {
    width: 100%;
    position: relative;
    display: grid;
    grid-template: auto / 50% 50%;
    background: $offWhite;
    @include breakpoint(mobile) {
      grid-template: auto auto / 100%;
    }
    .copy {
      width: 100%;
      max-width: 600px;
      padding: 70px;
      justify-self: start;
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      @include breakpoint(mobile) {
        padding: 50px 25px;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }
      h2 {
        margin-bottom: 50px;
      }
      p {
        margin: 25px 0;
      }
      a {
        margin-top: 50px;
        @include breakpoint(mobile) {
          margin-top: 25px;
        }
      }
    }
    figure {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      @include breakpoint(mobile) {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
        height: 50vh;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
