var axios = require('axios');

axios
  .get('https://jsonplaceholder.typicode.com/posts/1') // it returns a Promise obj
  .then((response)=> {
    console.log(response.data);
    
  }) // fires up when the Promise is fullfilled
  .catch((error)=>{
    console.log(error);
  }) // it fires up if there is an error


  