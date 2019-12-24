const app = new Vue({
    el: '#app',
    data: {
        title: 'Hola mundo con Vue',
        fruits: ['Manzana', 'Plátano', 'Naranja', 'Pera'],
        fruits2: [
            {name: 'Melón', quantity: 10},
            {name: 'Sandía', quantity: 5},
            {name: 'Mango', quantity: 30},
            {name: 'Uvas', quantity: 0}
        ]
    }
})