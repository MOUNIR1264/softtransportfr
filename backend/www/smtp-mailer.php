<?php

function sendEmailViaSMTP($to, $subject, $body, $from, $host, $port, $username, $password) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: {$from}\r\n";
    $headers .= "Reply-To: {$from}\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $socket = @fsockopen($host, $port, $errno, $errstr, 30);
    
    if (!$socket) {
        return ['success' => false, 'error' => "Connection failed: {$errstr} ({$errno})"];
    }

    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "220") {
        fclose($socket);
        return ['success' => false, 'error' => "Server response error: {$response}"];
    }

    fputs($socket, "EHLO {$host}\r\n");
    $response = fgets($socket, 515);
    while (substr($response, 3, 1) == "-") {
        $response = fgets($socket, 515);
    }
    
    if (substr($response, 0, 3) != "250") {
        fclose($socket);
        return ['success' => false, 'error' => "EHLO failed: {$response}"];
    }

    fputs($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "334") {
        fclose($socket);
        return ['success' => false, 'error' => "AUTH LOGIN failed: {$response}"];
    }

    fputs($socket, base64_encode($username) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "334") {
        fclose($socket);
        return ['success' => false, 'error' => "Username authentication failed: {$response}"];
    }

    fputs($socket, base64_encode($password) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "235") {
        fclose($socket);
        return ['success' => false, 'error' => "Password authentication failed: {$response}"];
    }

    fputs($socket, "MAIL FROM: <{$from}>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "250") {
        fclose($socket);
        return ['success' => false, 'error' => "MAIL FROM failed: {$response}"];
    }

    fputs($socket, "RCPT TO: <{$to}>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "250") {
        fclose($socket);
        return ['success' => false, 'error' => "RCPT TO failed: {$response}"];
    }

    fputs($socket, "DATA\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "354") {
        fclose($socket);
        return ['success' => false, 'error' => "DATA command failed: {$response}"];
    }

    $emailContent = "Subject: {$subject}\r\n";
    $emailContent .= $headers . "\r\n";
    $emailContent .= $body . "\r\n";
    $emailContent .= ".\r\n";

    fputs($socket, $emailContent);
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != "250") {
        fclose($socket);
        return ['success' => false, 'error' => "Email sending failed: {$response}"];
    }

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return ['success' => true];
}
