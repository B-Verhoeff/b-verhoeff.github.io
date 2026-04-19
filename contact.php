<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Alleen POST requests toegestaan']);
    exit;
}

// Get and sanitize form data
$fname = trim($_POST['fname'] ?? '');
$lname = trim($_POST['lname'] ?? '');
$email = trim($_POST['femail'] ?? '');
$project_type = trim($_POST['ftype'] ?? '');
$message = trim($_POST['fmsg'] ?? '');

// Validation
$errors = [];
if (empty($fname)) $errors[] = 'Voornaam is verplicht';
if (empty($lname)) $errors[] = 'Achternaam is verplicht';
if (empty($email)) $errors[] = 'Email is verplicht';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Ongeldig email adres';
if (empty($message)) $errors[] = 'Bericht is verplicht';
if (strlen($message) < 10) $errors[] = 'Bericht moet minimaal 10 karakters bevatten';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Prepare email
$to = 'bramverhoeff@hotmail.com';
$subject = 'Nieuw contactbericht van ' . $fname . ' ' . $lname;
$from = 'noreply@bramverhoeff.nl';
$headers = "From: " . strip_tags($from) . "\r\n";
$headers .= "Reply-To: " . strip_tags($email) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email template
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Nieuw contactbericht</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6c63ff, #ff6584); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #6c63ff; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #6c63ff; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='header'>
        <h1>?? Nieuw Contactbericht</h1>
        <p>Vanaf je portfolio website</p>
    </div>
    <div class='content'>
        <div class='field'>
            <div class='label'>Naam:</div>
            <div class='value'>" . htmlspecialchars($fname . ' ' . $lname) . "</div>
        </div>
        <div class='field'>
            <div class='label'>Email:</div>
            <div class='value'>" . htmlspecialchars($email) . "</div>
        </div>
        <div class='field'>
            <div class='label'>Type project:</div>
            <div class='value'>" . htmlspecialchars($project_type ?: 'Niet gespecificeerd') . "</div>
        </div>
        <div class='field'>
            <div class='label'>Bericht:</div>
            <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
        </div>
    </div>
    <div class='footer'>
        <p>Dit bericht is verzonden op " . date('d-m-Y H:i') . " via je portfolio website.</p>
    </div>
</body>
</html>";

// Send email
$mail_sent = mail($to, $subject, $email_body, $headers);

// For testing: if mail fails on local server, simulate success
if (!$mail_sent && (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false || strpos($_SERVER['HTTP_HOST'], '127.0.0.1') !== false)) {
    // Log the email content for testing
    error_log("MAIL TEST - To: $to, Subject: $subject");
    error_log("Email body: " . substr($email_body, 0, 200) . "...");
    $mail_sent = true; // Simulate success for testing
}

if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Bericht succesvol verzonden!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw.'
    ]);
}
?>
