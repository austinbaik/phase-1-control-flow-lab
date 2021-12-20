let dist;

function scuberGreetingForFeet(dist){

  if (dist <= 400){
    return ('This one is on me!');
  }
    else if (dist > 2500){
      return ('No can do.');
  }
    else if (dist > 2000){
      return ('I will gladly take your thirty bucks.');
    }
  }


let city = "NYC";
let name;

  function ternaryCheckCity(name){
   return (name === city ? 'Ok, sounds good.' : 'No go.');
  }
  

let tip; 
  function switchOnCharmFromTip(tip){
    switch(tip){
      case 'generous':
      return  'Thank you so much.';
      break;
      case 'not as generous':
      return 'Thank you.';
      break; 
      case 'thanks for everything':
      return 'Bye.';
    }
  }