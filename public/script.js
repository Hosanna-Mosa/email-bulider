// script.js

// document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("titleText");
    const contentInput = document.getElementById("contentText");
    const textColorInput = document.getElementById("titleTextColor");
    const textColorInput1 = document.getElementById("contentTextColor");
    const bgColorInput = document.getElementById("bgColor");
    const fontSizeSelect = document.getElementById("titleFontSize");
    const contentSizeSelect = document.getElementById("contentFontSize");
    const moveUpButton = document.getElementById("moveUp");
    const moveDownButton = document.getElementById("moveDown");
    const emailLayout = document.getElementById("emailLayout");
    const contentText = document.getElementById("myParagraph");
    const titleText = document.getElementById("myTitle");
    const photoBtn = document.getElementById("photo-btn");
    const img = document.getElementById("top-img");
    const imgFont = document.getElementById("fontImg");
    const downBtn = document.getElementById("down-btn");

    contentText.addEventListener("click" , () =>{
        
        contentInput.value = contentText.textContent;
        
    });
    
    contentText.addEventListener("input" , () =>{
        
      contentInput.value = contentText.textContent;
      
  });
    
    
    let fullSrc = document.querySelector(".top img").src;
    let imgSrc = fullSrc.substring(fullSrc.lastIndexOf("/") + 1);
    
    
    if(imgSrc && imgSrc != "indexjs.html?"){
      // photoBtn.style.display = "none";
      img.style.visibility = "visible";
    
      imgFont.style.visibility = "hidden";
      
    }else{
      // photoBtn.style.display = "block";
      img.style.visibility = "hidden";
      imgFont.style.visibility = "visible";
      
    }

    
    titleText.addEventListener("input" , () =>{
    
      titleInput.value = titleText.textContent;
    });
   

    titleText.addEventListener("click" , () =>{
        
        
        titleInput.value = titleText.textContent;
        
    });
    
    
  
    // Update title and content dynamically
    titleInput.addEventListener("input", () => {
      document.getElementById("myTitle").innerText = titleInput.value;
    });
  
    contentInput.addEventListener("input", () => {
      document.getElementById("myParagraph").innerText = contentInput.value;
    });
  
    // Update text color
    textColorInput.addEventListener("change", () => {
 
      
      titleText.style.color = textColorInput.value;
      
    });

    textColorInput1.addEventListener("change", () => {
 
      
      contentText.style.color = textColorInput1.value;
      
    });
  
  
    // Update font size
    fontSizeSelect.addEventListener("change", () => {
      titleText.style.fontSize = fontSizeSelect.value;
    });

    contentSizeSelect.addEventListener("change", () => {
      contentText.style.fontSize = contentSizeSelect.value;
    });
  
    
//   });
  


