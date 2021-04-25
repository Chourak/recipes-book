<template>
  <div>
    <label class="block mb-2 text-sm font-bold text-gray-600" :for="name">
      {{ label }}
    </label>
    <input
      v-model="input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :size="size"
      :max-size="maxSize"
      :maxlength="maxLength"
      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :min="min"
      :max="max"
      :step="step"
      class="ring-gray-100 focus:border-white focus:shadow-none focus:ring-4 w-full px-3 py-3 text-sm leading-tight transition border rounded-md shadow-inner appearance-none"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: '',
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
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
    autocomplete: {
      type: String,
      required: false,
      default: '',
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: '20',
    },
    min: {
      type: String,
      required: false,
      default: '',
    },
    max: {
      type: String,
      required: false,
      default: '',
    },
    step: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        const emit = `input_${this.name}`
        this.$nuxt.$emit(emit, val)
      },
    },
  },
}
</script>
