/* Function from StackOverflow
 * Thanks to Jeff B */
function abbrNum(number, decPlaces) {
    decPlaces = Math.pow(10,decPlaces);
    var abbrev = [ "k", "m", "bn", "t" ];

    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3);

        if(size <= number) {
             number = Math.round(number*decPlaces/size)/decPlaces;

             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             number += abbrev[i];
             break;
        }
    }

    return number;
}

$.getJSON("https://api.bitcoinaverage.com/ticker/global/USD/", function(data) {
  var ask = data['ask'];
  var volume = abbrNum(data['volume_btc'], 2);

  $('.social-button.btc .value').html("$" + ask);
  $('.social-button.btc-volume .value').html(volume + " BTC");
})
.fail(function(){
  $('.social-button.btc').remove();
  $('.social-button.btc-volume').remove();
});

$.getJSON("https://blockexplorer.com/api/status?q=getDifficulty", function(data) {
  var difficulty = abbrNum(data['difficulty'], 2);
  $('.social-button.btc-difficulty .value').html(difficulty);
})
.fail(function(){
  $('.social-button.btc-difficulty').remove();
});