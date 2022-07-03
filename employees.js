////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE




class Employee{
    constructor(ename , shifts)
    {
        this.ename = ename;
        this.shifts = shifts;
    }
    getSchedule()
    {
        console.log(this.ename+" works in "+ this.shifts + " shift.")
    }
}

let employeeList = [
        new Employee("James","Monday Morning"), new Employee("Steve","Tusday Evening"), new Employee("Alicia","Wednesday Morning"), new Employee("Jack","Thursday and Friday Morning")
    ]



let employeeshift = employeeList.forEach(e => e.getSchedule())
//console.log(employeeshift)
console.log("----------------------")

/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

let empOne = new Employee("Jess","weekday mornings, weekday afternoons")

//CODE HERE

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE
empOne.getSchedule()

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE

const empTwo = {...empOne}
empTwo.ename = "Nick"
console.log(empTwo)
console.log("----------------------")
//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE
class Manager extends Employee{
    constructor(ename,shifts,employeesManaged)
    {
        super(ename,shifts)
        this.employeesManaged = employeesManaged
    }
    getEmployees()
    {
       
        //console.log(this.ename + " manages empoyees " + this.employeesManaged.forEach(e => e.getSchedule()))
        //console.log(this.ename + " manages empoyees ")
        //console.log(this.employeesManaged)
        for (let temp of this.employeesManaged) { 
            console.log(temp.ename);
          } 
        //   this.employeesManaged.forEach(empl => {
        //     for (let empName in empl) {
        //         console.log(empl[empName]);
        //     }
        // });
        // console.log(this.employeesManaged.length)
        // for(let i=0;i<this.employeesManaged.length;i++)
        // {
        //     console.log(i);
        //     console.log(this.employeesManaged[i].ename)
        // }



    }
    addEmployee(newemp)
    {
        this.employeesManaged.push(newemp)
    }
}

// let emp1=new Employee("James","Monday Morning")
// let emp2=new Employee("Steve","Tusday Evening")
// let emp3=new Employee("Alicia","Wednesday Morning")
// let emp4=new Employee("Jack","Thursday and Friday Morning")

//let firstManager = new Manager("firstManager","Weekday Morning",[emp1,emp2,emp3,emp4])

let firstManager = new Manager("firstManager","Weekday Morning",employeeList)

firstManager.getEmployees()
let newemp=new Employee("Sean","Monday Morning")
//Adding new employee to the manager
firstManager.addEmployee(newemp)
console.log("After adding new employee to the manager....")
firstManager.getEmployees()
console.log("----------------------")

/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE
let empCece=new Employee("Cece","Monday Morning")
let empSchmidt=new Employee("Schmidt","Tusday Evening")
let manager1=new Manager("Winston","Weekday Mornings and Weekday Afternoons",[empCece,empSchmidt])
//console.log(manager1.employeesManaged)
/*
    Call the `getEmployees` method on the
    `manager` object.  
*/


//CODE HERE
console.log(manager1.employeesManaged)
console.log("----------------------")

/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 
manager1.addEmployee(new Employee("Coach","Thursday Morning"))

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE
manager1.getEmployees()