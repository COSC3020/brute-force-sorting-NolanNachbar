function permutationSort(a) {
    var count = 0;
    var i = 0;
    while(i<10){
      
      for (var j = i; j < a.length; j++) {
        s = swap(a, i, j);
        count++;
        if (solved(a)){
        break;
      }
    }
    i++;
    i = i%a.length
    }
    return a;
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
