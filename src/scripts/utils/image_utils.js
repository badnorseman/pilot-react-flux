import $ from "jquery";

export default {
  upload(data) {
    console.log(data)
    console.log(document.getElementById("image-upload-form"))
    console.log(document.getElementById("image-file"))

    $.ajax({
      url: "http://localhost:3000/api/products",
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data)
      }.bind(this),
      error: function(xhr, status, error) {
        console.error(xhr, status, error)
      }.bind(this)
    })
  }
}
