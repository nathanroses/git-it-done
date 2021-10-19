var userFormE1 = document.querySelector("#user-form");
var nameInputE1 = document.querySelector("#username");
var repoContainerE1 = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

var getUserRepos = function(user) {
    // format the github api url 
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
     fetch(apiUrl).then(function(response) {
         response.json().then(function(data) {
           displayRepos(data, user);
         });
     });
};


var formSubmitHandler = function(event) {
      event.preventDefault();
      //get value from input
      var username = nameInputE1.value.trim();

      if (username) {
          getUserRepos(username);
          nameInputE1.value = "";
      } else {
          alert("PLEASE enter a Github username");
      }

        console.log(event);
};

var displayRepos = function(repos, searchTerm) {
    repoContainerE1.textContent = "";
    repoSearchTerm.textContent = searchTerm;
};


userFormE1.addEventListener("submit", formSubmitHandler);
