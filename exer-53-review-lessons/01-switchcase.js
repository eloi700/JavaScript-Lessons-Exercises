function caseInSwitch(val) {
  let answer = '';
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
    default:
      answer = 'not available';
  }
  return answer;
}
console.log(caseInSwitch(8));

function sequentialSizes(value) {
  let ans = '';
  switch (value) {
    case 1:
    case 2:
    case 3:
      ans = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      ans = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      ans = 'High';
      break;
    default:
      ans = 'Provided value is not availabe.';
  }
  return ans;
}
console.log(sequentialSizes(5)); //Mid

//Card Counting / Blackjack Game
let count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  let holdBelt = "Hold"
  count > 0 ? holdBelt = "Bet" : "Hold"
  return count + " " + holdBelt;
}

cc(5);
cc(7);
cc(9);
cc('K');
cc('A');
