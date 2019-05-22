
function getCategory(category){
  var string = "<div class='category'><div class='flexRow categoryHeader'><h1>" + category + "</h1></div></div>";
  return $(string);
}

function getItem(price, name, description){
  var string = "<div class='item flexColumn'><div class='itemHeader flexRow'><h1>" + name + "</h1><h1>" + price + "</h1> </div> <div class='itemBody flexRow'> <p> " + description + "</p> </div> </div>"
  return $(string);
}
function menuGenerator(menu){
  for( var category in menu ) {
    var categoryElement = getCategory(category);
    for ( var i in menu[category] ) {

      var item = menu[category][i];
      var itemElement = getItem(item.price, item.name,  item.description);
      categoryElement.append(itemElement);
    }
    $("#menu").append(categoryElement);
  }
}
