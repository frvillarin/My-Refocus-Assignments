const myCalc = {
    calculateBMI: function (mass,length) {
    
        var weight = mass;//in kg
        var height = length;//in cm
    
    
        var BMI = (weight / Math.pow(height, 2));
    
       return BMI;
    
    }

}




module.exports = myCalc;