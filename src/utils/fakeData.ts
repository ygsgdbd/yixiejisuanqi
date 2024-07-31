import { Faker, zh_CN } from "@faker-js/faker";

export const fakeData = () => {
  return new Faker({
    locale: zh_CN,
  });
};
