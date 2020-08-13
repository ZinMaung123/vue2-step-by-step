Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a href="#" @click="switchTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div> 

            <div class="tabs-content">
                <slot></slot>
            </div>
        </div>      
    `,

    mounted() {
        this.tabs = this.$children
    },

    data() {
        return {
            tabs: []
        }
    },

    methods: {
        switchTab(selectedTab){
            this.tabs.forEach(tab => 
                tab.isActive = (tab.name == selectedTab.name)
                );
        }
    },
});

Vue.component('tab', {
    template: `
        <p v-show="isActive"><slot></slot></p>
    `,

    props: {
        name: {required: true},
        selected: {default: false}
    },

    data() {
        return {
            isActive: false
        }
    },

    created() {
        this.isActive = this.selected
    },
});

new Vue({
    el: "#root",
});