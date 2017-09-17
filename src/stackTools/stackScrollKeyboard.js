import scroll from '../util/scroll.js';
import keyboardTool from '../imageTools/keyboardTool.js';

const keys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

function keyDownCallback (e, eventData) {
  const keyCode = eventData.keyCode;
  let images;

  if (keyCode === keys.DOWN) {
      images = -1;
  }else if(keyCode === keys.UP){
      images = 1;
  }else if(keyCode === keys.LEFT){
      images = -10;
  }else if(keyCode === keys.RIGHT){
      images = 10;
  }else{
      return;
  }
  if (eventData.event.altKey) {
      images *= 2;
  }
  if (eventData.event.shiftKey) {
      images *= 5;
  }

  scroll(eventData.element, images);
}

// Module/private exports
const stackScrollKeyboard = keyboardTool(keyDownCallback);

export default stackScrollKeyboard;
