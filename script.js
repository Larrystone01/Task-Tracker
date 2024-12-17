const tasks = document.getElementById("Tasks");
const taskInput = document.querySelector(".task-input");
const createTask = document.querySelector(".btn");
const taskBody = document.querySelector(".group");
const emptyDiv = document.createElement("div");

// const createTask = (e) => {
//   if (taskInput === "") {
//     alert("Create a Task Please");
//   } else {
//     console.log("Larry");
//   }
// };
// taskBody.addEventListener("submit", createTask());

function addTask(e) {
  if (taskInput.value !== "") {
    console.log(taskInput.value);
    // create Li element
    const li = document.createElement("li");
    // Add a class name
    li.className = "collection-item";

    //Remove li styyling
    li.style.listStyle = "none";
    li.style.display = "flex";
    li.style.borderBottom = "2px solid grey";
    li.style.marginBottom = "20px";
    li.style.paddingBottom = "5px";

    // create textnode and appendchild
    // li.appendChild(document.createTextNode(taskInput.value));
    // li.innerHTML = `<input type="checkbox"/>${taskInput.value}`;

    // Create checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.marginRight = "15px";

    //Append checkBox to li
    li.appendChild(checkBox);

    //Create text node
    li.appendChild(document.createTextNode(taskInput.value));

    // li.style.justifyContent = "Space-between";

    // creat a new link element
    const link = document.createElement("a");

    // Remove link styles
    link.style.textDecoration = "none";
    link.style.color = "#444";
    link.style.cursor = "pointer";
    // Add a class name
    link.className = "delete-task secondary-content";
    // Add icon to link
    link.innerHTML = "<i class='ti ti-trash'></i>";
    link.style.marginLeft = "auto";
    // Append link to li
    li.appendChild(link);

    //Append li to ul
    tasks.appendChild(li);

    // Clear input
    taskInput.value = "";
  } else {
    alert("Enter a task");
  }
  // e.preventDefault();
}

createTask.addEventListener("click", addTask(e));
// taskBody.addEventListener("keydown", (e) => {
//   if (e.key === "enter") {
//     addTask();
//   } else {
//     console.log("Error");
//   }
// });
