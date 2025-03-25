const pages = [
  "Welcome to Home Page",
  "This is About Page",
  "Contact us at example@example.com",
];

let dynamicData = document.querySelectorAll("a");
dynamicData.forEach((ele, idx) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = pages[idx];
  });
});
