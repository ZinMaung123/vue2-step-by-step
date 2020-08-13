Vue.component('message', {
    props: [
        'title', 'description'
    ],
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" aria-label="delete" @click="isVisible = false"></button>
            </div>
            <div class="message-body">
                {{description}}
            </div>
        </article>
        `,
    data(){
        return {
            isVisible: true
        };
    }

});

new Vue({
    el: "#root"
});