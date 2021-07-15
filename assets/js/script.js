var diplayInfoA = $(".displayInfoA");
var displayInfoB = $(".displayInfoB");

//This displays more info fo the Weather project
displayInfo.on("click", function(){
        /*
        <h4>Weather app"</h4>
        <ul>
            <li>
                <a href="https://salvadordiaz1222.github.io/weather-dashboard/" 
                    target="_blank">
                Visit the deployed version
                </a>
            </li>
            <li>
                <a href="https://github.com/salvadordiaz1222/weather-dashboard"
                    target="_blank">
                Visit the GitHub repository
                </a>
            </li>
        </ul>
        */
    var createTitle = document.createElement("h4")
    createTitle.innerText = "Weather app"
    var createList = document.createElement("ul")
    var deployed = document.createElement("li")
    var deployedLink = document.createElement("a")
    deployedLink.setAttribute("href", "https://salvadordiaz1222.github.io/weather-dashboard/")
    deployedLink.setAttribute("target", "_blank")
    deployedLink.innerText = "Visit the deployed version"
    var gitHub = document.createElement("li")
    var gitHubLink = document.createElement("a")
    gitHubLink.setAttribute("href", "https://github.com/salvadordiaz1222/weather-dashboard")
    gitHubLink.setAttribute("target", "_blank")
    gitHubLink.innerText = "Visit the GitHub repository"
//crear a
//agregar href
//appendchild li
    createList.appendChild(deployed)
    var main = document.getElementById("mainParent")
    main.innerText = ""
    main.appendChild()
})

//This displays more info for the work scheduler project
