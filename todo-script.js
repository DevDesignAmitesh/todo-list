const addBtn = document.querySelector(".add");
const container = document.querySelector(".container");

addBtn.addEventListener("click", ()=>{
  playingWithToDo();
});

function playingWithToDo(){

  // creating new Element
  const newDiv = document.createElement("div");
  const newPara = document.createElement("p");
  const trash = document.createElement("i");
  const input = document.querySelector(".input");
  const date = document.querySelector(".input-date")

  // Add classes to the elements
  newDiv.classList.add("tasks");
  newPara.classList.add("para");
  trash.classList.add("icon", "fa-solid", "fa-trash");

  // Set content of paragraph
  if(input.value === `` && date.value === ``){
    newPara.innerHTML = `No Task`
  } else{
    newPara.innerHTML = `${input.value} : ${date.value}`;
  }

  // Append elements to the newDiv
  newDiv.appendChild(newPara);
  newDiv.appendChild(trash);

  // Append newDiv to the container
  container.appendChild(newDiv);

  // making the placeholder empty after submitting of tasks
  input.value = ``;
  date.value = ``;

  // removing the unwanted task
  trash.addEventListener("click", ()=>{
    container.removeChild(newDiv);
  });
}