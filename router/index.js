import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from '@/components/HeaderComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import ServicesTableComponent from '@/components/ServicesTableComponent.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';
import ContactFormComponent from '@/components/ContactFormComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: {
      default: Header,
      banner: BannerComponent,
    },
    children: [
      {
        path: '',
        component: BannerComponent,
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: HeaderComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  },
  {
    path: '/services',
    name: 'Services',
    components: {
      default: ServicesTableComponent,
      gallery: GalleryComponent,
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactFormComponent,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
