"use strict";

var delayedSnapping = 0;

module.exports = function() {
  document.body.onscroll = function( evt ) {
    if( delayedSnapping ) clearTimeout( delayedSnapping );
    delayedSnapping = setTimeout( snap, 200 );
    var scrollLeft = document.body.scrollLeft;
  };
};


function snap() {
  delayedSnapping = 0;
  console.log("SNAP!");
  var parent = document.body.parentElement;
  var scrollLeft = parent.scrollLeft;
  var pageWidth = document.body.clientWidth;
  var n = Math.floor( 0.5 + scrollLeft / pageWidth );
  parent.scrollLeft = n * pageWidth;
}
