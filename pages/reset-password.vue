<template>
  <section id="reset-password">
    <h1 class="titre">
      Réinitialisez votre
      <br />
      mot de passe
    </h1>
    <div class="form-wrapper">
      <bloc-succes v-if="success" :success="success" />
      <bloc-erreur v-if="error" :error="error" />
      <form v-if="!success" @submit.prevent="reset()">
        <div class="mb-4 relative">
          <form-input-password
            v-model="password"
            name="password"
            label="Nouveau mot de passe"
            placeholder="Nouveau mot de passe"
            required
            max-size="20"
            max-length="20"
          />
        </div>
        <div class="mb-6 relative">
          <form-input-password
            v-model="password_confirmation"
            name="password_confirmation"
            label="Confirmez votre mot de passe"
            placeholder="Confirmez votre de passe"
            required
            max-size="20"
            max-length="20"
          />
        </div>
        <button class="w-full" type="submit">
          Réinitialiser votre mot de passe
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  layout: 'login',
  middleware: 'guest',
  data() {
    return {
      loading: false,
      identifier: '',
      password: '',
      password_confirmation: '',
      success: false,
      successMessage:
        'Votre mot de passe a été correctement pris en compte. Vous pouvez maintenant vous identifier.',
      error: null,
    }
  },
  methods: {
    async reset() {
      this.error = null
      this.loading = true
      this.$nuxt.$emit('loading', true)
      try {
        await this.$strapi.resetPassword({
          code: this.$route.query.code,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        })

        this.$nuxt.$emit('loading', false)
        this.success = this.successMessage
      } catch (error) {
        this.loading = false
        this.$nuxt.$emit('loading', false)
        this.error = error.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>
