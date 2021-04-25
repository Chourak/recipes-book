<template>
  <div>
    <label class="block text-gray-600 text-sm font-bold mb-2" :for="name">
      {{ label }}
    </label>
    <input
      autocomplete="current-password"
      :password="password"
      :name="name"
      :type="visibility"
      :placeholder="placeholder"
      :required="required"
      :max-size="maxSize"
      :maxlength="maxLength"
      class="text-sm shadow-inner appearance-none border rounded-md w-full py-3 px-3 leading-tight ring-gray-100 focus:border-white focus:shadow-none focus:ring-4 transition"
      @input="$emit('input', $event.target.value)"
    />
    <i class="absolute right-4 top-0 pt-10 cursor-pointer text-gray-400">
      <password-hidden
        v-if="visibility === 'password'"
        width="20"
        @click="showText()"
      />
      <password-visible v-else width="20" @click="showPassword()" />
    </i>
  </div>
</template>

<script>
import passwordHidden from '~/assets/images/icons/password_hidden.svg'
import passwordVisible from '~/assets/images/icons/password_visible.svg'
export default {
  components: {
    passwordHidden,
    passwordVisible,
  },
  props: {
    password: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    required: {
      type: String,
      required: false,
      default: 'required',
    },
    maxSize: {
      type: String,
      required: false,
      default: '',
    },
    maxLength: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      visibility: 'password',
    }
  },
  methods: {
    showPassword() {
      this.visibility = 'password'
    },
    showText() {
      this.visibility = 'text'
    },
  },
}
</script>
