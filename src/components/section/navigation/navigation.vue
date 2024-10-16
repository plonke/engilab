<template>
  <div class="sticky top-0 bg-light-100">
    <div class="flex h-[56px]">
      <div class="corner flex basis-1/2 items-center">
        <SharedLogo />
      </div>

      <SharedDivider direction="vertical" class="self-stretch" />

      <div class="flex basis-1/2">
        <SectionNavigationLink @click="scrollToApplication">
          Оставить заявку</SectionNavigationLink
        >

        <SharedDivider
          direction="vertical"
          class="hidden self-stretch md:block"
        />

        <!-- TODO: UPDATE LINK -->
        <SectionNavigationLink
          class="hidden lg:flex"
          :link="getTelegramChannelLinkAttrs().href"
        >
          Телеграм-канал</SectionNavigationLink
        >

        <SharedDivider
          direction="vertical"
          class="hidden self-stretch lg:block"
        />

        <SectionNavigationLink class="hidden md:flex" link="tel:8">
          +&nbsp;7&nbsp;963&nbsp;636&nbsp;03&nbsp;33</SectionNavigationLink
        >
      </div>
    </div>

    <SharedDivider direction="horizontal" class="self-stretch" />
  </div>
</template>

<style scoped></style>
