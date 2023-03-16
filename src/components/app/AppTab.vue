<script setup lang="ts">
import { withDefaults, defineProps, inject } from "vue";

const props = withDefaults(
  defineProps<{
    value?: string | null;
  }>(),
  {
    value: null,
  }
);

const selected = inject("selected");
</script>

<template>
  <section v-show="props.value === selected">
    <slot></slot>
  </section>
</template>
