let text = document.querySelector(".text");
let textPara = document.querySelector(".text-paragraph");
let mainHeading = document.querySelector(".main-heading");
let buttonGet = document.querySelector(".Get-Button");
let mainText=document.querySelector(".main-text");
let spanText=document.querySelector(".span-text");
let image1=document.querySelector(".image1");
let image2=document.querySelector(".image2");
let missionImage=document.querySelector(".mission-image");
let cardText=document.querySelector(".card-text");
let missiondescriptionText=document.querySelector(".mission-description-text");
let watchButton=document.querySelector(".watcg-button");
let visionHeading=document.querySelector(".vision-section-heading");
let visionImage=document.querySelector(".vision-section-description");
let visionText=document.querySelector(".vision-image");
let teamHeading=document.querySelector(".team-heading");
let teamText=document.querySelector(".team-section-description");
let team=document.querySelector(".team")

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
sr.reveal(missionImage, { delay: 200 });
sr.reveal(cardText, { delay: 300 });
sr.reveal(missiondescriptionText, { delay: 400 });
sr.reveal(watchButton, { delay: 600 });
sr.reveal(text);
sr.reveal(visionHeading, { delay: 200 });
sr.reveal(visionImage, { delay: 400 });
sr.reveal(visionText);
sr.reveal(teamHeading, { delay: 200 });
sr.reveal(teamText, { delay: 200 });
sr.reveal(team);
var copy=document.querySelector(".team-slide").cloneNode(true);
document.querySelector(".team").appendChild(copy);

