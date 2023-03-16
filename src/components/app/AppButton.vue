<script lang="ts" setup>
import { ButtonHTMLAttributes } from "vue";
import { defineProps, withDefaults, computed, defineEmits } from "vue";

interface IButtonProps extends ButtonHTMLAttributes {
  text?: boolean;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  type: "button",
  disabled: false,
});

const style = computed(() => {
  return ["app-button"];
});

const emits = defineEmits<{
  (e: "click", event: Event): void;
}>();
</script>

<template>
  <button
    v-bind="props"
    v-bind:class="style"
    v-on="{
      click: (event: Event) => emits('click', event),
    }"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "../../style/style.scss";
.app-button {
  @include base-border;
  display: inline-flex;
  position: relative;
  cursor: pointer;
  padding: $base-button-padding;
  color: $primary-color;
  border-color: $primary-color;
  overflow: hidden;
}
</style>
