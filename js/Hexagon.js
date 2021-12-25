
levels= [];

function DrawingHexagon(level,x,y,r,basic_color,basic_stroke) {
   if(level>0){
      let color = 'Gold';
      if(level == 5 || level == 10)
         color = 'Orange';
      if(level == 4 || level == 9)
         color = 'yellow';
      if(level == 3 || level == 8)
         color = 'Orange';
      if(level == 2 || level == 7)
         color = 'Gold';
      if(level == 1 || level == 6)
         color = 'yellow';

      DrawingHexagon(level-1,x+r*3/4,y-r,r/2,color);
      DrawingHexagon(level-1,x-r*3/4,y-r,r/2,color);
      DrawingHexagon(level-1,x+r*3/4,y+r*2,r/2,color);
      DrawingHexagon(level-1,x+r*1.5,y+r/2,r/2,color);
      DrawingHexagon(level-1,x-r*1.5,y+r/2,r/2,color);
      DrawingHexagon(level-1,x-r*3/4,y+r*2,r/2,color);

      x1 = x+r/2;
      y1 = y;

      x2 = x-r/2;
      y2 = y; 

      x3 = x;
      y3 = y+r;

      x4 = x3-r;
      y4 = y3;

      x5 = x3+r;
      y5 = y3;

      x6 = x2;
      y6 = y2+r*2;

      x7 = x1;
      y7 = y1+r*2;
     
      let points = `${x1} ${y1},${x2} ${y2},${x4} ${y4},${x6} ${y6},${x7} ${y7},${x5} ${y5}`;

      levels[level].push(points); 
  }
}


function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
 }

function DrawingHexagonAfterPrepare(depth,x,y,r){
   for (let index = 1; index <= depth; index++) {
      levels[index] = [];
  }
  DrawingHexagon(depth,x,y,r);
  for (let level = 1; level < levels.length; level++) {
      for (let node = 0; node < levels[level].length; node++) {
         DrawingPolygon(r, levels[level][node],colors[level]);
      }
  }
}
