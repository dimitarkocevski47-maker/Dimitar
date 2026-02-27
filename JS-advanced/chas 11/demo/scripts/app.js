function Product(name, category, quantity, price) {
  this.name = name;
  this.category = category;
  this.quantity = quantity;
  this.price = price;
  this.inStock = quantity > 0;

  this.updateStock = function (amount) {
    if (amount > this.quantity) {
      // throw error
      console.log("Not enough products");
      return;
    }

    this.quantity = this.quantity - amount;
    this.inStock = this.quantity > 0;
  };
}

// let product = new Product("Laptop", "Laptop", 10, 1200);
// console.log(product.inStock);

// product.updateStock(10);
// console.log(product.inStock);

const person = {
  name: "Bob",
  greet: () => {
    console.log(this);
  },
  greet1: function () {
    const arrow = () => {
      console.log(this);
    };
    arrow();
  },
};
person.greet();
person.greet1();
