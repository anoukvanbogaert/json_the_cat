const request = require("request");
// get breed from terminal
const breed = process.argv[2];
// update request function with specific breed from terminal

// display output in terminal
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response,body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log("choose an existing breed");
    return;
  }
  if (data.length === 0) {
    console.log("choose an existing breed");
    return;
    // console.log(typeof data);
  }
  console.log(data[0].description);
});
