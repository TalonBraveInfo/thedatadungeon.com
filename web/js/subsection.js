function show_section(elementName) {
    let dropdowns = document.getElementsByClassName("dd-subsection");
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }

    let buttons = document.getElementsByClassName("dd-sub-menu-button");
    for (let i = 0; i < buttons.length; ++i) {
        let button = buttons[i];
        if (button.classList.contains("dd-sub-menu-button-selected")) {
            button.classList.remove("dd-sub-menu-button-selected");
        }
    }

    document.getElementById(elementName).classList.toggle("show");
    document.getElementById(elementName + '-button').classList.add("dd-sub-menu-button-selected");
}
