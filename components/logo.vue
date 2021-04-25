<template>
  <div class="logo flex justify-center text-center m-auto group">
    <div
      class="bg-pink-400 rounded-full flex justify-center relative left-1"
      :class="classPink"
    >
      <baker-girl :width="iconSize * 2" class="m-auto" />
    </div>
    <div
      class="bg-blue-400 rounded-full flex justify-center relative right-1"
      :class="classBlue"
    >
      <baker :width="iconSize * 2" class="m-auto" />
    </div>
  </div>
</template>

<script>
import baker from '~/assets/images/icons/baker.svg'
import bakerGirl from '~/assets/images/icons/baker_girl.svg'
export default {
  components: {
    baker,
    bakerGirl,
  },
  props: {
    iconSize: {
      type: String,
      default: '20',
      required: false,
    },
    animate: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    classPink() {
      let nClass = `${'w-' + this.iconSize} ${'h-' + this.iconSize}`
      if (this.animate) {
        nClass += ' group-hover:bg-pink-300 transition duration-500'
      }
      return nClass
    },
    classBlue() {
      let nClass = `${'w-' + this.iconSize} ${'h-' + this.iconSize}`
      if (this.animate) {
        nClass += ' group-hover:bg-blue-300 transition'
      }
      return nClass
    },
  },
}
</script>
