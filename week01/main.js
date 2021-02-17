const links = [
    {
        label: "week1 notes",
        url: "week1/index.html"
    },

    {
        label: "week2 notes",
        url: "week2/index.html"
    },

    {
        label: "week3 notes",
        url: "week3/index.html"
    }


]

document.getElementById("ol1").innerHTML = 
"<li><a href = " + links[0].url +">" +
links[0].label + "</a></li>" +
"<li><a href = " + links[1].url +">" +
links[1].label + "</a></li>" +
"<li><a href = " + links[2].url +">" +
links[2].label + "</a></li>";

