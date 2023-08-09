
let randomButton = document.querySelector("#btn");
randomButton.addEventListener("click", randomUserInfo);
function randomUserInfo(){
    let randInfo = Math.random() * results.length;
    let info = Math.floor(randInfo);

let userName = document.getElementById("name");
userName.innerHTML = `Name: ${results[info].name.first}  ${results[info].name.last}`

let userGender = document.getElementById("gender");
userGender.innerHTML = `Gender: ${results[info].gender}`

let userEmial = document.getElementById("email")
userEmial.innerHTML = `Email: ${results[info].email}`

let userAddress = document.getElementById("address")
userAddress.innerHTML = `Address: ${results[info].location.street.number} - ${results[info].location.street.name}`;

let userProfile = document.getElementById("profile")
userProfile.src = `${results[info].picture.medium}`

let userAge = document.getElementById("age")
userAge.innerHTML = `Age: ${results[info].dob.age}`

let userPhoneNumber = document.getElementById("phone_number")
userPhoneNumber.innerHTML = `Phone Number: ${results[info].phone}`
}

