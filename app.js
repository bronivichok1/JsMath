/*let num = 0
let firstName='Lesa'
const isProgrammer = true
firstName='Lesha'

//alert(firstName)
console.log('Test:',firstName,num+10)
const fullName= firstName+' '+'L.'
test */

const resultElement=document.getElementById('result')
const inmut1=document.getElementById('input1')
const inmut2=document.getElementById('input2')
const submitBtn= document.getElementById('submit')
const plusBtn= document.getElementById('plus')
const minusBtn= document.getElementById('minus')
const umnBtn= document.getElementById('umn')
const delenBtn= document.getElementById('delen')
/*const sum=Number(input1.value)+Number(input2.value)
resultElement.textContent= sum*/
let action='+'
plusBtn.onclick=function(){
    action='+'
}
minusBtn.onclick=function(){
    action='-'
}
umnBtn.onclick=function(){
    action='*'
}
delenBtn.onclick=function(){
    action='/'
}

function printResult(result){
    if(result<0){
        resultElement.style.color='red'
    }
    else{
        resultElement.style.color='green'
    }
    resultElement.textContent= result
}
function ComputeNumberWithAction(inp1,inp2,actionSymbol){
const num1=Number(inp1.value)
const num2=Number(inp2.value)
if(actionSymbol=='+'){
    return num1+num2
}else if(actionSymbol=='-'){
    return num1-num2
}else if(actionSymbol=='*'){
    return num1*num2
}else if(actionSymbol=='/'){
    return num1/num2
}else{
    return 0
}
// return actionSymbol =='+'? num1+num2:num1-num2 
}


submitBtn.onclick= function(){
   const result=ComputeNumberWithAction(input1,input2,action)
   printResult(result)

}
