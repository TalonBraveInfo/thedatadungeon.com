function show_section(elementName) {
    var dropdowns = document.getElementsByClassName("dd-subsection");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }

    document.getElementById(elementName).classList.toggle("show");
}
