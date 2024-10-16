import type { DeliveryCategory } from "./delivery.type";

import ImageOzon from "~/assets/images/ozon.png";
import ImageWb from "~/assets/images/wb.png";
import ImageCdek from "~/assets/images/cdek.png";
import ImageDellin from "~/assets/images/dellin.png";

export const deliveryCategories: DeliveryCategory[] = [
  {
    title: "На склад маркетплейса",
    subtitle: "Прямиком с нашего производства к вам на продажу",
    items: [
      {
        title: "Ozon",
        description: "Любой склад на территории РФ и Казахстана",
        logo: ImageOzon,
      },
      {
        title: "Wildberries",
        description:
          "Коледино, Электросталь, Подольск, WB Алексин, Казань, Санкт-Петербург, Екатеринбург, Невинномысск, Новосибирск, Обухово",
        logo: ImageWb,
      },
    ],
  },
  {
    title: "Транспортной компанией",
    subtitle: "Для всех остальных случаев",
    items: [
      {
        title: "Сдэк",
        description: "Любой склад на территории РФ и Казахстана",
        logo: ImageCdek,
      },
      {
        title: "Деловые линии",
        description: "Любой склад на территории РФ и Казахстана",
        logo: ImageDellin,
      },
    ],
  },
];
