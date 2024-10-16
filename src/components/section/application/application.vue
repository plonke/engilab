<template>
  <SharedSectionTemplate id="application">
    <form @submit.prevent="submitForm">
      <SharedHalf>
        <template #left>
          <SharedSectionHeader
            title-tag="h2"
            caption="/ 07 /"
            :title="['Оставить заявку', '']"
            subtitle="Заполните форму чтобы скачать файл с продуктами и ценами на них"
          />
        </template>

        <template #right>
          <SharedPlate
            fill-left
            class="corner lg:corner-right flex flex-col gap-[0px] py-[0px] lg:py-[70px]"
            :class="{ 'pointer-events-none': isFormSent || isFormSending }"
          >
            <SharedFieldText
              :class="{ 'opacity-50': isFormSent || isFormSending }"
              name="name"
              label="Ваше имя"
              required
              placeholder="Имя"
              v-model="form.name"
            />

            <SharedFieldText
              :class="{ 'opacity-50': isFormSent || isFormSending }"
              label="Телефон"
              name="mobile-phone"
              type="tel"
              required
              placeholder="+7 999 999 99 99"
              v-model="form.tel"
            />

            <SharedFieldText
              :class="{ 'opacity-50': isFormSent || isFormSending }"
              label="Почта"
              name="email"
              type="email"
              required
              placeholder="a@a.ru"
              v-model="form.email"
            />

            <SharedFieldText
              :class="{ 'opacity-50': isFormSent || isFormSending }"
              label="Комментарий"
              name="comment"
              placeholder="Нужно 3 кг шампуня с отгрузкой на завтра"
              v-model="form.comment"
            />
          </SharedPlate>
        </template>
      </SharedHalf>

      <div class="corner relative flex w-full justify-center">
        <SharedPlate
          class="flex w-full flex-col items-center gap-[40px] overflow-hidden pb-[40px] pt-[40px] md:pb-[80px] md:pt-[0px] lg:w-fit"
        >
          <div
            v-if="isFormSent"
            class="flex items-center justify-center gap-[10px] font-mono text-subtitle-18"
          >
            <SharedIconDone class="shrink-0" />
            <div>Заявка отправлена, скоро мы с вами свяжемся</div>
          </div>

          <div
            v-else-if="isFormNotSent"
            class="flex items-center justify-center gap-[10px] font-mono text-subtitle-18"
          >
            <SharedIconError class="shrink-0" />
            <div>
              Не получилось отправить заявку, свяжитесь с нами по телефону
              +&nbsp;7&nbsp;963&nbsp;636&nbsp;03&nbsp;33
            </div>
          </div>

          <SharedButton
            v-if="!isFormSent"
            :class="{
              'hidden -translate-y-full opacity-0': isFormSent,
            }"
            :loading="isFormSending"
            class="w-full transition-all lg:w-fit"
            type="submit"
          >
            Отправить заявку

            <template #icon-after>
              <SharedIconArrowRight />
            </template>
          </SharedButton>
        </SharedPlate>
      </div>
    </form>
  </SharedSectionTemplate>
</template>

<script setup lang="ts">
const form = ref({
  email: "",
  name: "",
  tel: "",
  comment: "",
});

const isFormSent = ref(false);
const isFormNotSent = ref(false);
const isFormSending = ref(false);

async function submitForm() {
  if (isFormSending.value) {
    return;
  }

  isFormSending.value = true;
  isFormSent.value = false;
  isFormNotSent.value = false;

  const isSent = await sendForm("Новая заявка", {
    Клиент: form.value.name,
    Почта: form.value.email,
    Телефон: form.value.tel,
    Коммент: form.value.comment,
  });

  isFormSending.value = false;

  if (!isSent) {
    isFormNotSent.value = true;
    return;
  }

  isFormSent.value = true;
}
</script>

<style scoped></style>
