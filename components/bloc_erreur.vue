<template>
  <div class="retour mb-8">
    <div class="bg-red-400 text-white p-4 rounded-xl mb-8 mx-8 text-sm">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
