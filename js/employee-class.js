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
document.getElementById("date").setAttribute("max", today);


const saveForm = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let empId = document.getElementById("emp-id").value;
    let date = document.getElementById("date").value;
    let hours = document.getElementById("hours").value;
    let designation = document.getElementById("designation").value;

    // get data from each form element
    class Employee {
        #name;
        #empId;
        #date;
        #hours;
        #designation;

        constructor(name, empId, date, hours, designation) {
            this.#name = name;
            this.#empId = empId;
            this.#date = date;
            this.#hours = hours;
            this.#designation = designation;
        }

        set name(name)  {
            this.#name = name;
        }

        get name() {
            return this.#name;
        }

        set empId(empId)  {
            this.#empId = empId;
        }

        get empId() {
            return this.#empId;
        }

        set date(date)  {
            this.#date = date;
        }

        get date() {
            return this.#date;
        }

        set hours(hours)  {
            this.#hours = hours;
        }

        get hours() {
            return this.#hours;
        }

        set designation(designation)  {
            this.#designation = designation;
        }

        get designation() {
            return this.#designation;
        }

        
    }
    const employee1 = new Employee(name, empId, date, hours, designation);
    console.log("emp1", employee1.designation)
    if (name === "" || empId === "" ||
     date === "" || hours === "" || 
     designation === "" || designation === "select-one") {
         alert ('All fields are required. Please complete each field.');
         return;
    }
  

    let salary = 0;
   
    if (designation === "manager") {
        salary = hours * 90;
    } else if (designation === "consultant") {
        salary = hours * 70;
    } else {
        salary = hours * 45;
    }
    console.log(salary);
   
    // append to array 
    employees.push(employee1);
    console.log(employees);

    // clear form for future entries
    document.querySelector('form').reset();

    // capitalize the first letter only of the employee designation
    const capDesignation = designation.charAt(0).toUpperCase() + designation.slice(1);

    document.open();
    document.write(name + " who is a '" + capDesignation + "' will get $" + salary);
    document.close();

    // use this to print to the same page
    // document.getElementById("employee-output").innerHTML = 
    // employee.name + " who is a '" + capDesignation + "' will get $" + employee.salary;
};

document.getElementById('submit-details').addEventListener('click', saveForm);

