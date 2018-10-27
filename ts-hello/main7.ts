class Point{
    x:number;
    y:number;
    constructor(x?:number,y?:number){
this.x=x;
this.y=y;
    }
    draw(){
        console.log('X:'+this.x+'Y:'+this.y);
        //while defining custom type object we need to allocate memory
    }
}
let point =new Point(1,2);
point.x=3;
point.draw();