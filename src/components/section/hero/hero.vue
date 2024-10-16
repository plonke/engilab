<template>
  <SharedSectionTemplate>
    <SharedPlate class="flex flex-col gap-[40px] pb-[40px] lg:gap-[40px]">
      <SharedHalf>
        <template #left>
          <SharedSectionHeader
            id="hero-header"
            align="left"
            title-tag="h1"
            :title="['Производство ', 'косметики под вашим брендом']"
            split-title
          />
        </template>

        <template #right>
          <SharedPlate
            id="hero-text"
            fill-left
            class="corner lg:corner-right mt-[-20px] flex flex-col gap-[20px] pb-[20px] font-mono text-body-14 md:text-body-16 lg:mt-[0px] lg:pb-[20px] lg:pt-[30px]"
          >
            <SharedLongText
              >Мы — производственная площадка в г. Краснодар. Зарекомендовали
              себя на рынке как поставщик базовой косметики с доказанной
              эффективностью
            </SharedLongText>

            <div>
              <div>Наши результаты на рынке:</div>
              <div class="flex w-full items-center gap-[20px]">
                <a
                  href="#"
                  class="cursor-pointer underline underline-offset-[1px] transition-all hover:underline-offset-[4px]"
                  >Wildberries</a
                >
                <div class="mt-1 h-px grow bg-dark-12" />
                <div class="font-medium">400К продаж</div>
              </div>
              <div class="flex w-full items-center gap-[20px]">
                <a
                  href="#"
                  class="cursor-pointer underline underline-offset-[1px] transition-all hover:underline-offset-[4px]"
                  >Ozon</a
                >
                <div class="mt-1 h-px grow bg-dark-12" />
                <div class="font-medium">400К продаж</div>
              </div>
            </div>

            <SharedLongText>
              Мы занимаемся полным циклом производства:  <br />
              1. разработка <br />
              2. создание и изготовление <br />
              3. тестирование на фокус-группе <br />
              4. упаковка <br />
              5. сертификация по стандартам РФ
            </SharedLongText>
          </SharedPlate>
        </template>
      </SharedHalf>

      <div id="hero-button" class="corner flex justify-center overflow-hidden">
        <SharedButton class="w-full lg:w-auto" @click="scrollToApplication"
          >Оставить заявку</SharedButton
        >
      </div>
    </SharedPlate>
  </SharedSectionTemplate>
</template>

<script setup lang="ts">
import gsap from "gsap";

const emit = defineEmits<{
  (e: "init", cb: () => void): void;
}>();

function showContent() {
  const heroHeader = document.querySelector("#hero-header");
  const heroButton = document.querySelector("#hero-button");
  const heroText = document.querySelector("#hero-text");

  if (!heroHeader) {
    return;
  }

  const letters = heroHeader.querySelectorAll(".letter");

  const tl = gsap.timeline();

  tl.to(letters, {
    ease: "back.out",
    duration: 0.5,
    y: 0,
    stagger: 0.007,
  });

  tl.to(
    heroText,
    {
      y: 0,
      ease: "back.out",
      alpha: 1,
      duration: 0.5,
    },
    "<",
  );

  tl.to(
    heroButton,
    {
      ease: "back.out",
      duration: 0.5,
      y: 0,
      alpha: 1,
    },
    "<0.2",
  );
}

function hideContent() {
  const heroHeader = document.querySelector("#hero-header");
  const heroButton = document.querySelector("#hero-button");
  const heroText = document.querySelector("#hero-text");

  if (!heroHeader) {
    return;
  }

  const letters = heroHeader.querySelectorAll(".letter");

  gsap.set(letters, {
    y: -80,
  });

  gsap.set(heroButton, {
    y: -80,
    alpha: 0,
  });

  gsap.set(heroText, {
    y: -40,
    alpha: 0,
  });
}

onMounted(() => {
  hideContent();
  emit("init", showContent);
});
</script>

<style scoped></style>
