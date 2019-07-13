let home = ["Mansion", "Apartment", "Shack", "House"];
let car = ["Lamborghini", "Box with Wheels", "Convertible", "Bugatti"];
let sal = ["$100,000", "$2", "$15,000", "$40,000"];
function mash() {
    return "You will live in a " + getHome() + ", with " + getChildrenCount() + " kids, drive a " + getCar() + "," + " and have a yearly salary of " + getSalary() + "!"; 
}
function randomizer(range) {
    return Math.floor(Math.random() * (range + 1));
}
function getHome() {
    if (process.argv[2] != " ") {
        home.push(process.argv[2]);
    }
    return home[randomizer(home.length-1)];
}
function getChildrenCount() {
    if (process.argv[3] != " " || (Math.random() < 0.5)) {
        return [randomizer(10)];
    }
    else {
        return (process.argv[3]);
    }
}
function getCar() {
    if (process.argv[4] != " " || (Math.random() < 0.33)) {
        return car[randomizer(car.length-1)];
    }
    else{
        return process.argv[4];
    }
}
function getSalary() {
    return sal[randomizer(sal.length-1)];
}
console.log(mash());


