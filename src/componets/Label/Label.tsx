import React from "react";
import styled from "@emotion/styled";

export interface LabelProp {
  value: string;
}

export const LabelWrapper = styled.span`
  display: flex;
  font-size: 3rem;
  padding: 1rem;
`;

export const Label: React.FC<LabelProp> = (props) => {
  const { value = "" } = props;

  return <LabelWrapper>{value}</LabelWrapper>;
};
