//  Create a program that takes in an array of objects,
//  where each object represents a product with properties for name, price, and quantity.
//  The program should return an object that contains the total revenue for each product

const products = [{
  "id": 1,
  "name": "Carbonated Water - Strawberry",
  "price": 204,
  "quantity": 42
}, {
  "id": 2,
  "name": "Sage Ground Wiberg",
  "price": 144,
  "quantity": 30
}, {
  "id": 3,
  "name": "Bread - Hot Dog Buns",
  "price": 445,
  "quantity": 17
}, {
  "id": 4,
  "name": "Oil - Shortening - All - Purpose",
  "price": 255,
  "quantity": 42
}, {
  "id": 5,
  "name": "Wasabi Paste",
  "price": 481,
  "quantity": 39
}]
  
  const revenueByProduct = products.reduce((result, product) => {
    const { name, price, quantity } = product;
    const revenue = price * quantity;
    result[name] = revenue;
    return result;
  }, {}); // 
  
  console.log(revenueByProduct);



  var name = "Apple";
  console.log(maxchar("Apple"));