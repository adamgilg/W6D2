// // module.exports {

var my_uniq = function (array) {
  var uniq = [];
  for (num in array) {
    if (uniq.indexOf(array[num]) == -1) {
      uniq.push(array[num]);
    }
  }
  return uniq;
};

// console.log(my_uniq([1, 2, 2, 5, 3, 5, 5]))





var two_sum = function(array) {
  for (i in array) {
    for (j in array) {
      if (j > i) {
        if (array[j] + array[i] == 0) {
          return true;
        }
      }
    }
  }
  return false;
};

// console.log(two_sum([1, 1, 12, 0, -12]))

var my_transpose = function(array) {
  result = []
  for (row in array) {
    for (column in array[row]) {
      if (row == 0) {
        result[column] = [];
      }
      result[column][row] = array[row][column];
    }
  }
  return result;
};


// var rows = [
//     [0, 1, 2, 9],
//     [3, 4, 5, 10],
//     [6, 7, 8, 11]
//   ];

// console.log(my_transpose(rows))

var multiples = function(array) {
  return array.map(function(el) {
    return el*2;
  })
};

// console.log(multiples([1, 2, 3]));

var my_each = function(array, func) {
  for (i in array) {
    func(array[i]);
  }
  return array
}

// var printer = function(el) {
//   console.log(el + "!");
// }

// a = [1, 2, 3];

// my_each(a, printer);

var my_inject = function(array, func) {
  result = array[0];
  for (i = 1; i < array.length; i++) {
    result = func(result, array[i]);
  }
  return result;
};

// var add = function(num1, num2) {
//   return num1 + num2;
// };

// console.log(my_inject([1, 2, 3], add))

var bubble_sort = function(array, func) {
  var sorted = false;
  while (sorted == false) {
    sorted = true;
    for (i = 0; i < array.length -1; i++) {
      if (func(array[i], array[i +1]) == false) {
        sorted = false;
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
  }
  return array;
}

// var asc = function(num1, num2) {
//   return num1 < num2
// };

// var desc = function(num1, num2) {
//   return num1 > num2
// };

// a = [1, 2, 5, 3];

// console.log(bubble_sort(a, desc));

var substrings = function(str) {
  result = []
  for (i = 0; i < str.length; i++) {
    for (j = 0; j <= str.length; j++) {
      if (j > i) {
        result.push(str.slice(i, j));
      }
    }
  }
  return result;
}

// console.log(substrings("hello"));

var sum = function(array) {
  if (array.length == 1) {
    return array[0];
  }
  else if (array.length == 2) {
    return array[0] + array[1];
  }
  else {
    return array.pop() + sum(array);
  }
}

// console.log(sum([6, 2, 3]));
