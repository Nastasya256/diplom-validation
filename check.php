<?php
$login = filter_var(trim($_POST['login']),FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']),FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']),FILTER_SANITIZE_STRING);

if (mb_strlen($login)<5 || mb_strlen($login)>90)
  {
  echo "Недопустимая длина логина";
  exit;
  }
else if (mb_strlen($email)<3 || mb_strlen($email)>50)
  {
  echo "Недопустимая длина email";
  exit;
  }
  else if (mb_strlen($password)<2 || mb_strlen($password)>6)
    {
    echo "Недопустимая длина пароля(от 2 до 6 символов)";
    exit;
    }

$password = md5($password."dweffw");

$link = mysqli_init();
$success = mysqli_real_connect(
   '127.0.0.1',
   'root',
   'root',
   'Register',
   '8889'
);
var_dump($success);
//    $mysql = new mysqli('localhost','root','root','Register','8889');

    if ($mysql->connect_error) {
    die("Connection failed: " . $conn->connect_error);

}
    $mysql->set_charset('utf8');
    $mysql->query("INSERT INTO  `users`(`login`, `password`, `email`)
    VALUES('$login', '$password', '$email')");

    $mysql->close();

?>
