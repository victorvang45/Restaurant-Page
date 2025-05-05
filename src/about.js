import restaurantImg from "./images/arkhan_deli.jpg";
export function createAbout(contentDiv) {

// about div
const summaryDiv = document.createElement('div');
summaryDiv.setAttribute('id', "about");

const contact = document.createElement('h2');
contact.textContent = "Contact Us"

const image = document.createElement('img');
image.src = restaurantImg;
image.setAttribute('id', 'about-image');




contentDiv.appendChild(summaryDiv);
summaryDiv.appendChild(contact);
summaryDiv.appendChild(createParagraph('Phone: 123-123-4567'))
summaryDiv.appendChild(createParagraph('Email: arkhanthaicusinedemo@gmail.com'))
summaryDiv.appendChild(createParagraph('Location: 107 Military Ave, Green Bay WI 54303'))
summaryDiv.appendChild(image);


}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;

}