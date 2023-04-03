(function($)
{
 	Drupal.behaviors.lu_advanced_search = {
		attach: function (context, settings) {
			var doAjax = null,
				keypresses = 0,
				doBlur = null,
				clicking = 0;
      $('#edit-search-block-form--2').parent().append($('#lu_advanced_search'));
			$('#edit-search-block-form--2', context).keypress(function (e) {
        if ($('html').hasClass('media-md')) {
          var results = '';
          if (doAjax) {
            clearTimeout(doAjax);
          }
          var delay = 1000 / ++keypresses + 300;
          doAjax = setTimeout(function(){
            var search_data = $('#edit-search-block-form--2').val();
            clicking = 0;
            keypresses = 0;
            if($('#edit-search-block-form--2').val() != "") {
              if($('#edit-search-block-form--2').val().length != 0) {
                $('#lu_advanced_search').hide();
              }
              $.get(
                '/lu_advanced_search/ajax/' + search_data,
                function(data) {
                  $('#lu_advanced_search').children().not('#lu_advanced_search_www_google_ajax, .lu-advanced-search-google-ajax-results-container:first').remove();
                  $('#lu_advanced_search').show().append(data[1].data);
                },
                'json'
              );
            }
            else {
              $('#lu_advanced_search').hide();
            }}, delay
          );
        }
        else {
          return;
        }
			});
			$('body').click(function() {
				if (clicking--) {
					return;
				}
				doBlur = setTimeout(function(){
					$('#lu_advanced_search').hide();
				}, 10);
			});
			$('#block-search-form').click(function(e) {
				clicking = 1;
			});
		}
	};
})(jQuery);;
function executeQuery() {
/* 	if (!window.google || !google.search || !google.search.cse || !google.search.cse.element) {
  setTimeout(executeQuery, 10);
  return;
  } */

  var input_map = {
    'lu_advanced_search_www_google': '#edit-keys',
    'lu_advanced_search_www_google_ajax': '#edit-search-block-form--2'
  };

  var elements = google.search.cse.element.getAllElements();
  for (var i in elements) {
    var element = elements[i];
    var domElement = document.getElementById(element.gname);
    if (domElement && document.createEvent && domElement.dispatchEvent) {
      var load_event = document.createEvent('Event');
      load_event.initEvent('gcse-init', true, true);
      domElement.dispatchEvent(load_event);
    }
    if (input_map[i]) {
      var input = jQuery(input_map[i]).get(0);
      if (input.value == '') {
        element.clearAllResults();
      } else {
        element.execute(input.value);
      }
    }
  }

  return false;
}

(function() {
  window.__gcse = {callback: executeQuery};
  var cx = '000199681718178194994:h-xjlna9ulq';
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
    '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
}) ();
;
(function ($) {
    // If the page is not already on HTTPS, there is no point.
    if (location.protocol !== "https:") return;
    
    // If the 'MutationObserver' object doesn't exist, don't even bother.
    if (!('MutationObserver' in window)) return;
    
    function cleanLinks($el) {
      
      function _clean() {
        // Find each link and process it.
        var httpRegex = /http:\/\/(www\.)?lawrence\.edu/g;
        $el.find("a").each(function(i,e) {
          // If the link doesn't match, don't change it.
          if (!httpRegex.test(e.href)) return;
          
          var fixLink = function(s) {
            // Use "$1" to reflect whether or not the link contains "www.".
            return s.replace(httpRegex, "https://$1lawrence.edu");
          };
          
          e.href = fixLink(e.href);
          if (e.className.indexOf("gs-title") !== -1) {
            // If it's a Google link, fix the data links also
            e.setAttribute("data-cturl", fixLink(e.getAttribute("data-cturl")));
            e.setAttribute("data-ctorig", fixLink(e.getAttribute("data-ctorig")));
          }
        });
      }
      
      // Create a MutationObserver to watch for DOM changes.
      var mutationObserver = new MutationObserver(function(mutationsList) {
        // If there were no mutations (which should never happen), then abort.
        if (mutationsList.length === 0) return;
        _clean();
      });
      mutationObserver.observe($el[0], { childList: true, subtree: true });
      _clean();
    }
    
    Drupal.behaviors.webform_disable_select_options_client_form = {
      attach: function(context, settings) {
        $("#lu_advanced_search, .lu-advanced-search-results-container", context)
          .once("lu_advanced_search_http_fix")
          .each(function() {
            cleanLinks($(this, context));
          });
      }
    };
})(jQuery);
;
(function ($) {
  $(document).ready(function($) {
    $('#lu-instagram-widget .item').first().addClass('active');
    $('#lu-instagram-widget .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<4;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
    });
  });
}(jQuery));;
(function($) {
 	Drupal.behaviors.lu_lazy_loader = {
		attach: function (context, settings) {
      // $(window).load(function(e) { window.lu_lazy_loader_onload_flag = 1; });
      var window_load = function(e) {
        if (window_load.running) {
          return;
        }
        window_load.running = true;
        // Touching body.className is necessary for IE8 to actually reflow the
        // page and apply dynamically added stylesheets.
        document.body.className = document.body.className;
        // Remove window.onload to prevent it from firing multiple times -
        // browsers will actually call window.onload functions even after
        // jQuery has run all load listeners (jQuery also runs window.onload).
        // This is sort of kludgy but if readyState is complete, the browser has
        // probably already run window.onload events, so prevent double-firing.
        if (document.readyState == 'complete') {
          window.onload = null;
        }
        // Tell jQuery to dispatch window load event, to allow any newly-added
        // scripts to attach themselves as necessary.
        $(window).load();
        // We're sure at this point that window.onload has been run, so remove
        // it to prevent the browser from firing it again on window load.
        window.onload = null;
        window_load.running = false;
      };
      // make sure js && || css is not already loaded
			var loadedJS = Drupal.settings.ajaxPageState.js;
			var loadedCSS = Drupal.settings.ajaxPageState.css;	
      var add_js = function(js) {
        $.each(js, function(key, value) {
 					if (loadedJS && !loadedJS[value]) {
						var script = document.createElement('script');
						script.type = 'text/javascript';
						script.src = value;
						$(script)
              .load(function() { window_load(); })
              .appendTo('head');
            // Mark the JS as having been added to the page.
            loadedJS[value] = 1;
					}
				});
      }
      var add_css = function(css) {
        $.each(css, function(key, value) {
 					if (loadedCSS && !loadedCSS[value]) {
            $('<link>')
              .appendTo('head')
              .load(function() { window_load(); })
              .attr({type : 'text/css', rel : 'stylesheet'})
              .attr('href', value);
            // Mark the CSS as having been added to the page.
            loadedCSS[value] = 1;
					}
				});
      }
			if ($('.lu-tabs').once('lu_lazyloader_tabs').length > 0) {
        add_js(Drupal.settings.lu_lazy_loader.tabsJsPaths);
				add_css(Drupal.settings.lu_lazy_loader.tabsCssPaths);
				// Invoke UI Tabs once the JS and CSS finish loading.
        var invoke_tabs = true;
        $(window).load(function() {
          if (!invoke_tabs) return;
          if (jQuery && jQuery.fn && jQuery.fn.tabs) {
            invoke_tabs = false;
            jQuery(function(){jQuery(".lu-tabs").once('lu_lazyloader_tabs_invoke').tabs();});
          }
        });
			}
			if ($('.infoShade').once('lu_lazyloader_infoshade').length > 0) {
				add_js(Drupal.settings.lu_lazy_loader.infoShadeJsPaths);
        add_css(Drupal.settings.lu_lazy_loader.infoShadeCssPaths);
			}
      if ($('a.lu-audio').once('lu_lazyloader_audiolink').length > 0) {
				add_js(Drupal.settings.lu_lazy_loader.luAudioJsPaths);
        add_css(Drupal.settings.lu_lazy_loader.luAudioCssPaths);
			}
      // Invoke window.load() ourselves, since IE (and maybe others) don't run
      // window.load() when retrieved from cache + the browser's Back button.
      window_load();
      setTimeout(window_load, 500);
		}
	};
})(jQuery);;
(function ($) {
  $(document).ready(function($) {

  });
}(jQuery));
;
(function($)
{
 	Drupal.behaviors.mm_panels = {
		attach: function (context, settings) {
      if ($('#panels-ipe-control-container').length) {
        $('.tabs--secondary li:contains("Reorder content")').once('mm_panels_reorder').click(function(){
          if (!$('#panels-ipe-edit-control-form').length) {
            $('#panels-ipe-customize-page').click();
          }
          else {
            alert(Drupal.t('This is a Panelized page. Please order content through the Panels editor.'));
          }
          return false;
        });
      }
    }
  }
}
)(jQuery);;
