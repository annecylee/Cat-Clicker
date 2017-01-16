var buttonNameList = [];

var model = {
  cats: [
      {name: 'Lucy', src: 'images/cat1.jpg', count: 0},
      {name: 'Lily', src: 'images/cat2.jpg', count: 0},
      {name: 'Fizs', src: 'images/cat3.jpg', count: 0},
      {name: 'Bruno', src: 'images/cat4.jpg', count: 0},
      {name: 'Silvia', src: 'images/cat5.jpg', count: 0}
    ],

  buttons: function(){
    for(var i = 0; i < (model.cats.length); i ++){
      buttonNameList.push(model.cats[i].name)
    }
    return buttonNameList
  }
};

var octupos = {
  getButtons: function(){
    for(i=0; i<buttonNameList.length; i++){
      buttonView.renderButtons(buttonNameList[i])
    }
  },

  buttonClicked: function(){
    for(cat of model.cats){
      $('#button_' + cat.name).click((function(currentCat) {
        return function(){
          catView.renderCat(currentCat)
          catView.renderCount(currentCat.count)
        }
      })(cat))
    }
  },

  catClicked: function(){
    for(cat of model.cats){
      $('.cat-image').on('click', '#image_' + cat.name, (function(currentCat) {
        return function() {
          currentCat.count += 1;
          catView.renderCount(currentCat.count)
        }
      })(cat))
    }

  }

};

var buttonView = {

  renderButtons: function (name){
    $('.cat-container').append("<li class='cat-list' id='button_" + name + "'><p class =''>" + name + "</p>\n"
                                  + "</li>\n");
  }
}

var catView = {

      renderCat: function(cat) {
        $('.cat-image').attr({
          src: cat.src,
          id: 'image_' + cat.name
        })
      },

      renderCount: function(count) {
        $('.favorte-counts').text(count + " likes")
      }

}
model.buttons();
octupos.getButtons();
octupos.buttonClicked();
octupos.catClicked();







// var Cat = function(name, src, id, count){
//   this.name = name;
//   this.src = src;
//   this.id = id;
//   this.count = count;
// };
//
// Cat.prototype.createCat = function(){
//   $('.cat-container').append("<li class='cat-list' id='" + this.name + "'><p class = 'name'>" + this.name + "</p>\n"
//                                 + "<p class = 'clicks' id = '" + this.id + "_clicks'" + ">Clicks: 0</p>\n"
//                                 + "<img class='cat-image' src='" + this.src
//                                 + "' alt='Cat Image'>\n" + "</li>\n"
//                                 );
// };
//
// Cat.prototype.showCat = function(){
//   $('.contain-container').append("<img class='cat-image' id='" + this.id + "' src='" + this.src + "' alt='Cat Image'>")
// }
//
//
// Cat.prototype.isClicked = function(){
//   $('#' + this.name).click((function(count, id, src){
//     return function(){
//       count += 1;
//       $('.cat-image').attr({
//         src: src,
//         id: id
//       })
//     }
//   })(this.count, this.id, this.src))
//
//   // $('#' + this.id).click((function(count){
//   //   $('.favorte-counts').text(count + " likes")
//   // })(this.count));
// }
//
//
//
//
// var catList = []
// var firstCat = new Cat('Lucy', 'images/cat1.jpg', 'cat1', 0);
// var secondCat = new Cat('Lily', 'images/cat2.jpg', 'cat2', 0);
// var thirdCat = new Cat('Fizs', 'images/cat3.jpg', 'cat3', 0);
// var forthCat = new Cat('Bruno', 'images/cat4.jpg', 'cat4', 0);
// var fifthCat = new Cat('Silvia', 'images/cat5.jpg', 'cat5', 0);
// catList.push(firstCat, secondCat, thirdCat, forthCat, fifthCat);
//
// var catsNum = catList.length
// for(var i = 0; i < catsNum; i++){
//   var currentCat = catList[i]
//   $('.cat-container').append("<li class='cat-list' id='" + currentCat.name + "'>" + currentCat.name + "</li>")
//   currentCat.isClicked()
//
//   $( "#" + currentCat.id ).click((function() {
//     $('.favorte-counts').text(currentCat.count + " likes")
//   })());
// }
