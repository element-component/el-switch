<template>
  <div class="element-switch" :class="{ 'is-disabled': disabled }">
    <div class="element-switch__mask" v-show="disabled"></div>
    <input class="element-switch__core" type="checkbox" v-model="value" :disabled="disabled">
    <div class="element-switch__label element-switch__label--left" v-show="value" @click="handleLabelClick"><slot name="true"></slot></div>
    <div class="element-switch__label element-switch__label--right" v-show="!value" @click="handleLabelClick"><slot name="false"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'el-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleLabelClick() {
        if (!this.disabled) {
          this.value = !this.value;
        }
      }
    }
  };
</script>
