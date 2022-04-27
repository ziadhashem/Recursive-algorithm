colors = [];
colors[1] = 'red';
colors[2] = 'blue';
colors[3] = 'yellow';
colors[4] = 'green';
colors[5] = 'red';
colors[6] = 'green';
colors[7] = 'red';
colors[8] = 'yellow';
colors[9] = 'blue';
colors[10] = 'red';

stroke = 'blue';
color  = 'green';
color_1 = 'green';
color_2 = 'green';
color_3 = 'green';
color_4 = 'green';
stroke_1 ='blue';
stroke_2 ='blue';
stroke_3 ='blue';
stroke_4 ='blue';
a_color = 'green';
b_color = 'green';
c_color = 'green';
d_color = 'green';
msg = '<h1><span class="fa fa-circle-o-notch"></span> Drawing...</h1>';
pieces = [];

$(`#drawing-btn`).click(function(){

    // var myInterval = setInterval( function(){
    //     alert("ziad");
    // }, 2000);
    // function myStopFunction() {
    //         clearInterval(myInterval);
    // }
    
    r = 100; 
    x = 400;
    y = 250;
    h = 10;  //طول طلع مربع الرسم

    $(`#drawing-area`).empty();
    let shape = $(`#shape`).val();
    let depth = $(`#depth`).val();
    if(shape == 'hilbert'){
        x1 = x;
        y1 = y;
       if(depth == 5 || depth == 4){
          x1 = 600;
          y1 = 10;
          h = 15;
       }
       else if(depth == 6){
            x1 = 700;
            y1 = 10;
            h = 8;
       }
       else if(depth == 7){
            x1 = 700;
            y1 = 10;
            h = 5;
       }
       else if(depth > 7){
            x1 = 700;
            y1 = 10;
            h = 1.8;
       }
       else{
            y1 = 150;
            h = 50;
       }
       $.blockUI({ message: msg });
       D(depth,x1,y1);
       $.unblockUI();
    }
    else if(shape == 'beehive'){
        $.blockUI({ message: msg });
        pieces = [];
        r=50;
        if(depth>2)
          r= 25;
        if(depth>5)
          r= 20;
        DrawingBeehive(depth,x,y,r);
        $.unblockUI();
    }
    else if(shape == 'beehive2'){
        $.blockUI({ message: msg });
        pieces = [];
        r=50;
        if(depth>2)
          r= 25;
        if(depth>5)
          r= 20;
        DrawingBeehive2(depth,x,y,r);
        $.unblockUI();
    }
    else if(shape == 'circle-6'){
        $.blockUI({ message: msg });
        DrawingPentagonal1(depth,x,y,250,'Gold');
        $.unblockUI();
    }
    else if(shape == 'Hexagon'){
        levels = [];
        y= 180;
        if(depth>5){
            r = r*0.9;
        }
        $.blockUI({ message: msg });
        DrawingHexagonAfterPrepare(depth,x,y,r);
        $.unblockUI();
    }
    else if(shape == 'star'){
        y= 180;
        if(depth>1){
            r = r*0.5;
        }
        $.blockUI({ message: msg });
        DrawingStar(depth,x,y,r,color = 'rgb(90, 123, 233)');
        $.unblockUI();
    }
    else if(shape == 'star2'){
        y= 180;
        if(depth>1){
            r = r*0.5;
        }
        $.blockUI({ message: msg });
        DrawingStarWithCircle(depth,x,y,r,color = 'rgb(90, 123, 233)');
        $.unblockUI();
    }
    else if(shape == 'beehive3'){
        $.blockUI({ message: msg });
        pieces = [];
        r=50;
        if(depth>2)
          r= 25;
        if(depth>5)
          r= 20;
        DrawingBeehive3(depth,x,y,r);
        $.unblockUI();
    }
    else if(shape == 'circle-1'){
        $.blockUI({ message: msg });
        DrawingCovid1(depth,x,y,r,'rgb(90, 123, 233)');
        $.unblockUI();
    }
    else if(shape == 'circle-2'){
        $.blockUI({ message: msg });
        DrawingCovid2(depth,x,y,r,'rgb(90, 123, 233)');
        $.unblockUI();
    }
    else if(shape == 'circle-3'){
        $.blockUI({ message: msg });
        DrawingCovid3(depth,x,y,r,'red');
        $.unblockUI();
    }
    else if(shape == 'circle-4'){
        $.blockUI({ message: msg });
        Drawing(depth,x,y,r,'rgb(90, 123, 233)');
        $.unblockUI();
    }
    else if(shape == 'circle-5'){
        $.blockUI({ message: msg });
        DrawingCovid2(depth,x,y,r,'rgb(90, 123, 233)');
        DrawingCovid3(depth,x,y,r,'red');
        $.unblockUI();
    }
    else if(shape == 'square-1'){
        $.blockUI({ message: msg });
        DrawingHexagonal(depth,x,y,r,'Gold');
        $.unblockUI();
    }
    else if(shape == 'square-2'){
        $.blockUI({ message: msg });
        DrawingSquareShape(depth,x,y,r,color,stroke);
        $.unblockUI();
    }
    else if(shape == 'triangle'){
        $.blockUI({ message: msg });
        DrawingTriangle(depth,x,y,r);
        $.unblockUI();
    }

});