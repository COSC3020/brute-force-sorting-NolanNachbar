# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recall my code,
```js
function permutationSort(a) {
    let count = 0;

    function solved(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function permute(arr, n) {
        if (solved(arr)) {
            count++;
            return;
        }

        for (let i = n; i < arr.length; i++) {
            swap(arr, n, i);
            permute(arr, n + 1);
            swap(arr, n, i);
        }
    }

    permute(a, 0);

    return count; 
}
```

The best case would be where the array is already sorted. In this case, my algorithm still has to check whether or not it's already sorted which involves comparing each element to the one after it. This then takes $n$ comparisons.

The worst case would be an input where the algorithm has to try every permutation and then actually sorts it on the last one. For my implementation this would be a reverse sorted array. My algorithm still checks whether or not the array is sorted at every new arrangment so it preforms $n$ comparisons per permuation. Because there are $n!$ possible permutations that makes my algorithm have $O(n*n!)$.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I understood the concept but I wasn't sure how to go about generating unique permutations. I used this website to help make my permute function https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/#
I also was having trouble passing in the ```count``` to keep track of the number of permutations. I originally tried global variables but that didn't work so I looked at this and decided to declare my helper functions inside the main one. https://github.com/COSC3020/brute-force-sorting-NolanBerg/blob/main/code.js
