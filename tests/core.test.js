const test=require('node:test'),assert=require('node:assert/strict'),core=require('../js/core.js');
test('market equilibrium and tax shock are computed',()=>{const r=core.market({a:120,b:2,c:20,d:1,tax:10});assert.equal(r.metrics.baselinePrice,33.33);assert.equal(r.metrics.baselineQuantity,53.33);assert.ok(r.metrics.afterQuantity<r.metrics.baselineQuantity)});
test('break-even calculation is reproducible',()=>{const r=core.cost({fixed:500000,variable:650,price:1000,units:2000});assert.equal(r.metrics.breakEvenUnits,1428.57);assert.equal(r.metrics.profit,200000);assert.equal(r.metrics.marginOfSafetyPercent,28.57)});
test('investment NPV and payback are calculated',()=>{const r=core.investment({initial:1200000,rate:10,flows:[350000,400000,450000,500000]});assert.ok(r.metrics.npv>0);assert.equal(r.metrics.simplePaybackYears,3)});
test('invalid economics inputs are rejected',()=>assert.throws(()=>core.cost({fixed:10,variable:100,price:90,units:2}),/Price must exceed/));
