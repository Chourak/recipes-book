<template>
  <div>
    <RecettesCardAjouterRecette v-if="editable" />
    <div v-for="recette in recettes" :key="recette.id" class="recette">
      <Recette :recette="recette" :editable="editable" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recettes: {
      type: Array,
      required: false,
      default: null,
    },
    editable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style></style>
