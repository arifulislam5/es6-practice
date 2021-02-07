const ages =[12,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [33,26,21];
const allages = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allages);

const allAges2 =[...ages,...ages2,5,...ages3];
console.log(allAges2);
const business =650;
const minister =450;
const sochib =250;
const takaPoisa =[650,25,30,4000]
const maximum = Math.max(...takaPoisa);
console.log(maximum)