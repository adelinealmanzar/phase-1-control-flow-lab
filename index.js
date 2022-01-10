function scuberGreetingForFeet(num){
  if (num <= 400) {
    return 'This one is on me!';
  } else if (num > 2000 && num < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (num > 2000 && num > 2500) {
    return 'No can do.';
  }
};

function ternaryCheckCity(name){
  return name == 'NYC' ? ('Ok, sounds good.') : ('No go.');
};

const phrase = 'Thank you so much';

function switchOnCharmFromTip(phrase) {
  switch(phrase) {
    case  'generous':
      return 'Thank you so much.';
    break;
    case 'not as generous':
      return 'Thank you.';
    break;
    default:
      return 'Bye.';
    break;
  }
};
