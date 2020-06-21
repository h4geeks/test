  function toggleDisplay(value){
 //here we are checking if the value is equal to "other" (== means compare and check)

 if(value=="other") {
 //checks if the value is equal to "other"
   document.getElementById('other').style.display="block";
   document.getElementById('product').style.display="none";
   document.getElementById('issue').style.display="none";
 }
 else if(value=="product-enquiry") {
 //checks if the value is equal to "product"
   document.getElementById('other').style.display="none";
   document.getElementById('product').style.display="block";
   document.getElementById('issue').style.display="none";
 }
 else if(value=="raise-issue") {
 //checks if the value is equal to "raise-issue"
   document.getElementById('other').style.display="none";
   document.getElementById('product').style.display="block";
   document.getElementById('issue').style.display="block";
 }
 
}
