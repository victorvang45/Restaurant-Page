import restaurantImg from "./images/arkhan_deli_2.jpg";
export function createHome(contentDiv) {
    //Loading Home Page

// summary div
const summaryDiv = document.createElement('div');
summaryDiv.setAttribute('id', "summary");

const restaurantName = document.createElement('h1');
restaurantName.textContent = "Arkhan's Thai Cuisine"

const image = document.createElement('img');
image.src = restaurantImg;
image.setAttribute('id', 'main-page');


contentDiv.appendChild(summaryDiv);
summaryDiv.appendChild(restaurantName);
summaryDiv.appendChild(image);
summaryDiv.appendChild(createParagraph('A restaurant that serves dishes from Lao, Thailand, and other Asian countries. There are a variety of dishes to choose from. Hopefully you find something you like!'));

// hours div
const hoursDiv = document.createElement('div');
hoursDiv.setAttribute('id', 'hours');

const hoursLabel = document.createElement('h2');
hoursLabel.textContent = 'Hours';

contentDiv.appendChild(hoursDiv);
hoursDiv.appendChild(hoursLabel);
hoursDiv.appendChild(createParagraph('Monday: 11:00 AM - 7:00 PM'));
hoursDiv.appendChild(createParagraph('Tuesday: Closed'));
hoursDiv.appendChild(createParagraph('Wednesday - Saturday: 11:00 AM - 7:00 PM'))
hoursDiv.appendChild(createParagraph('Sunday: 11:00 AM - 6:00 PM'));


// location div
const locationDiv = document.createElement('div');
locationDiv.setAttribute('id', 'location');

const locationLabel = document.createElement('h2');
locationLabel.textContent = 'Location';

contentDiv.appendChild(locationDiv);
locationDiv.appendChild(locationLabel);
locationDiv.appendChild(createParagraph('107 Military Ave, Green Bay, WI 54303'));


}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;

}
