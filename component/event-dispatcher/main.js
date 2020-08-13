window.EventBus = new Vue();

Vue.component('cupon',{
    template: `<input @blur="applied">`,

    methods: {
        applied(){
            EventBus.$emit('cupon-applied');
        }
    },
})

new Vue({
    el: "#root",

    methods: {
        cuponApplied(){
            alert('Handling it!');
        }
    },

    mounted() {
        EventBus.$on('cupon-applied', this.cuponApplied)
    },
});