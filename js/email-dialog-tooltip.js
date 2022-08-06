(function() {
	
	setTimeout(function() {
		$('body').one('mouseenter', '.global-email-dialog', function() {
			tooltip.InfoToolTip($(this).find('#i-rollover-container'));

			$('body').on('click', '.ui-icon-closethick', function () {
				$('.ui-dialog').removeClass('global-email-dialog');
			});
		});
	}, 1000);
	

	var tooltip = {

		InfoToolTip: function($target) {
			var $el = $target.find('.infoIcon');
			var $tooltip = $el.children('.toolTip');
			var $contactLink = $el.find('.contact a');
			// $el.append($tooltip);
			// $target.empty().append($el);
			// Footer hovers
			$tooltip.hover(
				function() {},
				hideTooltip
			);

			$el.hover(
				showTooltip,
				hideTooltip
			);
			
			$el.focus(function() {
				showTooltip();
				$contactLink.focus();
			});
			$contactLink.blur(function() {
				hideTooltip();
				$('#email').focus();
			});
			
			function showTooltip() {
				if (!$tooltip.hasClass('hover')) {
					$tooltip.addClass('hover').attr('aria-hidden', 'false');
				}
				if (!$(this).hasClass('hover')) {
					$(this).toggleClass('hover');
				}
			}
			
			function hideTooltip() {
				$tooltip.removeClass('hover').attr('aria-hidden', 'true');
				$el.removeClass('hover');
			}
			
		}
	}

})();