import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

enum IndicatorType {
  CARD = "card",
}

interface DynamicStyle {
  color: string;
  margin: string;
}

export interface IndicatorProp {
  type?: "card";
  color?: string;
}

const dynamicStyle = (props: DynamicStyle) =>
  css`
    color: ${props.color};
    margin: ${props.margin};
  `;

export const IndicatorWrapper = styled.span`
  display: block;
  font-size: 2rem;
  ${dynamicStyle};
`;

export const Indicator: React.FC<IndicatorProp> = (props) => {
  const { type = "", color = "#ff0000" } = props;

  switch (type) {
    case IndicatorType.CARD:
      return (
        <IndicatorWrapper color={color} margin="0 0 0 auto">
          •
        </IndicatorWrapper>
      );
    default:
      return (
        <IndicatorWrapper color={color} margin="0">
          •
        </IndicatorWrapper>
      );
  }
};
