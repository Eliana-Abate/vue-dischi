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
                const singleDisc = {
                    poster: '',
                    title: '',
                    author: '',
                    year: '',
                };

                singleDisc.poster = response.poster;
                singleDisc.title = response.title;
                singleDisc.author = response.author;
                singleDisc.year = response.year;

                this.album.push(singleDisc);
                
                
            })
        }  
    },

});