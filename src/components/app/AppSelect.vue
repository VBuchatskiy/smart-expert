<script setup lang="ts">
import {
  ref,
  computed,
  withDefaults,
  defineProps,
  defineEmits,
  onMounted,
} from "vue";

interface ISelectItem {
  id: number;
  name: string;
  [key: string]: unknown;
}

interface ISelectProps {
  label: string;
  items: ISelectItem[];
  disabled?: boolean;
  modelValue?: ISelectItem | null;
  position?: string;
}

const props = withDefaults(defineProps<ISelectProps>(), {
  items: () => [],
  modelValue: null,
  position: "bottom",
  disabled: false,
});

const emits = defineEmits<{
  (event: "update:modelValue", selected: ISelectItem | null): void;
}>();

const visible = ref<boolean>(false);
const offset = ref(props.position);

const selected = computed({
  get() {
    return props.modelValue?.name;
  },
  set(value) {
    emits(
      "update:modelValue",
      props.items.find(({ name }) => name === value) || null
    );
  },
});

const menu = ref<HTMLUListElement | null>(null);

const style = computed(() => {
  return ["app-select"];
});

onMounted(() => {
  if (menu.value) {
    const { left, right, bottom, top } = menu.value.getBoundingClientRect();
    const { clientHeight, clientWidth } = menu.value;

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
  <div v-bind:class="style">
    <label>{{ props.label }}</label>
    <div
      v-bind:class="{
        disabled: disabled,
      }"
      class="app-select-control"
      v-on="{
        click: () => (visible = !visible),
      }"
    >
      <input v-model="selected" v-bind="{ disabled: true }" />
      <slot>
        <button class="app-select-control-icon">
          {{ disabled ? "&#9660;" : visible ? "&#9650;" : "&#9660;" }}
        </button>
      </slot>
    </div>

    <transition>
      <template v-if="visible && !disabled">
        <ul
          v-bind:class="offset"
          v-bind="{
            ref: 'menu',
          }"
        >
          <template v-if="props.items.length">
            <template
              v-for="item of items.filter(({ name }) => name !== selected)"
              v-bind:key="item.id"
            >
              <li
                v-on="{
                  click: () => {
                    emits('update:modelValue', item);
                    visible = !visible;
                  },
                }"
              >
                <span>{{ item.name }}</span>
              </li>
            </template>
          </template>
        </ul>
      </template>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/style.scss";
.app-select {
  display: inline-flex;
  flex-direction: column;
  position: relative;
  background-color: $secondary-color;

  &-control {
    @include base-border;
    display: inline-flex;

    padding: 0 1em;
    background-color: inherit;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;

    &-icon {
      font-size: 16px;
    }
  }

  .disabled {
    color: $base-border-color-disabled;
    border-color: $base-border-color-disabled;
  }

  input {
    background-color: inherit;
    display: flex;
    align-items: center;
  }

  input:disabled {
    background-color: inherit;
  }

  ul {
    max-height: 200px;
    overflow-y: auto;
    box-shadow: $base-box-shadow;
    background-color: inherit;
    position: absolute;
    width: 100%;
    z-index: 10;
  }

  .top {
    bottom: 100%;
  }

  .bottom {
    top: 100%;
  }

  .left {
    right: 100%;
  }

  .right {
    top: 0;
    left: 100%;
  }

  li {
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }

  li:hover {
    background-color: #f2f3f6;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
