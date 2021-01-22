
// function to convert kilometer to meter

function kilometerToMeter(kilometer){
    if(typeof(kilometer)!= 'number'){
        return console.log("please insert valid input");
    }
    else if(kilometer<0){
       return console.log("distance can not be negative");
    }
    meter = kilometer * 1000;
    return meter;
}

//finction to calculate electronics budget

function budgetCalculator(watch, phone, laptop){
    if(typeof(watch)!='number' || typeof(phone)!='number' || typeof(laptop)!='number'){
        return console.log('Invalid Entry');
    }
    else if(watch<0 ||phone <0 || laptop <0 ){
            return console.log("Number of electronics can not be negative");
        }
    else if (watch%1!=0||phone%1!=0||laptop%1!=0){
        return console.log("watch, phone or laptop can not be fractional");
    }
    totalPrice = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalPrice;

}

// function to calculate hotel cost

function hotelCost(day){
    var cost = 0;
    if(day<0){
        return "Number of days can not be negetive!"
    }
    else if(day>20){
        cost+=(day-20)*50;
        day=20;
    }
    if(day>10){
        cost+=(day-10)*80;
        day=10;
    }
    cost+=(day*100);
    return cost;
}

// function to find mega names from an array of friends name

function megaFriend(friends){
    for(i=0; i<friends.length; i++){
        friends[i]=friends[i].trim();
         if(friends[i].length==0){
             return ('May be you have missed any of your friends name');
         }
     }  
     var megaLength=friends[0].length;
     for(i=1;i<friends.length;i++){
        if(friends[i].length>megaLength){
            megaLength=friends[i].length;
        }
     }
    var megaArray=[];
    for(i=0; i<friends.length;i++){
        if(friends[i].length==megaLength){
            megaArray.push(friends[i]);
        }
    }
    return megaArray;
}