$(function() {
  
  $('#save').click(() => {
    var form = $('form');
    var formData = form.serializeArray();
    var formJson = JSON.stringify(formData);
    setBlobUrl("download", formJson);
  });

  const setBlobUrl = (id, content) => {

    var blob = new Blob([ content ], { "type" : "application/x-msdownload" });

    window.URL = window.URL || window.webkitURL;
    $("#" + id).attr("href", window.URL.createObjectURL(blob));
    $("#" + id).attr("download", "user.json");

  };


});


