let image=document.getElementById('btn_1');
let button=document.getElementById('btn_2');
button.addEventListener('click',imageChange);
function imageChange(e){
    if(e.currentTarget.textContent=="Clear"){
    e.currentTarget.textContent="Blur"
    image.src="https://picsum.photos/id/1024/300"
    }
    else{
    e.currentTarget.textContent="Clear"
    image.src="https://picsum.photos/id/1024/300?blur=8"
    }
}

let image2=document.getElementById('btn_3');
let button2=document.getElementById('btn_4');
button2.addEventListener('click',image2Change);
function image2Change(e){
    if(e.currentTarget.textContent=="Clear"){
    e.currentTarget.textContent="Blur"
    image2.src="https://picsum.photos/id/1074/300"
    }
    else{
    e.currentTarget.textContent="Clear"
    image2.src="https://picsum.photos/id/1074/300?blur=8"
    }
}

let image3=document.getElementById('btn_5');
let button3=document.getElementById('btn_6');
button3.addEventListener('click',image3Change);
function image3Change(e){
    if(e.currentTarget.textContent=="Clear"){
    e.currentTarget.textContent="Blur"
    image3.src="https://picsum.photos/id/433/300"
    }
    else{
    e.currentTarget.textContent="Clear"
    image3.src="https://picsum.photos/id/433/300?blur=8"
    }
}