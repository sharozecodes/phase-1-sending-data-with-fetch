
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(res => res.json())
// .then(object => console.log(object))
// .catch(error => {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
// })

function submitData(UserName, UserEmail){


const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(
        {
            name: UserName,
            email: UserEmail,
        }
    ),
};

return fetch("http://localhost:3000/users", configurationObject)
.then(res => res.json())
.then(object => {
    const div = document.createElement("div");
    div.textContent = object.id;
    document.querySelector("body").appendChild(div);
})
.catch(error => {
    const div = document.createElement("div");
    div.textContent = error.message;
    document.querySelector("body").appendChild(div);
})

}