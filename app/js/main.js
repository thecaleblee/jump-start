document.addEventListener("DOMContentLoaded", function(event) {
  // set up form
  getUserProfile();
});

// TODO rename
// this function really sets up the Gamer Profile Form
function getUserProfile() {
  var $form = $('#user-profile');
  var $button = $form.find('button');
  var url = '/helpers/get-user-info.php?';
  var $view = $('#user-card');
  var options = {};
  var loadingIcon = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';

  $button.on('click', function(e) {
    e.preventDefault();

    // toggle classes for UI
    $view.removeClass('loaded');
    $view.addClass('loading');

    // add in loading icon while ajax call is being made
    $view.append(loadingIcon);

    // set up query information
    options.view = 'user-card';
    options.gamer_tag = $form.find('[name="gamer_tag"]').val();
    options.query = 'gamer_tag=' + options.gamer_tag;

    // ajax request
    ajaxRequest(url, options);
  });
}

// TODO is this generic enough to be used with all routes?
function ajaxRequest(url, options) {
  // set up ajax call
  var xmlhttp = new XMLHttpRequest();

  // prepare the ajax call
  xmlhttp.onreadystatechange = function(data) {

    // if we get good results store the object
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      options.response = obj;
    }
  };

  // build url with query
  var endpoint = url + options.query;

  // open and send request
  xmlhttp.open("GET", endpoint, true);
  xmlhttp.send();

  // after ajax is returned trigger renderView with that data
  xmlhttp.onloadend = function(pe) {
    renderView(options);
  }
}

// Render view after receiving data
function renderView(options) {
  var $view = $('#' + options.view);

  // clear the view in case something was already there
  $view.empty();

  // remove loaded class
  $view.removeClass('loaded, loading');

  // determine which view to render
  if (options.view == 'user-card') {
    renderGamerCard($view, options);
  }
}

// Render gamer card
function renderGamerCard($view, options) {
  var playerData = options.response;
  var content = '<div class="content"></div>';
  var button = '<a class="btn btn-primary btn-block" href="/player-profile.php?id=' + playerData.id + '">View Player Profile</a>';

  // setup tenure level
  var gamer_tenure_level = '<span class="badge pull-right">' + playerData.TenureLevel + '</span>';

  // create gamer tag title
  var gamer_tag_title = '<h4>' + playerData.GameDisplayName + gamer_tenure_level + '</h4>';

  // create gamer tag pic
  var gamer_tag_pic = '<img alt="' + playerData.GameDisplayName + '" src="' + playerData.GameDisplayPicRaw + '" class="img-responsive gamer-logo" />';

  // create gamer score
  var gamer_score = playerData.Gamerscore;

  // create reputation
  var gamer_reputation = '<h5 class="bg-success">' + playerData.XboxOneRep + ' with Gamerscore of <b>' + gamer_score + '</b></h5>';

  // add title and reputation to container
  $view.append(gamer_tag_title);
  $view.append(gamer_reputation);

  // add in content container
  $view.append(content);

  // make it a jQuery object
  var $viewContent = $view.find('.content');

  // add in gamer pic and button to more player info
  $viewContent.append(gamer_tag_pic);
  $viewContent.append(button);

  // view is ready to be seen now
  $view.addClass('loaded');
}
