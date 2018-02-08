# oopPizzaFactory

##Pizza Factory
We'll be focusing on the code, so this program will not need any DOM or UI. A script.js sourced into an HTML page will suffice.

###Classes
The pizza factory should contain the following classes:

A base pizza class that takes in one or many ingredients and returns a new pizza. If no ingredients are passed in, the class should default to a single ingredient of cheese.
An order class that will keep track of the number of pizzas in the order and have a method to calculate the cost for an entire order.
###Things to Consider
You'll need a way to create new pizzas. Consider that many pizza restaurants have a menu of pre-configured pizzas. How could you mimic this in code?
You'll need a way to add pizza objects to an order object.
After pizzas are added, you need a way to calculate the total for the order.
You need to be able to handle pricing.
$10.00 per pizza plus $0.99 per each ingredient beyond cheese. Extra cheese counts as an additional topping. No cheese still costs $10.00 to start.
##Hard Mode
Ability to create pizzas with multiple sizes (small, medium, large). Base prices are $8.99, $10.99 and $12.99 respectively.
If you have two or more large pizzas AND a medium pizza in your current order, the medium pizza should be 50% off.
##More!
Process order should take in an optional argument of coupon code. If the code is PIZZA25, the total cost should be reduced by 25%. All discounts should be applied pre tax.
Pineapple as an ingredient should cost $1.99.
