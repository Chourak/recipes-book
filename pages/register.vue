<template>
  <section id="register" class="px-4">
    <h1 class="titre">Créer un compte</h1>
    <div class="form-wrapper">
      <bloc-succes v-if="success" :success="success" />
      <button
        v-if="success"
        class="send-confirmation w-2/3 m-auto mb-6"
        @click="sendEmailConfirmation()"
      >
        Renvoyer l'email de confirmation
      </button>
      <bloc-erreur v-if="error" :error="error" />
      <form v-if="!success" @submit.prevent="register()">
        <div class="mb-4">
          <form-input-text
            v-model="username"
            name="username"
            label="Identifiant"
            placeholder="Nom d'utilisateur"
            required
            type="text"
            autocomplete="username"
          />
        </div>
        <div class="mb-4">
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
        <div class="relative mb-6">
          <form-input-password
            v-model="password"
            name="password"
            label="Mot de passe"
            placeholder="Mot de passe"
            required
            max-size="20"
            max-length="20"
          />
        </div>
        <div class="flex justify-end">
          <button class="w-1/2" type="submit">Créez votre compte</button>
        </div>
      </form>
      <div class="text-sm text-center text-gray-400">
        Déjà membre ?
        <nuxt-link to="/login">
          <strong>Identifiez-vous !</strong>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
  layout: 'login',
  middleware: 'guest',
  data() {
    return {
      loading: false,
      username: '',
      email: '',
      password: '',
      success: null,
      error: null,
      successMessage: `Un lien de de confirmation à été envoyé à votre adresse e-mail. \
        Merci de cliquer sur ce lien afin de finaliser la création de votre compte.`,
      newEmailSuccessMessage: `Un nouveau lien de de confirmation vient d'être envoyé à votre adresse e-mail. \
        Merci de cliquer sur ce lien afin de finaliser la création de votre compte.`,
    }
  },
  methods: {
    async sendEmailConfirmation() {
      try {
        const newEmail = await this.$strapi.sendEmailConfirmation({
          email: this.$strapi.user.email,
        })
        if (newEmail.sent) {
          this.success = this.newEmailSuccessMessage
        }
      } catch (error) {
        this.error = error.response.data.message[0].messages[0].message
      }
    },
    async register() {
      this.error = null
      this.loading = true
      this.$nuxt.$emit('loading', true)
      try {
        await this.$strapi.register({
          email: this.email,
          username: this.username,
          password: this.password,
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
