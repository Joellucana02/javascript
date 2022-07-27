/* { Events Exercises. } */

/* Part 1
Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.

Replace the text "Change me" with "Hello World!".

When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

Create a new div element.

Give your new div a class of purple and style it so that it has a background color of purple.

Append your new div to the page to the section tag. */

//document.addEventListener("DOMContentLoaded", main);

function main() {
  document.querySelector("#change_heading").innerText = "Hello World";
  let selected = document.querySelector(".selected");
  let colors = document.querySelector("section");
  colors.addEventListener("mouseover", function (e) {
    selected.innerHTML = e.target.className;
  });
  let newDiv = document.createElement("div");
  newDiv.classList.add("purple");
  newDiv.style.backgroundColor = "purple";
  document.querySelector("section").appendChild(newDiv);
}

/* Part 2
Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!" */

//document.addEventListener("DOMContentLoaded", second);

function second() {
  let btn = document.querySelector("button");
  let car1 = document.querySelector(".car1");
  let car2 = document.querySelector(".car2");
  btn.addEventListener("click", start);
  function start() {
    let car1S = 0;
    let car2S = 0;
    console.log("begins...");
    let timerId = setInterval(carsAction, 1000);
    function carsAction() {
      if (car1S >= 200 || car2S >= 200) {
        clearInterval(timerId);
        if (car1S > car2S) {
          alert("CAR 1 Wins!");
        } else {
          alert("CAR 2 Wins!");
        }
      }
      let di = Math.floor(Math.random() * 50);
      car1.style.transform = `translate(${(car1S += di)}px)`;
      let di1 = Math.floor(Math.random() * 50);
      car2.style.transform = `translate(${(car2S += di1)}px)`;
    }
  }
}

/* Part 3
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo */

//document.addEventListener("DOMContentLoaded", third);

/* function third() {
  let $div = document.createElement("div");
  let $h2 = document.createElement("h2");
  $h2.innerText = "TODO APP";
  $div.appendChild($h2);
  $div.classList.add("todo-app");
  document
    .querySelector("body")
    .insertBefore($div, document.querySelector("body").children[0]);
  let $input = document.createElement("input");
  $input.type = "input";
  $input.classList.add("taskTodo");
  console.log($input);
  let $btn = document.createElement("button");
  $btn.innerText = "add Todo";
  $btn.classList.add("addTodo");
  $div.appendChild($input);
  $div.appendChild($btn);
  document.querySelector(".addTodo").addEventListener("click", addTodo);
  function addTodo() {
    let myText = document.querySelector(".taskTodo");
    let newDiv = document.createElement("div");
    newDiv.classList.add("todoModal");
    console.log(myText.value);
    newDiv.innerHTML = todoElement(myText.value);
    $div.appendChild(newDiv);
    newDiv.addEventListener("click", function (event) {
      remove(event.target);
    });
  }
  function remove(a) {
    console.log(a.innerText);
    if (a.innerText == "Remove") {
      a.parentElement.remove();
    } else if (a.innerText == "Completed") {
      console.log(a.parentElement.children[0]);
      a.parentElement.children[0].style.textDecoration = "line-through";
    }
  }
  function todoElement(val) {
    return `
<h3>${val}</h3>
<button class="removeTask">Remove</button>  
<button class="MTaskAC">Completed</button>  
    `;
  }
} */

/* Part 4:
Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete! */

document.addEventListener("DOMContentLoaded", fourth);

function fourth() {
  let $input = document.querySelector("input"),
    $btn = document.querySelector(".add-task"),
    $list = document.querySelector(".list");
  let arr = [];
  console.log(JSON.parse(localStorage.getItem("todos")));
  arr = JSON.parse(localStorage.getItem("todos"))
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  $btn.addEventListener("click", add);
  display(arr);
  function add() {
    console.log($input.value);
    arr.push({
      complete: false,
      content: todo($input.value),
      value: $input.value,
    });
    localStorage.setItem("todos", JSON.stringify(arr));
    arr = JSON.parse(localStorage.getItem("todos"));
    display(arr);
  }
  function display(v) {
    $list.innerHTML = "";
    for (let i = 0; i < v.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = todo1(v[i]);
      $list.appendChild(div);
      div.addEventListener("click", function (event) {
        completeTask(event.target, v[i]);
      });
    }
  }
  function completeTask(e, v) {
    console.log(e);
    console.log(v);
    v.complete = true;
    e.parentElement.children[0].style.textDecoration = `line-through`;
    e.parentElement.children[0].style.color = `blue`;
    console.log(arr);
    localStorage.setItem("todos", JSON.stringify(arr));
  }
  function todo1(obj) {
    if (obj.complete) {
      return `
        <h3 style="text-decoration:line-through">${obj.value}</h3>
        <button>Complete</button>
        `;
    } else {
      return obj.content;
    }
  }
  function todo(val) {
    return `
        <h3>${val}</h3>
        <button>Complete</button>
        `;
  }
}

/* $btn.addEventListener("click", add);
  function add() {
    arr.push({ content: box($input.value), complete: false });
    console.log(arr);
    localStorage.setItem("todos", JSON.stringify(arr));
    arr = JSON.parse(localStorage.getItem("todos"));
    $input.value = "";
    $list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = arr[i].content;
      $list.appendChild(div);
      div.addEventListener("click", function (event) {
        completed(event.target, arr[i]);
      });
    }
  }
  function completed(ev, pa) {
    console.log(ev.parentElement);
    console.log(pa);
    localStorage.setItem("todos", JSON.stringify(arr));
  }
  function box(val) {
    return `
<h3>${val}</h3>
<button class="MTaskAC">Complete</button>  
    `;
  } */
