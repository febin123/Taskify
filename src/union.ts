function wtk(weight:number | string):number{
    if(typeof weight === 'number'){
        return weight*2;
    }else{
        return parseInt(weight)*2;
    }
}
console.log(wtk(10));