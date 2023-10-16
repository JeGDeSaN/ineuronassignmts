class rectangle{

    area()
    {
        console.log("area of the square-->>"+this.a)
    }
}

class square extends rectangle{
    constructor(side)
    {
        super(side)
        this.a=side*side;
 }
}

let object=new square(6);
object.area();

