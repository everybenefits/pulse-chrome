import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrandMark, NoAccessView } from "../src";

const meta = {
  title: "Chrome/Shared",
  component: NoAccessView,
  args: {
    title: "No access",
    body: "Your account does not have permission for this app.",
    ctaLabel: "Back to Pulse",
    href: "https://example.com",
    brandSize: 48,
  },
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },
    ctaLabel: { control: "text" },
    href: { control: "text" },
    brandSize: { control: { type: "number", min: 16, max: 96, step: 4 } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = {
  render: (args) => <BrandMark size={args.brandSize as number} />,
};

export const NoAccess: Story = {
  render: (args) => (
    <NoAccessView
      title={args.title as string}
      body={args.body as string}
      ctaLabel={args.ctaLabel as string}
      href={args.href as string}
    />
  ),
};
