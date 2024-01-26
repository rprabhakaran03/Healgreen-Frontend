

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

        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
         
        // Fake api for making post requests
        let fetchRes = fetch(
            "http://localhost:8000/api/v1/users",
            options);
        fetchRes.then(res =>
            res.json()).then(d => {
                alert("Success")
            })
        

// let fetchRes = fetch(
//     "http://localhost:8000/api/v1/users");
         
//     // FetchRes is the promise to resolve
//     // it by using.then() method
//     fetchRes.then(res =>
//         res.json()).then(d => {
//             console.log(d)
//         })

        
    }
})




