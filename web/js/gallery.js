function gallery_init()
{
	/* The gallery-css stylesheet initially hides the expand button so that non-JavaScript
	 * browsers see all images, as a JavaScript-capable browser we then remove that rule and
	 * insert our own that selectively hides the button or the additional images.
	*/
	
	var style_elem = document.getElementById("gallery-css");
	
	var sheet = style_elem.sheet;
	
	sheet.deleteRule(0);
	
	sheet.insertRule(".gallery-expanded  .gallery-expand-button  { display: none; }", sheet.cssRules.length);
	sheet.insertRule(".gallery-collapsed .gallery-collapsed-hide { display: none; }", sheet.cssRules.length);
}

function gallery_expand(elem)
{
	/* Walk up from the current element until we find the containing gallery. */
	var container_elem = elem;
	while(!elem.className.match(/(^|\s+)gallery-(collapsed|expanded)(\s+|$)/))
	{
		elem = elem.parentNode;
	}
	
	/* Replace the gallery-collapsed (or gallery-expanded) class with gallery-expanded. */
	elem.className = elem.className.replace(/(^|\s+)gallery-(collapsed|expanded)(\s+|$)/, "$1gallery-expanded$3");
}

gallery_init();
