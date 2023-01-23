
module.exports = (htmlStr, loan)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%NAME%}/g, loan.customerName);
    output = output.replace(/{%ADDRESS%}/g, loan.address);
    output = output.replace(/{%PHONENUMBER%}/g, loan.customerPhone);
    output = output.replace(/{%INTEREST%}/g, loan.interest);
    output = output.replace(/{%DESCRIPTION%}/g, loan.description);
    output = output.replace(/{%TERMYEARS%}/g, loan.termYears);
    output = output.replace(/{%AMOUNT%}/g, loan.monthlyAmount*(loan.interest/100)*(1-(1+(loan.interest/100))**loan.termYears*12)*-1);
    output = output.replace(/{%TYPE%}/g, loan.type);
    output = output.replace(/{%ID%}/g, loan.id);
    return output;
}