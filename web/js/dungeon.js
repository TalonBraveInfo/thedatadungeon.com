// Copyright © 2026 Mark E. Sowden & Contributors
// Purpose: General purpose JS library for Data Dungeon features.
// Author:  Mark E. Sowden

// https://www.w3schools.com/howto/howto_js_filter_table.asp
function dd_table_search(inputName, tableName) {
    // Declare variables
    let input = document.getElementById(inputName);
    let filter = input.value.toUpperCase();
    let table = document.getElementById(tableName);
    let tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
