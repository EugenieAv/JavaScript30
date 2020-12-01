const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']")

let lastChecked;


callback = (e) => {
  lastChecked = e.currentTarget;

  console.log(lastChecked)
  console.log(e.shiftKey)
}

checkboxes.forEach( checkbox => checkbox.addEventListener(
  'click', callback));
