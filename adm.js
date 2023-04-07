
function displayBikes(bikes) {
  let tableRow = document.createElement("tr");
  tableRow.id = "table-body";
  tableRow.innerHTML = `
    <th scope="row">${bikes.id}</th>
    <td>${bikes.image}</td>
    <td>${bikes.manufacturer}</td>
    <td>${bikes.model}</td>
    <td>${bikes.driver}</td>
    <td>${bikes.mileage}</td>
    <td>${bikes.appearance}</td>
    <td>${bikes.price}</td>
    <td class="editable">${bikes.wins}</td>
    <td><button type="button" class="btn btn-info editbutton">Edit</button></td>
    <td><button type="button" class="btn btn-danger deletebutton">Delete</button></td>
  `;
  document.querySelector("#table-body").append(tableRow);

  const editButton = tableRow.querySelector(".editbutton");
  editButton.addEventListener("click", () => {
    const editableCell = tableRow.querySelector(".editable");
    editableCell.setAttribute("contenteditable", "true");
    editableCell.focus();
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.classList.add("btn", "btn-success", "savebutton");
    saveButton.textContent = "Save";
    tableRow.querySelector(".editbutton").replaceWith(saveButton);
    saveButton.addEventListener("click", () => {
      const formData = {
        id: bikes.id,
        image: tableRow.cells[1].textContent,
        manufacturer: tableRow.cells[2].textContent,
        model: tableRow.cells[3].textContent,
        driver: tableRow.cells[4].textContent,
        mileage: tableRow.cells[5].textContent,
        appearance:tableRow.cells[6].textContent,
        price: tableRow.cells[7].textContent,
        wins: editableCell.textContent,
      };
      postBikes(formData);
      saveButton.replaceWith(editButton);
      editableCell.setAttribute("contenteditable", "false");
    });
  });

  const deleteButton = tableRow.querySelector(".deletebutton");
  deleteButton.addEventListener("click", () => {
    tableRow.remove();
    deleteRecord(bikes.id);
  });
}
function fetchBikes() {
  fetch("https://github.com/simonkhartoum/super-eagles-racers-simon/blob/main/db.json")
    .then((response) => response.json())
    .then((bikes) => bikes.forEach((bike) => displayBikes(bike)));
}

fetchBikes();

function collectFormData() {
  let form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //prevents the page from reloading when you are refreshing the page
    const formData = {
      image: e.target.image.value,
      manufacturer: e.target.manufacturer.value,
      model: e.target.model.value,
      driver: e.target.driver.value,
      mileage: e.target.mileage.value,
      appearance: e.target.appearance.value,
      price: e.target.price.value,
      wins: e.target.wins.value,
    };
    postBikes(formData);
  });
}

collectFormData();


//function to post bikes  in db.json file
function postBikes(formData) {
  fetch("https://github.com/simonkhartoum/super-eagles-racers-simon/blob/main/db.json", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((bikes) => displayBikes(bikes));
}

function deleteRecord(id) {
  fetch(`https://github.com/simonkhartoum/super-eagles-racers-simon/blob/main/db.json/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
//editing the wins
const editButton = document.getElementById('vin');
editButton.addEventListener('click', () =>{
console.log('edit clicked for our button', bikes.id);
})
function  editwins(id){

    fetch(`db.json/${id}`,{

      Method: "PATCH",
      headers:{
            'content-Type':'appliaction/json'
      }
      .then(res => res.json)
      .then(product =>console.log(bikes))

  })
}
