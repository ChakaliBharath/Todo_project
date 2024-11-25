let todoList = [
  {
    item: "Learn HTML",
    dueDate: "4/9/2024",
  },
  {
    item: "Complete CSS",
    dueDate: "5/9/2024",
  },
  {
    item: "Complete Project",
    dueDate: "6/9/2024",
  },
];

displayItem();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoitem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoitem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItem();
}

function displayItem() {
  let containerElement = document.querySelector(".todo-caonatiner");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
          
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn-delete" onclick="todoList.splice(${i},1);displayItem();">Delete</button>
            
        `;
  }
  containerElement.innerHTML = newHtml;
}
