<template>
  <div
    class="card-image rounded-xl sm:py-0 relative flex items-center justify-center py-8 text-gray-200 border-4 border-gray-100"
  >
    <nuxt-link
      to="/mes-recettes/ajouter"
      class="hover:text-blue-400 flex flex-col items-center justify-center"
    >
      <div
        class="flex flex-col items-center justify-center w-24 h-24 p-12 text-6xl transition border-4 border-gray-100 rounded-full"
      >
        <div>+</div>
      </div>
      <div class="font-headings mt-6 text-2xl font-bold">
        Ajouter une recette
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
