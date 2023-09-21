
let year=2204

if ((year%4==0)&&(year%100!=0)) {
  console.log("The year is leap year");
}

else if(year%400==0) {
  console.log("The year is a leap year");
}
else{
  console.log("the year is not a leap year")
}

