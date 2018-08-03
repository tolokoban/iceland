"use strict";

require("offline");
require("font.josefin");

var $ = require("dom");
var PM = require("tfw.binding.property-manager");
var Sat = require("sat");
var Button = require("tfw.view.button");
var ScrollSnap = require("iceland.scroll-snap");


exports.start = function() {
  $.registerAndApplyTheme( "iceland", {
    bgP: "#4eabfb",
    bgS: "#FF803F"
  });
  ScrollSnap();
  replaceLinkWithButtons();
};


function replaceLinkWithButtons() {
  var children, k, child;
  children = document.querySelectorAll("a");
  for( k=0; k<children.length; k++ ) {
    child = children[k];
    var href = child.getAttribute("href");
    if( href.charAt(0) === '#' ) {
      replaceChild( child, href.substr( 1 ) );
    }
  }
  
  children = document.querySelectorAll("header");
  for( k=0; k<children.length; k++ ) {
    child = children[k];
    $.addClass( child, "thm-bgPD", "thm-ele8" );
  }
  
  children = document.querySelectorAll("article");
  for( k=0; k<children.length; k++ ) {
    child = children[k];
    $.addClass( child, "thm-bg3" );
  }
  
  children = document.querySelectorAll("h1");
  for( k=0; k<children.length; k++ ) {
    child = children[k];
    $.addClass( child, "thm-bgSL" );
  }
}


function replaceChild( anchor, href ) {
  var button = new Button({
    text: anchor.textContent,
    flat: false,
    icon: "show"
  });
  PM( button ).on( "action", function() {
    Sat.show( href );
  });
  $.replace( button, anchor );
}
