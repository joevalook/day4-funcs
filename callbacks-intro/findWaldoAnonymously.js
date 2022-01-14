const findWaldo = function(names, found) {
  let i = 0;
  names.forEach((val, i) => {
    if (val === "Waldo") {
      found(i);   // execute callback
    } 
  });
};
    

/*const actionWhenFound = function(index) {
  console.log(`Found him! at index: ${index}`);
};
*/

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index){ console.log(`Found him! at index: ${index}`)});


