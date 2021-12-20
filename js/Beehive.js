function DrawingBeehivePiece(x1,y1,x2,y2,color = 'red'){
   if(! pieces.includes(`${x1}_${y1}_${x2}_${y2}`)){
        DrawingPiece(x1,y1,x2,y2,color_1);
        pieces.push(`${x1}_${y1}_${x2}_${y2}`);
   }
}

function DrawingBeehive(level,x,y,r,basic_color,basic_stroke) {
         if(level > 0){ 
            x1 = x;
            y1 = y;
            x2 = x1+r;
            y2 = y1+r;
            DrawingBeehivePiece(x1,y1,x2,y2,'color_1');
            x1 = x2;
            y1 = y2;
            x2 = x1;
            y2 = y1+r;
            DrawingBeehivePiece(x1,y1,x2,y2,color_1);
            x1 = x2;
            y1 = y2;
            x2 = x1-r;
            y2 = y1+r;
            DrawingBeehivePiece(x1,y1,x2,y2,color_1);
            x1 = x2;
            y1 = y2;
            x2 = x1-r;
            y2 = y1-r;
            DrawingBeehivePiece(x1,y1,x2,y2,color_1);
            x1 = x2;
            y1 = y2;
            x2 = x1;
            y2 = y1-r;
            DrawingBeehivePiece(x1,y1,x2,y2,color_1);
            x1 = x2;
            y1 = y2;
            x2 = x1+r;
            y2 = y1-r;
            DrawingBeehivePiece(x1,y1,x2,y2,color_1);
           
            DrawingBeehive(level-1,x+(r*2),y,r);
            DrawingBeehive(level-1,x-(r*2),y,r);
            DrawingBeehive(level-1,x+r,y-(r*2),r);
            DrawingBeehive(level-1,x+r,y+(r*2),r);
            DrawingBeehive(level-1,x-r,y-(r*2),r);
            DrawingBeehive(level-1,x-r,y+(r*2),r);
         }
     }

     function DrawingBeehive2(level,x,y,r,basic_color,basic_stroke) {
        if(level > 0){ 
           x1 = x;
           y1 = y;
           x2 = x1+r;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'yellow');

           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
           x1 = x2;
           y1 = y2;
           x2 = x1-r;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'blue');
           x1 = x2;
           y1 = y2;
           x2 = x1-r;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'gray');
           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'green');
           x1 = x2;
           y1 = y2;
           x2 = x1+r;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'purple');

           //-------------
           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'purple');

           x1 = x2;
           y1 = y2;
           x2 = x1+r/2;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'green');

           x1 = x2;
           y1 = y2;
           x2 = x1+r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'gray');

           x2 = x1;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'blue');

           x1 = x2;
           y1 = y2;
           x2 = x1+r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
        
           x2 = x1-r/2;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'yellow');

           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
      
           x2 = x1-r/2;
           y2 = y1-r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');

           x1 = x2;
           y1 = y2;
           x2 = x1-r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
 
           x2 = x1;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');

           x1 = x2;
           y1 = y2;
           x2 = x1-r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');

           x2 = x1+r/2;
           y2 = y1-r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
           
          
           DrawingBeehive2(level-1,x+(r*2),y,r);
           DrawingBeehive2(level-1,x-(r*2),y,r);
           DrawingBeehive2(level-1,x+r,y-(r*2),r);
           DrawingBeehive2(level-1,x+r,y+(r*2),r);
           DrawingBeehive2(level-1,x-r,y-(r*2),r);
           DrawingBeehive2(level-1,x-r,y+(r*2),r);
        }
    }


    function DrawingBeehive3(level,x,y,r,basic_color,basic_stroke) {
        if(level > 0){ 
           x1 = x;
           y1 = y;
           x2 = x1+r;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'yellow');

           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
           x1 = x2;
           y1 = y2;
           x2 = x1-r;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'blue');
           x1 = x2;
           y1 = y2;
           x2 = x1-r;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'gray');
           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'green');
           x1 = x2;
           y1 = y2;
           x2 = x1+r;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'purple');

           //-------------
           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'purple');

           x1 = x2;
           y1 = y2;
           x2 = x1+r/2;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'green');

           x1 = x2;
           y1 = y2;
           x2 = x1+r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'gray');

           x2 = x1;
           y2 = y1+r;
           DrawingBeehivePiece(x1,y1,x2,y2,'blue');

           x1 = x2;
           y1 = y2;
           x2 = x1+r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
        
           x2 = x1-r/2;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'yellow');

           x1 = x2;
           y1 = y2;
           x2 = x1;
           y2 = y1+r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
      
           x2 = x1-r/2;
           y2 = y1-r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');

           x1 = x2;
           y1 = y2;
           x2 = x1-r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
 
           x2 = x1;
           y2 = y1-r;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');

           x1 = x2;
           y1 = y2;
           x2 = x1-r/2;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');

           x2 = x1+r/2;
           y2 = y1-r/2;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');

           x2 = x1+r;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
           
           x1 = x1;
           y1 = y1+r;
           x2 = x1+r;
           y2 = y1;
           DrawingBeehivePiece(x1,y1,x2,y2,'red');
           DrawingBeehive3(level-1,x+(r*2),y,r);
           DrawingBeehive3(level-1,x-(r*2),y,r);
           DrawingBeehive3(level-1,x+r,y-(r*2),r);
           DrawingBeehive3(level-1,x+r,y+(r*2),r);
           DrawingBeehive3(level-1,x-r,y-(r*2),r);
           DrawingBeehive3(level-1,x-r,y+(r*2),r);
        }
    }

