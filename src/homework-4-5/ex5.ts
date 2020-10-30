import React from "react";
// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип


// Так не пошло
// type FIXME<Т> = Т extends { defaultProps: infer U; } ? U : never;
// И так не пошло
// type FIXME<Т> = Т extends { defaultProps: infer U; } ? typeof Т["defaultProps"] : never;
// Подсматривал тут
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types

type FIXME<Т> = any;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME<T> => {
  return component.defaultProps;
};
