import { createRouter, createWebHistory } from 'vue-router';
import Proyecto1 from '../views/proyecto1.vue';
const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path:'/',
            name:'Home',
            component:Proyecto1
        }
        

    ]
  });
export default router;