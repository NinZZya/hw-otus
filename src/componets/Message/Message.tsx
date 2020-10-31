import React from "react";
import styled from "@emotion/styled";

export interface MessageProp {
  title?: string;
  text?: string;
}

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  aligin-items: center;
  padding: 1rem;
  margin: 1rem;
  min-width: 200px;
  min-height: 150px;
  background-color: #222;
  border-radius: 0.5rem;
  color: #fff;
`;

export const Message: React.FC<MessageProp> = (props) => {
  const { title, text } = props;
  return (
    <MessageWrapper>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </MessageWrapper>
  );
};
