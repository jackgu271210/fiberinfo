import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Drawer,
  Select,
  Option,
  Tag
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(Submenu)
    Vue.use(MenuItemGroup)
    Vue.use(Drawer)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Tag)
  }
}
export default element