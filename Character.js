class Character extends BaseClass{
    constructor(x,y){
        super(x,y,20,20)
        
        this.image = loadImage("snow4.webp");

    }
    display(){
        if(this.body.speed < 12){
            super.display(); 
            
            }
            else{
                World.remove(world,this.body);
                
                
            }

        //if(isTouching(Ground.class)){
            
               // World.remove(world,this.body);}
        
    }
}