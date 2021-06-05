import VueRouter from 'vue-router';
import Home from './views/Home'
import GreetingPage from './views/GreetingPage'
import PeoplePage from './views/PeoplePage'


const routes = [
  {path: '/', component: Home}, 
  {path: '/greeting', component: GreetingPage}, 
  {path: '/people', component: PeoplePage}, 
];

export default new VueRouter({ 
  mode: 'history',
  routes
});