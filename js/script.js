//var projects = [
//  {
//    name: "Baking Website",
//    p: "Passion Project",
//    image: "../Images/baking.png"
//  },
//  {
//    name: "Capstone Project: FESC Redesign",
//    p: "Koala, Google Charts, APIs & Vue.js",
//    image: "../Images/redesign.png"
//  },
//  {
//    name: "E-Commerce Website",
//    p: "JavaScript",
//    image: "../Images/winterscarves.png"
//  },
//  {
//    name: "'Client' Site Plan and HTML",
//    p: "Group Project",
//    image: "../Images/weekeight.png"
//  },
//  {
//    name: "Interests Page",
//    p: "Bootstrap",
//    image: "../Images/weeknine.png"
//  },
//  {
//    name: "Mockup Project",
//    p: "CSS",
//    image: "../Images/weekfour.png"
//  },
//  {
//    name: "Modular Product Listing",
//    p: "Interactive CSS",
//    image: "../Images/weeksix.png"
//  }
//]

//
//
//function projectsList() {
//
//  // Select element with id "target"
//  var container = document.getElementById("target")
//
//  //Create product listing from a database
//  for (var i = 0; i < projects.length; i++) {
//    var div = document.createElement("div")
//    //Add class
//    div.classList.add("itemdiv")
//
//    var h2 = document.createElement("h2")
//    h2.innerHTML = projects[i].name
//    h2.classList.add("itemh2")
//
//    var p = document.createElement("p")
//    p.innerHTML = projects[i].p
//    p.classList.add("itemp")
//
//    var img = document.createElement("img")
//    img.setAttribute("src", projects[i].image)
//    img.setAttribute("alt", projects[i].name)
//    img.classList.add("itemimg")
//
//
//    div.appendChild(h2)
//    div.appendChild(img)
//    div.appendChild(p)
//    container.appendChild(div)
//  }
//}
//
//projectsList()
