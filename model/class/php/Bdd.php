<?php 
class BDD {
    public $servername;
    public $username;
    public $password;
    public $dbname;
    public $id;
    function __construct($servername,$username,$password,$dbname) {
      $this->servername = $servername;
      $this->username = $username;
      $this->password = $password;
      $this->dbname = $dbname;
    }
    function get_id(){
      return $this->id;
    }
    function get_select($select_ville,$insert_ville,$id){
  // Create connection
   
  $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = $select_ville;
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row[$id];
      $this->id = $row[$id];
    }
  } else {  
              $conn2 =new mysqli($this->servername, $this->username, $this->password, $this->dbname);
              // Check connection
              if ($conn2->connect_error) {
                die("Connection failed: " . $conn2->connect_error);
              }
              
              $sql = $insert_ville;
              
              if ($conn2->query($sql) === TRUE) {              
  
  // Create connection
  $conn3 = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
  // Check connection
  if ($conn3->connect_error) {
    die("Connection failed: " . $conn3->connect_error);
  }
  
  $sql = $select_ville;
  $result = $conn3->query($sql);
  
  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "" . $row[$id];
    }
  } else {
    echo "0 results";
  }
  $conn3->close();
  
              } else {
                echo "Error: " . $sql . "<br>" . $conn2->error;
              }
              
              $conn2->close();
  }
  $conn->close();
    }
  /*  function get_name() {
      return $this->name;
    }
    */
  }
  ?>