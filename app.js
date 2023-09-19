const fetch = require("node-fetch");
const { writeFile } = require("fs");

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    writeFile("data.json", JSON.stringify(json), function (err) {
      if (err) {
        console.error("Failed");
      } else {
        console.log("Done");
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
