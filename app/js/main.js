document.addEventListener("DOMContentLoaded", function(event) {
  // set up form
  getUserProfile();
});

function getUserProfile() {
  var $form = $('#user-profile');
  var $button = $form.find('button');

  $button.on('click', function(e) {
    e.preventDefault();

    // set up query information
    var gamerTag = $form.find('[name="gamer_tag"]').val();
    var query = 'gamer_tag=' + gamerTag;

    // set up ajax call
    var xmlhttp = new XMLHttpRequest();

    // prepare the ajax call
    xmlhttp.onreadystatechange = function() {

      // if we get good results store the object
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        console.log(obj);
      }
    };

    // create url path
    var url = "/helpers/get-user-info.php?";
    // add query parameters
    url = url + query;

    // open and send request
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  });

}
