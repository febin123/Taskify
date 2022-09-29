type Customer={
    birthday:Date
};
function getCustomer(id:number):Customer | null | undefined{
    return id===0 ? null : {birthday:new Date()};
}

console.log(getCustomer(0)?.birthday);
