/* Start Things Going After the Scene is Loaded
 ——————————————————————————————————————————————*/


document.querySelector('a-scene').addEventListener('loaded', function () {
  

  //var element = document.querySelector('#some-id');
  var playerEl = document.querySelector('#player');
  var env1 = true; 
  var env2 = false; 
  var envChanged = false;
  

  var envEl = document.querySelector('#scene-1');
  var portal1 = document.querySelector('#portal1');
  
  
  playerEl.addEventListener('componentchanged', function (evt) {
    if (evt.detail.name === 'position') {
      var position_x = evt.target.getAttribute('position').x;
      var position_z = evt.target.getAttribute('position').z;
      
      
      var envName = "";
      
      console.log("Position changed!!");
      console.log("x z is ", position_x, position_z);
    
      
          
      if ( (0 <= position_x && position_x <= 3) && (-10 <= position_z && position_z <= -8) && !envChanged) {
         
        if (env1) {
          envName = "preset:forest";
        } else if (env2){
          envName = "preset:default";
        }
         
        envEl.setAttribute("environment", envName);
        console.log("resetted bitch!!", envName);
        envChanged = true;
        
           
      }
      
      
      //when in default env
      if ( position_z > -8) {
        envChanged = false; 
        env1 = true;
        env2 = false;
        portal1.setAttribute('material', 'pano', '#forestTexture');
        
      }
      
      //when in forest env
      if (position_z < -10) {
        envChanged = false;
        env1 = false;
        env2 = true;
        portal1.setAttribute('material', 'pano', '#defaultTexture');
      }
      
    }
    
  });
  
  
  
  
});

