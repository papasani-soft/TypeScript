class Point{
  //private  x:number;
 // private  y:number;
    constructor(private x?:number,private y?:number){
       // this.x=x;
       // this.y=y;
    }
   public draw(){
        console.log('X:'+this.x+'Y:'+this.y);
    }
}
let point =new Point(1,2);
point.draw();
