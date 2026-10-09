
const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");

const employees = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value;
    const salary = document.getElementById("salary").value;

    // Check duplicate employee ID
    if (employees.some(emp => emp.id === id)) {
        alert("Employee ID already exists!");
        return;
    }

    const employee = {
        id: id,
        name: name,
        role: role,
        salary: salary
    };

    employees.push(employee);

    const row = document.createElement("tr");

    [id, name, role, salary].forEach(function(value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    table.appendChild(row);

    form.reset();
});