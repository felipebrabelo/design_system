import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SendButtonComponent } from './send-button/send-button.component';
import { CollapseButtonComponent } from './collapse-button/collapse-button.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { MicrophoneButtonComponent } from './microphone-button/microphone-button.component';
import { SosButtonComponent } from './sos-button/sos-button.component';
import { NavItem08Component } from './novo chat/nav-item-08.component';
import { NavItem04Component } from './exercicios/nav-item-04.component';
import { NavItem06Component } from './nav-item-06/nav-item-06.component';

const meta: Meta = {
  title: 'Components/Buttons',
  decorators: [
    moduleMetadata({
      imports: [
        NavItemComponent,
        SendButtonComponent,
        CollapseButtonComponent,
        AddButtonComponent,
        MicrophoneButtonComponent,
        SosButtonComponent,
        NavItem08Component,
        NavItem04Component,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj;

export const NavItem: Story = {
  render: () => ({ template: `<ds-nav-item></ds-nav-item>` }),
};

export const SendButton: Story = {
  render: () => ({ template: `<ds-send-button></ds-send-button>` }),
};

export const Collapse: Story = {
  render: () => ({ template: `<ds-collapse-button></ds-collapse-button>` }),
};

export const Add: Story = {
  render: () => ({ template: `<ds-add-button></ds-add-button>` }),
};

export const Microphone: Story = {
  render: () => ({ template: `<ds-microphone-button></ds-microphone-button>` }),
};

export const SOS: Story = {
  render: () => ({ template: `<ds-sos-button></ds-sos-button>` }),
};

export const NavItem08: Story = {
  name: 'Novo Chat',
  render: () => ({ template: `<ds-nav-item-08></ds-nav-item-08>` }),
};


export const Exercicios: Story = {
  render: () => ({ template: `<ds-nav-item-04></ds-nav-item-04>` }),
};


export const Relatorios: Story = {
  name: 'Relatórios',
  render: () => ({
    template: `<ds-nav-item-06></ds-nav-item-06>`,
  }),
};
