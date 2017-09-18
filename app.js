


var todos = [];

var input = prompt("Add - List - remove - Quit!")
while (input !== "quit") {
  if (input == "add") {
    var add = prompt("what would you like to add?");
    todos.push(add);
  }
  else if (input == "list") {
    // console.log(todos);
    todos.forEach(function(todod , i){
      console.log(i + " : " + todod);
    })
  }
  else if (input == "remove") {
    // console.log(todos);
    todos.forEach(function(arrayed , index){
      console.log("*****************")
      console.log(index + " : " +arrayed);
      console.log("*****************")
    });
    var witch = Number(prompt("witch one u need to deleted?"));
    console.log("You're removed :"+ witch +" this one : " + todos[witch]);
    if (witch === NaN && String) {
      alert("This isn't a number! try again please!");
    }
    todos.pop(witch);
      // if(witch == )
    alert("Done! We're removed :"+ witch);

  }

  var input = prompt("add - list - remove - quit!");
}

console.log("Ok! I'LL Quit it!")
