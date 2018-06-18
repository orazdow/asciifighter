let then = 0, now = 0, elapsed = 0;
let p = 45;



// function startAnimating(){
//     then = performance.now();
//     setInterval(animate, p);
// }

// function animate(){
//     let now = performance.now();
//     console.log(now-then);
//     then = now;
// }


setInterval(function(){ drawAscii(bkgd, display); }, 45);


// function animate(now) {
//   setTimeout(function() {
//     requestAnimationFrame(animate);
//      drawAscii(bkgd, display);
//   }, 30);

// }

// function startAnimating(){
//    // then = performance.now();
//     animate();
// }


