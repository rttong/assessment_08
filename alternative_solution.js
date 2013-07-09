// Keep document.ready clean!
$(document).ready(function () {
  var board = new Board();

  $('#roller button.add').on('click', function() {
    board.addDie(new Die(6));
  });

  $('#roller button.roll').on('click', function() {
    board.rollAll();
    board.render();
  });
});

// Creates new die
function Die(number_of_sides) {
  this.sides = number_of_sides;
  this.displaying = 0;
};

// Rolls die
Die.prototype.roll = function() {
  this.displaying = Math.floor((Math.random()*this.sides)+1);
};

function Board() {
  this.dice = [];
};

Board.prototype.addDie = function(die) {
  this.dice.push(die);
  $('.dice').append('<div class="die">0</div>');
}

Board.prototype.rollAll = function() {
  // loop through all dice and call .roll()
  for (var i in this.dice) {
    this.dice[i].roll();
  }
}

Board.prototype.render = function() {
  var theBoard = this;
  $('.die').each(function(index, die) {
    $(die).text(theBoard.dice[index].displaying);
  });
}

