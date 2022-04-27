
function DrawingPiece(x1,y1,x2,y2,color = 'red') {
    setTimeout(() => {
        let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('id','line2');
        newLine.setAttribute('x1',x1);
        newLine.setAttribute('y1',y1);
        newLine.setAttribute('style','stroke:'+color);
        newLine.setAttribute('x2',x2);
        newLine.setAttribute('y2',y2);
        $("#drawing-area").append(newLine);
    }, 3000);
}

function DrawingSquare (x,y,r,color = 'yellow',stroke= 'red') {
     setTimeout(() => {
        let new_square = document.createElementNS('http://www.w3.org/2000/svg','rect');
        new_square.setAttribute('id',`circle_${x}_${y}`);
        new_square.setAttribute('width',r);
        new_square.setAttribute('height',r);
        new_square.setAttribute('x',x);
        new_square.setAttribute('y',y);
        new_square.setAttribute('stroke',stroke);
        new_square.setAttribute('stroke-width',2);
        new_square.setAttribute('fill',color);
        $("#drawing-area").append(new_square);
    
     }, 2000);    
}



function DrawingCircle (x,y,r,color = 'yellow') {
    let new_circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    new_circle.setAttribute('id',`circle_${x}_${y}`);
    new_circle.setAttribute('cx',x);
    new_circle.setAttribute('cy',y);
    new_circle.setAttribute('stroke-width',2);
    new_circle.setAttribute('fill',color);
    new_circle.setAttribute('r',r);
    $("#drawing-area").append(new_circle);
}

function DrawingEllipse(x,y,ry,color,stroke){
   setTimeout(() => {
    let new_ellipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
    new_ellipse.setAttribute('id',`ellipse_${x}_${y}`);
    new_ellipse.setAttribute('cx',x);
    new_ellipse.setAttribute('cy',y);
    new_ellipse.setAttribute('stroke',stroke);
    new_ellipse.setAttribute('stroke-width',2);
    new_ellipse.setAttribute('fill',color);
    new_ellipse.setAttribute('ry',ry);
    $("#drawing-area").append(new_ellipse);
   }, 2000);
}

function DrawingStar(r,color = 'red') {
    let newLine = document.createElementNS('http://www.w3.org/2000/svg','polygon');
    newLine.setAttribute('id',`polygon_${r}`);
    newLine.setAttribute('style','stroke:'+color);
    newLine.setAttribute('points',//"10 40,200 200,40 10");
                                  `${0.5*r},
                                   ${0.05*r}  ${0.2*r},
                                   ${0.99*r}  ${0.95*r},
                                   ${0.39*r}  ${0.05*r},
                                   ${0.39*r}  ${0.8*r},
                                   ${r}`);
    $("#drawing-area").append(newLine);
 }

 function DrawingPolygon(r, points, color = 'red') {
   setTimeout(() => {
    let newLine = document.createElementNS('http://www.w3.org/2000/svg','polygon');
    newLine.setAttribute('id',`polygon_${r}`);
    newLine.setAttribute('style','stroke:'+color);
    newLine.setAttribute('fill',color);
    newLine.setAttribute('points',`${points}`);
    $("#drawing-area").append(newLine);
   }, 2000);
 }
 
 
 