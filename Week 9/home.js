var ctx;//this is a global variable and is available to all methods


window.onload=function(){  

    var myCanvas = document.getElementById("myCanvas");//get the canvas first
    ctx = myCanvas.getContext("2d");//returns all the methods for drawing on the canvas
   
    document.getElementById("path").addEventListener("click",function()
    {
        drawPath();
    });
    document.getElementById("rectangle").addEventListener("click",function()
    {
        drawRectangles();
    });
    document.getElementById("circle").addEventListener("click",function()
    {
        drawCircle();
    });
    document.getElementById("arc").addEventListener("click",function()
    {
        drawArc();
    });
}


function drawPath()
{
    /************ First set of lines ********************/
   ctx.strokeStyle = "red";
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.moveTo(20,20);//starting point
   ctx.lineTo(100,100);//define a line from the starting point
   ctx.lineTo(200,50);//define a line from the starting point
   ctx.lineTo(120,75);//define a line from the starting point
   ctx.closePath();
   ctx.stroke();//This actually draws the path
    ctx.fill();

    /**********Second second set of lines - open path */
   ctx.strokeStyle = "red";
   ctx.lineWidth = 5;
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.moveTo(120,20);//starting point
   ctx.lineTo(400,200);//define a line from the starting point
   ctx.lineTo(400,20);//define a line from the starting point
   ctx.lineTo(420,25);//define a line from the starting point  
   ctx.stroke();//This actually draws the path    
    
}

function drawRectangles()
{
    /****option #1 */
   ctx.strokeStyle = "orange";
   ctx.fillStyle = "blue";
   ctx.rect(10,10,100,200);
   ctx.stroke();
   ctx.fill();

   /****option #2 */
   ctx.strokeStyle = "orange";
   ctx.strokeRect(150,10,100,20);   

   /****option #3 */
   ctx.fillStyle = "lightblue";
   ctx.fillRect(270,10,150,120);   

   /****option #4 */
   ctx.clearRect(290,50,50,50);

}



function drawCircle()
{
    //ctx.arc(300,300,250,0.0*Math.PI,2*Math.PI,true);//1 radian = 2*PI
    ctx.lineWidth = 4;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "teal";
    ctx.beginPath();
    ctx.arc(300,300,200,0*Math.PI,2.0*Math.PI);//first 2 are the middle coordinates, then the radius then the angles
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(300,300,100,0*Math.PI,2.0*Math.PI);//first 2 are the middle coordinates, then the radius then the angles
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(300,300,50,0*Math.PI,2.0*Math.PI);//first 2 are the middle coordinates, then the radius then the angles
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawArc()
{
    ctx.beginPath(); 
    ctx.moveTo(20,20);           // Create a starting point    
    ctx.lineTo(100,20);          // Create a horizontal line
    ctx.arcTo(150,20,150,70,50); // Create an arc
    ctx.lineTo(150,120);         // Continue with vertical line
    ctx.stroke();                // Draw it
  
}


