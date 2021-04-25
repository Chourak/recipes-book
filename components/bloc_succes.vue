<template>
  <div class="retour mb-8">
    <div class="bg-green-500 text-white p-4 rounded-xl mb-8 mx-8 text-sm">
      {{ success }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    success: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
