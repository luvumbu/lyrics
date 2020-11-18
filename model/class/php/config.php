<?php
$filename = 'model/class/php/connexion.php';
if (file_exists($filename)) {

include("connexion.php"); 

                  $servername = "localhost";
                  // Create connection
                  // $conn = new mysqli($servername, $username, $password);

                  // // Check connection
                  // if ($conn->connect_error) {
                  //   unlink("connexion.php");
                  //   die("Connection failed: " . $conn->connect_error);                   
                  // }

                  // unlink('model/class/php/connexion.php');
                  // echo "Connected successfully"; 
                  


 



                  try {
                    $conn = new PDO("mysql:host=$servername;dbname=".$dbname, $username, $password);
                    // set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                   
                   
                   // execution du code ok 
                   // echo "Connected successfully";
                  } catch(PDOException $e) {

                    echo "Connection failed: " . $e->getMessage();

                    unlink('model/class/php/connexion.php');
                    header("Refresh:0");
                  }












                  

// // Create connection
// $conn = new mysqli($servername, $username, $password);

// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";
















                  } 


                  
 

                  
 

else {
 ?>


<style>

  #form_paroles{
    display: none;
    opacity: 0;
  }
</style>

<form  id="form-group">
  <div class="form-group">
    <label for="dbname">DB NAME</label>
    <input type="text" class="form-control" id="dbname"  placeholder="Enter dbname">  
  </div>
  <div class="form-group">
    <label for="dbname">UserName</label>
    <input type="text" class="form-control" id="username"  placeholder="Enter dbname">  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div> 
  <div type="submit" class="btn btn-primary" onclick="bdd_exe_test()">Submit</div>
</form>
<?php 
}
?>