var w; 
var chart = { }; 

function preload(){
  fontReg = loadFont('fonts/Roboto-Regular.ttf')
  fontLight = loadFont('fonts/Roboto-Light.ttf')
  fontBold = loadFont('fonts/Roboto-Bold.ttf')
}

function setup() {
  createCanvas(375, 667);

  //w = requestWeather('data/mit-tuesday.json');
  //w = requestWeather('data/mit-wednesday.json');
  //w = requestWeather('data/cambridge.json');
  //w = requestWeather('data/indianapolis.json');
  //w = requestWeather('data/alcatraz.json');
  w = requestWeather(42.378369, -71.1829495, '622f49954e0369b952c70fa43c64c52d');
  
  chart.left = 40;
  chart.right = width - chart.left;
  chart.top = 400;
  chart.bottom = 530;
  
}


function draw() {
  background(0)
  fill(0)
  fill('white');
  noStroke();
  textAlign(CENTER);
  textSize(14);
  
  if (w.ready) {
    drawWeather();
    noLoop();

  } else {
    drawLabel("Loading...");
  }
}


function drawLabel(what) {
  textFont(fontReg);
  text(what, width/2, height - 36);
}


function drawWeather() {
  
  textAlign(LEFT,TOP);

  noStroke()
  textSize(35)
  textFont(fontLight)
  fill(252,129,9)
  text("CAMBRIDGE",17,100);

  fill(255);
  textSize(12);
  textFont(fontLight)
  text("is within Middlesex County,",217,105);
  text("MA state, United states,", 218,120); 
  text("in the Boston metropolitan area. Situated at the north of the city,", 18,135)
  text("Cambridge is home to MIT and Harvard Univeristy, two of world's", 18, 150)
  text("most prestigious uninversities. So, what's your plan for the rest of", 18, 165)
  
  text("the day?", 18, 180)
  text("is", 138,180)
  
  // Real time hour+minute
  fill(181,91,250)
  textFont(fontBold)
  text("Current time", 66,180) 
  textFont(fontLight)
  textSize(50);
  if (w.getTime().hour()<10){
      text("0"+w.getTime().hourMinuteLong(),150,175);
  }else{
    text(w.getTime().hourMinuteLong(),150,175);
  }
  
  textSize(12);
  textFont(fontLight);
  fill(255);
  text("Cambirdge has a large", 18, 195) 
  text("and varied collection of", 18, 210)
  text("public art. Despite intensive urbanization, during the late 19th and",18,225)
  text("20th century, Cambridge has several historic building such as City",18,240)
  text("Hall and Cambridge Public Library. Besides, the city has an active",18,255)
  text("music scene, from classical performances to those latest bands.",18,270)
  text("But, please be aware of the weather before. The" ,18,285)

  text("is", 347,285)
  text("Besides," ,312,300) 
  
  text("the present", 250,315)
  text("is", 273,330)
  
  text("Since",250,345)
  text("Cambridge is mainly",250,360)
  text("a humid continental",250,375)
  text("climate with over 49 inches of rain per year. Therefore, it is really", 18,390)
  text("beneficial to always bring umbrellas with you just in case you run", 18,405)
  text("into some of rainy days. Also, it would be better for you to notice", 18,420)
  
  text("right at moment the", 18,435)
  text("is", 185,435)
  text("just in", 327,435)
  
  text("case you want to kayak or sail on", 18,450)
  text("the Charles",298,450)
  text("river. So ,enjoy rest of your day in", 18, 465)
  text("Cambridge!",298,465)
  
  stroke("white");
  strokeWeight(2)
  line(20,90,width-20,90);
  line(20,500,width-20,500);
  
  noStroke();
  // colorful texts
  fill(254,87,81)
  textFont(fontBold)
  text("temperature" ,274,285)
  text("Fahrenheit" ,250,300) 
  fill(255,75,194)
  text("humidity", 311,315)
  text("rate", 250,330)
  fill(234,198,0)
  text("windspeed", 124, 435)
  text("mph", 298,435)
  
  // Temperature
  textSize(110);
  fill(254,87,81)
  textFont(fontLight)
  if (w.getTemperature()>=0){
    text("+"+formatDegrees(w.getTemperature()), 15, 280);
  }else{
    text(formatDegrees(w.getTemperature()), 15, 280);
  }
  
  // Humidity
  fill(255,75,194)
  textSize(35)
  text(formatPercent(w.getHumidity()), 290, 325);
  
  // Windspeed
  fill(242,215,31)
  textSize(50)
  textAlign(CENTER)
  text(nf(w.getWindSpeed(), 0, 1), 240, 430);
  
  //Time month and date
  textFont(fontLight);
  noStroke()
  fill(255)
  textSize(70)

  textAlign(CENTER,CENTER)
  if (w.getTime().month()<10){
    text("0"+w.getTime().month(),130,640)
  }else{
    text(w.getTime().month(),130,640)
  }

  textAlign(CENTER,CENTER)
  if (w.getTime().day()<10){
    text("0"+w.getTime().day(),235,640)
  }else{
    text(w.getTime().day(),235,640)
  }
 
  // Weather summary
  textAlign(CENTER,TOP)
  textFont(fontLight);  
  textSize(30);
  text(w.getSummary(),width/2,575)
  
  stroke(255);
  strokeWeight(2);
  line(175,height,190,height-40)
  
}


