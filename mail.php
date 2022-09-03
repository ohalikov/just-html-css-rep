
 <?php
// $to = "info@fundament72.ru"; // емайл получателя данных из формы
$to2 = "trollwarold@yandex.ru";
$tema = "Телефонный номер с сайта по монтажу металлоконструкций"; // тема полученного емайла
$message .= "Телефон: ".$_POST['teleph']."<br>";  //полученное из формы name=phone


$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
// mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
mail($to2, $tema, $message, $headers);
header('Location: https://metall-modull.ru/thankyou/');
    
?>
<html>
<head>
<meta http-equiv="refresh" content="0;URL=https://metall-module.ru/thankyou/" />
</head> 
</html>