/**
 * Simplify the personal details screen
 */
$(document).ready( function() {
	$('#profile-edit-marital-wrapper').replaceWith('<div id="simplifydetails1">');
	$('#dislikes-jot-end').replaceWith('</div>');
	$('#simplifydetails1').hide();
	$('#music-jot-wrapper').prepend('<div id="simplifydetails2">');
	$('#profile-edit-submit-end').append('</div>');
	$('#simplifydetails2').hide();
	
});