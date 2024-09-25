var count = 0;
function permutationSort(a) {
    permute(a);
    return count;
}

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
    for (var i = n; i <arr .length; i++) {
        arr = swap(s, n, i);
        permuteRec(s, n + 1);
        count++;
        arr = swap(s, n, i);
    }
}
