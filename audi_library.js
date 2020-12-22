
function bounceOff (sprite1,sprite2){

    if (sprite1.x - sprite2.x < (sprite1.width + sprite2.width)/2 
    && sprite2.x - sprite1.x < (sprite2.width + sprite1.width)/2 ){
       
       sprite1.velocityX *= (-1);
       sprite2.velocityX = sprite2.velocityX * (-1);
    }
  
    if (sprite1.y - sprite2.y < (sprite1.height + sprite2.height)/2 
    && sprite2.y - sprite1.y < (sprite2.height + sprite1.height)/2 ){
       
       sprite1.velocityY *= (-1);
       sprite2.velocityY = sprite2.velocityY * (-1);
    }
  
  }
  

function isTouching (sprite1,sprite2){

    if (sprite1.x - sprite2.x < (sprite1.width + sprite2.width)/2 
    && sprite2.x - sprite1.x < (sprite2.width + sprite1.width)/2 
    && sprite1.y - sprite2.y < (sprite1.height + sprite2.height)/2 
    && sprite2.y - sprite1.y < (sprite2.height + sprite1.height)/2 ){ 
  
      return true;
  
    }else {
  
      return false;
  
    }
  
  
  }


function hasCollided (sprite1, sprite2){

  sprite1RightEdges = sprite1.x + sprite1.width;
  sprite2LeftEdges = sprite2.x;

  sprite2RightEdges = sprite2.x + sprite2.width;
  sprite1LeftEdges = sprite1.x;

  if (sprite1 = sprite2LeftEdges)
  {
    return true;
  }else {
    return false;
  }

  if (sprite2 = sprite1LeftEdges)
  {
    return true;
  }else {
    return false;
  }

}
