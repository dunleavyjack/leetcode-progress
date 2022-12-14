const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (target !== nums[mid] && left <= right) {
        if (target === nums[mid]) {
            return mid;
        }

        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    return target === nums[mid] ? mid : -1;
};

let nums = [1, 2, 3, 4, 5];
let target = 1;

console.log('result', search(nums, target));
