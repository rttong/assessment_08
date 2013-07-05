// $(document).ready(function() {
//   $('#roller button.add').on('click', add);
//   $('#roller button.roll').on('click', roll);

// function add() {
//     $('.dice').append('<div class="die">0</div>');
//   };

// function roll() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   };

// });


// Keep document.ready clean!
$(document).ready(function () {
  $('#roller button.add').on('click', function() {
    myDie.adding('.dice');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(index, die) {
     myDie.roll();
     myDie.swap(this);
    });
  });
});

// New die with six sides
myDie = new Die(6);

// Creates new die
function Die(number_of_sides) {
  this.sides = number_of_sides;
  this.displaying = 0;
};

// Rolls die
Die.prototype.roll = function() {
  this.displaying = Math.floor((Math.random()*this.sides)+1);
};

// Adds die
Die.prototype.adding = function(container) {
  $(container).append('<div class="die">0</div>');
};

// Replaces existing die
Die.prototype.swap = function(element) {
  $(element).text(this.displaying);
};
