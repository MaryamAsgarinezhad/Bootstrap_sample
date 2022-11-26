<!-- THIS PAGE CONFIRMS THE BOOKING AND SENDS USER DETAILS TO CONFIRM.PHP -->
<?php 

 $conn = mysqli_connect("localhost","root","","airlinebooking") or die(mysqli_error($conn)); 

 if(isset($_POST['clickbtn'])){
  //The commented code tried to use button ID to select the exact row selected dynamically but wasn't successful
  /*   $id = "select ID from search_details";
     $res = mysqli_query($conn,$id) or die(mysqli_error($conn));
     $result_id = mysqli_fetch_array($res);
     #echo (integer)$result_id;*/

//This code is static, it returns the first row of the available flights
     $select_query = "select Start,Destination,DepartureTime,ArrivalTime from search_details";
     $select_query_result = mysqli_query($conn,$select_query) or die(mysqli_error($conn));
     $row = mysqli_fetch_array($select_query_result);
     
     $source = $row['Start'];
     $destination = $row['Destination'];
     $departure = $row['DepartureTime'];
     $arrival = $row['ArrivalTime'];   
     
 }
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>Booking Confirmation</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- BOOTSTRAP HEADERS-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- STLYE -->
  <style type="text/css">
  .form_edit{
    width: 900px;
    margin: auto;
  }  
 </style>
</head>
<body>
<!-- CONFIRMATION FORM -->
<div class="container form_edit" >
  <h2>Confirm Your Booking</h2>
  <form action="confirm.php" method="post">
    <div class="form-group">
      <label>FirstName</label>
      <input type="name" class="form-control"  placeholder="First Name" name="firstname" required = "true">
    </div>
    <div class="form-group">
      <label>LastName</label>
      <input type="name" class="form-control"  placeholder="Last Name" name="lastname" required = "true">
    </div>
    
    <div class="form-group">
      <label>Gender</label>
      <input type="radio" name="gender" value="Male" required = "true">Male
      <input type="radio" name="gender" value="Female" required = "true">Female
    </div>
    
    <div class="form-group">
      <label>From</label>
      <input type="name" class="form-control" value="<?php echo $source; ?>" name="source">
    </div>

    <div class="form-group">
      <label>To</label>
      <input type="name" class="form-control" value ="<?php echo $destination ?>" name = "dest">
    </div>
      
    <div class="form-group">
      <label>Departure Time</label>
      <input type="name" class="form-control" value ="<?php echo $departure ?>" name ="departure" >
    </div>
      
    <div class="form-group">
      <label>Arrival Time</label>
      <input type="name" class="form-control" value ="<?php echo $arrival ?>" name = "arrival">
    </div> 
    <button type="submit" class="btn btn-success">Confirm Booking</button> 
  </form>
</div>
</body>
</html>