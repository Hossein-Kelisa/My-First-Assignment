document.addEventListener('DOMContentLoaded', (event) => {     //wait until HTML loaded then Select elements from the DOM
    const mainButton = document.querySelector('.main-button');    // this element which is a button you’ll use to trigger actions on the page
    const dropdownContent = document.querySelector('.dropdown-content');  // Dropdown content to show/hide
    const horseDetails = document.getElementById('horse-details'); // Section to display horse details
    const horseLinks = document.querySelectorAll('.horse-link');   // Links to different horse breeds
    const horseImageSection = document.getElementById('horse-image');    // Section to display horse image
    const horseImage = document.getElementById('horse-img');   // Image element for horse picture

        //when the main button is clicked,  it will run the function inside {}//
    mainButton.addEventListener('click', () => { 
        dropdownContent.classList.toggle('show');
    }); 

       // Close the dropdown if the user clicks outside of the main button
    window.onclick = function(event) {    
        if (!event.target.matches('.main-button')) {  //checks if the element that was clicked is not a .main-button//
            if (dropdownContent.classList.contains('show')) {  // dropdown menu is currently open//
                dropdownContent.classList.remove('show');  //hides the dropdown menu
            }
        }
    };

      // Add click event listeners to each horse link
    horseLinks.forEach(link => {       
        link.addEventListener('click', (e) => {
            e.preventDefault(); //stay in this page//
            const horse = e.target.getAttribute('data-horse');
            updateHorseDetails(horse);
            updateHorseImage(horse);
            horseDetails.classList.add('show');
            horseImageSection.classList.add('show');
        });
    });

        // Function to update the horse details based on the selected breed
    function updateHorseDetails(horse) {
        let details = '';
        switch (horse) {
            case 'arabian':
                details = 'The Arabian or Arab Horse  is a breed of horse with historic roots on the Arabian Peninsula. With a distinctive head shape and high tail carriage, the Arabian is one of the most easily recognizable horse breeds in the world. It is also one of the oldest modern breeds. ';
                break;
            case 'thoroughbred':
                details = 'The Thoroughbred is a horse breed developed for horse racing. Although the word thoroughbred is sometimes used to refer to any breed of purebred horse, it technically refers only to the Thoroughbred breed. Thoroughbreds are considered "hot-blooded" horses that are known for their agility, speed, and spirit. The Thoroughbred, as it is known today, was developed in 17th- and 18th-century in England.';
                break;
            case 'quarter':
                details = 'Quarter Horse, is an American breed of horse that excels at sprinting short distances. Its name is derived from its ability to outrun other horse breeds in races of 1⁄4 mi (0.40 km) or less; some have been clocked at speeds up to 44 mph (71 km/h).';
                break;
            case 'appaloosa':
                details = 'The Appaloosa is an American horse breed best known for its colorful spotted coat pattern. There is a wide range of body types within the breed, stemming from the influence of multiple breeds of horses throughout its history.';
                break;
            case 'morgan':
                details = 'The Morgan horse is one of the earliest horse breeds developed in the United States. Tracing back to the foundation sire Figure, later named Justin Morgan after his best-known owner, as well as mares of the now-extinct Narragansett Pacer breed.';
                break;
            default:
                details = 'Select a horse from the list to see details here.';
        }

        horseDetails.querySelector('p').textContent = details;   // Update the text content of the details section
    }  

    // Function to update the horse image based on the selected breed
    function updateHorseImage(horse) {
        let imgUrl = '';
        switch (horse) {
            case 'arabian':
                imgUrl = 'https://imgur.com/5lyGG7U.jpg';
                break;
            case 'thoroughbred':
                imgUrl = 'https://imgur.com/lNvwWiU.jpg';
                break;
            case 'quarter':
                imgUrl = 'https://imgur.com/h5NPJYg.jpg';
                break;
            case 'appaloosa':
                imgUrl = 'https://imgur.com/vzsTzdP.jpg';
                break;
            case 'morgan':
                imgUrl = 'https://imgur.com/q39hper.jpg';
                break;
            default:
                imgUrl = '';
        }
        if (imgUrl) {     //if imgUrl has value//
            horseImage.src = imgUrl;   // Set the source of the image
            horseImage.style.display = 'block';   // Show the image
            horseImageSection.querySelector('p').style.display = 'none';   // Hide the placeholder text
        } else {
            horseImage.style.display = 'none';   // Hide the image if no URL is set
            horseImageSection.querySelector('p').style.display = 'block';  // Show the placeholder text
        }
    }
});