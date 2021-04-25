<template>
  <section id="forgotten-password" class="px-4">
    <h1 class="titre">Mot de passe perdu ?</h1>
    <div class="form-wrapper">
      <div class="mb-4">
        <p>
          Pour réinitialiser votre mot de passe, veuillez saisir l'adresse
          e-mail que vous utilisez pour vous connecter à votre compte.
        </p>
      </div>
      <bloc-succes v-if="success" :success="success" />
      <bloc-erreur v-if="error" :error="error" />
      <form v-if="!success" @submit.prevent="submit()">
        <div class="mb-6">
          <form-input-text
            v-model="email"
            name="email"
            label="Adresse e-mail"
            placeholder="Adresse e-mail"
            required
            type="email"
            autocomplete="email"
          />
        </div>
        <button class="w-full m-auto" type="submit">
          Obtenir un nouveau mot de passe
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ForgottenPassword',
  layout: 'login',
  data() {
    return {
      loading: false,
      email: '',
      success: null,
      error: null,
    }
  },
  methods: {
    async submit() {
      this.error = null
      this.loading = true
      this.$nuxt.$emit('loading', true)
      try {
        await this.$strapi.forgotPassword({
          email: this.email,
        })
        this.loading = false
        this.$nuxt.$emit('loading', false)
        this.success = 'Cool, un mail à été envoyé'
      } catch (error) {
        this.loading = false
        this.$nuxt.$emit('loading', false)
        this.error = error.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>
