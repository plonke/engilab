const cursorX = ref(0);
const cursorY = ref(0);

export const useCursor = () => {
  function updateCursorCoordinatesOnMouseMove() {
    document.addEventListener(
      "mousemove",
      (e) => {
        cursorX.value = e.clientX;
        cursorY.value = e.clientY;
      },
      { passive: true },
    );
  }

  return {
    updateCursorCoordinatesOnMouseMove,
    cursorX,
    cursorY,
  };
};
