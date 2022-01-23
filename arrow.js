class Arrow{
constructor(x, y ,w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.arrowImage = loadImage("arrow.png")
}

display(){
    arrow = createSprite(this.x, this.y, this.w, this.h)
    arrow.addImage(this.arrowImage)
    arrow.scale = 0.1;
}

     release(){
    if(keyDown("space")){
        //arrow.y = bow.y;
        this.display();
        arrow.velocityX = 5;
      }
}

}