export const useTimer = () => {
  let timerId = undefined as NodeJS.Timeout | undefined;
  const seconds = ref(0);

  function resume() {
    if (timerId) {
      return;
    }

    timerId = setTimeout(raf, 50);
  }

  function raf() {
    if (!timerId) {
      return;
    }

    timerId = setTimeout(() => {
      requestAnimationFrame(() => {
        seconds.value = seconds.value + 0.01;
        raf();
      });
    }, 10);
  }

  function stop() {
    clearTimeout(timerId);
    timerId = undefined;
  }

  return {
    timerSeconds: seconds,
    resumeTimer: resume,
    pauseTimer: stop,
  };
};
