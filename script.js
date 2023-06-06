//Declaring the cost for each game 
var itemCost = [45, 60, 70, 50, 65, 70, 30, 20];

function orderNow() {

  //Declaring variables
  var myOrder = "";
  var orderTotal = 0;



  //All these if/else statement use data searching as it goes through each checkbox of each game to see if it has been selected. The code will then check if it is selected and add the cost of the game to cart and charge the user at the end.


  //In addition, all of these statements use Data sorting. Despite the order of boxes the user selects, the code will sort out the data at checkout and print out all of the game titls from the top of the website to the bottom of it. This will ensure that all of the games in the webiste is processed in the cart in order.
  //Using if/else statements to determine what to do after the user clicks the price box for the game
    if (document.getElementById('item1').checked) {
      myOrder = myOrder + document.getElementById('item1').value + "\n";
      orderTotal += itemCost[0];
    }
  if (document.getElementById('item2').checked) {
      myOrder = myOrder + document.getElementById('item2').value + "\n";
      orderTotal += itemCost[1];
    }

    //Using if/else statements to determine what to do after the user clicks the price box for the game


  if (document.getElementById('item3').checked) {
      myOrder = myOrder + document.getElementById('item3').value + "\n";
      orderTotal += itemCost[2];
    }

    //Using if/else statements to determine what to do after the user clicks the price box for the game

  if (document.getElementById('item4').checked) {
      myOrder = myOrder + document.getElementById('item4').value + "\n";
      orderTotal += itemCost[3];
    }

    //Using if/else statements to determine what to do after the user clicks the price box for the game

  if (document.getElementById('item5').checked) {
      myOrder = myOrder + document.getElementById('item5').value + "\n";
      orderTotal += itemCost[4];
    }
    //Using if/else statements to determine what to do after the user clicks the price box for the game


  if (document.getElementById('item6').checked) {
      myOrder = myOrder + document.getElementById('item6').value + "\n";
      orderTotal += itemCost[5];
    }

    //Using if/else statements to determine what to do after the user clicks the price box for the game

  if (document.getElementById('item7').checked) {
      myOrder = myOrder + document.getElementById('item7').value + "\n";
      orderTotal += itemCost[6];
    }
  //Using if/else statements to determine what to do after the user clicks the price box for the game

  if (document.getElementById('item8').checked) {
      myOrder = myOrder + document.getElementById('item8').value + "\n";
      orderTotal += itemCost[7];
    }


  
  //Error Trapping: This code underneath is an example of error trapping. If the user hits the order now button without ordering a game, then a pop-up will appear asking the user to click a checkbox so that it can process their order. The code will keep repeating this forever until the user selects a game to buy.
  if (myOrder === "") {
    alert( "Please select a game and hit order");
  }
  else{

    //Printing out the cost of the Users total at the end after they purchased all the games
    document.getElementById("total").innerHTML = "Your total is $"+ orderTotal;
      
      alert( "Thank You For Your Order!!!\n\nYou Ordered: \n\n"+ myOrder + "\n\nYour total is $" + orderTotal);
  }
}
  