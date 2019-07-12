let home = ["Mansion", "Apartment", "Shack", "House"];
let car = ["Lamborghini", "Box with Wheels", "Convertible", "Bugatti"];
let sal = ["$100,000", "$2", "$15,000", "$40,000"];
function mash() {
    return "You will live in a " + getHome() + ", with " + getChildrenCount() + " kids, drive a " + getCar() + "," + " and have a yearly salary of " + getSalary() + "!" 
}
function getHome() {
    if (process.argv[2] != undefined) {
        home.push(process.argv[2]);
    }

    return home[Math.floor(Math.random()*home.length)];
}

function getChildrenCount() {
    if (process.argv[3] != "" || (Math.random() < 0.5)) {
        return [Math.floor(Math.random() * (11-0))];
    }
    else {
        return (process.argv[3]);
    }
}

function getCar() {

    if (process.argv[4] != "" || (Math.random() < 0.5)) {
        return car[Math.floor(Math.random()*car.length)];
    }
    else{
        return process.argv[4];
    }
}

function getSalary() {
    return sal[Math.floor(Math.random()*sal.length)];
}
console.log(mash());
