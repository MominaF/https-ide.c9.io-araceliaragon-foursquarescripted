// JavaScript File
$(document).ready(function(){
   $( "#search" ).click(function() {
       var word = $('#input').val();
       $.getJSON("https://api.foursquare.com/v2/venues/search?client_id=HILGMAMBCJC1CJPLCOSWNOWXFWUFPKGV41ANHFEM32C20LKV&client_secret=F4WWRZ44GGATN3JRV4VHP5DLBFLWQEBX221JWHOJIZ32L4ZT&v=20130815&ll=40.7,-74&query=" + word,
       function(data){
           var address = data.response.venues[0].location.address;
           var name = data.response.venues[0].name;
           var phone = data.response.venues[0].contact.formattedPhone;
           console.log(name + " " + address + " " + phone);
       })
       console.log(word);
       
      // for (var i = 0; i < venues.length; i++) { 
            //venues[i] + "<br>";
            //
        //}
});

$("#clear").click(function(){
    $( "#input" ).empty();
});

});

