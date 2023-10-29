const math=require('mathjs');

const f=math.parse('x^2');

const df=math.derivative(f,'x');

console.log(df.toString());
