
let vertical = 42;
let horizontal = 42;
let count = 2;
let car1 = document.getElementById('car-image');
let car2 = document.getElementById('car2-image');



document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
      up();
  } else if (event.key === 'ArrowDown') {
      bottom();
  } else if (event.key === 'ArrowLeft') {
      left();
  } else if (event.key === 'ArrowRight') {
      right();
  }
});


function up(){

  car1.style.visibility = `visible`;
  car2.style.visibility = `hidden`;
  car1.style.transform = `rotate(${-90}deg)`;
  car1.style.bottom = `${vertical + count}%`;
  car2.style.bottom = `${vertical + count}%`;
  vertical += count; 

}


function right(){

  car1.style.visibility = `visible`;
  car2.style.visibility = `hidden`;
  car1.style.transform = `rotate(${0}deg)`;
  car1.style.left = `${horizontal + count}%`;
  horizontal += count;
 
}


function left(){

  car1.style.visibility = 'hidden';
  car2.style.visibility = `visible`;
  car1.style.left = `${horizontal - count}%`;
  car2.style.left = `${horizontal - count}%`;
  horizontal -= count;

}


function bottom(){

  car1.style.visibility = `visible`;
  car2.style.visibility = `hidden`;
  car1.style.transform = `rotate(${90}deg)`;
  car1.style.bottom = `${vertical - count}%`;
  car2.style.bottom = `${vertical - count}%`;

  vertical -= count;

}


function clearLocalStorageOnRefresh() {
  localStorage.clear();
}


window.addEventListener('beforeunload', clearLocalStorageOnRefresh);
