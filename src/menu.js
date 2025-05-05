import restaurantImg from "./images/arkhan_deli_menu.jpg";
export function createMenu(contentDiv) {

// menu div
const summaryDiv = document.createElement('div');
summaryDiv.setAttribute('id', "menu");



const image = document.createElement('img');
image.src = restaurantImg;
image.setAttribute('id', 'menu-image');


contentDiv.appendChild(summaryDiv);
summaryDiv.appendChild(image);


}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;

}