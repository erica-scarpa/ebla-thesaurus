$(document).ready(function () {
  $('#conceptsTable').DataTable({
    "columns": [
      null,                               
      { "searchable": true, "visible": false, "width": "20%" }, 
      { "searchable": true, "visible": true, "width": "80%" }
    ]
  });
});
