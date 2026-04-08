var nos=[10,20,30,40,50]
console.log('basic method')
for (let i=0;i(nos.length;i++)){
    console.log(nos(i))

}
console.log('for each loop')
nos.foreach((hi,p)=>{

})
console.log('Dynamic for loop')
for (let val of nos){
    console.log(val)

}
console.log('Transforming the array')
nos2=[1 3 2 5 4 8 20 19]
console.log(nos2)
console.log('filter')
even=nos2.filter((val)=>val%2===0)
console.log(even)
console.log('map')
square=nos2.map((val,idx)=>{
    return val**2
})
console.log(square)
console.log('reduce')
sum=nos.reduce((total,val)=>total+val,0)
console.log.sum
var nos=[1,2,3,4,5]
console.log('nos3')
console.log(nos3)
fact=nos3.reduce((total,val)=>total*val,1)
console.log(fact)
console.log('reverse')
rev=nos3.reverse()
console.log(rev)
console.log('includes')
inc=nos3.includes(3)
console.log(inc)
console.log('find')
fin=nos3.find((val)=>val>=1)
console.log(fin)
console.log('find index')
