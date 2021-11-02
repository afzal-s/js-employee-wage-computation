console.log("Welcome To Employee Wage Computation Program");

const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is absent");
} else {
    console.log("Employee is present");
}