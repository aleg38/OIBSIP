let userData = {
    name: "",
    email: "",
    password: ""
}

function submitFormData(userData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: JSON.stringify(userData)
    };
    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData)
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsgEl.textContent = "Email Already Exists";
                }
            }
        })
}

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");

let formEl = document.getElementById("formContainer");


nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

});


passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = "";
    }

});

let displayHideContainerEl = document.getElementById("displayHideContainer");

let displayContainerEl = document.getElementById("displayContainer");

let loginBtnEl = document.getElementById("loginBtn");

loginBtnEl.addEventListener("click", function() {

    let nameInputValue = nameEl.value;

    displayContainerEl.classList.add("display-container");

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    displayContainerEl.appendChild(deleteIconContainer);

    let deleteMarkEl = document.createElement("button");
    deleteMarkEl.textContent = "X";
    deleteMarkEl.classList.add("delete-mark");

    deleteIconContainer.appendChild(deleteMarkEl);

    let successCheckEl = document.createElement("i");
    successCheckEl.classList.add("fas", "fa-check", "success-img");
    displayContainerEl.appendChild(successCheckEl);

    let successTextEl = document.createElement("p");
    successTextEl.textContent = "Hi, " + nameInputValue + " we are verified your account!";
    successTextEl.classList.add("success-text");
    displayContainerEl.appendChild(successTextEl);

    displayHideContainerEl.style.display = "none";


});
formEl.addEventListener("submit", function(event) {
    event.preventDefault();

    submitFormData(userData);
});
