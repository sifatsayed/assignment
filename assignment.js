        //kilometerToMeter start
        function kilometerToMeter(kilometer){

            let meter = kilometer*1000;
            return meter 
        }
        const result = kilometerToMeter(5);
        console.log(result)
        //kilometerToMeter end


        //bugetCalculator start
        function bugetCalculator(watch,phone,laptop){
            var watch = watch*3;
            var phone = phone*3;
            var laptop = laptop*3;
            var grandTotal = watch + phone + laptop;
            return grandTotal
        }
        var output = bugetCalculator(50,100,500); 
        console.log(output)
        //bugetCalculator end


        //hotelCost start
        function hotelCost(stayInHotel){
        var hotelRent = 0;
        if(stayInHotel<=10){
            hotelRent = stayInHotel*100;
        }
        else if(stayInHotel<=20){
            var firstTenDays = 10*100;
            var remainingDays = stayInHotel - 10;
            var secondTenDays = remainingDays*80;
            hotelRent = firstTenDays + secondTenDays;
        }
        else{
            var firstTenDays = 10*100;
            var secondTenDays = 10*80;
            var remainingDays = stayInHotel - 20;
            var thirdTenDays = remainingDays*50;
            hotelRent = firstTenDays + secondTenDays + thirdTenDays;
        }
        return hotelRent
        }
        var TotalCost = hotelCost(30);
        console.log(TotalCost)
        //hotelCost end

        //megaName start
        function megaFriend(friends){
        var largestName = '';
            for (let i = 0; i < friends.length; i++) {
                const friend = friends[i];
                if(friend.length>largestName.length){
                    largestName = friend
                }
            }
            return largestName;
        }
            var friends = ['Messi','Neymar', 'Ronaldo-CR-7','Ronaldinho','David Beckham' ,'Sakib Al Hasan'];
            var output = megaFriend(friends);
            console.log(output)
            //megaName end