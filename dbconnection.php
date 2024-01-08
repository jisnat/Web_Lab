<?php
$host="localhost";
$user="root";
$pass=" ";
$database="employee";
$connection=Mysqli_connect('localhost','root','','employee');
if($connection)
{
echo "Successfully connected ";
}
else
{
die("could not connected");
}
$sqli="INSERT INTO information(id,name,phone,department,salary)VALUES(1002,'jisna',907686546,'mca',20000)";
mysqli_query($connection,$sqli);
mysqli_close($connection);
?>
