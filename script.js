function changeBg() {
  const colors = ["#fdfdfd", "#fff0f6", "#f0f8ff", "#fef9e7", "#f3e5f5", "#e8f5e9"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = color;

  document.body.style.color = "#333";
}

function changeCards() {
  const colors = ["#ffb6c1", "#ffd6e0", "#e0bbff", "#a0e7e5", "#b4f8c8", "#fff5ba"];
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.background = colors[Math.floor(Math.random() * colors.length)];
    card.style.color = "#333";
  });
}


//To-do-list
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function(e){
  if(e.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if(taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // زر الحذف
  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.onclick = () => {
    li.classList.toggle("completed");
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}

const deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // منع تأثير أي حدث آخر على الـ li
    const li = btn.parentElement;
    li.classList.toggle("completed"); // تضيف/remove الخط
  });
});
