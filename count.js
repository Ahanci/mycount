const up=document.querySelector('.increase');
const down=document.querySelector('.decrease');
const myCount=document.querySelector('.count');
const resetCount=document.querySelector('.reset');
let counter=0;
console.log(myCount);

up.addEventListener('click', function(){ 
    counter++; 
    document.querySelector('.count').innerText= counter;
    if (counter>0){
        myCount.style.backgroundColor='blue';

    }
    else if(counter<0){
        myCount.style.backgroundColor='red';

    }
    else if(counter==0){
        myCount.style.backgroundColor='green';
    }


});


down.addEventListener('click', function(){ counter--; 
    document.querySelector('.count').innerText= counter;
    if (counter>0){
        myCount.style.backgroundColor='blue';

    }
    else if(counter<0){
        myCount.style.backgroundColor='red';

    }
    else if(counter==0){
        myCount.style.backgroundColor='green';
    }




   });

   resetCount.addEventListener('click', function (){
    counter=0;
    document.querySelector('.count').innerText= counter;



});


// up.addEventListener('click',countUp () );
// down.addEventListener('click',countDown () );

// function countUp (){
//     alert();
// };