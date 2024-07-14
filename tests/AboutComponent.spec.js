// AboutComponent.spec.js (dentro do diretório do componente ou em uma pasta __tests__)
import { mount } from '@vue/test-utils';
import AboutComponent from '@/components/AboutComponent.vue';

describe('AboutComponent', () => {
  it('renders content correctly', () => {
    const wrapper = mount(AboutComponent);
    const title = wrapper.find('h1');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Sobre Nós'); // Example title text
  });

  it('displays additional content on button click', async () => {
    const wrapper = mount(AboutComponent);
    const button = wrapper.find('button');
    await button.trigger('click');
    const additionalContent = wrapper.find('.additional-content');
    expect(additionalContent.exists()).toBe(true);
  });
});
