// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//   const data = await response.json();

//   console.log(data);
// }

// fetchData();

//2nd
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log("Fetched Data:", data.id);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchData();

//3rd
// async function fetchData() {
//   try {
//     let response = await fetch("https://invalid-url.com");
//     let data = await response.json();
//     console.log("Fetched Data:", data);
//   } catch (error) {
//     console.log("Error fetching data:", error.message);
//   }
// }

// fetchData();
