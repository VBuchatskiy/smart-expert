import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "@/types";
import { smartExpressService } from "@/api";

export const useUserStore = defineStore("user", () => {
  const users = ref<IUser[]>([]);
  const loading = ref<boolean>(false);

  const getUsers = async () => {
    loading.value = true;
    try {
      const { data } = await smartExpressService.getUserCollection();

      users.value = data;
    } catch (error) {
      error;
    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    getUsers,
  };
});
