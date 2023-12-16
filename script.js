

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const list_of_choice = ["rock", "papper", "scissors"];
  const btn = document.querySelector(".form");
  const r1 = document.querySelector(".r1");
  const r2 = document.querySelector(".r2");
  const winnerpara = document.querySelector(".winner");
  const image = document.querySelector(".img");
  const all_container = document.querySelector(".all_container");
  const user_current_result = document.querySelector(".winner_user");
  const comp_current_result = document.querySelector(".winner_comp");
  const txt_pop_editor = document.querySelector(".winner_js");
  // const po_btn = document.querySelector(".popbutton");
 

  let user_counter = 0;
  let computer_counter = 0;

  function getComputerChoice(list_of_choice) {
    let randomindex = Math.floor(Math.random() * 3);
    let random_choice = list_of_choice[randomindex];
    return random_choice;
  }

  function compute_play(user, computer) {
    if (user === "rock") {
      if (computer === "papper") {
        computer_counter++;
      } else if (computer === "rock") {
      } else {
        user_counter++;
      }
    }

    if (user === "papper") {
      if (computer === "rock") {
        user_counter++;
      } else if (computer === "papper") {
      } else {
        computer_counter++;
      }
    }

    if (user === "scissors") {
      if (computer === "rock") {
        computer_counter++;
      } else if (computer === "scissors") {
      } else {
        user_counter++;
      }
    }
  }

  let computerSelection;
  let userSelection;
  function creater(){


    if (user_counter >= 5 || computer_counter >= 5) {
      if (user_counter > computer_counter) {
        const pop = document.createElement("div");
        const para = document.createElement("p");
        para.textContent = "U R A WINNER";
        para.classList.add("winner");
        para.classList.add("winner_js");
        pop.appendChild(para);

        pop.classList.add("pop");
        const pop_button = document.createElement("button");
        pop_button.textContent = "OK";
        pop_button.classList.add("popbutton");
        pop.appendChild(pop_button);
        all_container.appendChild(pop);
        const po_btn = document.querySelector(".popbutton");
        
        po_btn.addEventListener("click", function (e) {
          location.reload();
        });
      } else if (user_counter === computer_counter) {
        const pop = document.createElement("div");
        const para = document.createElement("p");
        para.textContent = "DRAW BY";
        para.classList.add("winner");
        para.classList.add("winner_js");
        pop.appendChild(para);

        pop.classList.add("pop");
        const pop_button = document.createElement("button");
        pop_button.textContent = "OK";
        pop_button.classList.add("popbutton");
        pop.appendChild(pop_button);
        all_container.appendChild(pop);
        const po_btn = document.querySelector(".popbutton");
        
        po_btn.addEventListener("click", function (e) {
          location.reload();
        });
      } else {
        const pop = document.createElement("div");
        const para = document.createElement("p");
        para.textContent = "COMP IS WINNER";
        para.classList.add("winner");
        para.classList.add("winner_js");
        pop.appendChild(para);

        pop.classList.add("pop");
        const pop_button = document.createElement("button");
        pop_button.textContent = "OK";
        pop_button.classList.add("popbutton");
        pop.appendChild(pop_button);
        all_container.appendChild(pop);
        const po_btn = document.querySelector(".popbutton");
        
        po_btn.addEventListener("click", function (e) {
          location.reload();
        });
      }

      btn.style.opacity = "0.1";
     

      // po_btn.addEventListener("click", function (e) {
      //   location.reload();
      // });
    }   


  }


  btn.addEventListener("click", function (e) {
    e.preventDefault();
    computerSelection = getComputerChoice(list_of_choice);
    r2.textContent = computerSelection;
    userSelection = e.target.value;

    if (userSelection === "rock") {
      image.src =
        "rock_paper_scissors/photo-1584715642381-6f1c4b452b1c.avif";
    } else if (userSelection === "papper") {
      image.src = "rock_paper_scissors/istockphoto-1490985898-170667a.webp";
    } else if (userSelection === "scissors") {
      image.src = "rock_paper_scissors/photo-1586941962519-b1a78cf17677.avif";
    }

    r1.textContent = userSelection;
    compute_play(userSelection, computerSelection);
    creater();
 
    
  });
});



    // if (user_counter >= 5 || computer_counter >= 5) {
    //   if (user_counter > computer_counter) {
    //     const pop = document.createElement("div");
    //     const para = document.createElement("p");
    //     para.textContent = "U R A WINNER";
    //     para.classList.add("winner");
    //     para.classList.add("winner_js");
    //     pop.appendChild(para);

    //     pop.classList.add("pop");
    //     const pop_button = document.createElement("button");
    //     pop_button.textContent = "OK";
    //     pop_button.classList.add("popbutton");
    //     pop.appendChild(pop_button);
    //     all_container.appendChild(pop);
    //     const po_btn = document.querySelector(".popbutton");
        
    //     po_btn.addEventListener("click", function (e) {
    //       location.reload();
    //     });
    //   } else if (user_counter === computer_counter) {
    //     const pop = document.createElement("div");
    //     const para = document.createElement("p");
    //     para.textContent = "DRAW BY";
    //     para.classList.add("winner");
    //     para.classList.add("winner_js");
    //     pop.appendChild(para);

    //     pop.classList.add("pop");
    //     const pop_button = document.createElement("button");
    //     pop_button.textContent = "OK";
    //     pop_button.classList.add("popbutton");
    //     pop.appendChild(pop_button);
    //     all_container.appendChild(pop);
    //     const po_btn = document.querySelector(".popbutton");
        
    //     po_btn.addEventListener("click", function (e) {
    //       location.reload();
    //     });
    //   } else {
    //     const pop = document.createElement("div");
    //     const para = document.createElement("p");
    //     para.textContent = "COMP IS WINNER";
    //     para.classList.add("winner");
    //     para.classList.add("winner_js");
    //     pop.appendChild(para);

    //     pop.classList.add("pop");
    //     const pop_button = document.createElement("button");
    //     pop_button.textContent = "OK";
    //     pop_button.classList.add("popbutton");
    //     pop.appendChild(pop_button);
    //     all_container.appendChild(pop);
    //     const po_btn = document.querySelector(".popbutton");
        
    //     po_btn.addEventListener("click", function (e) {
    //       location.reload();
    //     });
    //   }

    //   btn.style.opacity = "0.1";
     

    //   // po_btn.addEventListener("click", function (e) {
    //   //   location.reload();
    //   // });
    // }  




