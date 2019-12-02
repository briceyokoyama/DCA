
//  Daily Coding Problem
//  Good morning! Here's your coding interview problem for today.
 
//  This problem was asked by Google.
 
//  Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
 
//  For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
 
//  10 = max(10, 5, 2)
//  7 = max(5, 2, 7)
//  8 = max(2, 7, 8)
//  8 = max(7, 8, 7)
//  Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

function prob18(nums, k) {

  let dequeue = []
  let maxes = []

  for (let i = 0; i < k; i++) {
    while (dequeue.length > 0 && nums[i] > nums[dequeue[dequeue.length - 1]]) {
      dequeue.pop()
    }
    dequeue.push(i)
  }

   for (let i = k; i < nums.length; i++) {
     maxes.push(nums[dequeue[0]])

     while(dequeue.length > 0 && dequeue[0] <= i - k) {
      dequeue.shift()
     }

     while (dequeue.length > 0 && nums[i] > nums[dequeue[dequeue.length - 1]]) {
      dequeue.pop()
    }
    dequeue.push(i)

   }

   maxes.push(nums[dequeue[0]])

   return maxes
}

console.log(prob18([10, 5, 2, 7, 8, 7], 3))