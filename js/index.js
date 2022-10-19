// Iteration 1: Names and Input
const hacker1 = "Felipe";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Felipe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
const nomeUpper = hacker1.toLocaleUpperCase();
for(let i=0; i<nomeUpper.length; i++){
    console.log(nomeUpper[i]);
}
for(let i=hacker1.length-1; i>=0; i--){
    console.log(hacker1[i]);
}

if(hacker1.localeCompare(hacker2)){
    console.log("The driver's name goes first.");
}else if(hacker2.localeCompare(hacker1)){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ligula, sollicitudin non congue at, dictum eget arcu. Quisque auctor, purus commodo aliquet malesuada, leo sapien cursus lectus, nec pharetra ex dui ut ante. Cras rutrum massa eu vulputate bibendum. Suspendisse id neque sit amet tellus dictum fringilla consequat a libero. Phasellus aliquam lectus at venenatis consectetur. Vestibulum sodales diam mauris, nec viverra risus malesuada a. Vestibulum auctor lacus leo, sit amet ullamcorper nulla viverra ut. Vivamus porttitor dictum sagittis. Proin imperdiet convallis tellus, sed molestie enim lacinia sit amet. Vestibulum sed lorem tincidunt, hendrerit velit ac, rutrum tellus. Suspendisse at magna tortor. Aenean aliquet metus non urna gravida posuere. In ligula risus, vestibulum sit amet iaculis vel, ornare eget felis. Suspendisse mauris nisi, venenatis vel nunc at, luctus rutrum arcu. Ut nec mauris vehicula, pulvinar ex eget, sollicitudin lectus. Fusce sodales erat eu nibh ullamcorper blandit. Donec et tellus a quam pretium posuere. Sed nunc lectus, ullamcorper in tortor eget, viverra fermentum odio. Nulla ac enim ex. Aenean at lobortis mauris. Cras egestas, enim sit amet luctus ultrices, mi augue mollis neque, a pharetra nibh metus tempus nulla. Vivamus porttitor purus eget nulla tristique, sit amet interdum velit laoreet. Morbi cursus fermentum purus et sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum nibh vel nulla venenatis, condimentum sagittis ligula finibus. Duis elementum eu diam ac egestas. Sed commodo tempus metus. Etiam eleifend mi quis risus posuere, eu sagittis ante laoreet. Vivamus efficitur viverra tristique. Curabitur augue ipsum, semper vitae eleifend vitae, ullamcorper sit amet tortor. Etiam bibendum mi et sem cursus malesuada.";

let contPalavra = 1;
let contET = 0;

for(let i=0; i<string.length; i++){
    if(string[i] === " "){
        contPalavra++;
    }
    if(string[i]==="e" && string[i+1]==="t"){
        contET++;
    }
}
console.log(`Quantidade de Palavras: ${contPalavra} e Quantidade de ET: ${contET}`);






