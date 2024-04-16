// CREATE AN ARRAY OF EMPLOYEES
let employees = [];

window.addEventListener('DOMContentLoaded', () => {
    // CHECK IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
    if(localStorage.getItem('employees')) {
        employees = JSON.parse(localStorage.getItem('employees'));
        buildGrid(); // REBUILD THE GRID WITH THE STORED DATA
    }

    // GET DOM ELEMENTS
    const form = document.getElementById('addForm');
    const empTable = document.getElementById('empTable');

    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
    buildGrid();

    // ADD EMPLOYEE
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const extension = document.getElementById('extension').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;
        
        const newEmployee = { id, name, extension, email, department };
        employees.push(newEmployee);
        
        buildGrid();
        form.reset();
        document.getElementById('id').focus();
    });

    // DELETE EMPLOYEE
    empTable.addEventListener('click', (e) => {
        if (confirm('Are you sure you want to delete this employee?')) {
            const rowIndex = e.target.parentNode.parentNode.rowIndex;
            employees.splice(rowIndex - 1, 1);
            buildGrid();
        }
    });
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    const tbody = document.querySelector('#empTable tbody');
    tbody.innerHTML = ''; // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    
    employees.forEach((employee, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
        `;
    });
    
    // UPDATE EMPLOYEE COUNT
    document.getElementById('empCount').textContent = employees.length;
    
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}