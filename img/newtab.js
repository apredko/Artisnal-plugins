var images = ['img/1.jpeg', 'img/2.jpeg','img/3.jpeg','img/4.jpeg','img/5.jpeg'];
var randomImage = Math.floor(Math.random() * (images.length-1)) + 1 
    $(document).ready(function() {
    $("body").css("background-image", "url('"+images[randomImage]+"')");
});
// mad libs arrays
var where = ['Scenic Picton Ontario'];
var byWho = ['a crew of queer truckers'];
var quality = ['rusty'];
var nounOne = ['fruit juice'];
var nounTwo = ['well calibrated berometers'];
var quote = ['But the truth will never escape us'];

//$("#this p").
