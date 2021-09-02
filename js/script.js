Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root', 
    data: {
        album: [],

    }, 
    computed: {
        

    }, 
    methods: {

    },

    created() {

        for (let i = 0; i < 10; i++) {
            axios 
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((res) => {
                const response = res.data.response;
                console.log(response);

                this.album = response;
                
                
                
            })
        }  
    },

});