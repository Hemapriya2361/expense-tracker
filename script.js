const form = document.getElementById("expenseForm");
const tableBody = document.querySelector("#expenseTable tbody");
const totalDisplay = document.getElementById("totalAmount");

let total = 0;

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const description = document.getElementById("description").value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${date}</td>
    <td>${category}</td>
    <td>₹${amount.toFixed(2)}</td>
    <td>${description}</td>
  `;

  tableBody.appendChild(row);

  total += amount;
  totalDisplay.textContent = total.toFixed(2);

  form.reset();
});
