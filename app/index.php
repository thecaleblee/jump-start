<?php
  # Page Vars
  $active_link = '/';
?>
<?php include 'templates/top.php' ?>
<section>
  <div class="container">
    <h1>Xbox Live API</h1>
    <p>Time to revisit this project with a better understanding.</p>
    <h2>Purpose</h2>
    <p>I'd like to create an app where people can interact with the Xbox Live API. There are some really neat things that you can do with it, such as:</p>
    <ul>
      <li>View details about your account</li>
      <li>View your recorded screenshots and game clips</li>
      <li>Send messages with Xbox Live</li>
      <li>Check out game stats and compare against friends</li>
      <li>and much more!</li>
    </ul>
    <div class="row">
      <div class="col-sm-6">
        <h3>Find Xbox User</h3>
        <p>Pull up an Xbox user and find out their current status as well as a few other details about them.</p>
        <form id="user-profile">
          <input name="gamer_tag" id="gamer_tag" type="text" />
          <button type="submit">Find</button>
        </form>
      </div>
      <div class="col-sm-6">
        <div class="user-card-container">
        </div>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
