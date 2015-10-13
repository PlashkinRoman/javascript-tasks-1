var hours = process.argv[2];
var minutes = process.argv[3];

var arbNumbers = [1, 4, 5, 9, 10, 40, 50];
var romanNumbers = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

if ((!(hours == parseInt(hours))) || (hours < 0) || (hours > 23) || (!(minutes == parseInt(minutes))) || (minutes < 0) || (minutes > 59)) {
  console.log('Wrong time');
  }
else {
  console.log(arbToRoman(hours)+' : '+arbToRoman(minutes));
  }

function arbToRoman(numb) {
  if (numb == 0) return '--';
  else {
    var romanNumb = '';
    var n = arbNumbers.length - 1;
 
    while (numb > 0) {
      if (numb >= arbNumbers[n]) {
      romanNumb = romanNumb + romanNumbers[n];
      numb = numb - arbNumbers[n];
      }
      else n--;
    }
  return romanNumb;
  }
}
