import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
  parameters : {
    backgrounds: {
      values: [
        { name:'test-black', value: 'black' },
        { name: 'story-pink', value: 'pink' },
        { name: 'story-green', value: 'olive' },
      ]
    }
  }
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

// 單一設定
// Primary.parameters = {
//   backgrounds: {
//     values: [
//       { name: 'story-pink', value: 'pink' },
//       { name: 'story-green', value: 'olive' },
//     ]
//   }
// }

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const outline = Template.bind({});
outline.args = {
  label: 'Button',
};
