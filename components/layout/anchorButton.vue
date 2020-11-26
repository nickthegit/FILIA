<template>
  <div :class="[theme, forNav ? 'nav' : '']" class="btn">
    <a v-if="type === 'link'" :href="hrefLink"><slot></slot></a>
    <button v-else-if="type === 'button'" @click="clickAction">
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'link', // link / button
      },
      hrefLink: {
        type: String,
        default: '#',
      },
      clickAction: {
        type: Function,
      },
      theme: {
        type: String,
        default: 'vanilla', // vanilla / orange / white
      },
      forNav: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss" scoped>
  div {
    display: inline-block;
  }
  a,
  button {
    padding: 12.5px 30px;
    border-radius: 25px;
    background: $vanilla;
    color: $warmred;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    // padding-bottom: 8px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .vanilla {
    a,
    button {
      background: $vanilla;
      color: $warmred;
    }
  }
  .orange {
    a,
    button {
      background: $warmred;
      color: $offWhite;
    }
  }
  .white {
    a,
    button {
      background: $white;
      color: $cerulean;
    }
  }
  .nav {
    @include breakpoint(mobile) {
      a {
        font-size: 22px;
      }
    }
  }
</style>