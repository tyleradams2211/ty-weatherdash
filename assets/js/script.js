var contPrevious = document.getElementById('contPrevious');
var searchBtn = document.getElementById('searchBtn');

searchText = document.getElementById('searchText');

const searchedState = JSON.parse(localStorage.getItem("searchedState")) || [];

var i = 0;

searchedState.forEach(element => {
    var prevLI = document.createElement('li');
    prevLI.classList = "prevRow";
    prevLI.textContent = searchedState[i].text;
    contPrevious.append(prevLI);
    ++i;
});

// Previous list creation
// const prevUL = document.createElement('ul');
// prevUL.classList = 'prevUL';
// prevUL.id = 'prevUL';
// contPrevious.append(prevUL);


searchBtn.addEventListener('click', () => {
    const getText = {
        text: searchText.value
    };
    searchedState.unshift(getText);
    localStorage.setItem("searchedState", JSON.stringify(searchedState)); 
    console.log(searchedState);
})

// for (var i = 0; i < localStorage.length; i++) {

// }