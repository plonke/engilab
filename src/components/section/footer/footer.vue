<template>
  <div ref="elFooter" id="footer">
    <footer
      class="corner relative flex min-h-[100vh] flex-col justify-between bg-dark-100 bg-opacity-95 font-mono text-light-100">
      <div class="pointer-events-none absolute left-0 flex h-full w-full flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-[20px]">
          <svg ref="elAsterisk" :style="{ transform: `rotate(${asteriskRotation})` }" class="size-[60px]" width="15"
            height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.856073 7.3021C0.627915 7.33539 0.627916 7.66461 0.856073 7.6979L5.08378 8.31489C5.23367 8.33676 5.30578 8.51085 5.21526 8.63231L2.6621 12.058C2.52431 12.2429 2.7571 12.4757 2.94197 12.3379L6.36769 9.78474C6.48915 9.69422 6.66324 9.76633 6.68511 9.91622L7.3021 14.1439C7.33539 14.3721 7.66461 14.3721 7.6979 14.1439L8.31489 9.91622C8.33676 9.76633 8.51085 9.69422 8.63231 9.78474L12.058 12.3379C12.2429 12.4757 12.4757 12.2429 12.3379 12.058L9.78474 8.63231C9.69422 8.51085 9.76633 8.33676 9.91622 8.31489L14.1439 7.6979C14.3721 7.66461 14.3721 7.33539 14.1439 7.3021L9.91622 6.68511C9.76633 6.66324 9.69422 6.48915 9.78474 6.36769L12.3379 2.94197C12.4757 2.7571 12.2429 2.52431 12.058 2.6621L8.63231 5.21526C8.51085 5.30578 8.33676 5.23367 8.31489 5.08378L7.6979 0.856073C7.66461 0.627915 7.33539 0.627916 7.3021 0.856073L6.68511 5.08378C6.66324 5.23367 6.48915 5.30578 6.36769 5.21526L2.94197 2.6621C2.7571 2.52431 2.52431 2.7571 2.6621 2.94197L5.21526 6.36769C5.30578 6.48915 5.23367 6.66324 5.08378 6.68511L0.856073 7.3021Z"
              fill="white" />
          </svg>

          <svg width="80" viewBox="0 0 66 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.431 10C1.98033 10 1.60767 9.85267 1.313 9.558C1.01833 9.26333 0.871 8.89067 0.871 8.44V2.46C0.871 2.00933 1.01833 1.63667 1.313 1.342C1.60767 1.04733 1.98033 0.899999 2.431 0.899999H7.007V2.629H3.094C2.99867 2.629 2.91633 2.66367 2.847 2.733C2.78633 2.79367 2.756 2.87167 2.756 2.967V7.933C2.756 8.02833 2.78633 8.11067 2.847 8.18C2.91633 8.24067 2.99867 8.271 3.094 8.271H7.007V10H2.431ZM1.781 6.243V4.605H6.734V6.243H1.781ZM9.39697 10V0.899999H11.113L15.819 7.829L15.013 7.959V0.899999H16.911V10H15.247L10.554 3.162L11.295 3.032V10H9.39697ZM23.7832 10.195C22.8732 10.195 22.0672 9.99567 21.3652 9.597C20.6632 9.19833 20.1129 8.648 19.7142 7.946C19.3155 7.244 19.1162 6.43367 19.1162 5.515V5.398C19.1162 4.47067 19.3155 3.656 19.7142 2.954C20.1215 2.252 20.6805 1.70167 21.3912 1.303C22.1105 0.904333 22.9295 0.705 23.8482 0.705C24.5502 0.705 25.1785 0.826333 25.7332 1.069C26.2965 1.31167 26.7905 1.64967 27.2152 2.083L25.8892 3.409C25.6119 3.097 25.3042 2.87167 24.9662 2.733C24.6282 2.58567 24.2685 2.512 23.8872 2.512C23.3412 2.512 22.8515 2.63767 22.4182 2.889C21.9935 3.13167 21.6599 3.46967 21.4172 3.903C21.1832 4.33633 21.0662 4.83467 21.0662 5.398V5.515C21.0662 6.07833 21.1832 6.581 21.4172 7.023C21.6599 7.45633 21.9892 7.79867 22.4052 8.05C22.8212 8.29267 23.2979 8.414 23.8352 8.414C24.1992 8.414 24.5285 8.35333 24.8232 8.232C25.1265 8.102 25.3779 7.92867 25.5772 7.712C25.7852 7.48667 25.9325 7.22667 26.0192 6.932C26.1059 6.62867 26.1145 6.30367 26.0452 5.957L26.8642 6.464H24.0432V4.917H27.9302C28.0342 5.71433 28.0082 6.438 27.8522 7.088C27.7049 7.72933 27.4449 8.284 27.0722 8.752C26.7082 9.21133 26.2445 9.56667 25.6812 9.818C25.1265 10.0693 24.4939 10.195 23.7832 10.195ZM31.0539 9.402V1.498H32.9649V9.402H31.0539ZM29.5849 2.629V0.899999H34.4469V2.629H29.5849ZM29.5849 10V8.271H34.4469V10H29.5849ZM38.2807 10C37.8301 10 37.4574 9.85267 37.1627 9.558C36.8681 9.26333 36.7207 8.89067 36.7207 8.44V0.899999H38.6187V7.881C38.6187 7.96767 38.6534 8.04567 38.7227 8.115C38.7921 8.18433 38.8701 8.219 38.9567 8.219H42.6487V10H38.2807ZM43.6372 10L46.8742 0.899999H49.2402L52.4772 10H50.5272L47.9272 2.343H48.1872L45.5872 10H43.6372ZM45.1192 7.92L45.7302 6.321H50.4102L51.0342 7.92H45.1192ZM54.2394 10V0.899999H57.7234C58.6507 0.899999 59.383 1.11233 59.9204 1.537C60.4577 1.96167 60.7264 2.53367 60.7264 3.253C60.7264 3.60833 60.6527 3.95933 60.5054 4.306C60.3667 4.644 60.1457 4.92567 59.8424 5.151C59.539 5.36767 59.136 5.476 58.6334 5.476L58.6724 5.203C59.201 5.203 59.643 5.31133 59.9984 5.528C60.3624 5.736 60.6354 6.01333 60.8174 6.36C60.9994 6.698 61.0904 7.06633 61.0904 7.465C61.0904 8.23633 60.8087 8.85167 60.2454 9.311C59.6907 9.77033 58.9237 10 57.9444 10H54.2394ZM56.1114 9.09L55.3574 8.44H57.6194C58.096 8.44 58.4644 8.336 58.7244 8.128C58.9844 7.92 59.1144 7.63833 59.1144 7.283C59.1144 7.06633 59.0624 6.867 58.9584 6.685C58.8544 6.503 58.707 6.36 58.5164 6.256C58.3257 6.152 58.083 6.1 57.7884 6.1H55.4874V4.605H57.5284C57.927 4.605 58.239 4.50967 58.4644 4.319C58.6897 4.11967 58.8024 3.851 58.8024 3.513C58.8024 3.18367 58.6854 2.928 58.4514 2.746C58.2174 2.55533 57.8967 2.46 57.4894 2.46H55.3574L56.1114 1.81V9.09ZM63.011 10V8.037H65.039V10H63.011Z"
              fill="white" />
          </svg>
        </div>
      </div>

      <div
        class="mt-[40px] flex w-full items-center justify-center gap-[20px] text-center text-body-16 lg:mt-[20px] lg:text-body-14">
        <div class="uppercase">
          Производство косметики под&nbsp;вашим&nbsp;брендом
        </div>
        <div class="hidden grow lg:block"></div>
      </div>

      <div class="mb-[20px] text-body-14 lg:mb-[20px]">
        <SharedHalf>
          <template #left>
            <div class="flex flex-col gap-[10px] lg:gap-[0px]">
              <div
                class="flex items-center gap-[10px] py-[10px] transition-transform hover:translate-x-[5px] hover:cursor-pointer lg:py-0 lg:underline"
                @click="scrollToApplication">
                <div>Оставить заявку</div>
                <SharedIconArrowTopRight class="size-[15px] lg:hidden" />
              </div>
              <!-- <div class="h-[2px] w-full bg-light-100 opacity-20 lg:hidden"></div> -->
              <!-- <a v-bind="getTelegramChannelLinkAttrs()"
                class="flex items-center gap-[5px] py-[10px] transition-transform hover:translate-x-[5px] hover:cursor-pointer lg:py-0 lg:underline">
                <div>Телеграм-канал с разборами</div>
                <SharedIconArrowTopRight class="size-[15px] lg:hidden" />
              </a> -->
              <!-- <div class="h-[2px] w-full bg-light-100 opacity-20 lg:hidden"></div> -->
            </div>
          </template>

          <template #right>
            <SharedHalf>
              <template #left>
                <div class="mt-[40px] lg:mt-[0px]">
                  <div>+7 963 636 03 33</div>
                  <div>
                    Краснодар, пос. Колосистый, Звездный&nbsp;переулок&nbsp;3/1
                  </div>
                </div>
              </template>
              <template #right>
                <div class="mt-[40px] flex gap-[20px] lg:mt-[0px] lg:flex-col lg:gap-[0px] lg:text-right">
                  <!-- TODO: UPDATE LINKS -->
                  <!-- <a
                    class="underline opacity-50 transition-transform hover:translate-x-[-5px] hover:cursor-pointer"
                  >
                    Ссылка
                  </a>
                  <a
                    class="underline opacity-50 transition-transform hover:translate-x-[-5px] hover:cursor-pointer"
                  >
                    Ссылка
                  </a> -->
                </div>
              </template>
            </SharedHalf>
          </template>
        </SharedHalf>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { windowY } = useScroll();
const elFooter = ref(null);
const elAsterisk = ref(null);
const bodyHeight = ref(0);
const { windowHeight } = useWindow();

onMounted(() => {
  setBodyHeight(getBodyHeight());
  animateFooterOnScroll();
});

const asteriskRotation = computed(() => {
  const underWindow = bodyHeight.value - windowY.value - windowHeight.value;
  const isFooterVisible = underWindow <= windowHeight.value;

  if (!isFooterVisible) {
    return "";
  }

  const progressLeft = underWindow / windowHeight.value;
  const deg = progressLeft * 180;

  return `${deg}deg`;
});

function animateFooterOnScroll() {
  new ResizeObserver((entries) => {
    setBodyHeight(entries[0].contentRect.height);
  }).observe(document.body);
}

function setBodyHeight(value: number) {
  bodyHeight.value = value;
}

function getBodyHeight() {
  return document.documentElement.clientHeight;
}
</script>

<style scoped></style>
