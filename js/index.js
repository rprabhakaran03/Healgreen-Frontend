import axios from "axios"

const username = document.querySelector(".username");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const place = document.querySelector(".place");
const date = document.querySelector(".date");

const submit = document.querySelector(".submit");


submit.addEventListener("click", async(event)=> {
    event.preventDefault();
    if(!username.value || !phone.value || !email.value || !place.value || !date.value ) {
        alert("Please fill all the details")
    } else {
        const data= {
            name: username.value,
            phone: phone.value,
            email: email.value,
            place: place.value,
            data: date.value
        }

        
    }
})




