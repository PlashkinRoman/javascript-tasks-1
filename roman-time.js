var hours = process.argv[2];
var minutes = process.argv[3];

if ((!(Number.isInteger(hours))) || (hours < 0) || (hours > 23) || (!(Number.isInteger(minutes))) || (minutes < 0) || (minutes > 59)) {
  console.log('Время указано не верно');
  }
else {
  console.log(arbToRoman(hours)+' : '+arbToRoman(minutes))
  }

function arbToRoman(numb) {
  if (numb == 0) return '--';
  else {
    var arbNumbs = [1, 4, 5, 9, 10, 40, 50];
    var romanNumbers = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var romanNumb = '';
    var n = arabicNumbers.length - 1;
 
    while (numb > 0) {
      if (numb > arbNumbs[n]) {
      romanNumb = romanNumb + romanNumbers[n];
      numb = numb - arbNumbers[n]
      }
      else n--;
    }
  return romanNumb;
  }
}
