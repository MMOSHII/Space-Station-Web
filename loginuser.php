<?php
require 'function.php';

if(isset($_POST['login-user'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validasi login dari database
    $cekdb = mysqli_query($conn, "SELECT * FROM admin WHERE email='$email' AND password='$password'");

        //hitung jumlah data
        $hitung= mysqli_num_rows($cekdb);
        if($hitung>0){
            $_SESSION['log'] = 'True';
            //header('location:index.php');
        }
        else{
            header('location:loginuser.php');
            }
    }
    if(!isset($_SESSION['login-user'])){
    }
    else{
        //header('location:index.php');
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Login - User</title>
    <link href="css/styles.css" rel="stylesheet" />
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
</head>

<body class="bg-primary">
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">User Login</h3>
                                </div>
                                <div class="card-body">
                                    <form method="post">
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" name="email" type="email"
                                                placeholder="name@example.com" />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputPassword" name="password"
                                                type="password" placeholder="Password" />
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        <?php
                                        if(isset($_POST['login-user'])){
                                            $email = $_POST['email'];
                                            $password = $_POST['password'];

                                            // Validasi login dari database
                                            $cekdb = mysqli_query($conn, "SELECT * FROM user WHERE email='$email' AND password='$password'");

                                            // Cek apakah ada data yang cocok
                                            if(mysqli_num_rows($cekdb) <= 0){
                                            ?>
                                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <strong>Email atau password salah.</strong>
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>
                                            <?php
                                            }
                                        }
                                        ?>
                                        <div class="d-flex align-items-center justify-content-center mt-4 mb-0">
                                            <button class="btn btn-primary" name="login-user">Login</button>   
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mt-4 mb-0">
                                            <a href="loginadmin.php">Login sebagai Admin</a>
                                        </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>
</body>

</html>