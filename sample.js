$(function() {
  
  $('#save').click(function() {
    var name = document.getElementById("name").value;
    setBlobUrl("download", name);
  });

  const setBlobUrl = (id, content) => {

    var blob = new Blob([ content ], { "type" : "application/x-msdownload" });

    window.URL = window.URL || window.webkitURL;
    $("#" + id).attr("href", window.URL.createObjectURL(blob));
    $("#" + id).attr("download", "tmp.txt");

  };


});


// $('save').click(() => {
//   var form = $('form');
//   var formData = form.serializeArray();
//   var formJson = JSON.stringify(formData);
  
//   localStorage.setItem('form_data', formJson);
// });

