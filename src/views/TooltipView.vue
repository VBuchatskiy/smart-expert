<script lang="ts" setup>
import AppTooltip from "@/components/app/AppTooltip.vue";
import AppButton from "@/components/app/AppButton.vue";
</script>

<template>
  <div class="flex justify-center flex-col items-center">
    <div class="mb-4">
      <app-tooltip
        v-bind="{ text: 'test test test test test test', position: 'top' }"
      >
        <app-button> Top </app-button>
      </app-tooltip>
    </div>
    <div class="mb-4">
      <app-tooltip
        v-bind="{ text: 'test test test test test test', position: 'left' }"
      >
        <app-button> Left </app-button>
      </app-tooltip>
    </div>
    <div class="mb-4">
      <app-tooltip
        v-bind="{ text: 'test test test test test test', position: 'right' }"
      >
        <app-button> Right </app-button>
      </app-tooltip>
    </div>
    <div>
      <app-tooltip
        v-bind="{ text: 'test test test test test test', position: 'bottom' }"
      >
        <app-button> Bottom </app-button>
      </app-tooltip>
    </div>
  </div>
</template>
