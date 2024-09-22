$(document).ready(function () {
        $('#conceptsTable').DataTable({
            "columns": [
                null,
                { "searchable": true, "visible": false } // Make the hiddenLabel column searchable but not visible
            ]
        });
    });