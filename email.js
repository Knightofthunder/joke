function sendMail(event) {
event.preventDefault();
 let para = {
    name: document.getElementById("email-from-text-button").value,
    email: document.getElementById("email-form-email-button").value,
 }
console.log(para);
emailjs.send("service_x5h9dah","template_f7s664q", para).then( () => {

   alert("thanks for subscribe checkout your email");
   const back = document.createElement("a");
   back.setAttribute("href","index.html");
   document.body.append(back);
   back.click();
   document.body.remove(back);
  });
}

const emailForm = document.querySelector(".email-form-box");
emailForm.addEventListener("submit", sendMail);
