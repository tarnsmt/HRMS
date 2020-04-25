import fgInput from './components/UIComponents/Inputs/formGroupInput.vue'
import DropDown from './components/UIComponents/Dropdown.vue'
import Checkbox from './components/UIComponents/Inputs/Checkbox.vue'
import Radio from './components/UIComponents/Inputs/Radio.vue'

const GlobalComponents = {
  install (Vue) {
    Vue.component(fgInput.name, fgInput)
    Vue.component(DropDown.name, DropDown)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Radio.name, Radio)
  }
}

export default GlobalComponents
