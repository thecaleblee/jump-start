<?php
  # Page Vars
  $active_link = '/';

  # grab some intial data from API call
  # so we can show something while making the other requests 
  require( 'helpers/get-user-gamer-card.php' );

  $player_data = json_decode( $gamer_card );

  include 'templates/top.php';
?>
<script>
  document.addEventListener( "DOMContentLoaded", function(event) {
    getFriendData();
    getGameClipData();
    getPresenceData();
  });
</script>
<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="gamer-card-container">
          <h2>
            <?php print_r( $player_data->gamertag ) ?> 
            <span class="badge pull-right" data-toggle="tooltip" data-placement="top" title="Tier"><?php print_r( $player_data->tier ) ?></span> 
            <span class="badge pull-right" data-toggle="tooltip" data-placement="top" title="Gamerscore"><?php print_r( $player_data->gamerscore ) ?></span>
          </h2>
          <div class="content">
            <div class="row">
              <div class="col-sm-6">
                <img class="img-responsive avatar" alt="<?php print_r( $player_data->gamertag) ?>" src="<?php print_r( $player_data->avatarBodyImagePath ) ?>" />
              </div>
              <div class="col-sm-6">
                <div class="player-details">
                <?php

                  # TODO all this logic could be put into an include

                  # It is not required to have these filled out
                  # so make sure they exist before printing the HTML


                  # Check to see if they have a Name 
                  if ( strlen( $player_data->name ) > 0 ) {
                    print_r( '<h5>Name</h5>');
                    print_r( "<p>$player_data->name</p>");
                  }

                  # Check to see if they have a Location 
                  if ( strlen( $player_data->location ) > 0 ) {
                    print_r( '<h5>Location</h5>');
                    print_r( "<p>$player_data->location</p>");
                  }

                  # Check to see if they have a Bio 
                  if ( strlen( $player_data->bio ) > 0 ) {
                    print_r( '<h5>Bio</h5>');
                    print_r( "<p>$player_data->bio</p>");
                  }

                  # Check to see if they have a Motto
                  if ( strlen( $player_data->motto ) > 0 ) {
                    print_r( '<h5>Motto</h5>');
                    print_r( "<p>$player_data->motto</p>");
                  }
                ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="player-details-container loading">
          <h3>Player Details</h3>
          <ul>
            <li id="friend-list" class="text-muted">Friend List</li>
            <li id="game-clips" class="text-muted">Game Clips</li>
            <li id="presence" class="text-muted">Presence</li>
            <li id="activity" class="text-muted">Activity</li>
          </ul>
          <div class="content">
            <div class="fetching">
              <h5>Fetching Data</h5>
              <p>Please hold while we fetch some more details about this player.</p>
              <i class="fa fa-spinner fa-spin"></i>
            </div>
            <div id="player-detail-container">
              <table id="user-friends" class="table">
                <tr>
                  <td>No Data</td>
                </tr>
              </table>
              <table id="user-game-clips" class="table">
                <tr>
                  <td>No Data</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
