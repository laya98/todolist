const btn = document.querySelector("button");
const continer = document.getElementById("continer");
const enter = document.getElementById("enter");

continer.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash-o icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry icon":
      eo.target.classList.add("dn");
      const heart = `
       <span class="icon-heart"> </span>
       `;
      eo.target.parentElement.parentElement
        .getElementsByClassName("t-text")[0]
        .classList.add("done");
      eo.target.parentElement.innerHTML += heart;

      break;

    case "icon-heart":
      eo.target.classList.add("dn");
      const angry = `
       <span class="icon-angry icon"></span>

       `;
      eo.target.parentElement.innerHTML += angry;

      break;

    case "icon-star icon":
      eo.target.classList.add("orange");
      continer.prepend(eo.target.parentElement);
      break;

    default:
      break;
  }
});
// ياخذ القيمة من الانبت ويضيف تاسك جديدة
btn.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = `
    
    <div class="task">
    <span class="icon-star icon"> </span>
    <p class="t-text"> ${enter.value} </p>

    <div>
      <span class="icon-trash-o icon"> </span>

      <span class="icon-angry icon"></span>
    </div>
  </div>
    `;
  continer.innerHTML += task;
  enter.value = "";
});
