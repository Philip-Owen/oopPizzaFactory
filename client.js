console.log('In the pizza house!');

// Base Pizza
class Pizza {
  constructor(toppingsArray = ['cheese']) {
    this.toppings = toppingsArray;
    this.toppingsCount = toppingsArray.length;
  }

  addToppings(toppingsArray) {
    for (var i = 0; i < toppingsArray.length; i++) {
      this.toppings.push(toppingsArray[i]);
    }
  }

  pepperoniPizza() {
    this.toppings = ['pepperoni'];
  }

}

// Base Order
class Order {
  constructor() {
    this.pizzaOrder = [];
    this.orderPrice = 0;
  }

  addPizzaToOrder(pizzaArray) {
    for (let i = 0; i < pizzaArray.length; i++) {
      this.pizzaOrder.push(pizzaArray[i]);
    }
  }

  calculateOrderPrice() {
    let orderTotal = 0;
    for(let i = 0; i < this.pizzaOrder.length; i++) {
      if(this.pizzaOrder[i].toppings.length == 1 && this.pizzaOrder[i].toppings[0] == 'cheese'){
        orderTotal += this.pizzaOrder[i].price;
      } else {
        orderTotal += ((this.pizzaOrder[i].toppings.length) * 0.99) + this.pizzaOrder[i].price;
      }
      this.orderPrice = orderTotal;
    }

  }
}

// Sub Classes Pizza
class SmallPizza extends Pizza {
  constructor(toppingsArray) {
    super(toppingsArray);
    this.size = 'small';
    this.price = 8.99;
  }
}

class MediumPizza extends Pizza {
  constructor(toppingsArray) {
    super(toppingsArray);
    this.size = 'medium';
    this.price = 10.99;
  }
}

class LargePizza extends Pizza {
  constructor(toppingsArray) {
    super(toppingsArray);
    this.size = 'large';
    this.price = 12.99;
  }
}

// menu.pepperoniPizza();

let orderOne = new Order();

orderOne.addPizzaToOrder([new SmallPizza(['ham', 'onions']), new SmallPizza(), new MediumPizza(['pepperoni'])]);

orderOne.calculateOrderPrice();

console.log(orderOne);
