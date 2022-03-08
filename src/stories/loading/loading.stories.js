import loading from '../loading/loading.vue'

export default {
  title: 'Loading',
  component: loading,
  parameters: {
    docs: { 
      page: null,
      description: { 
        component: '用于页面和区块的加载中状态。' 
      } 
    },
  }
};

const Template = (args) => ({
  components: { loading },
  setup() {
    return { args };
  },
  template: `
  <loading v-bind="args" />
  `,
});

export const Custom = Template.bind({});
Custom.parameters = {
  docs: { 
    description: { 
      story: 'Story Description' 
    }   
  },
}
Custom.args = {
  loading: true,
  size: 100,
  color: '#333',
  duration: '1',
  text: 'Loading...',
  textColor: '#333',
  textSize: 16,
};
