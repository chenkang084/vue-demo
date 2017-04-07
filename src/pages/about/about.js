import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import './style.scss'

/**
 * you can use below style to create a component ,note: it is a global component.
 */
export default Vue.component('test', {
    template: require('./template.html'),
    data: () => {
        return {
            // name:'jack'
        }
    },
    computed: mapState({
        name: state => state.appName,
        count: state => state.count,

    }),
    methods: {
        add: function() {
            this.$store.dispatch('addNum')
        },
        subtract: function() {
            this.$store.dispatch('subtract')
        }
    }
})