var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["college"] = document.getElementById("college").value;
  formData["email"] = document.getElementById("email").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["ql"] = document.getElementById("ql").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.college;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.phone;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.ql;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<button onClick="onEdit(this)" class="edt">Edit</button> 
                    <button onClick="onDelete(this)" class="delt">Delete</button>`
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("college").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
  document.getElementById("ql").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.college;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.phone;
  selectedRow.cells[4].innerHTML = formData.ql;

}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("college").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("ql").value = "";

  selectedRow = null;
}