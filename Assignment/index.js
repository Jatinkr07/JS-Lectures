let num = [4, 12, 66, 10, 20];
let max = num[0];

for (let nums of num) {
  if (nums > max) {
    max = nums;
    console.log(max);
  }
}
