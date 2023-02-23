<?php

//TODO: getData Func
function getdata($ID) {
    $pdo = new PDO('mysql:host=localhost; dbname=test3', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    $stmt = $pdo->prepare('SELECT * FROM `user` WHERE ID = :ID');
    $stmt->bindParam(':ID', $ID);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $userdataJson = json_encode($results);
    echo $userdataJson;
    return $userdataJson; // returnen an JS-Team
}
if (isset($_GET['ID'])) {   
    getdata($_GET['ID']);
}

function connectDB($servername, $username, $password, $dbname) {
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}
function createRolleTable($conn) {
    // Rolle table
    $rolle_sql = "CREATE TABLE rolle (
      ID INT(4) NOT NULL,
      Taetigkeit VARCHAR(25) NOT NULL
    )";
    if (mysqli_query($conn, $rolle_sql)) {
      echo "Table rolle created successfully<br>";
    } else {
      echo "Error creating table rolle: " . mysqli_error($conn) . "<br>";
    }
}
function insertRolleData($conn) {
    // Insert data into rolle table
    $rolle_data = "INSERT INTO rolle (ID, Taetigkeit)
    VALUES
    (1, 'TA'),
    (2, 'FK'),
    (3, 'PA'),
    (4, 'MA')";
    if (mysqli_query($conn, $rolle_data)) {
      echo "Data for table rolle inserted successfully<br>";
    } else {
      echo "Error inserting data for table rolle: " . mysqli_error($conn) . "<br>";
    }
}
function createToDoTable($conn) {
    // To do table
    $to_do_sql = "CREATE TABLE to_do (
      T_ID INT(4) NOT NULL,
      ID INT(4) NOT NULL,
      Aufgabenstellung VARCHAR(255) NOT NULL,
      Start VARCHAR(8) NOT NULL,
      Ende VARCHAR(8) NOT NULL,
      Fertig TINYINT(1) NOT NULL,
      Ergebnis VARCHAR(255) NOT NULL
    )";
    if (mysqli_query($conn, $to_do_sql)) {
      echo "Table to_do created successfully<br>";
    } else {
      echo "Error creating table to_do: " . mysqli_error($conn) . "<br>";
    }
}
function insertToDoData($conn) {
    // Insert data into to_do table
    $to_do_data = "INSERT INTO to_do (T_ID, ID, Aufgabenstellung, Start, Ende, Fertig, Ergebnis)
    VALUES
    (1, 4, 'Zusendung unterschriebener Arbeitsvertrag.', '-14', '-7', 0, ''),
    (2, 4, 'Zusendung des polizeilichen Führungszeugnisses', '-21', '-14', 1, ''),
    (3, 4, 'Arbeitsschutzunterweisung', '0', '1', 0, ''),
    (4, 4, 'Einladung zum Welcome-Day', '-21', '-14', 1, '')";
    if (mysqli_query($conn, $to_do_data)) {
      echo "Data for table to_do inserted successfully<br>";
    } else {
      echo "Error inserting data for table to_do: " . mysqli_error($conn) . "<br>";
    }
}
function fetchTableData($conn) {
  // Get list of tables in the database
  $tables_result = $conn->query("SHOW TABLES");
  $tables = array();
  while ($table = $tables_result->fetch_array()) {
      $tables[] = $table[0];
  }
  // Fetch data from all tables and save it
  $database = array();
  foreach ($tables as $table_name) {
      $table_result = $conn->query("SELECT * FROM $table_name");
      $table_data = array();
      while ($row = $table_result->fetch_assoc()) {
          $table_data[] = $row;
      }
      $database[$table_name] = $table_data;
  }
  // Save data in JSON format
  $json_data = json_encode($database);
  file_put_contents('data.json', $json_data);
  return $json_data; //TODO: return
}
$connection = connectDB('localhost', 'root', '', 'test3');


$data = fetchTableData($connection);
var_dump($data);

//TODO: Erstelle Func um json von js team auf db zu übertragen
?>