
require('./bootstrap');

new Vue({
    el: '#app',
    data: {
        skills: [] 
    },
    mounted(){
        axios.get('/skills')
             .then(response => {
                 console.log(response);
                 this.skills = response.data
             })
    }
})