<script lang="ts" setup>
import AppSelect from "@/components/app/AppSelect.vue";
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const store = useUserStore();
const { users } = storeToRefs(store);
const { getUsers } = store;

await getUsers();

const user = ref(users.value[0]);
</script>

<template>
  <div class="flex justify-center flex-col items-center">
    <div class="mr-4">
      <app-select
        v-model="user"
        v-bind="{ items: users, label: 'Select', position: 'bottom' }"
      />
    </div>
    <div class="mr-4">
      <app-select
        v-model="user"
        v-bind="{
          items: users,
          label: 'Select',
          disabled: true,
        }"
      />
    </div>
  </div>
</template>
