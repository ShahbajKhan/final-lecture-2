// function function_name(param1,....){
//     // 
// }

// const function_name = (param1,...) => {
// //    func_body
//     return param+1;
// };
const unitConversion = litre => {
    if(litre>0){

        return litre*1000
    }
    return "Litres cannot be zero or negative";
};

console.log(unitConversion(0));