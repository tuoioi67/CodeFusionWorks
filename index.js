function largestNumber(nums) {
  if (nums.every((num) => num === 0)) return "0";
  return nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
}
