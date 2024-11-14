// test - 1

// function num(str) {
//     return /^\d+$/.test(str);
// }
//
// console.log(num("12345"));
// console.log(num("123a45"));
// console.log(num("00123"));
// console.log(num(""));


// test - 2

// function printMessageEverySecond() {
//     setInterval(() => {
//         console.log("Прошла секунда");
//     }, 1000); // 1000 миллисекунд = 1 секунда
// }
//
// printMessageEverySecond();


// test - 3

// let count = 1;

// const intervalId = setInterval(() => {
//     console.log(count);
//     count++;
//
//     if (count > 10) {
//         clearInterval(intervalId);
//     }
// }, 1000);

// test - 4

// const colorBox = document.getElementById('colorBox');
//
// colorBox.addEventListener('click', () => {
//     colorBox.classList.toggle('bg-color');
// });


// test - 5

// fetch('http://localhost:63342/test1/index.html?_ijt=jn29t1q0rk59fa7eapvjcvvn7f&_ij_reload=RELOAD_ON_SAVE')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Ошибка сети: ' + response.statusText);
//         }
//
//         const contentType = response.headers.get('Content-Type');
//         if (contentType && contentType.includes('application/json')) {
//             return response.json();
//         } else {
//             return response.text();
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//     });
//


