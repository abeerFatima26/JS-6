class passengerUberPrice{
    constructor(first_name,base_price,toll_fee,gst_charges,totalDistance){
        this.first_name=first_name;
        this.base_price=base_price;
        this.toll_fee=toll_fee;
        this.gst_charges=gst_charges;
        this.totalDistance=totalDistance;
    }

    basePriceCalculate(){
        let totalBasePrice = this.base_price * this.totalDistance;
        return totalBasePrice;
    }

    gstCalculate(){
        let totalGst = 0.18 * this.basePriceCalculate();
        return totalGst;
    }

    finalPassPrice(){
        let finalPrice = this.basePriceCalculate()+this.gstCalculate()+this.toll_fee;
        return finalPrice;
    }
    getFareDetails(){
           //use template literal and return the entire data
           let data=`
           Name : ${this.first_name}
           Base price : RS ${this.base_price}
           Toll : ${this.toll_fee}
           GST : ${this.gstCalculate()}
           Distance : ${this.totalDistance}km
           `
           return data;
       }
}

let passenger1 = new passengerUberPrice("Fatima",20,50,0.18,10);
console.log(passenger1.getFareDetails());
console.log("Hi " +  passenger1.first_name +" Thank you for riding with us.Your total fare is RS " + passenger1.finalPassPrice())

