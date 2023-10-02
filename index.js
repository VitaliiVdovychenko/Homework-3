// 1
// function compact(arr) {
//     const newArr = [];
    
//     for (const i of arr) {
//       if (!newArr.includes(i)) {
//         newArr.push(i);
//       }
//     }
    
//     return newArr;
//   }

// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]
// end



// 2
// function createArray(start, end) {
//     if (start > end) {
//       return [];
//     }
  
//     const result = [];
//     for (let i = start; i <= end; i++) {
//       result.push(i);
//     }
  
//     return result;
//   }
// let arr = createArray(2, 9);
// console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9]
//end


// 3
// function printNumbers(a, b) {
//     const result = [];
//     for (let i = a; i <= b; i++) {
//       const repeat = i - a + 1;
//       for (let j = 0; j < repeat; j++) {
//         result.push(i);
//       }
//     }
//     return result;
//   }
//   const a = 2; 
//   const b = 5; 
//   if (a < b) {
//     const resultArray = printNumbers(a, b);
//     console.log(resultArray);
//   }
//end



// 4
// function randArray(k) {
//     const result = [];
//     for (let i = 0; i < k; i++) {
//       const randomNumber = Math.floor(Math.random() * 500) + 1;
//       result.push(randomNumber);
//     }
//     return result;
//   }
//   const k = 5; 
//   const randomArray = randArray(k);
//   console.log(randomArray);
//end



// 5 - не вийшло, дуже і дуже важко йшло(
// function showByTypes(arr) {
//     const result = {};
  
//     function checkType(item) {
//       if (Array.isArray(item)) {
//         const subType = typeof item[0];
  
//         if (subType === "undefined") {
//           return;
//         }
  
//         let hasMixedTypes = true;
//         for (const subItem of item) {
//           if (typeof subItem !== subType) {
//             hasMixedTypes = false;
//             break;
//           } 
//         }
  
//         if (!hasMixedTypes) {
//           if (!result[subType]) {
//             result[subType] = [];
//           }
//           result[subType].push(item);
//         }
  
//         for (const subItem of item) {
//           checkType(subItem);
//         }
//       }
//     }
  
//     for (const item of arr) {
//       const type = typeof item;
  
//       if (!result[type]) {
//         result[type] = [];
//       }
  
//       if (type !== "object" || (type === "object" && !Array.isArray(item))) {
//         result[type].push(item);
//       }
  
//       checkType(item);
//     }
  
//     for (const key in result) {
//       console.log(result[key]);
//     }
//   }
  
//   let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
//   showByTypes(arr);
//end



// // 6
// function calc(a, b, op) {
//     switch (op) {
//       case 1: // віднімання
//         return a - b;
//       case 2: // добуток
//         return a * b;
//       case 3: // ділення
//         if (b !== 0) {
//           return a / b;
//         } else {
//           return "Ділення на нуль неможливе";
//         }
//       default: // додавання (всі інші значення op)
//         return a + b;
//     }
//   }
//   console.log(calc(5, 2, 2)); // 10
// //end



// 7
function findUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  }
  console.log(findUnique([1, 2, 3, 5, 3])); 
  console.log(findUnique([1, 2, 3, 5, 11]));
//end