(function($) {
  Drupal.behaviors.mediaEmbedPreview = {
    attach: function (context, settings) {
      $('.media-oembed', context).once('mediaEmbedPreview-container').each(function() {
        var _self = this;
        _self.mediaEmbedPreview = {};
        _self.mediaEmbedPreview.shown = false;

        // Toggle embed code on and off.
        _self.mediaEmbedPreview.toggle = function() {
          if (!_self.mediaEmbedPreview.shown) {
            _self.mediaEmbedPreview.show();
          }
          else {
            _self.mediaEmbedPreview.hide();
          }
        };

        // Drop embed code.
        _self.mediaEmbedPreview.show = function() {
          // Set embed code shown to true.
          _self.mediaEmbedPreview.shown = true;
          var embed_code = $(_self).attr('data-oembed-code') || false;
          // If there is an embed code available.
          if(embed_code) {
            // Fix the embed code to be protocol-relative (avoid mixed-content
            // errors in IE). Support "src" (IFRAME, EMBED) and "value" (PARAM)
            // attributes. Use window.location.protocol because older versions
            // of IE are utterly terrible with "//" URIs, and throw mixed
            // content errors for these schemes.
            embed_code = embed_code.replace(/(src|value)=(["'])https?:\/\//gi, "$1=$2" + window.location.protocol + "//");
            _self.$embed = $(embed_code);

            // Hide our preview and insert the embed code.
            $(_self).hide().after(_self.$embed);
          }
        };

        // Remove embed code.
        _self.mediaEmbedPreview.hide = function() {
          if (_self.mediaEmbedPreview.shown) {
            // Remove the oembed and re-show our preview. We need to first set
            // innerHTML = '' for IE, which otherwise doesn't actually remove
            // the Flash/etc. object (and it continues to play in the
            // background).
            _self.$embed.html('').remove();
            $(_self).show();
          }
          _self.mediaEmbedPreview.shown = false;
        };

        $(_self).click(function (e) {
          _self.mediaEmbedPreview.show();
          return false;
        });
      });

      $('.yt_preview', context).once('mediaEmbedOtherMedia-hover').hover(function (e) {
            var img = $(this).find('.play-button-oembed-youtube').get(0);
            img.src = img.src.replace('play_button.png', 'play_button_hover.png');
          },
          function (e) {
            var img = $(this).find('.play-button-oembed-youtube').get(0);
            img.src = img.src.replace('play_button_hover.png', 'play_button.png');
          }
      );
    }
  };
})(jQuery);;
