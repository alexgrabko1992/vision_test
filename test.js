// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const sortCourses = (arr, sortValue) => {
    for (let i = 0; i < arr.length; i++) {
        const price = arr[i].prices
        if (sortValue[1] === null) {
            sortValue[1] = Number.POSITIVE_INFINITY
        }
        if (price[0] <= sortValue[1] && price[1] <= sortValue[1]) {
            console.log(arr[i])
        }
    }
}

sortCourses(courses, requiredRange3)