<template>
  <section id="login" class="px-4">
    <h1 class="titre">Identifiez-vous</h1>
    <div class="form-wrapper">
      <bloc-erreur v-if="error" :error="error" />
      <form @submit.prevent="login()">
        <div class="mb-4">
          <form-input-text
            v-model="identifier"
            name="identifier"
            label="Identifiant"
            placeholder="Nom d'utilisateur ou adresse e-mail"
            required
            type="text"
            autocomplete="username"
          />
        </div>
        <div class="relative mb-6">
          <form-input-password
            v-model="password"
            name="password"
            label="Mot de passe"
            placeholder="Mot de passe"
            required
            type="password"
            max-size="20"
            max-length="20"
          />
        </div>
        <div class="flex items-center justify-between">
          <nuxt-link
            to="/forgotten-password"
            class="hover:text-blue-400 inline-block text-sm text-gray-400 align-baseline"
          >
            Mot de passe oublié ?
          </nuxt-link>
          <button class="w-1/2" type="submit">Connexion</button>
        </div>
      </form>
      <div class="text-sm text-center text-gray-400">
        Pas encore membre ?
        <nuxt-link to="/register" class="hover:text-blue-400">
          <strong>Créez un compte !</strong>
        </nuxt-link>
      </div>
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
      error: null,
    }
  },
  methods: {
    async login() {
      this.error = null
      this.loading = true
      this.$nuxt.$emit('loading', true)
      // eslint-disable-next-line
      try {
        await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        })
        this.$router.push({ path: '/', query: { user: 'in' } })
      } catch (error) {
        this.loading = false
        this.$nuxt.$emit('loading', false)
        this.error = error.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>
