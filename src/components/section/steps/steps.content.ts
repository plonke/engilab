import imageStep1 from "~/assets/images/step-1.jpg";
import imageStep2 from "~/assets/images/step-2.jpg";
import imageStep3 from "~/assets/images/step-3.jpg";
import imageStep4 from "~/assets/images/step-4.jpg";
import imageStep5 from "~/assets/images/step-5.jpg";
import imageStep6 from "~/assets/images/step-6.jpg";

import type { Step } from "./steps.type";

export const steps: Omit<Step, "index">[] = [
  {
    title: "Подготовка",
    subtitle: "Составляем договор",
    image: imageStep1,
    actionItems: {
      client: ["Оформляете заявку"],
      contractor: [
        "Связываемся с вами",
        "Согласовываем все нюансы",
        "Составляем договор",
      ],
    },
  },
  {
    title: "Разработка",
    subtitle: "Делаем образцы",
    image: imageStep2,
    actionItems: {
      client: [],
      contractor: [
        "Разрабатываем формулу или повторяем существующую (из собственной базы или делаем аналог какого-то продукта)",
        "Делаем образцы, отправляем вам",
        "Дорабатываем состав на основе фидбека",
      ],
    },
  },
  {
    title: "Тестирование",
    subtitle: "Утверждаем рецептуру",
    image: imageStep3,
    actionItems: {
      client: [],
      contractor: [
        "Проводим тесты на фокус-группе",
        "Тестируем у себя в лаборатории: срок годности, перепады температуры, будет ли расслоение, тест на микробиологию, работает ли антиоксидант в реальных условиях",
        "Дорабатываем продукт",
      ],
    },
  },
  {
    title: "Сертификация",
    subtitle: "Получаем сертификаты/декларации",
    image: imageStep4,
    actionItems: {
      client: [],
      contractor: [
        "Передаем на тестирование независимой лаборатории для получения сертификатов",
      ],
    },
  },
  {
    title: "Упаковка",
    subtitle: "Упаковываем партию",
    image: imageStep5,
    actionItems: {
      client: [],
      contractor: [
        "Производим всю партию",
        "Упаковываем в тару",
        "Маркируем",
        "Упаковываем в палеты",
      ],
    },
  },
  {
    title: "Логистика",
    subtitle: "Доставляем продукцию",
    image: imageStep6,
    actionItems: {
      client: [],
      contractor: [
        "Передаем товар куда нужно — на склад маркетплейсов / в транспортную компанию и тд",
      ],
    },
  },
];
