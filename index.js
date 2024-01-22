const axios = require("axios");



// axios("https://dummyapi.io/data/v1/post/60d21b0467d0d8992e610bc5", {
//   headers: {
//     "app-id": "65addd613a39f702e906d91c",
//   },
// }).then((response) => console.log(response.data));
axios ("https://dummyapi.io/data/v1/user", {
  headers: {
    "app-id": "65addd613a39f702e906d91c",
  },
}).then((response) => console.log(response.data));
 
const getPosts = async () => {
    const result = await axios.get("https://dummyapi.io/data/v1/post/",)
    headers: {
        "app-id": "65addd613a39f702e906d91c"
    }
    return result.data
}
