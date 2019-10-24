import Vue from 'vue'
import App from './App.vue'
import {Button,Tab,Tabs,Icon,Swipe,SwipeItem,Divider,Card,Cell,Image,CellGroup,Loading} from "vant";

Vue.config.productionTip = false
Vue.use(Button).use(Tab).use(Tabs).use(Icon).use(Swipe).use(SwipeItem).use(Divider).use(Card).use(Cell)
Vue.use(Image).use(CellGroup).use(Loading)
new Vue({
  render: h => h(App),
}).$mount('#app')
