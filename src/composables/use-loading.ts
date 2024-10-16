export function useLoading() {
  const isLoaded = ref(false);
  const progress = ref(0);
  const maxProgress = ref(0);
  const totalResources = ref(0);
  const resourcesLoaded = ref(0);

  onMounted(() => {
    updateMaxProgress();
  });

  function updateMaxProgress() {
    maxProgress.value = maxProgress.value + 0.15;

    if (maxProgress.value < 1) {
      setTimeout(
        () => {
          requestAnimationFrame(updateMaxProgress);
        },
        200 + Math.random() * 100,
      );
    }

    if (maxProgress.value >= 1) {
      isLoaded.value = true;
    }
  }

  const progressToShow = computed(() => {
    return ease(Math.min(progress.value, maxProgress.value)) * 100;
  });

  function ease(x: number): number {
    return 1 - (1 - x) * (1 - x);
  }

  function updateProgress() {
    progress.value = resourcesLoaded.value / totalResources.value;
  }

  function trackResources() {
    const resourcesToTrack: (
      | HTMLLinkElement
      | HTMLImageElement
      | Promise<void>
    )[] = [];

    // // Отслеживание CSS файлов
    // const linkElements = Array.from(
    //   document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'),
    // );
    // resourcesToTrack.push(...linkElements);

    // Отслеживание изображений
    const imgElements = Array.from(document.images);
    resourcesToTrack.push(...imgElements);

    // Отслеживание шрифтов
    const fontLoadPromise = document.fonts.ready.then(() => {
      // resourcesLoaded.value++;
      // updateProgress();
    });
    resourcesToTrack.push(fontLoadPromise);

    totalResources.value = resourcesToTrack.length;

    resourcesToTrack.forEach((resource) => {
      if (resource instanceof HTMLImageElement) {
        if (resource.complete) {
          resourcesLoaded.value++;
          updateProgress();
        } else {
          resource.addEventListener("load", () => {
            resourcesLoaded.value++;
            updateProgress();
          });
          resource.addEventListener("error", () => {
            resourcesLoaded.value++;
            updateProgress();
          });
        }
      } else if (resource instanceof Promise) {
        resource
          .then(() => {
            resourcesLoaded.value++;
            updateProgress();
          })
          .catch(() => {
            resourcesLoaded.value++;
            updateProgress();
          });
      }
    });

    // Обновляем прогресс для уже загруженных ресурсов
    updateProgress();

    // Если нет ресурсов для отслеживания, сразу устанавливаем состояние загрузки в завершенное
    if (totalResources.value === 0) {
      isLoaded.value = true;
      progress.value = 1;
    }
  }

  onMounted(async () => {
    // Дождитесь, пока все компоненты будут отрендерены
    await nextTick();

    // Затем начните отслеживать ресурсы
    trackResources();
  });

  return {
    isLoaded,
    progress: progressToShow,
    totalResources,
  };
}
