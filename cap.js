"use strict";

document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");

let elementToPaint;

async function start() {
  let response = await fetch("cap_new_try-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  addUserInteraction();
}

function addUserInteraction() {
  document.querySelectorAll(".g_to_interact_with").forEach(eachG => {
    console.log(eachG);
    eachG.addEventListener("click", the_click);
    eachG.addEventListener("mouseover", the_mouseover);
    eachG.addEventListener("mouseout", the_mouseout);
  });
  document.querySelectorAll(".color_btn").forEach(each_BTN => {
    each_BTN.addEventListener("click", color_click);
  });
}

function the_click() {
  elementToPaint = this;
  this.style.fill = "grey";
}

function the_mouseover() {
  console.log(this);

  this.style.stroke = "orange";
}

function the_mouseout() {
  this.style.stroke = "none";
}

function color_click() {
  console.log("Click", this.getAttribute("fill"));
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
