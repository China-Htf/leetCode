var search = function(nums, target) {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
    // 把值存到 map 中 下标当作 values
    map.set(nums[i], i)
  }
  // has 若是有这个"键" 则返回 true
  if(map.has(target)) {
    // get 返回 "值"
    return map.get(target)
  } else {
    return -1
  }
};
var nums = [-1,0,3,5,9,12],
    target = 9
search(nums, target)