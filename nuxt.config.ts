import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-23",
  srcDir: "src",
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
    public: {
      sendApplicationEndpoint:
        "https://functions.yandexcloud.net/d4ed4703ut1ues4pbqih",
    },
  },

  vite: {
    plugins: [
      ViteImageOptimizer({
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
      }),
    ],
  },

  app: {
    head: {
      title: "Engilab. Контрактное производство косметики",

      meta: [
        { name: "msapplication-TileColor", content: "#000" },
        { name: "theme-color", content: "#000" },
        {
          content:
            "Производство косметики полного цикла с доставкой по всей России и в Казахстан. Краснодар | +7 963 636 03 33",
          name: "description",
        },
        {
          content: "Engilab. Контрактное производство косметики",
          name: "application-name",
        },
        {
          property: "og:title",
          content: "Engilab. Контрактное производство косметики",
        },
        {
          property: "og:description",
          content:
            "Производство косметики полного цикла с доставкой по всей России и в Казахстан. Краснодар | +7 963 636 03 33",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "Engilab.",
        },
        { property: "og:image", content: "/thumbnail.jpg" },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1000" },
        { property: "og:image:height", content: "500" },

        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:title",
          content: "Engilab. Контрактное производство косметики",
        },
        {
          property: "twitter:description",
          content:
            "Производство косметики полного цикла с доставкой по всей России и в Казахстан. Краснодар | +7 963 636 03 33",
        },
        { property: "twitter:image", content: "/thumbnail.jpg" },
      ],

      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700;800;900&family=Raleway:wght@100..900&display=swap",
        },
      ],
    },
  },

  components: {
    dirs: [
      {
        path: "components",
        pathPrefix: true,
      },
    ],
  },

  css: ["~/assets/style/main.css", "swiper/css", "swiper/css/effect-cards"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vueuse/nuxt"],
});