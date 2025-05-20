import creamCoconut from "~/assets/images/product_cream_coconut.png";
import creamMango from "~/assets/images/product_cream_mango.png";
import maskHydro from "~/assets/images/product_mask_hydro.png";
import scrubCoconut from "~/assets/images/product_scrub_coconut.png";
import scrubCoffee from "~/assets/images/product_scrub_coffee.png";
import scrubRaspberries from "~/assets/images/product_scrub_raspberries.png";

import type { Product } from "./products.type";

function scrub(image: string) {
  return {
    title: "Скраб для тела",
    image: image,
    marketplaces: [
      {
        name: "Wildberries",
        link: "https://www.wildberries.ru/catalog/224806362/detail.aspx",
        rating: "4.8",
        reviews: "115К отзывов",
      },
      {
        name: "Ozon",
        link: "https://www.ozon.ru/product/eskin-touch-nabor-antitsellyulitnyh-solevyh-skrabov-dlya-tela-protiv-rastyazhek-s-maslami-1854989758/?at=08tYXlPJ6cPwNgWRFp7JQpWF3gn0zh49v4QVTkP9oxQ",
        rating: "4.9",
        reviews: "52К отзывов",
      },
    ],
  }
}

function cream(image: string) {
  return {
    title: "Крем для тела",
    image: image,
    marketplaces: [
      {
        name: "Wildberries",
        link: "https://www.wildberries.ru/catalog/250656409/detail.aspx",
        rating: "4.9",
        reviews: "2,7К отзывов",
      },
      {
        name: "Ozon",
        link: "https://www.ozon.ru/product/eskin-touch-krem-dlya-tela-mango-s-maslom-kokosa-i-pantenolom-300ml-1859738028/?at=79tnX97E3SROq33PFMrEyRosKn0qEQup6on4rtE3GYJp",
        rating: "4.9",
        reviews: "200 отзывов",
      },
    ],
  }
}

function mask(image: string) {
  return {
    title: "Маска для волос",
    image: image,
    marketplaces: [
      {
        name: "Wildberries",
        link: "https://www.wildberries.ru/catalog/247818423/detail.aspx",
        rating: "4.9",
        reviews: "800 отзывов",
      }
    ],
  }
}

export const products: Product[] = [
  scrub(scrubRaspberries),
  scrub(scrubCoffee),
  scrub(scrubCoconut),

  cream(creamCoconut),
  cream(creamMango),

  mask(maskHydro)

  // {
  //   title: "Шампунь для увлажнения и восстановления волос",
  //   image: imageProduct2,
  //   marketplaces: [
  //     {
  //       name: "Wildberries",
  //       link: "#",
  //       rating: "4.9",
  //       reviews: "37К отзывов",
  //     },
  //     {
  //       name: "Ozon",
  //       link: "#",
  //       rating: "4.9",
  //       reviews: "37К отзывов",
  //     },
  //   ],
  // },
];
