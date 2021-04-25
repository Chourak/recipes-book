<template>
  <section id="profil">
    <h1 class="titre">Profil</h1>
    <div class="content">
      <p
        v-if="sendConfirmation"
        class="bg-green-500 p-6 rounded-md text-gray-700 border-l-8 border-black border-opacity-10"
      >
        {{ successMessage }}
      </p>
      <p
        v-if="!user.confirmed"
        class="bg-yellow-500 p-6 rounded-md text-gray-700 border-l-8 border-black border-opacity-10"
      >
        Votre profil est en attente de confirmation.
        <br />
        Veuillez confirmer votre adresse e-mail en cliquant sur lien envoyé dans
        l'email de confirmation.
        <button class="font-bold block mt-4 hover:opacity-75">
          Renvoyer l'email de confirmation
        </button>
      </p>
      <p>
        <strong>Username :</strong>
        {{ user.username }}
      </p>

      <p>
        <strong>Email :</strong>
        {{ user.email }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      sendConfirmation: false,
      successMessage: `Un lien de de confirmation à été envoyé à votre adresse e-mail. \
        Merci de cliquer sur ce lien afin de finaliser la création de votre compte.`,
      newEmailSuccessMessage: `Un nouveau lien de de confirmation vient d'être envoyé à votre adresse e-mail. \
        Merci de cliquer sur ce lien afin de finaliser la création de votre compte.`,
    }
  },
  computed: {
    user() {
      return this.$strapi.user ? this.$strapi.user : false
    },
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
      } catch (e) {
        // this.error = e.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>
