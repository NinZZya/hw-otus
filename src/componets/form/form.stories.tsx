import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Form } from "./form";
import { Input } from "../inputs/input/input";
import { Button } from "../buttons/button/button";

export default {
  title: "Example/Form",
  component: Form,
} as Meta;

export const EmptyForm: React.FC = () => <Form />;

export const LoginForm: React.FC = () => (
  <Form>
    <Input required type="text" placeholder="login" />
    <Input required type="password" placeholder="password" />
    <Button>Submit</Button>
  </Form>
);
