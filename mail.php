<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];
   $subject = $_POST['subject'];
   
   if (empty($name)) {
       $errors[] = 'Name is empty';
   }

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
   }

   if (empty($message)) {
       $errors[] = 'Message is empty';
   }
   
   if (empty($subject)) {
       $errors[] = 'Subject is empty';
   }

   if (empty($errors)) {
       $toEmail = 'info@tegum.rs';
       $emailSubject = 'Kontakt forma: ' . $subject;
       $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", $message];
       $body = join(PHP_EOL, $bodyParagraphs);

       if (mail($toEmail, $emailSubject, $body, "From:" . $email)) {
           header('Location: http://tegum.rs/contact.html?result=success');
       } else {
           header('Location: http://tegum.rs/contact.html?result=error');
       }
   } else {
       $allErrors = join(PHP_EOL, $errors);
       error_log($allErrors);
       header('Location: http://tegum.rs/contact.html?result=error');
   }
}