import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: (args) => ({
      components: { Button },
      setup() {
        return { args };
      },
      template: `
        <Button v-bind="args">
          Primary Button
        </Button>
      `,
    }),
    args: {
      variant: "primary",
      size: "m",
      disabled: false,
    },
  };