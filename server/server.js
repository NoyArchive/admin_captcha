const crypto = require('crypto');
const captcha = (time)=>{
    let i = 1n;
    let x = 3n * (BigInt(time) ** 3145n);
    let pi = x;
    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    return crypto.createHash('sha256').update(String(pi / (10n ** 20n) / BigInt(time))).digest('hex');
}

thisTime = Number(process.argv[2]);

console.log(BigInt(thisTime))

newTime = Math.ceil(new Date()/1000);
if (thisTime > newTime-10 && thisTime <= newTime){
    console.log(captcha(thisTime));
}else{
    console.log("timeout");
}