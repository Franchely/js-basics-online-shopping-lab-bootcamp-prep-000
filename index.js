var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * (99 - 1) + 1)

 cart.push({itemName: item,  itemPrice: price} )
 
 return `${item} has been added to your cart.`
 return cart;
}

function viewCart() {

  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
   } else if (cart.length === 2) {
     for (var i = 0; i < cart.length; i++) {
       return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.` } 
      } else {
        
          var last = cart[cart.length - 1] 
           var newArray = []
        
         for (i = 0; i < cart.length - 1; i++) { 
        
         newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`) 
         
       } 
       return `In your cart, you have ` + newArray.join(", ") + ", and " + last.itemName + " at $" + last.itemPrice + "."
      } return cart;
   } 

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
   sum += parseInt(cart[i].itemPrice) 
  } return sum 

} 


function removeFromCart(item) {
  console.log(cart.indexOf(item))

  for(var i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(item)){
        cart = cart.slice(0,i).concat(cart.slice(i+1))
      }
    
  }
  return cart
  }
 

function placeOrder(cardNumber) {
  if (cardNumber) {
     return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  } else {
   return "Sorry, we don't have a credit card on file for you."
  }
}

