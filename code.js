function permutationSort(a) {
    var count = 0;
    for (i = 0; i < a.length; i++){
      if (solved(a)){
        break;
      }
      
      for (var j = i; j < a.length; j++) {
        s = swap(a, i, j);
        count++;
        if (solved(a)){
        break;
      }
    }
    }
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
