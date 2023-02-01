//Get Fetch
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

//Get Axios
axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

//POST Fetch
const data = {
    title: "test title",
    content: "test content",
    userId: 1
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
})
    .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })

//POST Axios
axios.post("https://jsonplaceholder.typicode.com/posts", data)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
