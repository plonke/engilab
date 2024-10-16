import imageBeautyShop from "~/assets/images/beauty-shop.jpg";
import imageChainStore from "~/assets/images/chain-store.jpg";
import imageSmallBusiness from "~/assets/images/small-business.jpg";
import imageCorporateGifts from "~/assets/images/corporate-gifts.jpg";
import imageBloggersAudience from "~/assets/images/blogger-audience.jpg";
import imageBonusPhotos from "~/assets/images/bonus-photos.jpg";
import imageBonusProductionPhotos from "~/assets/images/bonus-production-photos.jpg";
import imageBonusDelivery from "~/assets/images/bonus-delivery.jpg";

import type { Niche } from "./niches.type";

export const niches: Niche[] = [
  {
    title: "Салонам красоты",
    image: imageBeautyShop,
    benefits: [
      "Небольшая партия: от 100 флаконов",
      "Ингредиенты с подтвержденной исследованиями эффективностью",
      "Можем сделать копию продукта или использовать наши готовые рецептуры",
    ],
    bonus: {
      title:
        "В подарок сделаем по 3 предметные фотографии на каждый продукт для размещения на вашем сайте",
      image: imageBonusPhotos,
    },
  },
  {
    title: "Федеральным сетям",
    image: imageChainStore,
    benefits: [
      "Низкая цена",
      "Отсрочка платежа до 40 календарных дней",
      "Документы о соблюдении стандартов на провзводстве",
      "Бесперебойные поставки от 50 000 шт/мес на каждый артикул",
    ],
    bonus: {
      title: "Доставка за наш счет до ваших РЦ",
      image: imageBonusDelivery,
    },
  },
  {
    title: "Частным заказчикам",
    image: imageSmallBusiness,
    benefits: [
      "Заберем всю рутину от дизайна до доставки на себя",
      "Быстро произведем",
      "Быстро доставим в ТК или на склады маркетплйеса",
      "Можем сделать копию продукта или использовать наши готовые рецептуры",
    ],
    bonus: {
      title:
        "В подарок сделаем по 3 предметные фотографии на каждый продукт для сайта или маркетплйеса, дадим отсрочку начиная с третьего заказа.",
      image: imageBonusPhotos,
    },
  },
  {
    title: "Для корпоративных подарков",
    image: imageCorporateGifts,
    benefits: [
      "Готовые формулы, которые нравятся покупателям",
      "Разные форматы упаковки из наличия и под заказ ",
      "Постоянные позиции можем произвести за 2 дня",
    ],
  },
  {
    title: "Для аудитории",
    image: imageBloggersAudience,
    benefits: [
      "Реализация вашей идеи в лучшем исполнении для ваших подписчиков",
      "Делаем продукт под ключ с поиском всех подрядчиков (тара, упаковка, дизайн)",
      "Продукты с вау эффектом для соцсетей о которых будут говорить",
    ],
    bonus: {
      title: "Предоставим кадры с процессом производства вашего продукта",
      image: imageBonusProductionPhotos,
    },
  },
];
