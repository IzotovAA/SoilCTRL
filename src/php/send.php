<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

// Данные
$name = $data['name'];
$surname = $data['surname'];
$email = $data['email'];
$message = $data["message"];

// Контент письма
$title = 'Заявка с сайта'; // Название письма
$body = '<p>Имя: <strong>' . $name . '</strong></p>' .
    '<p>Фамилия: <strong>' . $surname . '</strong></p>' .
    '<p>Почта или другой удобный способ связи: <strong>' . $email . '</strong></p>' .
    '<p>Сообщение: <strong>' . $message . '</strong></p>';



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
// $mail = new phpmailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPAuth   = true;

    // Настройки почты отправителя
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'phpmailertest10@yandex.ru'; // Логин на почте
    $mail->Password   = 'vrgwxdfawmlwwegz'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('phpmailertest10@yandex.ru', 'Заявка с сайта'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('phpmailertest10@yandex.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    $mail->send('d');

    // Сообщение об успешной отправке
    echo ('Сообщение отправлено успешно!');
} catch (Exception $e) {
    header('HTTP/1.1 400 Bad Request');
    echo ('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
}
