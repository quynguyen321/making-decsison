//console.log("hello")

let jonSnowAttack = 25;
let jamielannisterattack = 35;

if (jonSnowAttack > jamielannisterattack) {
    console.log('jon has the greater attack strength')
} else if (jamielannisterattack > jonSnowAttack){
    console.log('jamie has the greater attack strength')
} else{
    console.log( 'jamie & jom have equal attack strengths')
}

let jonsnowheath = 100;
let jonsnowdefense = 0;

if (jonsnowheath <= jamielannisterattack) {
    console.log("jon snow has been defeated!")
} 
else {
    jonsnowheath -= jamielannisterattack
    console.log(`jon snow new heath: ${jonsnowheath}`)
}

jonsnowdefense += 25;

if (jonsnowheath <= (jamielannisterattack - jonsnowdefense)) {
    console.log("jon snow has been defeated!")
} 
else {
    jonsnowheath -= (jamielannisterattack- jonsnowdefense)
    console.log(`jon snow new heath: ${jonsnowheath}`)
}

if(jonsnowheath <= 50) {
    jonsnowheath +=  50;
} 
else {
    jonsnowheath= 100;
}

for (let i = 0; i < 5; i++) 
if (jonsnowheath <= (jamielannisterattack - jonsnowdefense)) {
    console.log("jon snow has been defeated!")
}
 else {
    jonsnowheath -= (jamielannisterattack- jonsnowdefense)
    console.log(`jon snow new heath: ${jonsnowheath}`)
}

console.log(`jon was attacked`)

for (let i = 100; i > 0; i -= 2) {
    console.log(i)
}