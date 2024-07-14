document.querySelector('#search_input').oninput = function() {
    let val = this.value.trim();
    let searchItems = document.querySelectorAll('.search_searched_answers li');
    if (val != ' ') {
        searchItems.forEach(function(elem) {
            if (elem.IinnerText.search (val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        searchItems.forEach(function(elem) {
          elem.classList.add('hide');
        });
    }
}