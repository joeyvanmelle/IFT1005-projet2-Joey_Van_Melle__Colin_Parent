// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    loadAccueil(data);
    loadRecipes(data);
    loadFooter(data);
    showArticles();
    showRecipies();
    showContact();
    //animateLogo();
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  document.title = data.documentTitle;
};

  // 
var loadAccueil = function(data) {
  $(data.articles).each(function(index, value) {
    $("#accueil").append(
      "<div id='article" + index + "'></div>"
    );
    $("#article" + index).append(
      "<h1>" + value.title +"</h1>" 
      + " <h2>" + value.subtitle +"</h2>" 
      + "<p>" + value.content +"</p>" 
     //+ "<img src='" + value.imgUrl +"'></p>"
    );
    if(value.imgUrl == "NO IMAGE, PLEASE FIND ONE :(") {
      $("#article" + index).append(
        "<img src='assets/placeholder.png'>"
      )
    } else {
      $("#article" + index).append(
        "<img src='" + value.imgUrl +"'></p>"
      )
    }
  })
}

var loadRecipes = function(data) {
  $(data.recipes).each(function(index, value) {
    $("#recettes").append(
      "<ul id='recette" + index + "'></ul>"
    );
    $("#recette" + index).append(
      "<li class='price'></li><li class='description'></li><li class='image'></li>"
    );
    $("#recette"+ index + " .price").append(
      "prix :" + value.price
    );
    $("#recette"+ index + " .description").append(
      "description :" + value.description
    );
    if(value.imgUrl == "") {
      $("#recette"+ index + " .image").append(
        "<img src='assets/placeholder.png'>"
      );
    } else {
      $("#recette"+ index + " .image").append(
        "<img src='" + value.imgUrl + "'>"
      )
    }
  })
}

var loadFooter = function(data) {
    $("footer").append(
      "<p> prénom: "+ data.firstName + "</p>" +
      "<p> nom: " + data.lastName + "</p>" +
      "<p> email : " + data.email + "</p>"
    )
}

var showArticles = function() {
  $("#home-button").click(function() {
    $("#recettes").hide();
    $("#contact").hide();
    $("#accueil").show();
  })
}

var showRecipies = function() {
  $("#recipes-button").click(function() {
    $("#accueil").hide();
    $("#contact").hide();
    $("#recettes").show();
  })
}

var showContact = function() {
  $("#contact-button").click(function() {
    $("#recettes").hide();
    $("#accueil").hide();
    $("#contact").show();
  })
}


$("logo").load(function(e){
  svgDOM = e.target.contentDocument;
}, false);

/*
var animateLogo = function() {
  new Vivus("logo", {type: "delayed", duration: 1000, start: "autostart"});
  window.onload = animateLogo;
}
*/

/**
 * server resquest for 
 */