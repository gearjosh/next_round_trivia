<?php

$subject = $_REQUEST["subject"];
$from = $_REQUEST["senderEmail"];
$body = $_REQUEST["emailBody"];
$headers = array(
  "From" => $from
);
$subject = wordwrap($subject,70);

if (mail("other.josh.gearheart+test@gmail.com", $subject, $body, $headers)) {
  echo("sent an email");
}