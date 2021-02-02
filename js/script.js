const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

let cat = new Object();

//Question 1
cat.complain = "meow!";

//Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => paragraph.style.color = "red");

//Question 6 
var resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

//Question 7
function printNameProperty(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

printNameProperty(cats);


function createCats(cats) {
    var tempList;
    for (let i = 0; i < cats.length; i++) {
        tempList +=
            `<div>
            <h5>${cats[i].name}</h5>
            <p>${cats[i].age ?? "Age Unknown"}</p> 
            </div>`
    }
    return tempList;
}

document.querySelector("div.cat-container").innerHTML = createCats(cats);



