console.log("**** Уникальность всех символов в строке ****");
function isUnique(string) {
  //   for (let i = 0; i < string.length; i++) {
  //     const element = string[i];
  //     if (string.lastIndexOf(element) !== i) {
  //       return false;
  //     }
  //   }
  //   return true;

  return new Set(string).size === string.length;
}
console.log(isUnique("abcdef")); // true
console.log(isUnique("1234567")); // true
console.log(isUnique("abcABC")); // true
console.log(isUnique("abcadef")); // false

console.log("**** Плоский массив ****");
function flatten(array) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i]);
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j]);
      }
    } else {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(flatten([[1], [[2, 3]], [[[4]]]])); // [1,2,3,4]

console.log("**** Удаление всех повторов в строке ****");
function removeDupes(string) {
  //   const res = [];
  //   const map = {};
  //   for (let i = 0; i < string.length; i++) {
  //     const element = string[i];
  //     if (!map[element]) {
  //       map[element] = true;
  //       res.push(element);
  //     }
  //   }
  //   return res.join("");
  return Array.from(new Set(string)).join("");
}
console.log(removeDupes("abcd")); // abcd
console.log(removeDupes("aabbccdd")); // abcd
console.log(removeDupes("abcddbca")); // abcd
console.log(removeDupes("abababcdcdcd")); // abcd

console.log("**** Повернута ли строка ****");
function isstringRotated(source, test) {
  //   if (source.length !== test.length) {
  //     return false;
  //   }
  //   for (let i = 0; i < source.length; i++) {
  //     const rotate = source.slice(i, source.length) + source.slice(0, i);
  //     if (rotate === test) {
  //       return true;
  //     }
  //   }
  //   return false;
  return (source + source).includes(test) && source.length === test.length;
}
console.log(isstringRotated("javascript", "scriptjava")); // true
console.log(isstringRotated("javascript", "iptjavascr")); // true
console.log(isstringRotated("javascript", "java")); // false

console.log("**** Анаграммы ****");
function allAnagrams(array) {
  const sorted = array.map((str) => str.split("").sort().join(""));
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) {
      return false;
    }
  }
  return true;
}
console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false

console.log("**** Перевернуть матрицу 3х3 ****");
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function rotate(source) {
  const rotated = source[0].map((_) => []);
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[j][source.length - 1 - i] = source[i][j];
    }
  }
  return rotated;
}
function rotate180(source) {
  return rotate(rotate(source));
}
function print(array) {
  array.forEach((element) => console.log(element));
}
print(rotate(matrix));
console.log("********");
print(rotate180(matrix));

console.log("**** Последовательность Фибоначи ****");
function fibonacci(n) {
  const seq = [1, 1];
  if (n < 2) {
    return seq.slice(0, n);
  }
  while (seq.length < n) {
    const last = seq[seq.length - 1];
    const pref = seq[seq.length - 2];
    seq.push(last + pref);
  }
  return seq;
}
console.log(fibonacci(8)); // [1,1,2,3,5,8,13,21]- пример Фибоначи

console.log("**** Своя функция bind ****");
Function.prototype.myBind = function (context, ...args) {
  return (...rest) => {
    return this.call(context, ...args.concat(rest));
  };
};
function log(...props) {
  console.log(this.name, this.age, ...props);
}
const obj = { name: "Dima", age: 34 };
const bound = log.myBind(obj, 42);
bound(18, 20);

console.log("**** Универсальная сумма ****");
function add(a, b) {
  if (typeof a === "undefined") {
    return add;
  }
  if (typeof b === "undefined") {
    return function sum(c) {
      if (typeof c === "undefined") {
        return sum;
      }
      return a + c;
    };
  }
  return a + b;
}
console.log(add(20, 22)); // 42
console.log(add(20)(22)); // 42
console.log(add(20)()()()(22)); // 42
console.log(add()()(20)()()()(22)); // 42

console.log("**** GroupBy ****");
function groupBy(array, fn) {
  //   const res = {};

  //   for (let i = 0; i < array.length; i++) {
  //     const current = array[i];
  //     const key = typeof fn === "function" ? fn(current) : current[fn];

  //     if (!res[key]) {
  //       res[key] = [];
  //     }
  //     res[key].push(current);
  //   }
  //   return res;
  return array.reduce((res, current) => {
    const key = typeof fn === "function" ? fn(current) : current[fn];
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(current);
    return res;
  }, {});
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // {'4': [4.2], '6': [6.1,6.3]}
console.log(groupBy(["one", "two", "three"], "length")); // {'3': ['one', 'two'], '5': ['three']}

console.log("**** Деление остатка ****");
function multiples(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(multiples(10));
console.log(multiples(20));

console.log("**** Метод двух указателей ****");
function getTwoPointer(array, target) {
  let left = 0;
  let right = array.length - 1;

  array.sort((a, b) => a - b);

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === target) {
      return [array[left], array[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
console.log(getTwoPointer([1, 2, 8, 4, 6, 5, 7, 13, 9], 13));

console.log("**** Сжатие ****");
function stringComptession(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}
console.log(stringComptession("aaabbcc"));
