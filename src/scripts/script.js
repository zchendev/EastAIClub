function switchTabs(tabRef) {
	// Hide all tabs
	var tabs = document.getElementsByClassName("tab");

    // *VERY IMPORTANT* Please don't judge this loop
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].hidden = true;
		document.getElementById(tabs[i].id + "-button").classList.remove("active");
	}

	// Switch tabs
	document.getElementById(tabRef).hidden = false;
	document.getElementById(tabRef + "-button").classList.add("active");
}