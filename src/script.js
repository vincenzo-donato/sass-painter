// AZIONE: Inizializzo Vue 
let app = new Vue({

    // AZIONE: Assegno il container per Vue 
    el: '#container-general',

    // Inizializzo variabili 
    data: {
        courseMainTop: [
            {
                img: 'https://www.painterartist.com/static/ptr/images/home/ptr-module.jpg',
                type: 'NEW',
                title:'Painter Essentials 8',
                info: 'The best affordable pinting software for beginners',
                link: 'Learn more'
            },
            {
                img: 'https://www.painterartist.com/static/ptr/images/home/particleshop-module.jpg',
                title:'ParticleShop',
                info: 'Powerful Adobe Photoshop brush plugin powered by Painter',
                link: 'Learn more'
            },
            {
                img: 'https://www.painterartist.com/static/ptr/images/home/brush-pack-module.jpg',
                title:'Brush Packs',
                info: 'Diverse add-on packs to embellish photo composites, graphic designs',
                link: 'Learn more'
            },
        ]
    }
    //End Inizializzo variabili 

})
//END AZIONE: Inizializzo Vue 
