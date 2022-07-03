///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const sum = 0

const summedPrice = cart.reduce((a, c) => a + c.price, sum)

console.log("output after using reduce function " + summedPrice)





//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal,couponValue,tax)
{
    return (cartTotal + (cartTotal * tax))-couponValue
}

console.log("Cart Total with Tax and Coupon Value is " + calcFinalPrice(100,10,.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

    //TEXT ANSWER

   //Customer First Name - String
   //Customer Last Name - String
   //Customer Date of Birth - String
   //Customer eMail - String
   // Customer Phone Number - String
   // Customer Preferred Contact Method - String
   //Customer Address for Delivering Food - String
   //Cart Total - Decimal
   //Number of Items Added to Cart - Integer




/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = 
    {
        firstName:"FirstName", //Customer First Name
        lastName:"LastName",  //Customer Last Name
        dateOfBirth:"Month And Day", //Customer Date of Birth
        eMail:"username@gmail.com", //Customer eMail
        phoneNumber:"123-456-7890", // Customer Phone Number
        contactMethod:"text or email", // Customer Preferred Contact Method
        deliveryAddress:"12345 Street Name Detroit MI", //Customer Address for Delivering Food
        cartTotal: 123.4, //Cart Total is a Decimal
        numberOfCartItems: 5 //Number of Items Added to Cart is an Integer
    };
