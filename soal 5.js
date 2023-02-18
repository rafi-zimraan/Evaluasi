const kodeUnix = [23, 89,67,29,192,6,2,129,21,872,891,901,70,61,78,62,32,90,90];

let jmlcode =
kodeUnix.map((q) => q - 50).map((a) => kodeUnix.length + a).filter((e) => e < 20).reduce((q,f) => q + f )
console.log(jmlcode);





