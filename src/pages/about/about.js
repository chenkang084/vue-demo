import Vue from 'vue'
import './style.scss'

/**
 * you can use below style to create a component ,note: it is a global component.
 */
export default Vue.component('test', {
    template: require('./template.html')
})