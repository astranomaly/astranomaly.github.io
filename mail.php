<?php

if( isset( $_POST ) )
{
    ///////////////////
    //## VARIABLES ##//
    ///////////////////

    // Validations vars
    $formok = true;
    $errors = array();

    // Submission vars
    $ipaddr = $_SERVER['REMOTE_ADDR'];
    $date   = date('d/m/Y');
    $time   = date('H:i:s');

    // Form vars
    $code  = $_POST['form-code'];
    $name  = $_POST['form-name'];
    $email = $_POST['form-email'];
    $subj  = $_POST['form-subject'];
    $mssg  = $_POST['form-message'];

    ////////////////////
    //## VALIDATION ##//
    ////////////////////

    // Validate anti-spam
    if ( strtolower($code) != 'fortread')
    {
        $formok   = false;
        $errors[] = "Wrong confirmation code";
    }

    // Validate name
    if( empty($name) )
    {
        $formok   = false;
        $errors[] = "You have not entered a name";
    }

    // Validate email
    if( empty($email) )
    {
        $formok   = false;
        $errors[] = "You have not entered an email address";
    }
    elseif( !filter_var($email, FILTER_VALIDATE_EMAIL) )
    {
        $formok   = false;
        $errors[] = "Your email address isn't valid";
    }

    // Validate message
    if( empty($mssg) )
    {
        $formok   = false;
        $errors[] = "You have not entered a message";
    }
    elseif( strlen($mssg) < 20 )
    {
        $formok   = false;
        $errors[] = "Your message must be longer than 20 characters";
    }

    //////////////////////
    //## SEND MESSAGE ##//
    //////////////////////

    if( $formok )
    {
        $headers = "From: mailbot@astranomaly.com" . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        $emailbody = "<p>You've got a new message sent from the contact form on astranomaly.com</p>
                      <p><strong>Name: </strong> {$name} </p>
                      <p><strong>Email: </strong> {$email} </p>
                      <p><strong>Subject: </strong> {$subj} </p>
                      <p><strong>Message: </strong> {$mssg} </p>
                      <hr>
                      <p>This message was sent from the IP Address: {$ipaddr} on {$date} at {$time}</p>";
        $esubj = $name . " (VIA Astranomaly Contact Form)";

        mail("hi@astranomaly.com",$esubj,$emailbody,$headers);
    }

    ///////////////////////////
    //## SEND CONFIRMATION ##//
    ///////////////////////////
    $returndata = array(
        'posted_form_data' => array(
            'form-name' => $name,
            'form-email' => $email,
            'form-subject' => $subj,
            'form-message' => $mssg
        ),
        'form-ok' => $formok,
        'errors' => $errors
    );

    ///////////////////////
    //## VALIDATE AJAX ##//
    ///////////////////////
    if( empty( $_SERVER['HTTP_X_REQUESTED_WITH'] ) && strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) !== 'xmlhttprequest' )
    {
        // start a session
        session_start();
        $_SESSION['cf_returndata'] = $returndata;

        // redirect to form
        header( 'location: ' . $_SERVER['HTTP_REFERER'] . '#contact-form' );
    }
}

?>
