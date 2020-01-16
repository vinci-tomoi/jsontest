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


  // ID 属性からエレメントを取得する
	var input_file = document.getElementById("load");
	var input_return = document.getElementById("path");

	// ------------------------------------------------------------
	// 値が変化したときに実行されるイベント
	// ------------------------------------------------------------
	input_file.onchange = function (){

    input_return.value = input_file.value;
    console.log(input_file.value);

	};

});


