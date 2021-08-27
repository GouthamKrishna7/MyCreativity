// class Ghost{
//     constructor(x, y,) {
//         var options = {
//             'restitution':0.8,
//             'friction':1.0,
//             'density':1.0
//         }
//         this.visibility = 255;
//         this.body = Bodies.rectangle(x, y, 100 , 100 ,options);
//         this.width = 100;
//         this.height = 100;
//         this.image = loadImage("ghost.jfif");
//         World.add(world, this.body);
//       }
//       display(){
//       //  if(this.body.speed < 2){
//           console.log(this.body.speed);
//             var pos = this.body.position
//             var angle = this.body.angle;
//             push();
//             translate(pos.x,pos.y);
//             rotate(angle);
//             imageMode(CENTER);
//             image(this.image, 0, 0, this.width, this.height);
//             pop();

//       //  }
//         // else{
//         //     World.remove(world,this.body);
//         //     // push()
//         //     // tint(255,this.visibility)
//         //     // this.visibility = this.visibility-5;
//         //     // pop()
//         // }

//       }
// }