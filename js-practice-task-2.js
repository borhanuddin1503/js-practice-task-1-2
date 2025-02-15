// Task-1:  find out the lawest number from the array/

function lawestNumber(array) {
    let lawest = array[0];

    for (const arr of array) {
        arr < lawest ? lawest = arr : null;
    }

    return lawest
}

console.log(lawestNumber([110, 190, 120, 165, 105]))



// Task-2:  Find the friend with the smallest name.

function smallestName(names) {
    let smallName = names[0];

    for (const name of names) {
        name.length < smallName.length ? smallName = name : null
    }

    return smallName
}

console.log(smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']));



// Task-3:  total budget

function totalBudget(lq, tq, mq) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    let total = lq * laptop + tq * tablet + mq * mobile;
    return total;
}

console.log(totalBudget(2,2,3))


// Task-4:  return the avarage price of phones
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function avgPrice(phones) {
    let totalPrice = 0;
    let totalPhone = phones.length;

    for (const phone of phones) {
        totalPrice += phone.price
    };

    let avgPrice = totalPrice / totalPhone;
    return avgPrice
}

console.log(avgPrice(phones))


// Task-5:  calculate the employee saulury

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function employeesSalary(employees){
    let finalSalary = 0;
    for (const employee of employees) {
        finalSalary += employee.starting + employee.experience * employee.increment;
    }

    return finalSalary
}

console.log(employeesSalary(employees))