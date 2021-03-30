function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
      return 'iOS';
  
    }
    else if( userAgent.match( /Android/i ) )
    {
  
      return 'Android';
    }
    else
    {
      return 'unknown';
    }
  }

  var tipo = getMobileOperatingSystem();
    if( tipo == "Android" ){
        window.location ="https://play.google.com/store/apps/details?id=br.com.client.ecodriver";
    }
    else if( tipo == "iOS" ){
        window.location = "https://apps.apple.com/br/app/ecodriver/id1557730242";
    } else if( tipo == "unknown" ) {
        window.location ="https://play.google.com/store/apps/details?id=br.com.client.ecodriver";
    }

