class Particle 
{
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
        this.x=x;
        this.y=y;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        Matter.World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

    update()
    {
        var pos = this.body.position;
        

        if(this.body!=null)
        {
           // this.display();
            if(this.body.position.y>700 )
            {
                
                
                if(this.body.position.x >0 && this.body.position.x<300)
                {
                    
                    
                    if(flag1===true )
                    {
                        score=score+500;
                        flag1=false;
                    }
                    
                 
                }
        
                if(this.body.position.x >=300 && this.body.position.x<560 )
                {
                  
                    if(flag2===true)
                    {
                        score=score+100;
                        flag2=false;
                    }
                    
                 
                }

                if(this.body.position.x >=560 && this.body.position.x<800 )
                {
                  
                    if(flag3===true)
                    {
                        score=score+200;
                        flag3=false;
                    }
                    
                 
                }


               
                 

            }
        }

    }

};