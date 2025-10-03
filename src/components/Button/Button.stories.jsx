import Button from './Button';

export default {
  title: 'Primitives/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'link'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    as: { table: { disable: true } },
  },
};

export const Playground = (args) => <Button {...args}>Click Me</Button>;
Playground.args = { variant: 'primary', size: 'md', disabled: false };