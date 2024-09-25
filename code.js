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
