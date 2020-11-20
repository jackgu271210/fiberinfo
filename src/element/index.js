import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Drawer,
  Select,
  Option,
  Tag,
  Tabs,
  TabPane
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
    Vue.use(Tabs)
    Vue.use(TabPane)
  }
}
export default element