let code;
let output = document.querySelector("#output");
let input = document.querySelector("#input");

function createCaptcha() {
  document.getElementById("captcha").innerHTML = "";
  let charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  let lengthOtp = 4;
  let captcha = [];
  for (let i = 0; i < lengthOtp; i++) {
    let index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) === -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  let canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 80;
  canv.height = 50;
  let ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv);
}

function validateCaptcha(event) {
  event.preventDefault();
  console.log(event);
  if (input.value === code) {
    output.innerHTML = "Validated";
    output.style.color = "green";
    input.value = "";
  } else {
    output.innerHTML = "Incorrect. Please try again";
    output.style.color = "red";
    createCaptcha();
  }
}

createCaptcha();

document.querySelector("#captchaForm").onsubmit = (ev) => {
  validateCaptcha(ev);
};
