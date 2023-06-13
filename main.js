
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
boll_y = 0;
boll_x = 0;
hole_y = 400;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	document.getElementById("hd3").innerHTML="you have hit the goal"
	document.getElementById("myCanvas").style.borderColor="red";
	fabric.Image.fromURL("golf-h1.png",function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({

		});
		canvas.add(hole_obj)
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("boll.png",function(Img){
		boll_obj = Img;
		boll_obj.scaleToWidth(50);
		boll_obj.scaleToHeight(50);
		boll_obj.set({
			top:boll_y,
			left:boll_x
		});
		canvas.add(boll_obj)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((boll_x ==hole_x)&&(boll_y==hole_y)){
		canvas.remove(boll_obj);
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(boll_y >=0)
		{
			boll_y = boll_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when up arrow key is pressed, X = "+ boll_x + " , y = "+ boll_y);
			canvas.remove(boll_obj);
			new_image
		}
		}

	function down()
	{
		 // Write a code to move ball downward.
		 if(boll_y <=450)
		 {
			 boll_y = boll_y + block_image_height;
			 console.log("block image height = " + block_image_height);
			 console.log("when Down arrow key is pressed, X = "+ boll_x + " , y = "+ boll_y);
			 canvas.remove(boll_obj);
			 new_image
		 }

	}

	function left()
	{
		if(boll_x >=5)
		{
			// Write a code to move ball left side.
			boll_x = boll_x - block_image_width;
			console.log("block image width = " - block_image_width);
			console.log("when left arrow key is pressed, X = "+ boll_x + " , Y = "+ boll_y);
			canvas.remove(boll_obj);
			new_image
		}
	}

	function right()
	{
		if(boll_x <=1050)
		{
			// Write a code to move ball right side.
			boll_x = boll_x - block_image_width;
			console.log("block image width = " - block_image_width);
			console.log("when right arrow key is pressed, X = "+ boll_x + " , Y = "+ boll_y);
			canvas.remove(boll_obj);
			new_image
		}
	}
	
}

