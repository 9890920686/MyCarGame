  var bgimg

  var car , carimg

  var bg



  function setup() {
    createCanvas(displayWidth,displayHeight-110);

    bgimg=loadImage("track.jpg")

    carimg=loadImage("car1.png")

    bg=createSprite(0,-displayHeight*4,displayWidth,displayHeight*5)
    bg.addImage(bgimg)

    car = createSprite(90, 310, 50, 50);
    car.addImage(carimg)
    car.scale=0.5

    console.log(car.velocityY)

  

    console.log(car.y)


    
  }

  function draw() {
    background(0);  

    camera.position.x = displayWidth/2;
    camera.position.y = car.y

    drawSprites();
  }

  function keyPressed(){
    if(keyCode == 32){
      car.velocityY=-5
    }
  }