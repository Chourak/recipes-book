<template>
  <button title="Retour à la page précédente" @click="back">
    <back width="32" />
  </button>
</template>

<script>
import back from '~/assets/images/icons/back.svg'
export default {
  components: {
    back,
  },
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>

<style></style>
