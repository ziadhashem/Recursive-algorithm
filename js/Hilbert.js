
    function A(i,x,y) {
         if(i > 0){
             p = D(i-1,x,y);
             x1 = p.x;
             y1 = p.y;
             x2 = x1-h;
             y2 = y1;
             DrawingPiece(x1,y1,x2,y2,a_color);
             p1 = A(i-1,x2,y2);
             x1 = p1.x;
             y1 = p1.y;
             x2 = x1;
             y2 = y1+h;
        
             DrawingPiece(x1,y1,x2,y2,a_color);
             p2 = A(i-1,x2,y2);
             x1 = p2.x;
             y1 = p2.y;
             x2 = x1+h;
             y2 = y1;
             DrawingPiece(x1,y1,x2,y2,a_color);
             p3 = B(i-1,x2,y2);
             x = p3.x;
             y = p3.y;
         }
         return {x:x,y:y};
     }
    function B(i,x,y) {
        if(i >0){
            point = C(i-1,x,y);
            x1 = point.x;
            y1 = point.y;
            y2= y1-h;
            x2= x1;
        
            DrawingPiece(x1,y1,x2,y2,b_color);
            point = B(i-1,x2,y2);
            x1 = point.x;
            y1 = point.y;
            x2 = x1+h;
            y2 = y1;
           
            DrawingPiece(x1,y1,x2,y2,b_color);
            point = B(i-1,x2,y2);
            x1 = point.x;
            y1 = point.y;
        
            y2 = y1+h;
            x2= x1;
           
            DrawingPiece(x1,y1,x2,y2,b_color);
            point = A(i-1,x2,y2);
            x = point.x;
            y = point.y;
        }
        return {x:x,y:y};
    }
    function C(i,x,y) {
        if(i >0){
            point = B(i-1,x,y);
            x1 = point.x;
            y1 = point.y;
            x2 = x1+h;
            y2 = y1;
           
            DrawingPiece(x1,y1,x2,y2,c_color);
            point = C(i-1,x2,y2);
            x1 = point.x;
            y1 = point.y;
            y2 = y1-h;
            x2 = x1;
            
            DrawingPiece(x1,y1,x2,y2,c_color);
            point = C(i-1,x2,y2);
            x1 = point.x;
            y1 = point.y;
            x2 = x1-h;
            y2 = y1;
          
            DrawingPiece(x1,y1,x2,y2,c_color);
            point = D(i-1,x2,y2);
            x = point.x;
            y = point.y;
        }
        return {x:x,y:y};
    }
    function D(i,x,y) {
        if(i >0){
            point = A(i-1,x,y);
            x1 = point.x;
            y1 = point.y;
            y2 = y1+h;
            x2 = x1;
           
            DrawingPiece(x1,y1,x2,y2,d_color);
            point = D(i-1,x2,y2);
            x1 = point.x;
            y1 = point.y;
            x2 = x1-h;
            y2 = y1; 
           
            DrawingPiece(x1,y1,x2,y2,d_color);
            point = D(i-1,x2,y2);
            x1 = point.x;
            y1 = point.y;
            y2 = y1-h;
            x2 = x1;
        
            DrawingPiece(x1,y1,x2,y2,d_color);
            point = C(i-1,x2,y2);
            x = point.x;
            y = point.y;
        }
        return {x:x,y:y};
    }