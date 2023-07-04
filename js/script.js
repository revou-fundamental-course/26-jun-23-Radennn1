function validateForm(){
    var Inname = document.forms["formbox"]["inName"].value;
    var Inemail = document.forms["formbox"]["inEmail"].value;
    var Inoption = document.forms["formbox"]["inOption"].value;

    if (Inname == "" || Inemail == "" || Inoption == ""){
        alert("Input Tidak Boleh Kosong!!!");
    }
    return false;
}