document.addEventListener("DOMContentLoaded", function(event) {

  // set up any tooltips
  initTooltips();

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



// main ajax request
// collects data and stores in options
// passes options along to render function
function ajaxRequest(url, options) {
  // set up ajax call
  var xmlhttp = new XMLHttpRequest();

  // prepare the ajax call
  xmlhttp.onreadystatechange = function(data) {

    // if we get good results store the object
    if ( this.readyState == 4 && this.status == 200) {
      // check to see if we got an empty response
      if (!this.responseText) {
        console.log('AJAX: There was no response on ' + this.responseURL + '!');

        console.log('AJAX: Here are your options: ', options);

        return;
      }

      // create response object
      var obj = JSON.parse(this.responseText);

      // store to options object
      options.response = obj;
    }
  };

  // build url with query
  var endpoint = url;

  // add query parameter
  endpoint = url + options.query;

  // open and send request
  xmlhttp.open("GET", endpoint, true);
  xmlhttp.send();

  // after ajax is returned trigger renderView with that data
  xmlhttp.onloadend = function(pe) {
    renderView(options);
  }
}

// get user friend data
function getFriendData() {
  var id;

  id = getParams('id');

  var url = '/helpers/get-user-friends.php?';
  var options = {};

  options.view = 'user-friends';
  options.query = 'id=' + id;

  ajaxRequest(url, options);
}

// get user presence data
function getPresenceData() {
  var id;

  id = getParams('id');

  var url = '/helpers/get-user-presence.php?';
  var options = {};

  options.view = 'user-presence';
  options.query = 'id=' + id;

  ajaxRequest(url, options);
}

// get user game clip data
function getGameClipData() {
  var id;

  id = getParams('id');

  var url = '/helpers/get-user-game-clips.php?';
  var options = {};

  options.view = 'user-game-clips';
  options.query = 'id=' + id;

  ajaxRequest(url, options);
}



// RENDER FUNCTIONS
// decide which render function to run
// options contains a view for routing 
function renderView(options) {
  var $view = $('#' + options.view);
  var $fetching = $('.fetching');

  // clear the view in case something was already there
  $view.empty();

  // remove loaded class
  $view.removeClass('loaded, loading');

  $fetching.addClass('hidden');

  // determine which view to render
  if ( options.view == 'user-card' ) {
    renderGamerCard( $view, options );
  } else if ( options.view == 'user-game-clips') {
    renderGamerClips( $view, options ); 
  } else if ( options.view == 'user-presence' ) {
    renderPresenceData($view, options);
  } else if ( options.view == 'user-friends' ) {
    renderFriendData($view, options);
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

// render friend data
function renderFriendData($view, options) {
  console.log('renderFriendData options: ', options);

  var $friendList = $('#friend-list');

  $friendList.removeClass('text-muted').addClass('loaded');;

  var $friendListContainer = $('#friend-list-table');

  $friendListContainer.addClass('loaded');

  setTimeout(function() {
    $friendList.addClass('complete');
  }, 1500);
}

// render presence data
function renderPresenceData($view, options) {
  console.log( 'renderPresenceData options: ', options );

  var $presence = $('#presence');

  $presence.removeClass('text-muted').addClass('loaded');

  var $presenceContainer = $('#presence-table');

  $presenceContainer.addClass('loaded');

  setTimeout(function() {
    $presence.addClass('complete');
  }, 1500);
}

// render game clips
function renderGamerClips($view, options) {
  console.log( 'renderGamerClips options: ', options );

  var $gameList = $('#game-clips');

  $gameList.removeClass('text-muted').addClass('loaded');

  var $gameContainer = $('#game-clip-table');

  $gameContainer.addClass('loaded');

  setTimeout(function() {
    $gameList.addClass('complete');
  }, 1500)
}

// initiate BS tooltips
function initTooltips() {
  $('[data-toggle="tooltip"]').tooltip();
}

// grab specific query paramater
function getParams(name) {
  var urlParams = new URLSearchParams(window.location.search);

  var value = '';

  value = urlParams.get(name);

  return value;
}
