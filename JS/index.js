function cooking() {
    console.log("started cooking")
    console.log("Getting my ingredients")
    getIntredients()
    console.log("now i want utensils")
    getuensils()
    getgas()
    startgas()
    useutensils()
    useingriednt()
    addingreient()
    cookingdone()
    gasoff()
}
cooking()

function getIntredients() {
    console.log("Inside get ingredients ")
    const ingr = ['rice', 'water', 'salt']
    console.log("got my ingreidents",ingr)
    
}

function getuensils(){
    const uten=['spoon','cooker']
    console.log("got my utensils",uten)
}

function getgas(){
    console.log('got gas')
}
function startgas(){
    console.log('gas is started')
}
function useingriednt(){
    console.log('started use ingrident')
}
function useutensils(){
    console.log('started use utensils')
 
}
function addingreient(){
    console.log("ingrident is added")
}
function cookingdone(){
    console.log("cooking is done")
}
function gasoff(){
    console.log("gas is off")
}
// cooking()
