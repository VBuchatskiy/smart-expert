<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";

const props = defineProps<{
  text: string;
  position: string;
}>();

const element = ref<HTMLDivElement | null>(null);

const offset = ref<string>(props.position);

onMounted(() => {
  if (element.value) {
    const { left, right, bottom, top } = element.value.getBoundingClientRect();
    const { clientHeight, clientWidth } = element.value;

    if (props.position === "top") {
      if (bottom < clientHeight) {
        offset.value = "bottom";
        return;
      }
    }

    if (props.position === "bottom") {
      if (top < clientHeight) {
        offset.value = "top";
        return;
      }
    }

    if (props.position === "right") {
      if (right < clientWidth) {
        offset.value = "left";
        return;
      }
    }

    if (props.position === "left") {
      if (left < clientWidth) {
        offset.value = "right";
        return;
      }
    }
  }
});
</script>

<template>
  <div class="app-tooltip-container">
    <slot />
    <div
      class="app-tooltip"
      v-bind="{
        ref: 'element',
      }"
      v-bind:class="[`app-tooltip-${offset}`]"
    >
      <span class="app-tooltip-text">{{ props.text }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/style.scss";
.app-tooltip-container {
  position: relative;
  display: inline-block;
}

.app-tooltip-container:hover .app-tooltip {
  opacity: 1;
}

.app-tooltip-top {
  bottom: 110%;
  left: 0;
}

.app-tooltip-bottom {
  top: 110%;
  left: 0;
}

.app-tooltip-left {
  top: 0;
  right: 110%;
}

.app-tooltip-right {
  top: 0;
  left: 110%;
}

.app-tooltip {
  position: absolute;
  box-shadow: $base-box-shadow;
  color: #212943;
  padding: 4px;
  opacity: 0;
  transition: opacity 1s;
  width: 150px;
  overflow-y: auto;
  z-index: 1;
}
</style>
