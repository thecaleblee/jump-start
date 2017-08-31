<?php
  # pull in conf file
  include "../../conf/config.php";

  # set url for cURL 
  $url = 'https://xboxapi.com/v2/accountxuid';

  # set token
  $token = $api_key;

  # set curl headers
  $headers = array();
  $headers[] = "x-auth: $token";
  $headers[] = "Content-Type: application/json";
  $headers[] = "Cache-Control: no-cache";
  $headers[] = "Access-Control-Allow-Origin: *";

  # init the curl
  $ch = curl_init();

  # setting curl options
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  # storing the data from the curl
  $data = curl_exec($ch);

  # closing curl connection
  curl_close($ch);

  #printing response to screen
  echo $data;
?>
