<template>
  <section id="login" class="relative h-screen">
    <transition name="fade">
      <div
        v-show="loading"
        class="absolute top-0 left-0 z-10 flex w-full h-full"
      >
        <div class="flex w-full h-full bg-white">
          <div class="m-auto">
            <logo v-if="loading" class="animate-pulse" width="24" height="24" />
          </div>
        </div>
      </div>
    </transition>
    <div class="lg:grid-cols-2 grid h-full grid-cols-1">
      <div
        v-show="$screen.lg"
        class="gauche flex justify-center bg-gray-200"
      ></div>
      <div class="droite relative flex justify-center text-center">
        <nav class="navigation__retour absolute flex justify-between w-full">
          <back class="m-4" />
          <button class="m-4" @click="close">
            <icon-close width="32" />
          </button>
        </nav>
        <section class="w-full m-auto">
          <logo />
          <Nuxt />
        </section>
      </div>
    </div>
  </section>
</template>
<script>
import iconClose from '~/assets/images/icons/close.svg'
export default {
  transition: 'fade',
  components: {
    iconClose,
  },
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.$nuxt.$on('loading', (load) => {
      this.loading = load
    })
  },
  methods: {
    close() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss"></style>
