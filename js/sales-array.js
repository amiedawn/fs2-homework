const sales = [
    { 
        item: 'PS4 Pro', 
        stock: 3, 
        original: 399.99
    },
    { 
        item: 'Xbox One X', 
        stock: 1, 
        original: 499.99, 
        discount: 0.1
    },
    { 
        item: 'Nintendo Switch', 
        stock: 4, 
        original: 299.99
    },
    { 
        item: 'PS2 Console', 
        stock: 1, 
        original: 299.99,
        discount: 0.8
    },
    { 
        item: 'Nintendo 64', 
        stock: 2, 
        original: 199.99,
        discount: 0.65
    }
];

class Sale {
    #item;
    #stock;
    #original;
    #discount;
    
    constructor(item, stock, original, discount) {
        this.#item = item;
        this.#stock = stock;
        this.#original = original;
        this.#discount = discount;
          }

    set item(item) {
        this.#item = item;
    }

    get item() {
        return this.#item;
    }

    set stock(stock) {
        this.#stock = stock;
    }

    get stock() {
        return this.#stock;
    }
    set original(original) {
        this.#original = original;
    }

    get original() {
        return this.#original;
    }
    set discount(discount) {
        this.#discount = discount;
    }

    get discount() {
        return this.#discount;
    }
    
};

function calcTotal(sales) {
    let sale1 = sales.map(sale => {
        let {stock, original, discount = 0.0} = sale;
        sale['sale'] = original - (original*discount);
        sale['total'] = sale.sale * sale.stock;
        return sale;
    });
    console.log(sale1);
    return sale1;
};

calcTotal(sales);
