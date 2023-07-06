function validateForm(){
    var Inname = document.forms["formbox"]["inName"].value;
    var Inemail = document.forms["formbox"]["inEmail"].value;
    var Inoption = document.forms["formbox"]["inOption"].value;

    if (Inname == "" || Inemail == "" || Inoption == ""){
        alert("Input Tidak Boleh Kosong!!!");
    }
    return false;
}

var index=0;
function imageSlider(){
    setTimeout(imageSlider, 2000)
    var gambar;
    var arrayImg = document.getElementsByClassName("slideimg");
    for(gambar = 0; gambar<arrayImg.length; gambar++){
        arrayImg[gambar].style.display="none"
    }
    index++;
    if(index>=arrayImg.length){
        index=0;
    }
    arrayImg[index].style.display="block";
}

imageSlider();