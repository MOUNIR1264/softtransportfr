<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit();
}

$recaptchaResponse = $data['recaptchaResponse'] ?? '';
$recaptchaSecret = '6LdvxA0sAAAAAJO7d9L5NF2lpbIk8TnBfPJPa9oT';

$recaptchaVerify = file_get_contents(
    'https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptchaSecret . '&response=' . $recaptchaResponse
);
$recaptchaResult = json_decode($recaptchaVerify);

if (!$recaptchaResult->success || $recaptchaResult->score < 0.5) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'reCAPTCHA validation failed']);
    exit();
}

$firstName = htmlspecialchars($data['firstName'] ?? '');
$lastName = htmlspecialchars($data['lastName'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$departureCity = htmlspecialchars($data['departureCity'] ?? '');
$arrivalCity = htmlspecialchars($data['arrivalCity'] ?? '');
$movingDate = htmlspecialchars($data['movingDate'] ?? '');
$floor = htmlspecialchars($data['floor'] ?? '');
$needsLift = $data['needsLift'] ? 'Oui' : 'Non';
$message = htmlspecialchars($data['message'] ?? '');

if (empty($firstName) || empty($lastName) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

$to = 'nassim.bendou@outlook.fr';
$subject = 'Nouvelle demande de devis - Soft Transports';

$emailBody = "<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9fafb; padding: 20px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #1f2937; }
        .field-value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Nouvelle demande de devis</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='field-label'>Prénom :</div>
                <div class='field-value'>{$firstName}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Nom :</div>
                <div class='field-value'>{$lastName}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Email :</div>
                <div class='field-value'>{$email}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Téléphone :</div>
                <div class='field-value'>{$phone}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Commune de départ :</div>
                <div class='field-value'>{$departureCity}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Commune d'arrivée :</div>
                <div class='field-value'>{$arrivalCity}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Date souhaitée :</div>
                <div class='field-value'>{$movingDate}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Étage :</div>
                <div class='field-value'>{$floor}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Besoin d'un monte-meuble :</div>
                <div class='field-value'>{$needsLift}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Message :</div>
                <div class='field-value'>" . nl2br($message) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>Email reçu via le formulaire de contact de Soft Transports</p>
        </div>
    </div>
</body>
</html>";

require_once 'smtp-mailer.php';

$result = sendEmailViaSMTP(
    $to,
    $subject,
    $emailBody,
    'no-reply-dev@ventyna.com',
    'ssl0.ovh.net',
    587,
    'contact@ventyna.com',
    'Plgp&E^8xYfNJ7/h=u:J'
);

if ($result['success']) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $result['error']]);
}
