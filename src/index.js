document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  let theList = document.querySelector("#tasks")
   console.log(form);
   form.addEventListener("submit", (iceCream) => {
      iceCream.preventDefault()
      let result = iceCream.target["new-task-description"].value
      let newTask = document.createElement("li")
      newTask.innerText = result
      theList.append(newTask)
      console.log(theList)
   } )
});
