
const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript",
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока",
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока",
    },
  ];
  
  const taskList = document.createElement("div");
  taskList.classList.add("tasks-list");
  
  tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.setAttribute("data-task-id", task.id);
    taskItem.innerHTML = `
      <div class="task-item__main-container">
        <div class="task-item__main-content">
          <form class="checkbox-form">
            <input
              class="checkbox-form__checkbox"
              type="checkbox"
              id=${task.id}
            />
            <label for=${task.id}></label>
          </form>
          <span class="task-item__text">
            ${task.text}
          </span>
        </div>
        <button
          class="task-item__delete-button default-button delete-button"
          data-delete-task-id="5"
        >
          Удалить
        </button>
      </div>
    `;
  
    taskList.append(taskItem);
  });
  
  document.body.append(taskList);
  
  const taskForm = document.createElement("form");
  taskForm.classList.add("create-task-block");
  taskForm.innerHTML = `
    <input placeholder="Task" class="create-task-block__input"/>
    <button type="submit">Submit</button>
  `;
  document.body.append(taskForm);
  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector(".create-task-block__input");
    const taskText = input.value.trim();
  
    const errorBlock = document.createElement("span");
    errorBlock.classList.add("error-message-block");
  
    if (taskText) {
      tasks.forEach((task) => {
        if (task.text === taskText) {
          taskForm.append(errorBlock);
          errorBlock.innerText = "Такая задача уже есть!";
        }
      });
      if (errorBlock.textContent === "") {
        const newTask = {
          id: Date.now().toString(),
          completed: false,
          text: taskText,
        };
  
        tasks.push(newTask);
  
        const newTaskItem = document.createElement("div");
        newTaskItem.setAttribute("data-task-id", newTask.id);
        newTaskItem.innerHTML = `
            <div class="task-item__main-container">
              <div class="task-item__main-content">
                <form class="checkbox-form">
                  <input
                    class="checkbox-form__checkbox"
                    type="checkbox"
                    id=${newTask.id}
                  />
                  <label for=${newTask.id}></label>
                </form>
                <span class="task-item__text">
                  ${newTask.text}
                </span>
              </div>
              <button
                class="task-item__delete-button default-button delete-button"
                data-delete-task-id="5"
              >
                Удалить
              </button>
            </div>
          `;
  
        taskList.append(newTaskItem);
  
        const btnDelete = newTaskItem.querySelector("button");
        const id = newTaskItem.getAttribute("data-task-id");
  
        btnDelete.addEventListener("click", () => {
          modal.classList.remove("modal-overlay_hidden");
          modal.setAttribute("data-task-id", id);
        });
      }
  
      setTimeout(() => errorBlock.remove(), 3000);
      input.value = "";
    } else {
      const errorBlock = document.createElement("span");
      errorBlock.classList.add("error-message-block");
      taskForm.append(errorBlock);
      errorBlock.innerText = "Название не должно быть пустым!";
  
      setTimeout(() => errorBlock.remove(), 3000);
    }
  });
  
  const modal = document.querySelector(".modal-overlay"),
    modalCloseBtn = modal.querySelector(".cancel-button"),
    taskDeleteBtn = modal.querySelector(".confirm-button");
  
  [...taskList.children].forEach((task) => {
    const btnDelete = task.querySelector("button");
    const id = task.getAttribute("data-task-id");
  
    btnDelete.addEventListener("click", () => {
      modal.classList.remove("modal-overlay_hidden");
      modal.setAttribute("data-task-id", id);
    });
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("modal-overlay_hidden");
    }
  });
  
  modalCloseBtn.addEventListener("click", () =>
    modal.classList.add("modal-overlay_hidden")
  );
  
  taskDeleteBtn.addEventListener("click", () => {
    const taskDeleteId = modal.getAttribute("data-task-id");
    [...taskList.children].forEach((task) => {
      const taskId = task.getAttribute("data-task-id");
      if (taskId === taskDeleteId) task.remove();
    });
  
    modal.classList.add("modal-overlay_hidden");
  });
  
  // Theme
  let darkTheme = false;
  const themeBtn = document.querySelector("#theme");
  
  themeBtn.addEventListener("click", (e) => {
    darkTheme = !darkTheme;
    updateTheme();
  });
  
  function updateTheme() {
    const body = document.querySelector("body"),
      taskItems = document.querySelectorAll(".task-item__text"),
      buttons = document.querySelectorAll("button");
  
    console.log(taskItems);
  
    if (darkTheme) {
      body.style.background = "#24292E";
      taskItems.forEach((item) => {
        item.style.color = "#ffffff";
      });
      buttons.forEach((button) => {
        button.style.border = "1px solid #ffffff";
      });
    } else {
      body.style.background = "initial";
      taskItems.forEach((item) => {
        item.style.color = "initial";
      });
      buttons.forEach((button) => {
        button.style.border = "none";
      });
    }
  }
  