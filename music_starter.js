let firstRun = true
let backImg = true
let treeImg = true
let treeMirroredImg = true
let riverImg = true
let starImg = true
let carImg = true
let starShaddowImg = true
let angle = 0
let width = 2900
let height = 1480


//falling stars
//Star 1
let x1_initial = 100
let y1_initial = 100
let x1_fallingStar = x1_initial
let y1_fallingStar = y1_initial
let blnFall1 = false
let timeCounter1 = 0
//Star 2
let x2_initial = 200
let y2_initial = 200
let x2_fallingStar = x2_initial
let y2_fallingStar = y2_initial
let blnFall2 = false
let timeCounter2 = 0

angleMode(DEGREES)


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other) {
  colorMode(HSB, 360, 100, 100, 100)
  noStroke()


  //image load
  if (firstRun) {
    rectMode(CENTER)
    backImg = loadImage('back.png')
    treeImg = loadImage('trees.png')
    treeMirroredImg = loadImage('treeMirror.png')
    starImg = loadImage('star.png')
    riverImg = loadImage('moonRiver.png')
    carImg = loadImage('car.png')
    starShaddowImg = loadImage('starsRiver.png')
    firstRun = false

  }


  //maps
  let vocalMap = map(vocal, 20, 80, 50, 100)
  let bassMap = map(bass, 14, 100, 10, 100, 10)
  let drumMap = map(drum, 0, 100, 0, 100)



  //background image (night horizon)
  noTint()
  background(100, 100, 100)
  //background image
  image(backImg, 0, 0)
  //stars reflection
  image(starShaddowImg, 1, 900, 2980, 1480)
  //moon light image
  tint(52, 22, 94, bassMap)
  image(riverImg, 1000, 900)




  // stars loop
  let counter = 0
  for (let x = 1; x < width; x += 300) {

    fill(62, 20, 87, 100 - vocalMap)
    brightStar(x + 50, 50, 0.9, 0.9)
    brightStar(x + 200, 100, 1, 1)
    brightStar(x + 150, 150, 1.2, 1.2)
    brightStar(x, 200, 1, 1)
    brightStar(x + 100, 300, 1.2, 1.2)
    brightStar(x + 100, 200, 1, 1)
    brightStar(x + 400, 500, 1, 1)
    brightStar(x + 200, 450, 1.5, 1.5)
    brightStar(x, 400, 1, 1)
    brightStar(x + 300, 340, 1, 1)
    brightStar(x + 315, 330, 1, 1)
    brightStar(x + 440, 330, 1, 1)

    // image(starImg, x+150,50, 20, 20)
    if (counter % 2 == 0) {
      fill(62, 20, 87, vocalMap)
      brightStar(x * 2, 50, 1, 1)
      brightStar(x + 150, 230, 1, 1)
      brightStar(x + 30, 370, 1, 1)
      brightStar(x + 200, 350, 1, 1)
      brightStar(x + 200, 300, 1.5, 1.5)
      brightStar(x + 100, 400, 1, 1)
      brightStar(x + 100, 350, 1, 1)
      brightStar(x + 50, 150, 0.6, 0.6)
      brightStar(x + 100, 100, 1, 1)
      brightStar(x + 100, 200, 1, 1)
      brightStar(x + 500, 250, 1, 1)
      brightStar(x, 300, 1, 1)
      brightStar(x, 150, 1, 1)
      brightStar(x + 360, 150, 1, 1)
      brightStar(x + 360, 150, 1, 1)
      brightStar(x + 260, 180, 1, 1)
      brightStar(x + 300, 80, 1, 1)
      brightStar(x + 300, 250, 1, 1)
      brightStar(x + 180, 330, 1, 1)
      brightStar(x + 180, 20, 1, 1)
      brightStar(x, 500, 1, 1)
      brightStar(x + 100, 500, 1, 1)
      brightStar(x + 250, 370, 1, 1)
      brightStar(x + 250, 550, 1, 1)
      brightStar(x + 280, 500, 0.8, 1)
      brightStar(x + 390, 400, 1.3, 1.3)
      brightStar(x + 440, 440, 1, 1)
      brightStar(x + 490, 370, 1, 1)
      brightStar(x + 430, 600, 1, 1)
      brightStar(x + 400, 550, 1, 1)
      brightStar(x + 490, 20, 1, 1)
    }
    counter++

  }

  //place fullmoon before "position" si its behind the mountains 
  fullMoon(1500, 550, 1.5)
  moonTexture(1500, 520, 1)


  //falling star1
  if (bassMap > 60) {
    blnFall1 = true
  }

  if (blnFall1 && timeCounter1 > 60) {
    fill(62, 20, 87, 70)
    fallingStar(x1_fallingStar, y1_fallingStar, 2)
    x1_fallingStar = x1_fallingStar + 200
    y1_fallingStar = y1_fallingStar + 50

    if (x1_fallingStar > x1_initial + 2000 && y1_fallingStar > y1_initial + 500) {
      x1_fallingStar = x1_initial
      y1_fallingStar = y1_initial
      timeCounter1 = 0
      blnFall1 = false
    }
  }
  timeCounter1++

  //falling star2 
  if (drumMap > 60) {
    blnFall2 = true
  }

  if (blnFall2 && timeCounter2 > 70) {
    fill(62, 20, 87, 70)
    fallingStar(x2_fallingStar, y2_fallingStar, 2)
    x2_fallingStar = x2_fallingStar + 150
    y2_fallingStar = y2_fallingStar + 38

    if (x2_fallingStar > x2_initial + 2000 && y2_fallingStar > y2_initial + 500) {
      x2_fallingStar = x2_initial
      y2_fallingStar = y2_initial
      timeCounter2 = 0
      blnFall2 = false
    }
  }
  timeCounter2++


  //mountains in postion (x,y,size,angle)
  position(0, 0, 1, 1)

  // trees image
  push()
  scale(0.5)
  noTint()
  image(treeImg, 0, 100)
  //Reflection- trees image
  noTint()
  image(treeMirroredImg, 0, 530)
  pop()

  //car function 
  car(-200, 390, 4.3)

  //text
  noStroke()
  fill(0)
  textFont('Courier')
  rectMode(CENTER)
  textSize(7)


  // display "words"
  textAlign(CENTER);
  textSize(vocal);
  text(words, 1500, 1370);
}


//positioning different types of triangles in order to illustrate mountains and shadows 
function position(x, y, size, angle, vocalMap) {
  noStroke()
  //first WHITE (back) mountain from right
  fill(240, 40, 80)
  equilateralTriangle(x + 1500, y + 200, size * 9)
  fill(240, 35, 80)
  obtuseTriangle(x + 1460, y + 190, size * 10)

  // first two mountains from right (third row)
  fill(240, 45, 80, 100)
  equilateralTriangle(x + 2000, y + 170, size * 9)
  equilateralTriangle(x + 2210, y + 170, size * 9)
  fill(240, 35, 80)
  obtuseTriangle(x + 1960, y + 160, size * 10)
  obtuseTriangle(x + 2170, y + 160, size * 10)

  //first mountain from right in the second row
  fill(240, 60, 75)
  obtuseTriangle(x + 1000, y - 150, size * 24, angle + 130)
  fill(240, 55, 80)
  obtuseTriangleMirrored(x + 1865, y + 95, size * 12, angle + 72)
  shao(x + 2085, y + 520, size * 5, angle + 90)

  //two first mountains from left in the second row
  fill(240, 30, 80)
  equilateralTriangle(x + 1, y + 350, size * 8)
  equilateralTriangle(x + 300, y + 340, size * 7)
  
  //3rd and 4th mountain in the second row from left
  fill(240, 40, 80)
  equilateralTriangle(x + 550, y + 170, size * 9)
  equilateralTriangle(x + 760, y + 170, size * 9)
  //light side
  fill(240, 35, 80)
  obtuseTriangle(x + 510, y + 160, size * 10)
  obtuseTriangle(x + 720, y + 160, size * 10)

  //front mountains
  fill(240, 40, 80)
  equilateralTriangle(x - 300, y + 250, size * 9)
  fill(240, 35, 80)
  obtuseTriangle(x - 340, y + 240, size * 10)
  fill(240, 60, 70)
  equilateralTriangle(x + 50, y + 200, size * 10)
  fill(240, 60, 90)
  obtuseTriangle(x + 50, y + 200, size * 10)
  obtuseTriangle(x + 200, y + 500, size * 6)
  fill(240, 60, 60)
  equilateralTriangle(x + 600, y + 400, size * 7)
  fill(240, 60, 70)
  shao(x + 665, y + 470, size * 5, angle + 90)
  obtuseTriangle(x + 600, y + 400, size * 7)
  fill(240, 60, 75)
  equilateralTriangle(x + 900, y + 200, size * 10)
  fill(240, 60, 90)
  obtuseTriangle(x + 900, y + 200, size * 10)
  isoscelesTriangle(x + 1035, y + 120, size * 7)
  fill(240, 60, 75)
  isoscelesTriangle(x + 1100, y + 400, size * 4)
  isoscelesTriangle(x + 1140, y + 400, size * 4)
  isoscelesTriangle(x + 1190, y + 430, size * 4)
  isoscelesTriangle(x + 1220, y + 460, size * 4, angle + 10)
  fill(240, 60, 80)
  equilateralTriangle(x + 1350, y + 300, size * 9)
  fill(240, 60, 90)
  obtuseTriangle(x + 1350, y + 300, size * 9)
  obtuseTriangle(x + 1500, y + 600, size * 5)
  fill(240, 60, 70)
  equilateralTriangle(x + 2050, y + 200, size * 10)
  fill(240, 60, 90)
  obtuseTriangle(x + 2050, y + 200, size * 10)
  obtuseTriangle(x + 2200, y + 500, size * 6)
  
  //top snow
  fill(255, 40)
  snowTop(x + 64, y + 422, size * 5.5)
  snowTop(x + 443, y + 390, size * 7.5)
  snowTop(x + 1292, y + 390, size * 7.5)
  snowTop(x + 1847, y + 370, size * 7.5)
}

function equilateralTriangle(x, y, size) {
  noStroke()
  triangle(x + (10 * size), y + (75 * size), x + (45 * size), y + (20 * size), x + (86 * size), y + (75 * size))
}

function obtuseTriangle(x, y, size, angle) {
  //rotation
  push()
  translate(x + (66 * size), y + (48 * size));
  rotate(angle)
  translate(-x - (66 * size), -y - (48 * size))

  triangle(x + (60 * size), y + (75 * size), x + (45 * size), y + (20 * size), x + (86 * size), y + (75 * size))
  pop()
}

function obtuseTriangleMirrored(x, y, size, angle) {
  push()
  translate(x + (60 * size), y + (48 * size));
  rotate(angle);
  translate(-x - (60 * size), -y - (48 * size))

  triangle(x + (34 * size), y + (75 * size), x + (85 * size), y + (20 * size), x + (60 * size), y + (75 * size))
  pop()
}


function isoscelesTriangle(x, y, size, angle) {
  //rotation
  push()
  translate(x + (60 * size), y + (58 * size));
  rotate(angle);
  translate(-x - (60 * size), -y - (58 * size))

  triangle(x + (30 * size), y + (75 * size), x + (45 * size), y + (40 * size), x + (60 * size), y + (75 * size))

  pop()
}

function shao(x, y, size, angle) {
  //rotation
  push()
  translate(x + (50 * size), y + (50 * size));
  rotate(angle);
  translate(-x - (50 * size), -y - (50 * size))

  quad(x + (50 * size), y + (62 * size), x + (86 * size), y + (50 * size), x + (50 * size), y + (38 * size), x + (14 * size), y + (50 * size))

  pop()
}

//base moon drawing 
function fullMoon(x, y, size) {
  //moon glow first layer
  fill(62, 20, 87, 20)
  ellipse(x + (50 * size), y + (56 * size), (210 * size), (210 * size))
  //moon glow second layer
  fill(62, 20, 87, 10)
  ellipse(x + (50 * size), y + (56 * size), (220 * size), (220 * size))
  //moon
  fill(62, 20, 87)
  ellipse(x + (50 * size), y + (56 * size), (200 * size), (200 * size))
}

//texture - circles on top of the moon
function moonTexture(x, y, size, angle) {
  fill(62, 20, 83)
  ellipse(x + (50 * size), y + (50 * size), (50 * size), (50 * size))
  fill(62, 20, 80)
  ellipse(x + (50 * size), y + (50 * size), (44 * size), (44 * size))
  fill(62, 20, 83)
  ellipse(x + (100 * size), y + (80 * size), (30 * size), (30 * size))
  fill(62, 20, 80)
  ellipse(x + (100 * size), y + (80 * size), (20 * size), (20 * size))
  fill(62, 20, 83)
  ellipse(x + (1 * size), y + (80 * size), (30 * size), (30 * size))
  fill(62, 20, 80)
  ellipse(x + (1 * size), y + (80 * size), (20 * size), (20 * size))
  fill(62, 20, 83)
  ellipse(x + (100 * size), y + (150 * size), (30 * size), (30 * size))
  fill(62, 20, 80)
  ellipse(x + (100 * size), y + (150 * size), (24 * size), (24 * size))
  fill(62, 20, 83)
  ellipse(x + (150 * size), y + (130 * size), (35 * size), (35 * size))
  fill(62, 20, 80)
  ellipse(x + (150 * size), y + (130 * size), (28 * size), (28 * size))
  fill(62, 20, 83)
  ellipse(x + (130 * size), y + (13 * size), (35 * size), (35 * size))
  fill(62, 20, 80)
  ellipse(x + (130 * size), y + (13 * size), (28 * size), (28 * size))
  fill(62, 20, 83)
  ellipse(x + (14 * size), y + (13 * size), (35 * size), (35 * size))
  fill(62, 20, 80)
  ellipse(x + (14 * size), y + (13 * size), (28 * size), (28 * size))
  fill(62, 20, 83)
  ellipse(x + (50 * size), y + (1 * size), (20 * size), (20 * size))
  fill(62, 20, 80)
  ellipse(x + (50 * size), y + (1 * size), (17 * size), (17 * size))
}

//small illustrations of snow on top of the mountains
function snowTop(x, y, size) {
  beginShape();
  vertex((8 * size) + x, (1 * size) + y);
  bezierVertex((10 * size) + x, (4 * size) + y, (12 * size) + x, (7 * size) + y, (14 * size) + x, (10 * size) + y);
  bezierVertex((13 * size) + x, (10 * size) + y, (12 * size) + x, (9 * size) + y, (11 * size) + x, (8 * size) + y);
  bezierVertex((10 * size) + x, (9 * size) + y, (9 * size) + x, (9 * size) + y, (8 * size) + x, (10 * size) + y);
  bezierVertex((8 * size) + x, (9 * size) + y, (7 * size) + x, (8 * size) + y, (7 * size) + x, (7 * size) + y);
  bezierVertex((5 * size) + x, (8 * size) + y, (3 * size) + x, (9 * size) + y, (2 * size) + x, (10 * size) + y);
  bezierVertex((4 * size) + x, (7 * size) + y, (6 * size) + x, (4 * size) + y, (8 * size) + x, (1 * size) + y);
  endShape();
}

//stars in the sky
function brightStar(x, y, size) {
  // fill(62, 20, 87)
  beginShape();
  vertex((12 * size) + x, (4 * size) + y);
  bezierVertex((12 * size) + x, (4 * size) + y, (12 * size) + x, (6 * size) + y, (14 * size) + x, (8 * size) + y);
  bezierVertex((15 * size) + x, (10 * size) + y, (16 * size) + x, (10 * size) + y, (17 * size) + x, (11 * size) + y);
  bezierVertex((17 * size) + x, (11 * size) + y, (15 * size) + x, (11 * size) + y, (14 * size) + x, (12 * size) + y);
  bezierVertex((12 * size) + x, (14 * size) + y, (12 * size) + x, (16 * size) + y, (12 * size) + x, (17 * size) + y);
  bezierVertex((12 * size) + x, (16 * size) + y, (11 * size) + x, (14 * size) + y, (10 * size) + x, (13 * size) + y);
  bezierVertex((9 * size) + x, (11 * size) + y, (6 * size) + x, (10 * size) + y, (6 * size) + x, (10 * size) + y);
  bezierVertex((6 * size) + x, (10 * size) + y, (8 * size) + x, (10 * size) + y, (9 * size) + x, (8 * size) + y);
  bezierVertex((11 * size) + x, (6 * size) + y, (12 * size) + x, (4 * size) + y, (12 * size) + x, (4 * size) + y);
  endShape();
}

//parked car, view from inside
function car(x, y, size) {
  //car base
  fill(0)
  beginShape();
  vertex((28 * size) + x, (29 * size) + y);
  bezierVertex((43 * size) + x, (58 * size) + y, (66 * size) + x, (94 * size) + y, (99 * size) + x, (129 * size) + y);
  bezierVertex((116 * size) + x, (148 * size) + y, (134 * size) + x, (164 * size) + y, (150 * size) + x, (177 * size) + y);
  bezierVertex((212 * size) + x, (174 * size) + y, (277 * size) + x, (173 * size) + y, (342 * size) + x, (173 * size) + y);
  bezierVertex((431 * size) + x, (172 * size) + y, (518 * size) + x, (174 * size) + y, (601 * size) + x, (177 * size) + y);
  bezierVertex((619 * size) + x, (163 * size) + y, (640 * size) + x, (145 * size) + y, (660 * size) + x, (122 * size) + y);
  bezierVertex((690 * size) + x, (88 * size) + y, (710 * size) + x, (55 * size) + y, (724 * size) + x, (29 * size) + y);
  bezierVertex((724 * size) + x, (62 * size) + y, (724 * size) + x, (96 * size) + y, (724 * size) + x, (129 * size) + y);
  bezierVertex((702 * size) + x, (144 * size) + y, (681 * size) + x, (159 * size) + y, (659 * size) + x, (174 * size) + y);
  bezierVertex((658 * size) + x, (179 * size) + y, (656 * size) + x, (183 * size) + y, (654 * size) + x, (187 * size) + y);
  bezierVertex((677 * size) + x, (193 * size) + y, (700 * size) + x, (199 * size) + y, (724 * size) + x, (205 * size) + y);
  bezierVertex((724 * size) + x, (246 * size) + y, (724 * size) + x, (288 * size) + y, (724 * size) + x, (329 * size) + y);
  bezierVertex((792 * size) + x, (329 * size) + y, (260 * size) + x, (329 * size) + y, (28 * size) + x, (329 * size) + y);
  bezierVertex((28 * size) + x, (289 * size) + y, (28 * size) + x, (248 * size) + y, (28 * size) + x, (208 * size) + y);
  bezierVertex((51 * size) + x, (202 * size) + y, (74 * size) + x, (195 * size) + y, (97 * size) + x, (188 * size) + y);
  bezierVertex((97 * size) + x, (185 * size) + y, (96 * size) + x, (181 * size) + y, (96 * size) + x, (178 * size) + y);
  bezierVertex((73 * size) + x, (161 * size) + y, (50 * size) + x, (144 * size) + y, (28 * size) + x, (127 * size) + y);
  bezierVertex((28 * size) + x, (95 * size) + y, (28 * size) + x, (62 * size) + y, (28 * size) + x, (29 * size) + y);
  endShape();

  //car display
  fill(91, 100, 80, 60)
  rect(1500, 1350, 300, 200, 30)

  //steering wheel light
  noFill()
  stroke(232, 62, 59, 30)
  strokeWeight(60)
  ellipse(2090, 1341, 500, 500)

  //steering wheel
  noFill()
  stroke(0)
  strokeWeight(60)
  ellipse(2100, 1340, 500, 500)
  stroke(0)
  strokeWeight(90)
  line(x + (590 * size), y + (220 * size), x + (480 * size), y + (220 * size))
  fill(232, 62, 59, 30)
  ellipse(2090, 1341, 300, 300)
  fill(0)
  ellipse(2190, 1390, 300, 300)

  //night light shaddows
  stroke(232, 62, 59, 30)
  strokeWeight(20)
  line(x + (150 * size), y + (180 * size), x + (400 * size), y + (180 * size))
  strokeWeight(20)
  line(x + (4 * size), y + (18 * size), x + (120 * size), y + (160 * size))
  strokeWeight(5)
  line(x + (5 * size), y + (260 * size), x + (120 * size), y + (210 * size))
  line(x + (5 * size), y + (270 * size), x + (120 * size), y + (220 * size))
}


//falling star with its train (different from star in the sky)
function fallingStar(x, y, size) {
  fill(62, 20, 87)
  beginShape();
  vertex((12 * size) + x, (4 * size) + y);
  bezierVertex((12 * size) + x, (4 * size) + y, (12 * size) + x, (6 * size) + y, (14 * size) + x, (8 * size) + y);
  bezierVertex((15 * size) + x, (10 * size) + y, (16 * size) + x, (10 * size) + y, (17 * size) + x, (11 * size) + y);
  bezierVertex((17 * size) + x, (11 * size) + y, (15 * size) + x, (11 * size) + y, (14 * size) + x, (12 * size) + y);
  bezierVertex((12 * size) + x, (14 * size) + y, (12 * size) + x, (16 * size) + y, (12 * size) + x, (17 * size) + y);
  bezierVertex((12 * size) + x, (16 * size) + y, (11 * size) + x, (14 * size) + y, (10 * size) + x, (13 * size) + y);
  bezierVertex((9 * size) + x, (11 * size) + y, (6 * size) + x, (10 * size) + y, (6 * size) + x, (10 * size) + y);
  bezierVertex((6 * size) + x, (10 * size) + y, (8 * size) + x, (10 * size) + y, (9 * size) + x, (8 * size) + y);
  bezierVertex((11 * size) + x, (6 * size) + y, (12 * size) + x, (4 * size) + y, (12 * size) + x, (4 * size) + y);
  endShape();

  //trail
  stroke(62, 20, 87, 60)
  strokeWeight(5)
  line(x + (7 * size), y + (8 * size), x + (1 * size), y + (2 * size))
  strokeWeight(4)
  line(x + (10 * size), y + (8 * size), x + (-3 * size), y + (-2 * size))
}