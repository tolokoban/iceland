"use strict";

var $ = require("dom");
var PM = require("tfw.binding.property-manager");
var FloatingButton = require("tfw.view.floating-button");


exports.start = function() {
  var args = require("tfw.url-args").parse();
  var zoom = parseInt( args.z );
  var rows = parseArray( args.r );
  var cols = parseArray( args.c );

  var map = $.div('map');
  $.css( map, {
    width: (cols.length * 512) + "px",
    height: (rows.length * 512) + "px"
  });
  rows.forEach(function (row, y) {
    var top = y * 512;
    cols.forEach(function (col, x) {
      var left = x * 512;
      var img = $.tag("img");
      $.css(img, {
        left: left + "px",
        top: top + "px",
        display: "none"
      });
      img.onload = function() {
        $.css(img, {display: "block"});
      };
      img.src = "css/main/tiles/" + zoom + "-" + row + "-" + col + ".jpg";
      $.add( map, img );
    });
  });
  $.add( document.body, map );
  $.add( document.body, createBackButton() );
};


/**
 * @param {string} code - `1202-1203`
 */
function parseArray( code ) {
  var pieces = code.split( "-" );
  var piece1 = parseInt( pieces[0] );
  var piece2 = parseInt( pieces[pieces.length - 1] );
  var min = Math.min( piece1, piece2 );
  var max = Math.max( piece1, piece2 );
  var arr = [];
  for( var v=min; v<=max; v++ ) {
    arr.push( v );
  }
  return arr;
}


function createBackButton() {
  var btn = new FloatingButton({ icon: "back" });
  PM( btn ).on( "action", function() {
    history.back();
  });
  return btn;
}
