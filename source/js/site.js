//=require jquery/jquery.min
//=require retina.js/dist/retina.min
//=require FitText.js/jquery.fittext.js
//=require pikabu/build/pikabu.min
//=require dynamo.js/dynamo.min

jQuery(".responsive_headline").fitText(0.36);

var pikabu = new Pikabu({
    widths: {
        left: '80%'
    }
});


$(document).ready(function(){
    $('span#changer').dynamo({
        delay: 1000
    });
});
