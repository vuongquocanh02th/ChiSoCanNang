let can=parseFloat(prompt("Nhap can nang"));
let cao=parseFloat(prompt("Nhap chieu cao"));
let bmi=can/Math.pow(cao,2);

switch(true){
    case (bmi<18):
        document.write("Underweight");
        break;
        case (bmi>=18.5):
        case (bmi<25.0):
            document.write("Normal");
            break;
            case (bmi>=25.0):
            case (bmi<30.0):
                document.write("Overweight");
                break;
    case (bmi>=30.0):
        document.write("Obese");
}