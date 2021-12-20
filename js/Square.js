
    function DrawingSquareShape(level,x,y,r,basic_color,basic_stroke) {
         if(level > 0){ 
            x1 = x+r;
            y1 = y+r;
            r1 = r/2;
            DrawingSquareShape(level-1,x1,y1,r1,color_1,stroke_1);
            x2 = x-r;
            y2 = y+r;
            r2 = r/2;
            DrawingSquareShape(level-1,x2,y2,r2,color_2,stroke_2); 
            x3 = x+r;
            y3 = y-r;
            r3 = r/2;
            DrawingSquareShape(level-1,x3,y3,r3,color_3,stroke_3); 
            x4 = x-r;
            y4 = y-r;
            r4 = r/2;
            DrawingSquareShape(level-1,x4,y4,r4,color_4,stroke_4);  
            DrawingSquare(x,y,r,basic_color,basic_stroke);
         }
     }

