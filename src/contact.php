<?php
    function rem_bloat($data) {
            $data = trim($data);
            $data = htmlspecialchars($data);
            return $data
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = rem_bloat($_POST['name']);
        $email = rem_bloat($_POST['email']);
        $phone = rem_bloat($_POST['contact']);
        $heard = rem_bloat($_POST['message']);
    } else {
        $error_message = $e->getMessage();
        // echo "An error occurred: $error_message" ;
        echo "Sorry there was an error please go <a href='https://jeremymckay.com'>here</a>.\n";
    }
?>