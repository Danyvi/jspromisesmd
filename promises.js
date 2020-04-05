var axios = require('axios');

// axios
//   .get('https://jsonplaceholder.typicode.com/posts/1') // it returns a Promise obj
//   .then((response)=> {
//     console.log(response.data);
    
//   }) // fires up when the Promise is fullfilled
//   .catch((error)=>{
//     console.log(error);
//   }) // it fires up if there is an error


axios.get('https://github.com/Danyvi/jspromisesmd/blob/master/README.md')
 .then((res) => {
 console.log(res.data);
});  

/*
Res.data will give us the entire github-page, 
but we don’t want the entire page. 
We just want the readme file.
*/ 

/*
If we take a look at the response data 
we will see that the readme-file exists in a div with id=”readme”.
All we need to do is to create a DOMParser i
n order to retrieve the readme div by id.
*/

axios.get('https://github.com/Danyvi/jspromisesmd/blob/master/README.md')
 .then((res) => {
 const doc = new DOMParser().parseFromString(res.data, "text/html");
 document.getElementById('readmeContent').innerHTML = doc.getElementById('readme').innerHTML; 
});