import Lenis from "lenis";

const windowY = ref(0);
let lenis: null | Lenis = null;

export const useScroll = () => {
  onMounted(() => {
    if (!lenis) {
      initLenis();
    }
  });

  function initLenis() {
    lenis = new Lenis({
      easing: (x) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
    });

    lenis?.on("scroll", (e: any) => {
      windowY.value = e.animatedScroll;
    });

    function raf(time: any) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  return {
    windowY,
    initLenis,
    lenis,
  };
};
