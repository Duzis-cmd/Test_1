var ItemsToSell = {
    pics: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg", "/img/7.jpg"],
    titles: ["Happy programmer's day!", "Happy knowledge day! Be smart!", "How to survive during knowledge day?", "Attention!", "Welcome to the website!", "Listen to the NTR SEO", "Listen to the Bitworx SEO"],
    descriptions: ["This is a wonderful day! Let's study and dance!", "Let's start all over!", "", "", "Very serious talk!", "You might work for him one day"]
};

var ServicesToSell = {
    titles: ["No web classes this week!", "Random testing tomorrow", "Holiday!", "Finals are coming!", "Web will haunt you...", "Do it yourself!", "Welcoming gift here.", "Go hard, or go home.", "Game of trolls", "Horror in the dorm!", "Hey 1", "Hey 2"],
    descriptions: ["The teacher is abscent again", "So random!", "", "Prepare yourself!", "", "We know you can", "Grab while you can!", "No place for loosers", "New entertaining serial for students", "Beware...", "", "lol 1"]
};

var expandedNews = {
    pics: ["/cat1.jpg", "/cat2.jpg", "/cat3.jpg", "/cat4.jpg", "/cat5.jpg"],
    titles: ["Abscent teacher", "Test", "Chill", "Finals", "Haunting continues", "DIY for freshmen", "Receive gift by referals", "Study hard", "Bad practice to troll", "Can't sleep coz of this..."],
    texts: ["Their agonies filled the cave. They melted like waxen images, their facescollapsed inward on their sharp bones, their teeth protruded. One minute their faceswere mature, fairly smooth, alive, electric. The next minute a desiccation and burningaway of their flesh occurred. Sim thrashed in his mother's grasp. She held him. \"No, no,\" she soothed him,quietly, earnestly, looking to see if this, too, would cause her husband to rise again. With a soft swift padding of naked feet, Sim's father ran across the cave. Sim'smother screamed. Sim felt himself torn loose from her grasp. He fell upon the stones,rolling, shrieking with his new, moist lungs!",
        "\"I'll kill you!\" she said, glaring down at her husband. \"Leave my children alone.\"The old man spat tiredly, bitterly, and looked vacantly into the stone crib, at thelittle girl. \"One eighth of her life's over, already,\" he gasped. \"And she doesn't knowit. What's the use?\"As Sim watched, his own mother seemed to shift and take a tortured, smokelikeform. The thin bony face broke out into a maze of wrinkles. She was shaken with painand had to sit by him, shuddering and cuddling the knife to her shriveled breasts.",
        "Feed him. Make him grow.\"Sim, and images, out of the terror, floated to him.This was a planet next to the sun. The nights burned with cold, the days were liketorches of fire.",
        "He would live his entire life in the caves, with two hours a day outside. Here, instone channels of air he would talk, talk incessantly with his people, sleep never,think, think and lie upon his back, dreaming; but never sleeping.",
        "How had his people gotten into such a condition? As if at a button pressed, he saw an image. Metal seeds, blown across space froma distant green world, fighting with long flames, crashing on this bleak planet. Fromtheir shattered hulls tumbled men and women. When? Long ago. Ten thousand days.",
        "So this is life, thought Sim. It was not spoken in his mind, for he knew no words,he knew only images, old memory, an awareness, a telepathy that could penetrateflesh, rock, metal.",
        "The ship was deserted,whole, intact. It was the only ship of all these that had crashed that was still a unit,still usable. But it was so far away. There was no one in it to help. ",
        "They, too, stared longingly at that distant ship upon its high mountain, its metal soperfect it did not rust or age. The cliff groaned. Sim's father lifted his eroded, lifeless face. \"Dawn's coming,\" he said. IIMorning relaxed the mighty granite cliff muscles. It was the time of theavalanche.",
        "Lyte, rubbing her eyes, came and sat on the floor next to him, resting her headagainst his knee, drowsily. \"I had a dream,\" she said, looking off at something faraway. \"I dreamed I lived in caves in a cliff on a cold-hot planet where people grewold and died in eight days."]
};



var ItemsCount = 3;
var ServiceCount = 12;
var PagesCount = 3;
var ItemList;
var ServiceList;
var modalList;

function getRandom(max) {
    return Math.round(Math.random() * max);
}

function generatePageInfo() {
    ItemList = generateItemsToSellList();
    ServiceList = generateServicesList();
}

function modalGeneration() {
    modalList = generateModalList();
}

function generateModalList() {
    var pages = [];
    for (let i = 0; i < PagesCount; i++) {
        pages[i] = [];
        for (let j = 0; j < ServiceCount; j++) {
            let randNum = getRandom(expandedNews.titles.length - 1);
            let item = {
                pic: expandedNews.pics[randNum],
                title: expandedNews.titles[randNum],
                text: expandedNews.texts[randNum]
            };
            pages[i].push(item);
        }
    }
    return { pages: pages };
}


function colorFunc() {
    
}

function generateServicesList() {
    var pages = [];
    var temp;
    var checked = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    for (let i = 0; i < PagesCount; i++) {
        pages[i] = [];

        for (let j = 0; j < ServiceCount; j++) {
            let randNum = getRandom(ServicesToSell.titles.length - 1);
            temp = checked[j];
            checked[j] = checked[randNum];
            checked[randNum] = temp;            
        }

        for (let j = 0; j < ServiceCount; j++) {
            let item = {
                title: ServicesToSell.titles[checked[j]],
                description: ServicesToSell.descriptions[checked[j]]
            };            
            pages[i].push(item);
        }
    }
    return { pages: pages };
}

function generateItemsToSellList() {
    var pages = [];
    for (let i = 0; i < PagesCount; i++) {
        pages[i] = [];
        for (let j = 0; j < ItemsCount; j++) {
            let randNum = getRandom(ItemsToSell.pics.length - 1);
            let item = {
                pic: ItemsToSell.pics[randNum],
                title: ItemsToSell.titles[randNum],
                description: ItemsToSell.descriptions[randNum]
            };
            pages[i].push(item);
        }
    }
    return { pages: pages };
}

function renderCards(pageNumber) {
    for (i = 0; i < ItemsCount; i++) {
        var card = $("#itemTemplate > div").clone(true);
        var target = $(".cards-container .first-wrapper");
        card.find("img").attr("src", ItemList.pages[pageNumber][i].pic);
        card.find("a").attr("data-number", i);
        card.find("a").attr("data-page", pageNumber);
        card.find(".card-title").html(ItemList.pages[pageNumber][i].title);
        card.find(".card-text").html(ItemList.pages[pageNumber][i].description);
        target.find(".row").append(card);
    }
    for (i = 0; i < ServiceCount; i++) {
        var card1 = $("#serviceTemplate > div").clone(true);
        var target1 = $(".cards-container .second-wrapper");
        card1.find("a").attr("data-number", i);
        card1.find("a").attr("data-page", pageNumber);
        card1.find(".card-title").html(ServiceList.pages[pageNumber][i].title);
        card1.find(".card-text").html(ServiceList.pages[pageNumber][i].description);
        target1.find(".row").append(card1);
    }    
    
}

var currentPage = 1;
var numberOfPages = 3;

function switchPage(event) {
    var pageText = event.target.innerText;
    var previousPage = currentPage;
    console.log(pageText);
    switch (pageText) {
        case "Previous":
            if (currentPage !== 1) {
                currentPage--;
            } else {
                return;
            }
            break;
        case "Next":
            if (currentPage !== numberOfPages) {
                currentPage++;
            } else {
                return;
            }
            break;
        default:
            if (previousPage === pageText * 1) {
                return;
            } else {
                currentPage = pageText * 1;
            }
            break;
    }

    console.log(currentPage);
    var page = $(".cards-content-wrapper");
    page.collapse('toggle');

    setTimeout(() => {
        page.find(".first-wrapper > .row").html("");
        page.find(".second-wrapper > .row").html("");
        renderCards(currentPage - 1);
        page.collapse('toggle');
    }, 500);
}
/*
$('#newsModal').on('show.bs.modal', function () {
    var modal = $(this);
    modalGeneration();
    for (i = 0; i < ServiceCount; i++) {
        var card2 = $("#modalTemplate > div").clone(true);
        var target2 = $("#newsModal .modal-body");
        card2.find("a").attr("data-number", i);
        card2.find("a").attr("data-page", 0);
        card2.find(".media-title").html(modalList.pages[0][i].title);
        target2.find(".media-title").append(card2);
    }
    modal.removeAttr("hidden");      
});
*/
$(function () {
    generatePageInfo();     
    $(".page-item").on("click", switchPage);
    renderCards(0);
});





