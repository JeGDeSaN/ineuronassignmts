let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }];


    let empIT = employees.filter(empp=>empp.department=="IT")
    console.log(empIT)


    let empSal=employees.filter(empp=>empp.Salary < 65000)
    console.log(empSal)
