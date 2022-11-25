function calculateBMI(mass,length){

    var weight = mass;//in kg
    var height = length;//in cm


    var BMI = (weight / Math.pow(height, 2));

   console.log(BMI)

}

calculateBMI(75,1.62)