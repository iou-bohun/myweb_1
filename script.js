var drink = new Array(2);
var burger = new Array(3);
for(var i=0;i<burger.length;i++)
{
  burger[i]= prompt("햄버거 가격을 입력하시오");
}
for(var i=0;i<drink.length;i++)
{
  drink[i]=prompt("음료 가격을 입력하시오");
}
burger.sort();
drink.sort();
var result = parseInt(burger[0])+ parseInt(drink[0]-50);



document.write(result);
