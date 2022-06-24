const add = (a, b) =>{
// is called parameter
return a+b ;
}

const sub = (a,b) =>{
    return a - b;
}

const multi = (a,b) =>{
    return a * b;
}


const div = (a,b) =>{
    return a / b;
}
const name = "saurabh pande";
// module.exports.add1 = add;
// module.exports.sub2 = sub;
// module.exports.multi3 = multi;

module.exports = {add, sub, multi, name,div};