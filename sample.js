var form = $('form');
var formData = form.serializeArray();
var formJson = JSON.stringify(formData);

localStorage.setItem('form_data', formJson);
