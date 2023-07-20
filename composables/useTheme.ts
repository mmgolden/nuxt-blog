import { ref, onMounted, watch } from "vue";
import type { Ref } from "vue";

interface UseTheme {
  isDarkTheme: Ref<boolean>
}

export const useTheme = (): UseTheme => {
  const isDarkTheme: Ref<boolean> = ref(false);

  onMounted(() => {
    const prefersDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const savedTheme = localStorage.getItem("MELINDA_GOLDEN_THEME");

    if (savedTheme && savedTheme === "dark") {
      isDarkTheme.value = true;
    } else if (!savedTheme && prefersDarkTheme) {
      isDarkTheme.value = true;
    } else {
      isDarkTheme.value = false;
    }
  });

  watch(isDarkTheme, (val) => {
    if (val) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("MELINDA_GOLDEN_THEME", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("MELINDA_GOLDEN_THEME", "light");
    }
  });

  return { isDarkTheme };
}