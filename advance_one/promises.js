console.log("Hello");

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hollywood");
        resolve({username:"harish",email:"chai"})
    },2000)
})
promiseOne.then(function(user){
    console.log(user.username)
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({user:"hitesh",email:"jdnfin@gmail.com"})
        }
        else{
            reject("Error:Something went wrong")
        }
    })
})
promiseTwo.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("promise is either resolved or rejected");
    
})