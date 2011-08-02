		
/*
 * Various patches and JS additions needed by wikis in the OD wikia
 */

// A fix for table.js to allow it to handle dates which include HH:MM time
Sort.date.formats[0] = {
	re : /(\d{2,4})-(\d{1,2})-(\d{1,2})\D*((\d\d):(\d\d))?/,
	f  : function(x) {
		var d = new Date(Sort.date.fixYear(x[1]), +x[2], +x[3]);
		if (x[5] > 0) d.setHours(x[5]);
		if (x[6] > 0) d.setMinutes(x[6]);
		return d.getTime();
	}
}

( function( $, mw ) {
	organicdesign = {
		// OD functions to run after page load
		init: function() {
		alert('baz');
			$('.foo').css('color','yellow');

			// Make vanadium validation not work for RecordAdmin searches
			$('#ra-find').attr('onClick','Vanadium={}');

			// Improve RA record name inputs
			// - normal record-id is always hidden (css)
			// - if a record-name row exists, then it should be visible and mandatory only if record-id also exists
			if ($('#record-name')) {
				if ($('#ra-record').val()) {
					$('#record-name input').removeClass(':required');
					$('#record-name').hide();
				} else {
					$('#record-name input').addClass(':required').val($('#ra-title').val());
					var submit = $('form.recordadmin').attr('onSubmit');
					if( submit ) submit = submit + ';'; else submit = '';
					$('form.recordadmin').attr('onSubmit', submit + '$("#ra-title").val($("#record-name input").val() );');
				}
			}
		}
	}
} )( jQuery, mediaWiki );

if( typeof addOnloadHook == 'function' ) addOnloadHook(odOnLoadHook);