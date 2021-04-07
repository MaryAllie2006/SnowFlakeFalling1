class Person extends BaseClass{
    constructor(x,y){
        super(x,y,100,200)
        
        this.image = loadImage("person.jpg.jpg");

        
    }
    display(){
        
        super.display();
    }
}