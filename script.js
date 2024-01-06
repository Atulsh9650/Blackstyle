document.addEventListener("DOMContentLoaded", function () {
    // Load header content
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-root').innerHTML = data;
        });

    // Load footer content
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-root').innerHTML = data;
        });
});



function logindeails(){
   const email= document.getElementById("Email").value;
   const password=Number(document.getElementById("Password").value);

   if(email==="admin@admin.com" && password===123456){
    alert("Login successful");
   }
   else{
    alert("Incorrect email or password");
   }
}

function addquantity() {
    let inputElement = document.querySelector(".readOnlyInput");
    let value = Number(inputElement.value);
    value++;
    inputElement.value = String(value);
}

function deletequantity() {
    let inputElement = document.querySelector(".readOnlyInput");
    let value = Number(inputElement.value);
    if(value==1){
        return;
    }
    else{
    value--;
    }
    inputElement.value = String(value);
}


