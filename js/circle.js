
    function DrawingCovid1(level,x,y,r,color = 'yellow',stroke= 'red') {
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
     
            DrawingCircle(x,y,r, 'red');
            x1 = x+r;
            y1 = y+r;
            r1 = r/2; 
            DrawingCircle(x1,y1,r1,'black');
            DrawingCovid1(level-1,x1,y1,r1);
            x2 = x-r;
            y2 = y-r; 
            r2 = r/2;
            DrawingCircle(x2,y2,r2,'green');
            DrawingCovid1(level-1,x2,y2,r2);
            x3 = x+r;
            y3 = y-r;
            r3 = r/2; 
            DrawingCircle(x3,y3,r3,'blue');
            DrawingCovid1(level-1,x3,y3,r3);

            x4 = x-r;
            y4 = y+r; 
            r4 = r/2;
            DrawingCircle(x4,y4,r4,'yellow');
            DrawingCovid1(level-1,x4,y4,r4);
        
        }
    }

    
    function DrawingCovid2(level,x,y,r,color = 'yellow',stroke= 'red') {
        if(level>0){
            let color = 'Gold';
            let color2 = 'yellow';
            // if(level == 5 || level == 10)
            //    color = 'rgb(90, 123, 233)';
            // if(level == 4 || level == 9)
            //    color = 'rgb(172, 187, 236)';
            // if(level == 3 || level == 8)
            //    color = 'rgb(47, 91, 236)';
            // if(level == 2 || level == 7)
            //    color = 'rgb(90, 123, 233)';
            // if(level == 1 || level == 6)
            //    color = 'rgb(172, 187, 236)';
     

            // DrawingCircle(x,y,r, 'red');
            x1 = x+r;
            y1 = y+r;
            r1 = r/2; 
            DrawingCircle(x1,y1,r1,color2);
            DrawingCovid2(level-1,x1,y1,r1);
            x2 = x-r;
            y2 = y-r; 
            r2 = r/2;
            DrawingCircle(x2,y2,r2,color2);
            DrawingCovid2(level-1,x2,y2,r2);
            x3 = x+r;
            y3 = y-r;
            r3 = r/2; 
            DrawingCircle(x3,y3,r3,color2);
            DrawingCovid2(level-1,x3,y3,r3);

            x4 = x-r;
            y4 = y+r; 
            r4 = r/2;
            DrawingCircle(x4,y4,r4,color2);
            DrawingCovid2(level-1,x4,y4,r4);

            x5 = x;
            y5 = y+r; 
            r5 = r/2;
            DrawingCircle(x5,y5,r5,color);
            DrawingCovid2(level-1,x5,y5,r5);

            x6 = x+r;
            y6 = y; 
            r6 = r/2;
            DrawingCircle(x6,y6,r6,color);
            DrawingCovid2(level-1,x6,y6,r6);

            x7 = x-r;
            y7 = y; 
            r7 = r/2;
            DrawingCircle(x7,y7,r7,color);
            DrawingCovid2(level-1,x7,y7,r7);

            x8 = x;
            y8 = y-r; 
            r8 = r/2;
            DrawingCircle(x8,y8,r8,color);
            DrawingCovid2(level-1,x8,y8,r8);
        
        }
    }
   

    function DrawingCovid3(level,x,y,r,color = 'yellow',stroke= 'red') {
        if(level>0){
            let color_gold = 'Gold';
            let color_red = 'red';
            DrawingCircle(x,y,r, color_red);
            x1 = x+r/2+r/4;
            y1 = y+r/2+r/4;
            r1 = r/4; 
            DrawingCircle(x1,y1,r1,color_gold);
            DrawingCovid3(level-1,x1,y1,r1);
            x2 = x-r/2-r/4;;
            y2 = y-r/2-r/4;
            r2 = r/4;
            DrawingCircle(x2,y2,r2,color_gold);
            DrawingCovid3(level-1,x2,y2,r2);
            x3 = x+r/2+r/4;
            y3 = y-r/2-r/4;
            r3 = r/4; 
            DrawingCircle(x3,y3,r3,color_gold);
            DrawingCovid3(level-1,x3,y3,r3);

            x4 = x-r/2-r/4;
            y4 = y+r/2+r/4;
            r4 = r/4;
            DrawingCircle(x4,y4,r4,color_gold);
            DrawingCovid3(level-1,x4,y4,r4);

            x5 = x;
            y5 = y+r; 
            r5 = r/4;
            DrawingCircle(x5,y5,r5,color_gold);
            DrawingCovid2(level-1,x5,y5,r5);

            x6 = x+r;
            y6 = y; 
            r6 = r/4;
            DrawingCircle(x6,y6,r6,color_gold);
            DrawingCovid2(level-1,x6,y6,r6);

            x7 = x-r;
            y7 = y; 
            r7 = r/4;
            DrawingCircle(x7,y7,r7,color_gold);
            DrawingCovid2(level-1,x7,y7,r7);

            x8 = x;
            y8 = y-r; 
            r8 = r/4;
            DrawingCircle(x8,y8,r8,color_gold);
            DrawingCovid2(level-1,x8,y8,r8);
      
        }
    }

    function Drawing(level,x,y,r,basic_color) {
        if(level > 0){ 
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
     
           x1 = x+r;
           y1 = y+r;
           r1 = r/2;
           Drawing(level-1,x1,y1,r1,color);
           x2 = x-r;
           y2 = y+r;
           r2 = r/2;
           Drawing(level-1,x2,y2,r2,color); 
           x3 = x+r;
           y3 = y-r;
           r3 = r/2;
           Drawing(level-1,x3,y3,r3,color); 
           x4 = x-r;
           y4 = y-r;
           r4 = r/2;
           Drawing(level-1,x4,y4,r4,color);  
           DrawingCircle(x,y,r,basic_color);
        }
    }

    function DrawingPentagonal1(level,x,y,r,color) {
        if(level > 0){ 
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
     
           DrawingCircle(x,y,r,color);
           DrawingCircle(x,y,r*3/4,color);
           DrawingCircle(x,y,r*1/4,color);
           x1 = x+r/2;
           y1 = y;
           r1 = r/4;
           DrawingPentagonal1(level-1,x1,y1,r1,color);
           x2 = x;
           y2 = y+r/2;
           r2 = r/4;
           DrawingPentagonal1(level-1,x2,y2,r2,color); 
           x3 = x;
           y3 = y-r/2;
           r3 = r/4;
           DrawingPentagonal1(level-1,x3,y3,r3,color); 
           x4 = x-r/2;
           y4 = y;
           r4 = r/4;
           DrawingPentagonal1(level-1,x4,y4,r4,color);  
        }
     }