import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SendButtonComponent } from './send-button/send-button.component';
import { CollapseButtonComponent } from './collapse-button/collapse-button.component';
import { AddButtonComponent } from './add-button/add-button.component';

const meta: Meta = {
  title: 'Components/Buttons',
  decorators: [
    moduleMetadata({
      imports: [
        NavItemComponent,
        SendButtonComponent,
        CollapseButtonComponent,
        AddButtonComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj;

export const NavItem: Story = {
  render: () => ({
    template: `<ds-nav-item></ds-nav-item>`,
  }),
};

export const SendButton: Story = {
  render: () => ({
    template: `<ds-send-button></ds-send-button>`,
  }),
};

export const Collapse: Story = {
  render: () => ({
    template: `<ds-collapse-button></ds-collapse-button>`,
  }),
};

export const Add: Story = {
  render: () => ({
    template: `<ds-add-button></ds-add-button>`,
  }),
};
