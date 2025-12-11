const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <input type="checkbox" class="check">
    <span class="task-name">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(li);
  input.value = "";


9+
li.querySelector(".check").addEventListener("change", function () {
  const taskName = li.querySelector(".task-name");

  if (this.checked) {
    taskName.innerHTML = `${taskName.textContent} <span class="status">(Completed)</span>`;
  } else {
    const originalText = taskName.textContent.replace("(Completed)", "").trim();
    taskName.textContent = originalText;
  }
});


  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });
});
