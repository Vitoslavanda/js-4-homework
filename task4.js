// - створити функцію яка виводить масив
// let arr = [24,23,22,21];
// function writeArray(array){
//     for(const arrElement of array){
//         console.log(arrElement);
//     }

// };
// writeArray(arr);





// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomizer(length, min, max){
//     let array = [];
//     for(let i = 0; i < length; i++){
//         array.push( Math.floor(Math.random() *(max-min)+min))
//     }
//     return array;
// }
// let array1 = randomizer(10, 10, 100);
// writeArray(array1);




// - створити функцію яка приймає три числа та виводить та повертає найменьше.
//     function numbers(num1, num2, num3){
//         let min = Math.min(num1, num2, num3);
//         console.log(min);
//         return min;
//     }
//     numbers(22,21,23);




// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function numbers(num1, num2, num3){
//     let max = Math.max(num1, num2, num3);
//     console.log(max);
//     return max;
// }
// numbers(22,21,23);




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function retMinWriteMax(){
//     console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for(const item of arguments){
//         if(item > max) max = item;
//         if(item < min) min = item; 
//     }
//     console.log(max);
//     return min;
// }
// let min = retMinWriteMax(1,2,3,4,5);
// console.log(min);





// - створити функцію яка повертає найбільше число з масиву 
// const myfunct = (array) =>{
//     let max = array[0];
//     for(const item of array){
//         if (max < item) max = item;
//     }
//     return max;
// }
// const myfunct1 = myfunct([1,2,3,4,5]);
// console.log(myfunct1);




// - створити функцію яка повертає найменьше число з масиву
// const myfunct = (array) =>{
//     let min = array[0];
//     for(const item of array){
//         if (min > item) min = item;
//     }
//     return min;
// }
// const myfunct1 = myfunct([1,2,3,4,5]);
// console.log(myfunct1);




// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function ret(array){
//     let num = 0;
//     for(const item of array){
//         num += item;
//     }
//     return num; 
// }
// const ret1 = ret([2,2,2,2]);
// console.log(ret1);





// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function ret(array){
//     let num = 0;
//     for(const item of array){
//         num += item;
//     }
//     return num/array.length; 
// }
// const ret1 = ret([2,2,2,2]);
// console.log(ret1);




// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// const users = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     },
//     {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//           "lat": "29.4572",
//           "lng": "-164.2990"
//         }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//       }
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//         "street": "Skiles Walks",
//         "suite": "Suite 351",
//         "city": "Roscoeview",
//         "zipcode": "33263",
//         "geo": {
//           "lat": "-31.8129",
//           "lng": "62.5342"
//         }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//         "name": "Keebler LLC",
//         "catchPhrase": "User-centric fault-tolerant solution",
//         "bs": "revolutionize end-to-end systems"
//       }
//     },
//     {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//           "lat": "-71.4197",
//           "lng": "71.7478"
//         }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//       }
//     },
//     {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//           "lat": "24.8918",
//           "lng": "21.8984"
//         }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//       }
//     },
//     {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//         "street": "Ellsworth Summit",
//         "suite": "Suite 729",
//         "city": "Aliyaview",
//         "zipcode": "45169",
//         "geo": {
//           "lat": "-14.3990",
//           "lng": "-120.7677"
//         }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//         "name": "Abernathy Group",
//         "catchPhrase": "Implemented secondary concept",
//         "bs": "e-enable extensible e-tailers"
//       }
//     },
//     {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//         "street": "Dayna Park",
//         "suite": "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//           "lat": "24.6463",
//           "lng": "-168.8889"
//         }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//         "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
//       }
//     },
//     {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//           "lat": "-38.2386",
//           "lng": "57.2232"
//         }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//       }
//     }
//   ];
// function value(array){
//     let count = 0;
//         for (const item of array){
//         if(typeof item ==='object'){
//             count++;
//         }
//     }
//     return count;
// }
// const values = value(users);
// console.log(values);




// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let users = [
//         {
//           "id": 1,
//           "name": "Leanne Graham",
//           "username": "Bret",
//           "email": "Sincere@april.biz",
//           "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//               "lat": "-37.3159",
//               "lng": "81.1496"
//             }
//           },
//           "phone": "1-770-736-8031 x56442",
//           "website": "hildegard.org",
//           "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//           }
//         },
//         {
//           "id": 2,
//           "name": "Ervin Howell",
//           "username": "Antonette",
//           "email": "Shanna@melissa.tv",
//           "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//               "lat": "-43.9509",
//               "lng": "-34.4618"
//             }
//           },
//           "phone": "010-692-6593 x09125",
//           "website": "anastasia.net",
//           "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//           }
//         },
//         {
//           "id": 3,
//           "name": "Clementine Bauch",
//           "username": "Samantha",
//           "email": "Nathan@yesenia.net",
//           "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//               "lat": "-68.6102",
//               "lng": "-47.0653"
//             }
//           },
//           "phone": "1-463-123-4447",
//           "website": "ramiro.info",
//           "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//           }
//         },
//         {
//           "id": 4,
//           "name": "Patricia Lebsack",
//           "username": "Karianne",
//           "email": "Julianne.OConner@kory.org",
//           "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//               "lat": "29.4572",
//               "lng": "-164.2990"
//             }
//           },
//           "phone": "493-170-9623 x156",
//           "website": "kale.biz",
//           "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//           }
//         },
//         {
//           "id": 5,
//           "name": "Chelsey Dietrich",
//           "username": "Kamren",
//           "email": "Lucio_Hettinger@annie.ca",
//           "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//               "lat": "-31.8129",
//               "lng": "62.5342"
//             }
//           },
//           "phone": "(254)954-1289",
//           "website": "demarco.info",
//           "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//           }
//         },
//         {
//           "id": 6,
//           "name": "Mrs. Dennis Schulist",
//           "username": "Leopoldo_Corkery",
//           "email": "Karley_Dach@jasper.info",
//           "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//               "lat": "-71.4197",
//               "lng": "71.7478"
//             }
//           },
//           "phone": "1-477-935-8478 x6430",
//           "website": "ola.org",
//           "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//           }
//         },
//         {
//           "id": 7,
//           "name": "Kurtis Weissnat",
//           "username": "Elwyn.Skiles",
//           "email": "Telly.Hoeger@billy.biz",
//           "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//               "lat": "24.8918",
//               "lng": "21.8984"
//             }
//           },
//           "phone": "210.067.6132",
//           "website": "elvis.io",
//           "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//           }
//         },
//         {
//           "id": 8,
//           "name": "Nicholas Runolfsdottir V",
//           "username": "Maxime_Nienow",
//           "email": "Sherwood@rosamond.me",
//           "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//               "lat": "-14.3990",
//               "lng": "-120.7677"
//             }
//           },
//           "phone": "586.493.6943 x140",
//           "website": "jacynthe.com",
//           "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//           }
//         },
//         {
//           "id": 9,
//           "name": "Glenna Reichert",
//           "username": "Delphine",
//           "email": "Chaim_McDermott@dana.io",
//           "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//               "lat": "24.6463",
//               "lng": "-168.8889"
//             }
//           },
//           "phone": "(775)976-6794 x41206",
//           "website": "conrad.com",
//           "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//           }
//         },
//         {
//           "id": 10,
//           "name": "Clementina DuBuque",
//           "username": "Moriah.Stanton",
//           "email": "Rey.Padberg@karina.biz",
//           "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//               "lat": "-38.2386",
//               "lng": "57.2232"
//             }
//           },
//           "phone": "024-648-3804",
//           "website": "ambrose.net",
//           "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//           }
//         }
//       ];
// function value(array){
//     let count = 0;
//         for (const item of array){
//         if(typeof item ==='object'){
//             for(const key in item){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// const values = value(users);
// console.log(values);





// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function split(arr1, arr2){
//     let result = [];
//     for(let i = 0; i < arr1.length; i++){
//         result.push(arr1[i]+arr2[i]);
//     }
//     return result;
// }
// const splits = split([1,2,3,4,5], [2,3,4,5,6]);
// console.log(splits);    




// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function add(text, typetag){
//     const tag = document.createElement(typetag);
//     tag.innerHTML = text;
//     document.body.appendChild(tag);
// }
// const all= add('Hello owu', 'div');
// console.log(all);




// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ];

// function addlistUsers(array, idtag){
//     const block = document.getElementById(idtag);
//     const ul = document.createElement('ul');
//     for (let i =0; i< array.length; i++){
//         const user = array[i];
//         const li = document.createElement('li');
//         li.innerHTML = `${i} - ${user.name}`;   
//         ul.appendChild(li);
//     }
//     block.appendChild(ul);  
// }
// addlistUsers(users, 'list');



// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// function addlistUsers(array, idtag){
//     const block = document.getElementById(idtag);

//     for (let i =0; i< array.length; i++){
//         const user = array[i];
//         const div = document.createElement('div');
//         const name = document.createElement('h2');
//         const email = document.createElement('h3');
//         const address = document.createElement('p');
//         for (const key in address){
//             const h4 = document.createElement('h4');
//             h4.innerText = address[key];
//             address.appendChild(h4)
//         }
//         name.innerHTML = `name : ${user.name}`;
//         email.innerHTML = `email : ${user.email}`;   
        
//         div.appendChild(name);
//         div.appendChild(email);
//         div.appendChild(address);
//     }
//     block.appendChild(div);  
// }
// addlistUsers(users, 'list');
