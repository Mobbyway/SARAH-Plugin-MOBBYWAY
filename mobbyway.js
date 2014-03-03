exports.action = function(data, callback, config, SARAH){

   
    console.log('[Mobbyway] ','Lancement');
 // CONFIG
  config = config.modules.mobbyway;
  if (!config.clef){
    console.log("Mobbyway config missing");
    callback({ 'tts': "J'ai besoin de ton identifiant Mobbyway. Renseigne le dans le fichier de propriété" });
    return;
  }
  
  var token = config.clef;
  var url = 'http://www.mobbyway.com/Process/MobbyBySarah.php?token='+token;
  
  var request = require('request');
  request({ 'uri' : url }, function (err, response, body){
    
    if (err || response.statusCode != 200) {
      callback({'tts': "Je n'arrive pas à me connecter à Mobbyway"});
      return;
    }
//callback({ 'tts': "je n'ai pas compris" });

    callback({ 'tts': body});
  
  });
}