// HeaderComponent.spec.js (dentro do diretório do componente ou em uma pasta __tests__)
import { mount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent', () => {
  it('renders logo correctly', () => {
    const wrapper = mount(HeaderComponent);
    const logo = wrapper.find('.logo');
    expect(logo.exists()).toBe(true);
    expect(logo.attributes('src')).toContain('logo_truck_me_frete_plataforma.png');
  });

  it('renders navbar links correctly', () => {
    const wrapper = mount(HeaderComponent);
    const links = wrapper.findAll('.nav-link');
    expect(links.length).toBe(4); // Assuming 4 links: Home, Sobre, Serviços, Contato
  });
});
