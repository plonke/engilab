const windowHeight = ref(window?.outerHeight || 0);

export const useWindow = () => {
  function updateWindowHeightOnResize() {
    window.addEventListener("resize", () => {
      windowHeight.value = window.outerHeight;
    });
  }

  return {
    windowHeight,
    updateWindowHeightOnResize,
  };
};
