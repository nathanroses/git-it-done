fetch("https://api.github.com/users/nathanroses/repos").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
});

fetch("https://api.github.com/users/nathanroses/followers").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
});