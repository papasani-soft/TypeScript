class Point{
  private  x:number;
  private  y:number;
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }
   public draw(){
        console.log('X:'+this.x+'Y:'+this.y);
        //while defining custom type object we need to allocate memory
    }
}
let point =new Point(1,2);
point.draw();

//access modifiers are public private and protected
//if we have not specify access modifier that is public