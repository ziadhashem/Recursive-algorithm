
function DrawingStarWithCircle(level,x,y,r,basic_color,basic_stroke) {
    if(level>0){
       let color = 'Gold';
       if(level == 5 || level == 10)
          color = 'rgb(90, 123, 233)';
       if(level == 4 || level == 9)
          color = 'rgb(172, 187, 236)';
       if(level == 3 || level == 8)
          color = 'rgb(47, 91, 236)';
       if(level == 2 || level == 7)
          color = 'rgb(90, 123, 233)';
       if(level == 1 || level == 6)
          color = 'rgb(172, 187, 236)';

        DrawingStarWithCircle(level-1,x,y-r*1.5,r/2,color);
        DrawingStarWithCircle(level-1,x,y+r*3,r/2,color);
        DrawingStarWithCircle(level-1,x-r*2.25,y+r/2+r/4,r/2,color);
        DrawingStarWithCircle(level-1,x+r*2.25,y+r/2+r/4,r/2,color);

       x0 = x;
       y0 = y;

       x1 = x+r/2;
       y1 = y+r;
 
       x2 = x1+r;
       y2 = y1+r/2; 
 
       x3 = x2-r;
       y3 = y2+r/2;
 
       x4 = x0;
       y4 = y0+r*3;
 
       x5 = x3-r;
       y5 = y3;

       x6 = x2-r*3;
       y6 = y2;

       x7 = x1-r;
       y7 = y1;

    //    DrawingPiece(x0,y0,x1,y1,color = 'yellow');
    //    DrawingPiece(x1,y1,x2,y2,color = 'blue');
    //    DrawingPiece(x2,y2,x3,y3,color = 'red');
    //    DrawingPiece(x3,y3,x4,y4,color = 'yellow');
    //    DrawingPiece(x4,y4,x5,y5,color = 'yellow');
    //    DrawingPiece(x5,y5,x6,y6,color = 'yellow');
    //    DrawingPiece(x6,y6,x7,y7,color = 'yellow');
    //    DrawingPiece(x7,y7,x0,y0,color = 'yellow');
    
       DrawingCircle(x, y+r*1.5, r*1.5,'rgb(172, 187, 236)','white');

       let points = `${x0} ${y0},${x1} ${y1},
                     ${x2} ${y2},${x3} ${y3},
                     ${x4} ${y4},${x5} ${y5},
                     ${x6} ${y6},${x7} ${y7}`;
       DrawingPolygon(r, points,basic_color);
      
   }
 }


 
function DrawingStar(level,x,y,r,basic_color,basic_stroke) {
    if(level>0){
       let color = 'Gold';
       if(level == 5 || level == 10)
          color = 'rgb(90, 123, 233)';
       if(level == 4 || level == 9)
          color = 'rgb(172, 187, 236)';
       if(level == 3 || level == 8)
          color = 'rgb(47, 91, 236)';
       if(level == 2 || level == 7)
          color = 'rgb(90, 123, 233)';
       if(level == 1 || level == 6)
          color = 'rgb(172, 187, 236)';

       DrawingStar(level-1,x,y-r*1.5,r/2,color);
       DrawingStar(level-1,x,y+r*3,r/2,color);
       DrawingStar(level-1,x-r*2.25,y+r/2+r/4,r/2,color);
       DrawingStar(level-1,x+r*2.25,y+r/2+r/4,r/2,color);

       x0 = x;
       y0 = y;

       x1 = x+r/2;
       y1 = y+r;
 
       x2 = x1+r;
       y2 = y1+r/2; 
 
       x3 = x2-r;
       y3 = y2+r/2;
 
       x4 = x0;
       y4 = y0+r*3;
 
       x5 = x3-r;
       y5 = y3;

       x6 = x2-r*3;
       y6 = y2;

       x7 = x1-r;
       y7 = y1;

    //    DrawingPiece(x0,y0,x1,y1,color = 'yellow');
    //    DrawingPiece(x1,y1,x2,y2,color = 'blue');
    //    DrawingPiece(x2,y2,x3,y3,color = 'red');
    //    DrawingPiece(x3,y3,x4,y4,color = 'yellow');
    //    DrawingPiece(x4,y4,x5,y5,color = 'yellow');
    //    DrawingPiece(x5,y5,x6,y6,color = 'yellow');
    //    DrawingPiece(x6,y6,x7,y7,color = 'yellow');
    //    DrawingPiece(x7,y7,x0,y0,color = 'yellow');
     
          
       let points = `${x0} ${y0},${x1} ${y1},
                     ${x2} ${y2},${x3} ${y3},
                     ${x4} ${y4},${x5} ${y5},
                     ${x6} ${y6},${x7} ${y7}`;
       DrawingPolygon(r, points,basic_color);
      
   }
 }