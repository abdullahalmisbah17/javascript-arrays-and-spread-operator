//////           class-37            //////////

// document.getElementById("one").innerText =
//   "hello abdullah al misbah welcome to dom class";
// alert("hello abdullah al misbah welcome to alert box");
// window.prompt("hello abdullah al misbah welcome to prompt box");
// window.confirm("hello ahsanullah welcome to prompt box");
// let one = document.getElementById("one");

// const one = document.getElementById("one");

// let two = document.getElementsByClassName("two");

// let three = document.getElementsByClassName("three");

// let h1 = document.getElementsByTagName("h1");
// const hedding = document.getElementsByTagName("h1");

// let two = document.querySelector(".two");
// const three = document.querySelectorAll(".three");

// let link = document.getElementById("link");
// let url = link.getAttribute("href");
// let ad = document.getElementById("ad");

// console.log(ad.getAttribute("src"));
// console.log(ad.getAttribute("alt"));

// console.log(three[1].innerHTML);
// console.log(three[1].innerHTML);

////            class-38                   /////////////

// let textContent = "<div>this is our text content</div>";
// let divTag = document.querySelector(".test");
// divTag.innerHTML = textContent;
// // divTag.className = "text-red";
// divTag.classList.add("text-red");
// divTag.classList.remove("another");
// divTag.classList.toggle("abdullah");
// divTag.classList.replace("test", "testy");
// console.dir(divTag);
// console.log(className);

// let h1Tag = document.querySelector(".tumi");
// h1Tag.innerHTML = textContent;
// let className1 = "this is our new class name";

// console.dir(h1Tag);
// console.log(className1);

// let myObj = {
//   name: "ahsanullah",
//   age: 22,
// };
// myObj.name = "abdullah al misbah";
// myObj.age = 27;
// console.dir(myObj);

// let myInput = document.getElementById("password");
// let inputType = myInput.getAttribute("type");
// myInput.setAttribute("type", "password");

// console.dir(myInput);
// console.log(inputType);

// let myInput = document.getElementById("input");
// let textBtn = document.getElementById("text");
// // let passwordBtn = document.getElementById("password");

// // passwordBtn.addEventListener("click", () => {
// //   myInput.setAttribute("type", "password");
// // });
// // textBtn.addEventListener("click", () => {
// //   myInput.setAttribute("type", "text");
// // });

// // let input2 = document.getElementById("input2");

// // let show_height_btn = document.getElementById("show_height_btn");

// // show_height_btn.addEventListener("click", () => {
// //   let input2type = input2.getAttribute("type");

// //   if (input2type == "password") {
// //     input2.setAttribute("type", "text");
// //     show_height_btn.innerText = "Hide";
// //   } else {
// //     input2.setAttribute("type", "password");
// //     show_height_btn.innerText = "show";
// //   }
// // });

// /// ////          class-39      //////////////

// // /            Creating Arrays

// // let arr1 = [1, 3, 4, 5];

// // let arr1 = new Array(1, 3, 4, 5);
// // let arr1 = new Array(5);
// // let arr1 = Array.of(5, 4, 3);

// // let arr1 = Array.from("hello world");

// //          important

// // let arr1 = Array.from({ length: 10 }, () => 1);
// // console.log(arr1);
// // let myFn = (a, b) => {
//     //   console.log("a", a);
// //   console.log("b", b);

// //   return b;
// // };

// // let arr1 = Array.from({ length: 10 }, myFn);
// // let arr1 = Array.from({ length: 11 }, (value, index) => {
// //   return index + 10;
// // });

// // let evenNumbers = Array.from({ length: 10 }, (value, index) => {
// //   return (index + 1) * 2;
// // });

// // console.log(evenNumbers);

// // let oddNumbers = Array.from({ length: 10 }, (value, index) => {
//     //   return index * 2 + 1;
//     // });

//     // console.log(oddNumbers);

//     // let years = Array.from({ length: 10 }, (value, index) => {
//         //   return index + 2000;
//         // });

//         // console.log(years);
//         //
//         //       important
//         let reviewCount = 5;
//         let reviewElement = document.getElementById("review");
//         let reviewArr = Array.from({ length: reviewCount }, () => {
//             return "<span>⭐</span>";
//         });

// reviewElement.innerHTML = reviewArr.join("");
// console.log(...reviewArr);

// ///            important
// // let arr1 = [1, 3, 4, 5];
// // // let divs = document.querySelectorAll("div");
// // let divs = document.querySelectorAll("div");
// // let newDiv = Array.from(divs);
// // console.log(arr1, divs, newDiv);

// //       The Spread Operator

// // let aArr = [1, 2, 3, 4];
// // let bArr = [5, 6, 7, 8];
// // let finalArr = [...aArr, ...bArr, 9, 10];
// // console.log(...finalArr);

// // let fruits = ["apple", "banana", "mango"];
// // let newFruits = [...fruits, "orange", "pepe"];

// // console.log(newFruits);

// // let fruits = ["apple", "banana", "mango"];

// // let newFruits = [...fruits, "orange", "pepe"];

// // console.log(...newFruits);

// // let boys = ["abdullah", "saifullah", "ahsanullah"];
// // let girls = ["ayesha", "fatema", "farida khatun"];
// // let students = [...boys, ...girls, "misbah", "md salam"];
// // console.log(...students);

// //Object-এর সাথেও Spread ব্যবহার হয়:

// // let student = {
// //   name: "Abdullah",
// //   age: 20,
// // };

// // let newStudent = {
// //   ...student,
// //   country: "Bangladesh",
// // };

// // console.log(...Object.values(newStudent));

// // let student = {
// //   name: "Abdullah",
// //   age: 20,
// // };

// // let newStudent = {
// //   ...student,
// //   country: "Bangladesh",
// // };

// // for (let key in newStudent) {
// //   console.log(key + ": " + newStudent[key]);
// // }

// //          Array Destructuring

// // let cArr = [100, 200, 300, 400, 500];
// // let [v1, v2, ...rest] = cArr;

// // console.log(v1, v2, ...rest);

// // let fruits = ["apple", "banana", "orange", "mango", "pepe"];

// // let [v1, v2, v3, ...rest] = fruits;
// // console.log(v1, v2, v3, ...rest);

// //         Working with Array Methods

// let cArr = [100, 200, 300, 400, [1, 2, 3], [4, 5, 6, 7]];

// //mutating methods

// // cArr.push(500); add kore pore
// // cArr.unshift(500); add kore age
// // cArr.shift(); ager ta delete kore
// // cArr.pop(); shesher data ke delete kore
// // cArr.splice(1, 1, 2000); ata o delete kore tobe add o korte parbe jeta delete hoise oitar jaigai
// // cArr.reverse(); ata ulte de ager gulu pore porer gulu age

// // non mutating methods
// // let v5 = cArr.slice(1, 3); array teke data copy kore niye ashe delete kora sada
// let v5 = cArr.flat(); array bitore array takle shegulur value gulu ke mul array te jug kore dewar jonno flat bebohar kora hoi

// console.log(cArr, v5);

//         class-39      shortcut version

//Creating Arrays

// let arr1 = Array.from({ length: 101 }, (value, index) => {
//   return index + 1926;
// });
// console.log(arr1);

// let evenNumbers = Array.from({ length: 10 }, (value, index) => {
//   return (index + 1) * 2; // return index * 2 + 1;  oddNumber
// });
// console.log(evenNumbers);

// let reviewCount = 5;
// let reviewElement = document.getElementById("review");
// let reviewArr = Array.from({ length: reviewCount }, () => {
//   return " <span>⭐</span>";
// });
// reviewElement.innerHTML = reviewArr.join("");
// console.log(...Object.values(reviewArr));

// let divs = document.querySelectorAll("div");
// let newDiv = Array.from(divs);
// console.log(divs, newDiv);

// //       The Spread Operator

// let aArr = [1, 2, 3, 4];
// let bArr = [5, 6, 7, 8];
// let finalArr = [...aArr, ...bArr, 9, 10];

// // console.log(...finalArr);
// let fruits = ["apple", "mango"];
// let newFruits = [...fruits, "orange", "pepe"];
// console.log(...newFruits);

// //          Array Destructuring

// let cArr = [100, 200, 300, 400];
// let [v1, v2, ...rest] = cArr;
// console.log(v1, v2, ...rest);

// // let fruits = ["apple", "banana", "orange", "mango", "pepe"];

// // let [v1, v2, v3, ...rest] = fruits;
// // console.log(v1, v2, v3, ...rest);
