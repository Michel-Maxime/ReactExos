// Button.stories.js|jsx

import React from "react";

import { Button } from "./Button";

export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <Button {...args} />;

//π Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "je suis un Button",
  size: "small",
};

//π Each story then reuses that template
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Je suis un autre Button",
  size: "medium",
};

//π Each story then reuses that template
export const Last = Template.bind({});
Last.args = {
  label: "Je suis encore un autre Button",
  size: "large",
};
