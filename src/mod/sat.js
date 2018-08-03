"use strict";

exports.show = show;

//================================================================================

var $ = require("dom");
var PM = require("tfw.binding.property-manager");
var FloatingButton = require("tfw.view.floating-button");

var map = null;
var container = null;


function show( href ) {
  ensureMapIsCreated();
  var args = parseArgs( href );
  if( !args ) {
    $.removeClass( map, "show" );
    return;
  }
  
  $.clear( container );

  if( typeof args.zoom === 'number' ) showTiles( args );
  else showImage( args );

  // Reveal.
  window.setTimeout(function() {
    $.addClass( map, "show" );
  }, 20);
}


function ensureMapIsCreated() {
  if( map ) return;

  map = $.div('map');
  container = $.tag('nav');
  $.add( map, container );
  $.add( map, createBackButton() );
  $.add( document.body, map );
};


/**
 * Args are found on the hash part of the URL.
 * Example: index.html#10,4512-4514,5620
 * { zoom: 10, rows: [4512, 4513, 4514], cols: [5620]}
 *
 * Example: index.html#plan.jpg
 * { src: "css/main/plan.jpg" }
 */
function parseArgs( href ) {
  var parts = href.split( "," );
  if( parts.length === 1 ) return { src: "css/main/" + parts[0] };

  var zoom = parseInt( parts[0] );
  var rows = parseArray( parts[1] );
  var cols = parseArray( parts[2] );
  return { zoom: zoom, rows: rows, cols: cols };
}


function showTiles( args ) {
  args.rows.forEach(function (row, y) {
    var top = y * 512;
    args.cols.forEach(function (col, x) {
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
      img.src = "css/main/tiles/" + args.zoom + "-" + row + "-" + col + ".jpg";
      $.add( container, img );
    });
  });
};


function showImage( args ) {
  var img = new Image();
  img.src = args.src;
  $.add( container, img );
}


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
  PM( btn ).on("action", function() {
    $.removeClass( map, "show" );
  });
  return btn;
}
