require("bootstrap");
const createEl = require("./domMethods");
const { createLoremIpsum, dateConverter } = require("./helpers");



$(document).ready( function() {
if (window.location.href.indexOf("schedule") > -1) {

    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    function onEventClick(calEvent) {

    const start = dateConverter(calEvent.start);
    localStorage.setItem("currentEvent", JSON.stringify({
        title: calEvent.title,
        subtitle: start,
        description: calEvent.description,
        image: calEvent.image
    }))
    
    window.location.href = "events.html"

    }

    const events = [
    {
        title: 'Taco Tuesday',
        start: new Date(y, m+1, 20),
        description: `Taco Tuesday Info Goes Here! More Taco Tuesday Info here!`,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        title: 'Nashville Night Out',
        start: new Date(y, m+1, 20),
        description: 'Nashville Night Out info here! Nashville Night Out info here',
        image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        title: 'Happy Hour',
        start: new Date(y, m+1, 20),
        description: `Happy Hour Info here! Happy Hour Info here!`,
        image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    
    },
    {
        title: 'WVU Football',
        description: `Game Day Info`,
        start: new Date(y, m+1, 21),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'WVU Basketball',
        description: `Game Day Info`,
        start: new Date(y, m+1, 22),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Other WVU Sports',
        description: `All things pasta.`,
        start: new Date(y, m+1, 22),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: `Saint Patrick's Day`,
        description: `St Paddys Day Info`,
        start: new Date(y, m+1, 22),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Halloween',
        description: `Halloween Info`,
        start: new Date(y, m+1, 23),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Cinco de Mayo',
        description: `Game Day Info`,
        start: new Date(y, m+1, 23),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    ]

    const pageEl = document.querySelector("#page");

    function createCards(events) {
      const cards = events.map((event) => (
          createEl("div", {class: "card-body clickable", onClick: () => onEventClick(event)}, 
          createEl("h5", {class: "card-title"}, event.title || ""),
          createEl("p", {class: "card-text"}, event.description || createLoremIpsum()),
          createEl("hr")
          )
      ))
      return cards
    }
    
    const containerEl1 = createEl("div", {class: "container mt-5"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Weekly Specials"),
        ...createCards(events.slice(0,3))
    )
    )

    const containerEl2 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Game Day Info"),
        ...createCards(events.slice(3,6))
    )
    )

    const containerEl3 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Be On The Lookout For Our Annual Events"),
        ...createCards(events.slice(6,9))
    )
    )

    pageEl.appendChild(containerEl1);
    pageEl.appendChild(containerEl2);
    pageEl.appendChild(containerEl3);
  }})