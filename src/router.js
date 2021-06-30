import VueRouter from 'vue-router';
import Home from './views/Home'
import GreetingPage from './views/GreetingPage'
import PeoplePage1 from './views/people/1/index.vue'
import PeoplePage2 from './views/people/2/index.vue'
import PeoplePage3 from './views/people/3/index.vue'
import PeoplePage4 from './views/people/4/index.vue'
import PeoplePage5 from './views/people/5/index.vue'
import PeoplePage6 from './views/people/6/index.vue'


const routes = [
  {path: '/', component: Home}, 
  {path: '/greeting', component: GreetingPage}, 
  {path: '/people/1', component: PeoplePage1}, 
  {path: '/people/2', component: PeoplePage2}, 
  {path: '/people/3', component: PeoplePage3}, 
  {path: '/people/4', component: PeoplePage4}, 
  {path: '/people/5', component: PeoplePage5}, 
  {path: '/people/6', component: PeoplePage6}, 
];

export default new VueRouter({ 
  mode: 'history',
  routes
});