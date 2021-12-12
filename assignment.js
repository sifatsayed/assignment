//kilometerToMeter start
function kilometerToMeter(kilometer) {
    let meter = 0;
    if (kilometer < 0) {
        return "Please Enter Your Valid Number"
    }
    else {
        meter = kilometer * 1000;
        return meter;
    }
}
const totalMeter = kilometerToMeter(5);
//console.log(totalMeter)
//kilometerToMeter end


//bugetCalculator start
function bugetCalculator(watch, phone, laptop) {
    if (typeof watch != 'number' || watch < 0) {
        return "Please Enter Valid Number"
    }
    else if (typeof phone != 'number' || phone < 0) {
        return "Please Enter Valid Number"
    }
    else if (typeof laptop != 'number' || laptop < 0) {
        return "Please Enter Valid Number"
    }
    return watch * 50 + phone * 100 + laptop * 500
}

// watch 50$ , phone 100$ , laptop 500$
//bugetCalculator end


//hotelCost start
function hotelCost(stayInHotel) {
    var hotelRent = 0;
    var firstTenDaysRent = 0;
    var secondTenDaysRent = 0;
    var restOfDays = 0;
    if (stayInHotel <= 10) {
        hotelRent = stayInHotel * 100;
    }
    else if (stayInHotel <= 20) {
        firstTenDaysRent = 10 * 100;
        restOfDays = stayInHotel - 10;
        secondTenDays = restOfDays * 80;
        hotelRent = firstTenDaysRent + secondTenDaysRent;
    }
    else {
        firstTenDaysRent = 10 * 100;
        secondTenDaysRent = 10 * 80;
        restOfDays = stayInHotel - 20;
        var thirdTenDaysRent = restOfDays * 50;
        hotelRent = firstTenDaysRent + secondTenDaysRent + thirdTenDaysRent;
    }
    return hotelRent
}
var totalRentOfHotel = hotelCost(30);
// console.log(totalRentOfHotel)
//hotelCost end


//megaName start
function megaFriend(friends) {
    if (friends.length === 0) {
        return "Please Enter Your valid List Of Array"
    }
    var largestName = '';
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length > largestName.length) {
            largestName = friend
        }
    }
    return largestName;
}
var friends = ['Messi', 'Neymar', 'Ronaldo-CR-7', 'Ronaldinho', 'David Beckham', 'Sakib Al Hasan'];
var output = megaFriend(friends);
console.log(output)
 //megaName end