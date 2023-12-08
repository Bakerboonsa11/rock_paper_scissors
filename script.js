"use strict"
//  create the function that return the choice of the computer 
const list_of_choice=["rock","papper","scissors"];




let user_counter =0;
let computer_counter = 0;

function game() {
    function getComputerChoice(list_of_choice){
        
        let randomindex= Math.floor(Math.random()*3);
        let random_choice = list_of_choice[randomindex];
         return random_choice;
    
    }


    function compute_play(user,computer){
  
        if(user==="rock"){
            if(computer==="papper"){
                computer_counter++;
              return `YOU LOSE PAPPER BEAT ROCK`
            }
            else if (computer==="rock"){
              return  `YOU NEITHER LOSE NOR WIN `
            }
            else{
                user_counter++;
              return `YOU WIN ROCK BEAT SCISSORS`
            }
      
          }
      
      
          if(user==="papper"){
              if(computer==="rock"){
                user_counter++;
                return `YOU WIN PAPPER BEAT ROCK`
              }
              else if (computer==="papper"){
                return  `YOU NEITHER LOSE NOR WIN `
              }
              else{
                computer_counter++;
                return `YOU LOSE SCISSORS  BEAT PAPPER  `
              }
        
            }
      
            if(user==="scissors"){
              if(computer==="rock"){
                computer_counter++;
                return `YOU LOSE ROCK BEAT SCISSORS`
              }
              else if (computer==="scissors"){
                return  `YOU NEITHER LOSE NOR WIN `
              }
              else{
                user_counter++;
                return `YOU  WIN  SCISSORS  BEAT PAPPER  `
              }
        
            }
       }
       
      
      //  console.log(computerSelection);
      //  console.log(userSelection);
      let computerSelection = getComputerChoice(list_of_choice);
      let userSelection = prompt("please choice the what u wanna ").trim().toLowerCase();
       
        console.log(compute_play(userSelection,computerSelection));
};
 
for (let i = 1; i <= 5; i++) {
    console.log(`ROUND ${i}`)
    game();
  }
if (user_counter>computer_counter) {
    console.log(` U R WINNER BY ${user_counter} point `)
 
} 
else if (user_counter=== computer_counter){
    console.log(`DRAW BY ${user_counter} to ${computer_counter}`)
}
else{
    console.log(`COMP IS WINNER BY ${computer_counter} point `)
 }
