// Dynamic Programming is taking large problems, and breaking them down into small problems
// there are 2 flavors, "Top-down" & "Bottom-up"
// for example, how many way can you get to the top of a staircase of n steps taking 1 or 2 steps at a time?

const n = 8;
// 1. Top Down w/ Memoization
const climbStairsTD = (n) => {
    const memo = [];
    const go = (val) => {
        if (val > n) {
            return 0;
        } else if (val === n) {
            return 1; // got to the top of the stairs
        } else if (memo[val]) {
            return memo[val];
        } else {
            return memo[val] = go(val + 1) + go(val + 2); // take 1 or 2 steps
        }
    }
    return go(0);
};
console.log(climbStairsTD(n)); // logs 34
// 2. Bottom Up
const climbStairsBU = (n) => {
    let dp = [0, 1, 2]; // base cases for step 1, 2, 3
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n];
};
console.log(climbStairsBU(n)); // logs 34
