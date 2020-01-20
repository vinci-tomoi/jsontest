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


  var form = document.forms.myform;

  form.myfile.addEventListener("change", function(e) {
    var result = e.target.files[0];

    var reader = new FileReader();
    reader.readAsText(result);
    reader.onload = function(e){
      var readJson = JSON.parse(reader.result);
      document.user.name.value = readJson[0].value;
      document.user.age.value = readJson[1].value;
    }

  })




});


