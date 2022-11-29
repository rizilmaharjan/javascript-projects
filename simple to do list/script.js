(function () {
  "use strict";
  let submit = document.querySelector("submit");
  let mytodolists = document.querySelector(".list");
  let myform = document.querySelector("form");
  let clear = document.querySelector("#remove");

  clear.addEventListener("click", () => {
    mytodolists.innerHTML = "";
  });

  /* creating ul element */


  myform.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.getElementById("list").value;
    
    let allinputs = display(input);
    elem.appendChild(allinputs);
    mytodolists.appendChild(elem);
    document.getElementById("list").value = "";
  });

  let elem = document.createElement("ul");
  mytodolists.appendChild(elem);


  function display(whishlist) {
    /* creating li element and appending it into the ul element */
    const li = document.createElement("li");
    li.className = "mero";
    li.innerText = whishlist;
    // elem.appendChild(li);

    /* creating remove button */
    const remove = document.createElement("button");
    remove.className = "btn";
    remove.innerText = "X";

    /* appending remove button to the li element */

    li.appendChild(remove);

    /* event listener for the remove button */

    remove.addEventListener("click", removal);

    return li;
  }

  /* function for event listener for the remove button */

  function removal(e) {
    e.target.parentElement.remove();
  }
})();
