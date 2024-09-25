function permutationSort(a) {
    function solved(arr){
      for (var i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]) return false;
      }
      return true;
    }
    
    function swap(arr, i, j){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    function permute(arr, n) {
        if (solved) {
            count++
            return;
        }
    
        for (let i = n; i < arr.length; i++) {
            arr = swap(arr, n, i);
            permuteRec(arr, n + 1);
            count++;
            arr = swap(arr, n, i);
        }
    }
    
    var count = 0;
    permute(a);
    
    return count;
}
