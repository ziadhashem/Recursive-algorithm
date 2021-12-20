
    

    function DrawingTriangle(level,x,y,r,color = 'yellow',stroke= 'red') {
        if(level>0){
            x1 = x;
            y1 = y;
            x2 = x;
            y2 = y+r; 
            DrawingTriangle(level-1,x2,y2,r/2);
            DrawingPiece(x1,y1,x2,y2,color = 'red');
            
            x1 = x;
            y1 = y;
            x2 = x+r;
            y2 = y-r; 
            DrawingTriangle(level-1,x2,y2,r/2);
            DrawingPiece(x1,y1,x2,y2,color = 'red');
           
            x1 = x;
            y1 = y;
            x2 = x-r;
            y2 = y-r; 
            DrawingTriangle(level-1,x2,y2,r/2);
            DrawingPiece(x1,y1,x2,y2,color = 'red');
        }
    }
