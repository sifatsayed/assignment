        //kilometerToMeter start
        function kilometerToMeter(kilometer){
            let meter = 0;
            if(kilometer <0 ){
                return "Please Enter Your Valid Number"
            }
            else{
                meter = kilometer*1000;
                return meter;
            }
        }
        const totalMeter = kilometerToMeter(5);
        //console.log(totalMeter)
        //kilometerToMeter end


        //bugetCalculator start
        function bugetCalculator(watch,phone,laptop){
            if (typeof watch != 'number' || watch <0){
                return "Please Enter Valid Number"
            }
            else if(typeof phone != 'number' || phone <0){
                return "Please Enter Valid Number"
            }
            else if(typeof laptop != 'number' || laptop <0){
                return "Please Enter Valid Number"
            }
                return watch*50 + phone*100 + laptop*500
        }  

        // watch 50$ , phone 100$ , laptop 500$
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
        var output = hotelCost(30);
        //console.log(output)
        //hotelCost end

        //megaName start
        function megaFriend(friends){
        var largestName = '';
            for (let i = 0; i < friends.length; i++) {
                const friend = friends[i];
                if(friend.length>largestName.length){
                    megaName = friend
                }
            }
            return megaName;
        }
            var friends = ['Messi','Neymar', 'Ronaldo-CR-7','Ronaldinho','David Beckham' ,'Sakib Al Hasan'];
            var output = megaFriend(friends);
           // console.log(output)
            //megaName end