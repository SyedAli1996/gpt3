<?php

require __DIR__ . '/vendor/autoload.php';

use Orhanerday\OpenAi\OpenAi;

$open_ai_key = getenv('OPENAI_API_KEY');
$open_ai = new OpenAi($open_ai_key);

$chat = $open_ai->chat([
   'model' => 'gpt-3.5-turbo',
   'messages' => [
       [
           "role" => "system",
           "content" => "You are a helpful assistant."
       ],
       [
           "role" => "user",
           "content" => "Who won the world series in 2020?"
       ],
       [
           "role" => "assistant",
           "content" => "The Los Angeles Dodgers won the World Series in 2020."
       ],
       [
           "role" => "user",
           "content" => "Where was it played?"
       ],
   ],
   'temperature' => 1.0,
   'max_tokens' => 4000,
   'frequency_penalty' => 0,
   'presence_penalty' => 0,
]);


var_dump($chat);
echo "<br>";
echo "<br>";
echo "<br>";
// decode response
$d = json_decode($chat);
// Get Content
echo($d->choices[0]->message->content);


$pdo = new PDO('mysql:host=localhost;port=3306;dbname=users', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$errors = [];


$email = '';
$password = '';
$username = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $password = $_POST['password'];
    $username = $_POST['username'];
    $email = $_POST['email'];

    if (!$password) {
        $errors[] = 'password is required';
    }

    if (!$username) {
        $errors[] = 'username is required';
    }

    if (!$email) {
        $errors[] = 'email is required';
    }

    if (empty($errors)) {
        $statement = $pdo->prepare("INSERT INTO products (password, username, email)
                VALUES (:password, :username, :email)");
        $statement->bindValue(':username', $username);
        $statement->bindValue(':password', $password);
        $statement->bindValue(':email', $email);

        $statement->execute();
        header('Location: index.php');
    }

}
?>
