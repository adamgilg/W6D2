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

var exponent1 = function(number, power) {
  if (power == 0) {
    return 1;
  }
  else {
    return number * exponent1(number, power - 1);
  }
}

// console.log(exponent1(2, 3));

var exponent2 = function(number, power) {
  if (power == 0) {
    return 1;
  }
  else if (power == 1) {
    return number;
  }
  else {
    return exponent2(number, Math.floor(power / 2.0)) * exponent2(number, Math.ceil(power / 2.0));
  }
}


// console.log(exponent2(2, 5));

var fibonacci = function(count) {
  if (count == 1) {
    return [0];
  }
  else if (count == 2) {
    return [0, 1];
  }
  else {
    var fib_list = fibonacci(count - 1);
    var next_num = fib_list[fib_list.length - 1] + fib_list[fib_list.length - 2];
    return fib_list.concat([next_num]);
  }
}

// console.log(fibonacci(5));

// doesn't work for out of range numbers
var binary_search = function(array, target) {
  mid = Math.floor(array.length/2);
  if (array[mid] == target) {
    return mid;
  }
  else if (array[mid] > target) {
    return binary_search(array.slice(0, mid), target);
  }
  else {
    return mid + binary_search(array.slice(mid, array.length), target);
  }
}

var a = [1, 2, 3, 4, 5, 6, 7];
console.log(binary_search(a, 1));