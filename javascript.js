//davaleba 1

function Fibonacci(num){
    var n1=0
    var n2=1
    var x
    for(var i=1; i<=num; i++){
        console.log(n2)
        x = n1+ n2
        n1=n2
        n2=x
    } 
}
Fibonacci(10)


//davaleba 2

function fizzBuzz(a){
    if((a%3==0) && (a%5==0)){
        console.log("fizz buzz")
    }else if(a%5==0){
        console.log("buzz")
    }else if(a%3==0){
        console.log("fizz")
    }else{
        console.log(a)
    }
}
fizzBuzz(30)
fizzBuzz(20)
fizzBuzz(6)
fizzBuzz(7)


//davaleba 3

function largest(){
    var num1 = prompt ("ჩაწერეთ 1 რიცხვი")
    var num2 = prompt ("ჩაწერეთ 2 რიცხვი")
    var x=num1
    if (num1<=num2){
    for (var y=x; y<=num2; y++){
        if(y%2==0){
            console.log(y)
        }           
        }
    }else {
    for (var y=x; y>=num2; y--){
        if(y%2==0){
            console.log(y)
        }
    }
}
}