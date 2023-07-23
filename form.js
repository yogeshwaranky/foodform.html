function submitForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const gender = document.getElementById('gender').value;
  const food = document.getElementById('food').value;
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  const infoTable = document.getElementById('infoTable');
  const newRow = infoTable.insertRow(-1);
  const cells = [firstName + ' ' + lastName, address, food, state, country];

  for (let i = 0; i < cells.length; i++) {
    const cell = newRow.insertCell(i);
    cell.innerHTML = cells[i];
  }
}
