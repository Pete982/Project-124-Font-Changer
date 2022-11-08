

function setup(){
    
    video = createCapture(VIDEO);
    
    canvas = createCanvas(400, 400);
  
    video.size(390, 390);

    video.position(10, 50);

     canvas.position(430, 133);

    length_results.on(pose, gotposes, on);

    posenet = ml5.posenet(video, modelDone);

    posenet.on("poses", gotPoses);


}


  function modelDone(){

   console.log("posenet is ready and available!")

}

function draw(){

    background("#ee1128");
}

function gotPoses( results, error ){

     if(error){
         
        console.error(error);
 
     }

     if(results.length > 0){

    console.log(results);

        console.log("The rightWrist_x is "+ results[0].pose.rightWrist.x + "The RightWrist_y is"+ results[0].pose.rightWrist.y );
        
        console.log("The leftWrist_x is"+ results[0].pose.leftWrist.x+ "The LeftWrist_y is " + results[0].pose.leftWrist.y );

     }
}

