<template>
  <div :class="theme" class="btn">
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
    },
  }
</script>

<style lang="scss" scoped>
  div {
    display: inline-block;
  }
  a,
  button {
    padding: 7.5px 30px;
    border-radius: 20px;
    background: $vanilla;
    color: $warmred;
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    padding-bottom: 8px;
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
      color: $pacific;
    }
  }
</style>