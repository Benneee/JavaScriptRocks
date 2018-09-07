//Create variables for the code
var code = 'RicePlantainChicken_';
var item = code.length;
var subTotal = item * 30;
var delivery = 50;
var vat = 20; 
var grandTotal = subTotal + delivery + vat;



/* Updating the old variables in HTML with new variables formed above */

//Get element that has id of usercode & update content
var code = document.getElementsById('usercode');
document.write(code);

//Get element that has id of items & update content
var elItem = document.getElementsById('items');
elItem.innerHTML = item;

//Get element that has id of subTotal & update content
var elSubTotal = document.getElementsById('subTotal');
elSubTotal.innerHTML = '$' + subTotal;

//Get element that has id of delivery & update content
var elDelivery = document.getElementsById('delivery');
elDelivery.innerHTML = '$' + delivery;

//Get element that has id of vat & update content
var elVat = document.getElementsById('vat');
elVat.innerHTML = '$' + vat;

//Get element that has id of grandTotal & update content
var elGrandTotal = document.getElementsById('grandTotal');
elGrandTotal.innerHTML = '$' + grandTotal;


/* End Of JavaScript Code */
