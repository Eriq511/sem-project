let game_bx_1 = document.getElementById('game_bx_1');
let game_bx_1_left_btn = document.getElementById('game_bx_1_left_btn');
let game_bx_1_right_btn = document.getElementById('game_bx_1_right_btn');

game_bx_1_left_btn.addEventListener('click',()=>{
    game_bx_1.scrollLeft -= 250;
});
game_bx_1_right_btn.addEventListener('click',()=>{
    game_bx_1.scrollLeft += 250;
});

function handleResize() {

  let windowWidth = window.innerWidth;

  
  if (windowWidth < 768) {

  } else if (windowWidth >= 768 && windowWidth < 1024) {
   
  } else {
 
  }
}

window.addEventListener('resize', handleResize);

handleResize();

