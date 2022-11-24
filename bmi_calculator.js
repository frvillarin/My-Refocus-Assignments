function calculateBMI(mass,length){

    var weight = mass;
    var height = length;


    var BMI = (weight / Math.pow(height, 2));

   console.log(BMI)

}

calculateBMI(75,1.62)