var model = {
  //cat is displaed currently
  currentCat: null,
  //cat list
  cats: [
        {name: 'Lucy', src: 'images/cat1.jpg', count: 0},
        {name: 'Lily', src: 'images/cat2.jpg', count: 0},
        {name: 'Fizs', src: 'images/cat3.jpg', count: 0},
        {name: 'Bruno', src: 'images/cat4.jpg', count: 0},
        {name: 'Silvia', src: 'images/cat5.jpg', count: 0}
      ],
};

var octupos = {

  init: function(){
    adminView.init();
    catView.init();
    catListView.init();
  },
  //get cat lists
  getCats: model.cats,

  getCurrentCat: function(){
    return model.currentCat;
  },

  setCurrentCat: function(cat){
     model.currentCat = cat;
  },

  setCurrentCatName: function(name){
    model.currentCat.name = name
  },

  setCurrentCatSrc: function(src){
    model.currentCat.src = src

  },

  setCurrentCatCount: function(count){
    model.currentCat.count = count
  },

  incrementCounter: function(){
    model.currentCat.count++;
    catView.render();
    adminView.render();
  }

};

var adminView = {
  init: function(){
    // $('#admin-button').hide()
    $('.hide').hide()
  },

  render: function(){
    var currentCat = octupos.getCurrentCat();
    $('#admin-button').show()
    $('#admin-button').click(function(){
      $('.hide').show()
    })

    $('#cancel-button').click(function(){
      $('.hide').hide()
    })

    $('#name-input').val(currentCat.name);
    $('#url-input').val(currentCat.src);
    $('#click-input').val(currentCat.count);


  $('#save-button').click(function(){
    octupos.setCurrentCatName($('#name-input').val());
    octupos.setCurrentCatSrc($('#url-input').val());
    octupos.setCurrentCatCount($('#click-input').val());
    catView.render();
    catListView.render();
    $('.hide').hide();

   })
  }
};

var catView = {

  init: function(){
    this.catImage = $('.cat-image')
    this.counts = $('.favorte-counts')
    //if image is clciked, call function to increase counter
    this.catImage.click(function() {
      octupos.incrementCounter();
    });
  },
  //render cat image and its count
  render: function(){
    var currentCat = octupos.getCurrentCat();
    this.catImage.attr({
      src: currentCat.src,
      id: 'image_' + currentCat.name
    });
    this.counts.text(currentCat.count + " likes");
  }
};

var catListView = {

  init: function(){
    this.catList = $('.cat-container');
    // this.catList = document.getElementsByClassName('cat-container');
    this.render();
  },

  render: function(){
    var cat, elem, i
    var cats = octupos.getCats;
    //render cat list buttons
    // this.catList.innerHTML = '';
    this.catList.empty();

    for(i = 0; i < cats.length; i ++){
      cat = cats[i];
      elem = document.createElement('li');
      elem.className = 'cat-list';
      elem.id = 'button_' + cat.name;
      elem.textContent = cat.name
      this.catList[0].appendChild(elem)
      // elem = this.catList.append("<li class='cat-list' id='button_" + cat.name + "'><p class =''>" + cat.name + "</p>\n" + "</li>\n");

      //render cat if binded button is clicked
      $('#button_' + cat.name).click((function(catCopy) {
        return function(){
          octupos.setCurrentCat(catCopy);
          catView.render();
          adminView.render();
        }
      })(cat));
    }
  }
};

octupos.init();
