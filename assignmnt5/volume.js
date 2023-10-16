class Cylinder{
    constructor(radius, height){
        this.radius=radius;
        this.height=height;

        this.volume=((22*this.radius*this.radius*this.height)/7);



    }

    getVolume()
    {
        console.log(this.volume);
    }
}

class Sphere extends Cylinder{

constructor(radius){

    super(radius)
    
        this.volume=((88*this.radius*this.radius*this.radius)/21);
        
       
    }
}



class Cone extends Cylinder
{
    constructor(radius,height)
    
    {

        super(radius,height);
        
        this.volume=((22*this.radius*this.radius*this.height)/21);

    }
}

 
let obj=new Cylinder(5,10);
console.log("Volume of Cylinder ")
obj.getVolume();


let obj2=new Sphere(7);
console.log("Volume of sphere")
obj2.getVolume();


let obj3=new Cone(4,6);
console.log("Volume of cone")
obj3.getVolume();