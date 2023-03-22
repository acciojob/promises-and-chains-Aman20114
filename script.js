function waitForObject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const obj = { age: 20, name: "John" };
      resolve(obj);
    }, 4000);
  });
}

function extractValue(obj) {
  return obj.age;
}

function createNewObject(value) {
  return { message: `Welcome, ${value}. You can vote.` };
}

const form = document.querySelector("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  if (isNaN(age) || name === "") {
    alert("Please fill in both fields.");
    return;
  }

  waitForObject()
    .then(obj => {
      if (obj.age >= 18) {
        alert(createNewObject(name).message);
      } else {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      }
    })
    .catch(err => console.log(err));
});dsdd

