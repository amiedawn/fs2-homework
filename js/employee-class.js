let employees = [];

// disable future date
var today = new Date();
var mm = today.getMonth() + 1;
var dd = today.getDate();
var yyyy = today.getFullYear();
if (dd<10) {
    dd = '0' + dd;
}
if (mm<10) {
    mm = '0' + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("datepicker").setAttribute("max", today);


const saveForm = (e) => {
    e.preventDefault();

    // get data from each form element
    let employee = {
        name: document.getElementById("name").value,
        empId: document.getElementById("emp-id").value,
        date: document.getElementById("date").value,
        hours: document.getElementById("hours").value,
        designation: document.getElementById("designation").value
    }

    if (employee.name === "" || employee.empId === "" ||
     employee.date === "" || employee.hours === "" || 
     employee.designation === "" || employee.designation === "select-one") {
         alert ('All fields are required. Please complete each field.');
         return;
    }
  

    let salary = 0;
   
    if (employee.designation === "manager") {
        salary = employee.hours * 90;
    } else if (employee.designation === "consultant") {
        salary = employee.hours * 70;
    } else {
        salary = employee.hours * 45;
    }
    console.log(salary);
    employee.salary = salary;
    // append to array 
    employees.push(employee);
    console.log(employees);

    // clear form for future entries
    document.querySelector('form').reset();

    // capitalize the first letter only of the employee designation
    const capDesignation = employee.designation.charAt(0).toUpperCase() + employee.designation.slice(1);

    document.open();
    document.write(employee.name + " who is a '" + capDesignation + "' will get $" + employee.salary);
    document.close();

    // use this to print to the same page
    // document.getElementById("employee-output").innerHTML = 
    // employee.name + " who is a '" + capDesignation + "' will get $" + employee.salary;
};

document.getElementById('submit-details').addEventListener('click', saveForm);

