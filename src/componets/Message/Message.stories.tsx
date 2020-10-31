import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Message, MessageProp } from "./Message";

export default {
  title: "Components/Message",
  component: Message,
} as Meta;

export const MessageWithTitle: React.FC<MessageProp> = () => (
  <Message title="Title" />
);

export const MessageWithText: React.FC<MessageProp> = () => (
  <Message text="Text" />
);

export const MessageWithTitleAndText: React.FC<MessageProp> = () => (
  <Message title="Title" text="Text" />
);
