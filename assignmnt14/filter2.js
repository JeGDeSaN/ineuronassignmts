let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location": "Pune",
    "noOfBeds":150,
     "availability":"No"
    },
    {
    "id": 3,
    "name":"Hospital C",
    "location": "Pune",
    "noOfBeds":350,
    "availability":"Yes"

    }]


    let bedd=hospitals.filter(hos=>hos.noOfBeds > 200);
    console.log(bedd)


    let aval=hospitals.filter(hos=>hos.availability=="Yes");
    console.log(aval)

    let loc=hospitals.filter(hos=>hos.location=="Pune");
    console.log(loc)