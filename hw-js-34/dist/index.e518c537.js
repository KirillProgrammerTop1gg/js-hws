const e=(e,o)=>new Promise((s,n)=>setTimeout(()=>s(`Promis done in ${o} ms, value is ${e}`),o));Promise.all([e(1,1e3),e(2,500),e(3,100),e(4,1500),e(5,700)]).then(e=>console.log(e));const o=e=>new Promise((o,s)=>{let n=Math.round(1400*Math.random()+100);setTimeout(()=>o(`Value is ${e} time is ${n} ms`),n)}),s=[o(1),o(2),o(3),o(4),o(5)];console.log(s),Promise.race(s).then(e=>console.log(e));
//# sourceMappingURL=index.e518c537.js.map