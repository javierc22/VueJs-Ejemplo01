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
        ],
        newFruit: '',
        total: 0
    },
    methods: {
        addFruit() {
            this.fruits2.push({
                name: this.newFruit, quantity: 0
            });

            this.newFruit = '';
        }
    },
    computed: {
        addUpFruits() {
            this.total = 0;
            for (fruit of this.fruits2) {
                this.total = this.total + fruit.quantity;
            }

            return this.total;
        }

    }
})