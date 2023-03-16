<script setup lang="ts">
import {
  ref,
  withDefaults,
  defineProps,
  useSlots,
  provide,
  defineEmits,
  computed,
} from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string | null;
  }>(),
  {
    modelValue: null,
  }
);

const emits = defineEmits<{
  (event: "update:modelValue", selected: string | null): void;
}>();

const values = useSlots()
  .default?.()
  .map((tab) => tab?.props?.value);

const selected = ref<string | null>(props.modelValue);
const tabs = ref(values);

const style = computed(() => {
  return ["app-tabs"];
});

provide("selected", selected);
</script>

<template>
  <ul v-bind:class="style">
    <template v-for="tab in tabs" v-bind:key="tab">
      <li
        v-on="{
          click: () => {
            selected = tab;
            emits('update:modelValue', selected);
          },
        }"
      >
        <router-link
          v-bind:class="{ active: tab === selected }"
          v-bind="{
            to: { name: tab as string },
          }"
        >
          {{ tab }}
        </router-link>
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
@import "../../style/style.scss";

.app-tabs {
  display: inline-flex;
  padding: 1em;

  li {
    margin-right: 1em;
  }

  li:last-child {
    margin-right: 0;
  }

  a {
    @include base-border;
    display: inline-flex;
    text-transform: capitalize;
    position: relative;
    cursor: pointer;
    padding: $base-button-padding;
    border-color: $base-border-color;
    color: $base-text-color;
    border-color: $base-text-color;
    overflow: hidden;
  }
  .active {
    color: $primary-color;
    border-color: $primary-color;
  }
}
</style>
