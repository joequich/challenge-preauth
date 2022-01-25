"use strict";
/**
 * Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N.
 * For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10,
 * the resulting subset should be [2, 8].

    Challenge
    You're required to create a function that receives an array (M) and integer value (N). This function has to return an array of the first possible solution.
    🚨 We're looking to someone who can imagine future problems while is coding.

 */

function findFirstSubset(M, N) {
    let objIndex = {};
    for (let i = 0; i < M.length; i++) {
        const rest = N - M[i];
        if (objIndex[M[i]]) {
            return [...[rest, M[i]]];
        }
        objIndex[rest] = M[i];
    }
}

// console.time('findSubset');
console.log(findFirstSubset([2, 5, 8, 14, 0], 10));
// console.timeEnd('findSubset');