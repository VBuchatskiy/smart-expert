<script setup lang="ts">
import { ref } from "vue";
import AppTabs from "@/components/app/AppTabs.vue";
import AppTab from "@/components/app/AppTab.vue";

const tab = ref<string>("select");
</script>

<template>
  <section class="h-screen w-screen">
    <header>
      <app-tabs v-model="tab">
        <app-tab
          v-bind="{
            value: 'select',
          }"
        >
          {{ tab }}
        </app-tab>
        <app-tab
          v-bind="{
            value: 'tooltip',
          }"
        >
          {{ tab }}
        </app-tab>
      </app-tabs>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <suspense>
            <component v-bind:is="Component"></component>
            <template v-slot:fallback> loading </template>
          </suspense>
        </template>
      </router-view>
    </main>
  </section>
</template>
