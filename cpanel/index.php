<!DOCTYPE html>
<html lang="pt-br">


<head>

    <title>RegiWeb - CPanel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <!-- External CSS libraries -->
    <link type="text/css" rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="assets/fonts/flaticon/font/flaticon.css">

    <!-- Favicon icon -->
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">

    <!-- Google fonts -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800%7CPoppins:400,500,700,800,900%7CRoboto:100,300,400,400i,500,700">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">

    <!-- Custom Stylesheet -->
    <link type="text/css" rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" id="style_sheet" href="assets/css/skins/default.css">

</head>

<body id="top">
    <div class="page_loader"></div>

    <!-- Login 9 start -->
    <div class="login-9">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-12 bg-color-10">
                    <div class="form-section">
                        <div class="logo clearfix">
                            <a href="#">
                                <img src="assets/img/logos/logo-2.png" alt="logo">
                            </a>
                        </div>
                        <h3>Acesse o seu Painel </h3>

                        <div class="login-inner-form">
                            <form method="post" action="http://painel.regiweb.com.br/index_central.php">
                                <div class="form-group form-box">
                                    <input type="email" value="<?= $_COOKIE['rwEmail'] ?? '' ?>" name="email" id="email" class="input-text" placeholder="E-mail">
                                    <i class="flaticon-mail-2"></i>
                                </div>
                                <div class="form-group form-box">
                                    <input type="password" value="<?= $_COOKIE['rwSenha'] ?? '' ?>" name="senha" id="senha" class="input-text" placeholder="Senha">
                                    <i class="flaticon-password"></i>
                                </div>
                                <div class="checkbox clearfix">
                                    <div class="form-check checkbox-theme">
                                        <input class="form-check-input" wm-lembrar type="checkbox" <?= (isset($_COOKIE['rwSenha'])  && isset($_COOKIE['rwEmail'])) ? 'checked' : '' ?> value="" id="rememberMe">
                                        <label class="form-check-label" for="rememberMe">
                                            Lembrar-me
                                        </label>
                                    </div>
                                    <a href="forgot-password-9.html">Esqueceu sua senha?</a>
                                </div>
                                <div class="form-group">
                                    <button type="submit" value="Efetuar Login" class="btn-md btn-theme btn-block">Acessar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 col-md-12 bg-img none-992">
                    <div class="info">
                        <h1>Welcome <span>to Logdy</span></h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. make a type specimen book.
                            make a type specimen book.
                        </p>
                        <div class="btn-group" role="group" aria-label="">
                            <button type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i></button>
                            <button type="button" class="btn btn-color"><i class="fa fa-instagram"></i></button>
                            <button type="button" class="btn btn-primary"><i class="fa fa-facebook"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Login 9 end -->

    <!-- External JS libraries -->
    <script src="assets/js/jquery-2.2.0.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <script>
        const lembrar = document.querySelector('[wm-lembrar]').addEventListener('click', e => {
            if (e.target.checked) {
                let email = document.getElementById('email').value
                let senha = document.getElementById('senha').value
                $.post('requests/salvaLogin.php', {
                    checked: e.target.checked,
                    email: email,
                    senha: senha
                })
            } else {
                $.post('requests/salvaLogin.php', {
                    checked: e.target.checked
                })
            }
        })
    </script>
    <!-- Custom JS Script -->
</body>


</html>