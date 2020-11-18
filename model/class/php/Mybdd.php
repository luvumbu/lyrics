<?php
class Fruit {
  public $servername ;
  public $username ;
  public $password ;
  public $dbnam;
  public $row_name= array();
  public $row_value=array();

  

  public $exe_ok=false;
  function __construct($servername,$username,$password,$dbname) {
    $this->servername = $servername;
    $this->username = $username;
    $this->password = $password;
    $this->dbname =   $dbname;
  }
 
  function set_row_name($set_row_name){
    array_push($this->row_name,$set_row_name);
  }
  function get_row_name($integer){
    return $this->row_name[$integer];
  }
  function count_row_name(){
    return count($this->row_name);
  }

  function set_row_value($set_row_value){
    array_push($this->row_value,$set_row_value);
  }
  function count_row_value(){
    return count($this->row_value);
  }
  function insertion(){
      
    $conn2 = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
    // Check connection
    if ($conn2->connect_error) {
      die("Connection failed: " . $conn2->connect_error);
    }
    
          // $sql = "INSERT INTO test (nom)
          // VALUES ('John')";
          
          // if ($conn2->query($sql) === TRUE) {
          //   echo "New record created successfully";
          // } else {
          //   echo "Error: " . $sql . "<br>" . $conn2->error;
          // }
          
          // $conn2->close();
          
  }

  function number_row_value($number){
 
 //return $number;


 if($this->count_row_name()>$number){
  return $this->row_value[$number];
 }
 else{
   return "Erreur set_row_name trop eleve";
 } 
  }
 
  function set_select($select){
$this->select = $select;
  }
  function get_select(){
    return $this->select;
      }
  function exe(){
    $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = $this->get_select();
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {     
    for($i = 0 ; $i<$this->count_row_name();$i++){
     $this->set_row_value($row[$this->get_row_name($i)]);
     
    }    
  }
} else {
  

  $this->set_row_value("X");
  // insertion des informations  
  echo $this-> count_row_name();
  $this->insertion();
 
  // fin de linsertion des informations
}
$conn->close();
  } 
} 
// $apple = new Fruit("localhost","root","root","bokonzi_all");
// $apple->set_select('SELECT * FROM `club` WHERE `club_nom`="alors"');
// $apple->set_row_name("club_nom");// demande des information dans le arroow 
// $apple->set_row_name("club_region");// demande des information dans le arroow 
// $apple->exe(); // execution du programme 
// echo $apple->number_row_value(0);  
?>