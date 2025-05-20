<template>
  <SharedSectionTemplate>
    <form @submit.prevent="submitForm">
      <SharedHalf>
        <template #left>
          <SharedSectionHeader title-tag="h2" caption="/ 04 /" :title="['Каталог ', 'с нашими продуктами']"
            subtitle="Заполните форму чтобы скачать файл с продуктами и ценами на них" />
        </template>

        <template #right>
          <SharedPlate fill-left class="corner lg:corner-right flex flex-col gap-[0px] py-[0px] lg:py-[70px]"
            :class="{ 'pointer-events-none': isFormSent || isFormSending }">
            <SharedFieldText :class="{ 'opacity-50': isFormSent || isFormSending }" label="Ваша почта" name="email"
              type="email" required placeholder="a@a.ru" v-model="form.email" />

            <SharedFieldSelect :class="{ 'opacity-50': isFormSent || isFormSending }" label="Какой продукт нужен?"
              name="product" required :options="productOptions" v-model="form.product" />

            <SharedFieldSelect :class="{ 'opacity-50': isFormSent || isFormSending }" label="Рецептура продукта"
              name="recipe" required :options="recipeOptions" v-model="form.recipe" />

            <SharedFieldSelect :class="{ 'opacity-50': isFormSent || isFormSending }" label="Объем партии" name="volume"
              required :options="volumeOptions" v-model="form.volume" />

            <SharedFieldSelect :class="{ 'opacity-50': isFormSent || isFormSending }"
              label="Сколько у нас есть времени на все?" required name="deadline" :options="deadlineOptions"
              v-model="form.deadline" />
          </SharedPlate>
        </template>
      </SharedHalf>

      <div class="corner relative flex w-full justify-center">
        <SharedPlate
          class="flex w-full flex-col items-center gap-[40px] overflow-hidden pb-[40px] pt-[40px] md:pb-[80px] md:pt-[0px] lg:w-fit">
          <div v-if="isFormSent" class="flex items-center justify-center gap-[10px] font-mono text-subtitle-18">
            <SharedIconDone class="shrink-0" />
            <div>
              Загрузка файла должна была начаться, если нет, то скачайте
              <a :download="catalogFileName" :href="getCatalogUrl()" class="underline">по ссылке</a>
            </div>
          </div>

          <div v-else-if="isFormNotSent" class="flex items-center justify-center gap-[10px] font-mono text-subtitle-18">
            <SharedIconError class="shrink-0" />
            <div>
              Не получилось скачать файл, свяжитесь с нами по телефону
              +7&nbsp;963&nbsp;636&nbsp;03&nbsp;33
            </div>
          </div>

          <SharedButton v-if="!isFormSent" :loading="isFormSending" class="w-full transition-all lg:w-fit"
            type="submit">
            <template #icon-before>
              <SharedIconDownload />
            </template>
            Скачать каталог
          </SharedButton>
        </SharedPlate>
      </div>
    </form>
  </SharedSectionTemplate>
</template>

<script setup lang="ts">
const form = ref({
  email: "",
  product: "",
  recipe: "",
  deadline: "",
  volume: "",
});

const isFormSent = ref(false);
const isFormNotSent = ref(false);
const isFormSending = ref(false);

const catalogFileName = 'eskin_catalog.pdf';

function getCatalogUrl() {
  return `${window.location.origin}/${catalogFileName}`;
}

async function submitForm() {
  if (isFormSending.value) {
    return;
  }

  isFormSending.value = true;
  isFormSent.value = false;
  isFormNotSent.value = false;

  const isSent = await sendForm("Скачивание каталога", {
    Почта: form.value.email,
    Продукт: form.value.product,
    Рецепт: form.value.recipe,
    Объем: form.value.volume,
    Дедлайн: form.value.deadline,
  });

  isFormSending.value = false;

  if (!isSent) {
    isFormNotSent.value = true;
    return;
  }

  isFormSent.value = true;

  const link = document.createElement('a');
  link.href = getCatalogUrl();
  link.setAttribute('download', catalogFileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



const productOptions = ["Еще не знаю"];

const recipeOptions = ["Есть своя", "Нужна готовая", "Нужно разработать"];

const deadlineOptions = [
  "Нужно как можно быстрее",
  "до 6 месяцев",
  "6 месяцев и больше",
];

const volumeOptions = [
  "До 500 товаров",
  "До 5 000 товаров",
  "5 000 товаров и больше",
];
</script>

<style scoped></style>
