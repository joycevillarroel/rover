// Rover Object Goes Here
// ======================

const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [{x: 0, y: 0}],
};


// ======================

function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log(rover.direction);
      break;
    case 'S':
      rover.direction = 'E';
      console.log(rover.direction);
      break;
    case 'W':
      rover.direction = 'S';
      console.log(rover.direction);
      break;
    case 'E':
      rover.direction = 'N';
      console.log(rover.direction);
      break;
    default:
      console.log('Sem direção');
  }
}

function turnRight(rover) {
  console.log('turnRight was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log(rover.direction);
      break;
    case 'S':
      rover.direction = 'W';
      console.log(rover.direction);
      break;
    case 'W':
      rover.direction = 'N';
      console.log(rover.direction);
      break;
    case 'E':
      rover.direction = 'S';
      console.log(rover.direction);
      break;
    default:
      console.log('Sem direção');
  }
}


function moveForward(rover) {
  console.log('moveForward was called');
  switch (rover.direction) {
    
    case 'N':
      rover.y -= 1;
      if (rover.y < 0){
      rover.y += 1;
      console.log('Roud of out grid!')
      }
         console.log(rover.x, rover.y);
      break;

    case 'S':
      rover.y += 1;
      if (rover.y > 9) {
        rover.y -= 1;
        console.log('Roud of out grid!')
      }
      console.log(rover.x, rover.y);
      break;
    
     case 'E':
      rover.x += 1;
      if (rover.x > 9){
        rover.y -= 1;
        console.log('Roud of out grid!')
      }
      console.log(rover.x, rover.y);
      break;
    
     case 'W':
      rover.x -= 1;
      if (rover.x < 0){
        rover.y += 1;
        console.log('Roud of out grid!')
      }
        console.log(rover.x, rover.y);
      break;

  }

}

function moveBackward(rover) {
console.log('moveBackward was called')
  switch (rover.direction) {
    case 'N':
      rover.y += 1;
      if (rover.y > 9){
        rover.y -= 1;
        console.log('Roud of out grid!')
      }
         console.log(rover.x, rover.y);
      break;
    case 'S':
      rover.y -= 1;
      if (rover.y < 0) {
          rover.y += 1;
          console.log('Roud of out grid!')
          }
          console.log(rover.x, rover.y);
          break;
        
    case 'E':
      rover.x -= 1;
          if (rover.x < 0){
          rover.y += 1;
          console.log('Roud of out grid!')
          }
          console.log(rover.x, rover.y);
          break;
        
    case 'W':
        rover.x += 1;
        if (rover.x > 9){
        rover.y -= 1;
        console.log('Roud of out grid!')
          }
          console.log(rover.x, rover.y);
          break;
    
      }
    
    }
  

function command(rover, orders) {

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
       switch (order) {
    case 'l':
     turnLeft(rover);
     break;
    case 'r':
     turnRight(rover);
     break;  
     case 'f': 
     moveForward(rover);
     break;
     default:
     console.log('It is not a command');
     break;

}


let position = {x: rover.x, y: rover.y};
  
rover.travelLog.push(position);

}
console.log(rover.travelLog);


}


command(rover, 'lrtoz');