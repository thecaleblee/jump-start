<?php
  # Page Vars
  $active_link = '/';

  # get presence data
  include( 'helpers/get-user-presence.php' );

  # get activity data
  include( 'helpers/get-user-activity.php' );

  # get friends data
  include( 'helpers/get-user-friends.php' );

  # get game clip data
  include( 'helpers/get-user-game-clips.php' );

  # get game clip data
  include( 'helpers/get-user-gamer-card.php' );

  include 'templates/top.php';
?>
<script>
  var X = X || {};

  X.playerData = {};

  X.playerData.presence = <?php print_r( $gamer_presence ) ?> || '';

  X.playerData.gamerCard = <?php print_r( $gamer_card ) ?> || '';

  X.playerData.activity = <?php print_r( $gamer_activity ) ?> || '';

  X.playerData.friends = <?php print_r( $gamer_friends ) ?> || '';

  X.playerData.gameClips = <?php print_r( $gamer_game_clips ) ?> || '';

</script>
<section>
  <div class="container">
    <h1>Player Profile</h1>
    <p>Let's find out some more information about this specific player.</p>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
