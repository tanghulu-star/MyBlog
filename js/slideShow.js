let index=0;
let images=document.getElementsByClassName("slideShow-img");

setInterval(function () {
    if(index==images.length-1){
        index=0;
        setOpacity();
        let img=images[index];
        img.style.opacity="1";
    }else{
        index++;
        setOpacity();
        let img=images[index];
        img.style.opacity="1";
    }
},2000);

function setOpacity() {
    for(let i=0;i<images.length;i++){
        let img=images.item(i);
        img.style.opacity="0";
    }
}