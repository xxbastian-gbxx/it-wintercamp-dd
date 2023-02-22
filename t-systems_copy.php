<?php
function getdata($ID) {
    $pdo = new PDO('mysql:host=localhost; dbname=test2', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    $stmt = $pdo->prepare('SELECT * FROM `user` WHERE ID = :ID');
    $stmt->bindParam(':ID', $ID);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $userdataJson = json_encode($results);
    return $userdataJson; // returnen an JS-Team
}
$ID = $_GET['ID'];

getdata($ID);
?>
