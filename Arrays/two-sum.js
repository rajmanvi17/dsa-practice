// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Platform: LeetCode
// Link: https://leetcode.com/problems/two-sum/
// Approach: HashMap & Brute Force
// Time Complexity: O(n)
// Space Complexity: O(n)

//mums = [2,7,11,15]
//taget = 9

//Hash Map
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
};


//Brute Force
var twoSum = function(nums, target) {
   for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
};
