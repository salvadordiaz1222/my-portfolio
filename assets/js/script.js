var displayInfo = $(".displayInfo");
var displayInfoB = $(".displayInfoB");

let data = {
  a: {
    title: "Barber Shop app",
    appUrl: "https://barber-shop55.herokuapp.com/",
    gitUrl: "https://github.com/salvadordiaz1222/Barber-shop",
  },
  b: {
    title: "Weather app",
    appUrl: "https://salvadordiaz1222.github.io/weather-dashboard/",
    gitUrl: "https://github.com/salvadordiaz1222/weather-dashboard",
  },
  c: {
    title: "Today's Task",
    appUrl: "https://salvadordiaz1222.github.io/work-day-scheduler/",
    gitUrl: "https://github.com/salvadordiaz1222/work-day-scheduler",
  },
};

//---------------------------------------------This displays more info for each project---------------------------
displayInfo.on("click", function (event) {
  console.log({ event });
  let id = event.currentTarget.id;
  //currentTarget indicates the tag where the click was made
  //id gets the name of the id of the currentTarget tag
  console.log({ id });
  let info = data[id];
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
  var createTitle = document.createElement("h4");
  createTitle.innerText = info.title;
  var createList = document.createElement("ul");
  var deployed = document.createElement("li");
  var deployedLink = document.createElement("a");
  deployedLink.setAttribute("href", info.appUrl);

  deployedLink.setAttribute("target", "_blank");
  deployedLink.innerText = "Visit the deployed version";
  deployed.appendChild(deployedLink);
  var gitHub = document.createElement("li");
  var gitHubLink = document.createElement("a");
  gitHubLink.setAttribute("href", info.gitUrl);

  gitHubLink.setAttribute("target", "_blank");
  gitHubLink.innerText = "Visit the GitHub repository";
  gitHub.appendChild(gitHubLink);

  createList.appendChild(deployed);
  createList.appendChild(gitHub);
  var main = document.getElementById("mainParent");
  main.innerText = "";
  main.appendChild(createTitle);
  main.appendChild(createList);
});
