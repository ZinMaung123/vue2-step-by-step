Vue.component('task-list', {
    template: `<ul><task v-for="task in tasks" v-text="task.description"></task></ul>`,

    data(){
        return {
            'tasks' : [
                {description: "Homework", completed: false},
                {description: "Writing", completed: false},
                {description: "Reading", completed: true},
                {description: "Cycling", completed: true},
                {description: "Swiping", completed: false},
            ]
        }
    }
});

Vue.component('task', {
    template: `<li><slot></slot></li>`,
});

new Vue({
    el: "#root"
});