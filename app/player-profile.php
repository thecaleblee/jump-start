<?php
  # Page Vars
  $active_link = '/player-profile';

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
        <?php include( 'templates/_gamer-card.php' ) ?>
      </div>
      <div class="col-sm-6">
        <div class="player-details-container loading">
          <h3>Player Details</h3>
          <ul class="list-unstyled call-list">
            <li id="friend-list" class="text-muted">
              Friend List
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </li>
            <li id="game-clips" class="text-muted">
              Game Clips
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </li>
            <li id="presence" class="text-muted">
              Presence
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </li>
          </ul>
          <div class="content">
            <div class="fetching">
              <h5>Fetching Data</h5>
              <p>Please hold while we fetch some more details about this player.</p>
              <i class="fa fa-spinner fa-spin"></i>
            </div>
            <div id="player-detail-container">
              <div id="game-clip-table" class="panel panel-default">
                <div class="panel-heading">Recorded Game Clips</div>
                <div class="panel-body">
                  <p>Take a look at the game clips they have recorded. Surely they did it for a reason.</p>
                </div>
                <table class="table">
                  <tr>
                    <td>No Data Yet</td>
                  </tr>
                </table>
              </div>
              <div id="friend-list-table" class="panel panel-default">
                <div class="panel-heading">Friend List</div>
                <div class="panel-body">
                  <p>Take a look at their friend list to see if you know any one.</p>
                </div>
                <table class="table">
                  <tr>
                    <td>No Data Yet</td>
                  </tr>
                </table>
              </div>
              <div id="presence-table" class="panel panel-default">
                <div class="panel-heading">Player Presence</div>
                <div class="panel-body">
                  <p>What kind of player presence do you bring to the table? See whether they are online or not and a few other things.</p>
                </div>
                <table class="table">
                  <tr>
                    <td>No Data Yet</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
