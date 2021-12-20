
    function DrawingEight(level,x,y,r){
        if(level>0){
            x1 = x;
            y1 = y;
            x2 = x+r;
            y2 = y+r; 
            DrawingPiece(x1,y1,x2,y2,color = 'green');
            DrawingEight(level-1,x2,y2,r/2);
            x1 = x;
            y1 = y;
            x2 = x-r;
            y2 = y+r; 
            DrawingPiece(x1,y1,x2,y2,color = 'green');
            DrawingEight(level-1,x2,y2,r/2);
        }
    }

    function DrawingLeft(level,x,y,r){
        if(level>0){
            x1 = x;
            y1 = y;
            x2 = x+r;
            y2 = y+r; 
            DrawingPiece(x1,y1,x2,y2,color = 'yellow');
            DrawingLeft(level-1,x2,y2,r/2);
            x1 = x;
            y1 = y;
            x2 = x+r;
            y2 = y-r; 
            DrawingPiece(x1,y1,x2,y2,color = 'yellow');
            DrawingLeft(level-1,x2,y2,r/2);
        }
    }

    function DrawingRight(level,x,y,r){
        if(level>0){
            x1 = x;
            y1 = y;
            x2 = x-r;
            y2 = y-r; 
            DrawingPiece(x1,y1,x2,y2,color = 'red');
            DrawingRight(level-1,x2,y2,r/2);
            x1 = x;
            y1 = y;
            x2 = x-r;
            y2 = y+r; 
            DrawingPiece(x1,y1,x2,y2,color = 'red');
            DrawingRight(level-1,x2,y2,r/2);
        }
    }

    function DrawingSeven(level,x,y,r){
        if(level>0){
            x1 = x;
            y1 = y;
            x2 = x-r;
            y2 = y-r; 
            DrawingPiece(x1,y1,x2,y2,color = 'blue');
            DrawingSeven(level-1,x2,y2,r/2);
            x1 = x;
            y1 = y;
            x2 = x+r;
            y2 = y-r; 
            DrawingPiece(x1,y1,x2,y2,color = 'blue');
            DrawingSeven(level-1,x2,y2,r/2);
        }
    }

    function DrawingHexagonal(level,x,y,r,color = 'yellow',stroke= 'red') {
        if(level>0){
            DrawingLeft(level-1,x,y,r);
            DrawingRight(level-1,x,y,r);
            DrawingSeven(level-1,x,y,r);
            DrawingEight(level-1,x,y,r);
        }
    }

