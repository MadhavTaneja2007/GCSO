var car,wall
var speed,weight
var deformation


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500)

}

function draw() {
  background('white');
  car = createSprite(50,200,50,50)
  car.velocityX = speed;
  wall = createSprite(1500,200,60,200)
  wall.shapeColor = 80,80,80
  deformation = 0.5 * weight * speed * speed/22500
  
  if(car.x - movingRect.x < car.width/2 + movingRect.width/2
    && movingRect.x - car.x < car.width/2 + movingRect.width/2
    && car.y - movingRect.y < car.height/2 + movingRect.height/2
    && movingRect.y - car.y < car.height/2 + movingRect.height/2 )
    {
     deformation = true;   
    }

    if(deformation < 100)
    {
      car.shapeColor = 'green'
    }
  drawSprites();
}