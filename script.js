var slideIndex = 1;
changeSlide(slideIndex);

function slideChange_Arrow(n)
{
    changeSlide(slideIndex += n);
}

function slideChange_Dot(n)
{
    changeSlide(n);
}

function changeSlide(n)
{
    var i;
    var slides = document.getElementsByClassName("spotlight-image");
    var dots = document.getElementsByClassName("dot");
    
    slideIndex = n;
    
    // set to 1 if over amount of images
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    
    // set to max pic number if it goes below 1
    if (n < 1)
    {
        slideIndex = slides.length;
    }
    
    // set all images to hidden
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    
    // change display to block
    slides[slideIndex-1].style.display = "block";
    
    
    // set all dots to blank
    for (i=0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" image-button-on", "");
    }
    
    // set correct button to on
    dots[slideIndex-1].className += " image-button-on";
    
}