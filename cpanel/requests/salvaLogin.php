<?php

if ($_POST['checked']) {
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    setcookie("rwEmail", $email, time() + (86400 * 90), "/");
    setcookie("rwSenha", "$senha", time() + (86400 * 90), "/");
    echo 'salvou';
} else {
    setcookie("rwEmail", "", time() - 3600, "/");
    setcookie("rwSenha", "", time() - 3600, "/");
}
