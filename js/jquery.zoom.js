/**
 * jQuery Zoom v1.7.21
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 * Author: Jack Moore - http://www.jacklmoore.com/
 */

(function($) {

  $.fn.zoom = function(options) {

    return this.each(function() {

      var settings = {
        url: $(this).data("url") || $(this).attr("src"),
        on: "mouseover", // other options: 'grab', click', 'toggle'
        touch: true,
        duration: 120,
        onZoomIn: null,
        onZoomOut: null
      };

      if (options) {
        $.extend(settings, options);
      }

      var zoom = $("<div/>")
        .addClass("zoom")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: $(this).width(),
          height: $(this).height(),
          border: "1px solid black",
          "background-size": $(this).width() + "px " + $(this).height() + "px",
          "background-repeat": "no-repeat",
          "background-position": "0px 0px"
        })
        .appendTo($(this).parent());

      var image = $(this);

      var zoomIn = function() {
        var offset = image.offset();

        zoom.css({
          "background-image": "url('" + settings.url + "')",
          "background-position": -offset.left + "px " + -offset.top + "px",
          "background-repeat": "no-repeat"
        });

        zoom.animate(
          {
            opacity: 1,
            top: 0,
            left: 0,
            width: image.width(),
            height: image.height()
          },
          settings.duration,
          function() {
            if ($.isFunction(settings.onZoomIn)) {
              settings.onZoomIn.call(this);
            }
          }
        );
      };

      var zoomOut = function() {
        zoom.animate(
          {
            opacity: 0,
            top: 0,
            left: 0,
            width: image.width(),
            height: image.height()
          },
          settings.duration,
          function() {
            if ($.isFunction(settings.onZoomOut)) {
              settings.onZoomOut.call(this);
            }
          }
        );
      };

      if (settings.on === "grab") {
        image.on("mousedown.zoom", function(event) {
          if (event.which === 1) {
            $(this).data("dragging", true);
            image.addClass("grabbing");
          }
        });

        $(document).on("mousemove.zoom", function(event) {
          if (image.data("dragging")) {
            var mousePosition = {
              x: event.pageX,
              y: event.pageY
            };
            var offset = image.offset();
            var position = {
              x: mousePosition.x - offset.left,
              y: mousePosition.y - offset.top
            };
            zoom.css({
              "background-image": "url('" + settings.url + "')",
              "background-position": -position.x + "px " + -position.y + "px",
              "background-repeat": "no-repeat"
            });
          }
        });

        $(document).on("mouseup.zoom", function() {
          image.data("dragging", false);
          image.removeClass("grabbing");
        });
      } else if (settings.on === "click") {
        image.on("click.zoom", function() {
          zoomIn();