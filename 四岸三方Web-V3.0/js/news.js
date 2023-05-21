// your_script.js
function switchTab(tabNumber) {
    // get all the tab contents and tab buttons
    var tabContents = document.getElementsByClassName("news_list");
    var tabButtons = document.getElementsByClassName("news_tab_item");
    // loop through them and hide all the tab contents and deactivate all the tab buttons
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
      tabButtons[i].className = tabButtons[i].className.replace(" news_tab_item--active", "");
    }
    // show the corresponding tab content and activate the corresponding tab button based on the tab number
    tabContents[tabNumber - 1].style.display = "block";
    tabButtons[tabNumber - 1].className += " news_tab_item--active";
  }
  