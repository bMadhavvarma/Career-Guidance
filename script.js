let text = document.querySelector(".text");
let textPara = document.querySelector(".text-paragraph");
let mainHeading = document.querySelector(".main-heading");
let buttonGet = document.querySelector(".Get-Button");
let mainText=document.querySelector(".main-text");
let spanText=document.querySelector(".span-text");
let image1=document.querySelector(".image1");
let image2=document.querySelector(".image2");

const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 2000,
  reset: true,
});
sr.reveal(mainText,{ delay: 200 });
sr.reveal(spanText,{ delay: 200 });
sr.reveal(image1,{ delay: 800 });
sr.reveal(image2,{ interval: 200 });
sr.reveal(mainHeading);
sr.reveal(buttonGet,{ interval:200});
sr.reveal(textPara, { delay: 200 });

sr.reveal(text);
