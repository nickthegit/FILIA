<template>
  <section>
    <headline-3>{{ title }}</headline-3>
    <form v-on:submit.prevent>
      <!-- name -->
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Name"
        v-model.trim="$v.userName.$model"
      />
      <!-- email -->
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        v-model="$v.userEmail.$model"
      />
      <!-- submit -->
      <anchor-button
        class="submit"
        type="button"
        theme="white"
        :clickAction="submitForm"
        >Subscribe</anchor-button
      >
      <small>
        <input type="checkbox" name="gdpr" id="gdpr" v-model="gdpr" /> Yes I’d
        like to receive news and updates from Fili.</small
      >
      <small
        >To unsubscribe at any time Contact Us.<br />
        For more info see our
        <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
      </small>
    </form>
  </section>
</template>

<script>
  import subscribe from '@input-output-hk/mailchimp-subscribe'
  import { validationMixin } from 'vuelidate'
  import { required, minLength, email } from 'vuelidate/lib/validators'
  export default {
    props: {
      title: {
        type: String,
        default: 'newsletter title',
      },
    },
    data() {
      return {
        userEmail: null,
        userName: null,
        gdpr: false,
        error: false,
        errorMsg: null,
        validateErrors: {
          required: 'Field is required',
          email: 'Must be a valid email',
        },
        nameError: false,
        emailError: false,
        status: 'inactive', // inactive, pending, success, error
      }
    },
    mixins: [validationMixin],
    validations: {
      userName: {
        required,
        minLength: minLength(1),
      },
      userEmail: {
        required,
        email,
      },
      gdpr: {},
    },
    methods: {
      async submitForm() {
        this.nameError = await false
        this.emailError = await false
        if (this.gdpr) {
          if (!this.$v.$invalid) {
            // * VALID
            this.status = await 'pending'
            this.$toast.show('loading')
            await subscribe({
              email: this.userEmail,
              uID: process.env.MC_UID,
              audienceID: process.env.MC_AUDIENCE_ID,
              listName: process.env.MC_LIST_NAME,
              customFields: {
                FNAME: this.userName,
              },
            })
              .then((result) => {
                this.status = 'success'
                this.$toast.success(`Success! ${result.message}`)
                console.log(result)
              })
              .catch((error) => {
                this.status = 'error'
                this.$toast.error(`${error}`, { duration: 5000 })
                console.error(error)
              })
            console.log('VALID', this.$v)
          } else {
            // * INVALID
            // nothing filled in
            !this.$v.$error
              ? this.$toast.error(`Please fill out ALL fields.`, {
                  duration: 5000,
                })
              : ''
            !this.$v.userEmail.required
              ? this.$toast.error(`Email is required.`, {
                  duration: 5000,
                })
              : ''
            !this.$v.userEmail.email
              ? this.$toast.error(`Must be an email.`, {
                  duration: 5000,
                })
              : ''
            !this.$v.userName.required
              ? this.$toast.error(`Name is required.`, {
                  duration: 5000,
                })
              : ''
            console.log('INVALID', this.$v)
          }
        } else {
          this.$toast.error(`You must agree and check the box`, {
            duration: 5000,
          })
        }
      },
    },
    mounted() {},
  }
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    color: $white;
    background: $cerulean;
    @include breakpoint(mobile) {
      padding: 50px 30px;
    }
  }
  form {
    width: 100%;
    padding: 30px 70px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    @include breakpoint(mobile) {
      padding: 30px 0 0 0;
    }
  }
  input {
    border: none;
    border-bottom: 1px solid $white;
    color: $white;
    padding: 5px 0;
    font-size: 16px;
    margin-bottom: 20px;
    background: transparent;
    &::placeholder {
      color: rgba($white, 0.5);
    }
  }
  .submit {
    margin: 10px 0;
  }
  small {
    margin-top: 10px;
  }
  a {
    color: $white;
  }
</style>