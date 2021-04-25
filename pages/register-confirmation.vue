<template>
  <section id="register-confirmation" class="px-4">
    <h1 class="titre">Félicitations !</h1>
    <div class="form-wrapper">
      <div class="mb-4">
        <p>Vous êtes maintenant membre de la communauté des Paupiettes.</p>
        <p>
          Vous pouvez maintenant vous identifier et partager vos recettes avec
          tous les membres !
        </p>
        <p>
          <small class="text-gray-300">
            Ou les garder pour vous mais c'est moins sympa !
          </small>
        </p>
      </div>
      <nuxt-link to="/login">
        <button class="login w-2/3 m-auto">Identifiez-vous !</button>
      </nuxt-link>
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
    }
  },
}
</script>
