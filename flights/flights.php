<!-- THIS PAGE LISTS OUT AVAILABLE FLIGHTS -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Availablity</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <style>
  	.container{
  		margin-top: 5em;
  	}


  </style>
</head>



<?php    
//Check connection
$conn = mysqli_connect("localhost","root","","airlinebooking") or die(mysqli_error($conn));

// Sample insertions. System admin can add more details by directly accessing this file

$source = $_POST['Source'];
$dest = $_POST['Destination'];
$date = $_POST['Date'];
$No_of_Passengers = $_POST['no_of_passengers'];


$select_query = "SELECT * from search_details where Start = '$source' and Destination = '$dest' ";
$query_result = mysqli_query($conn,$select_query) or die(mysqli_error($conn));	
?> 
	
<body>
<div class="container-fluid">
  <div class="jumbotron jumbotron-fluid">
      <center>
        <h2>Flights Availability</h2>       
      </center>
  </div>
</div>
    
<div class="container">
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>AirLine</th>
        <th>Departure</th>
        <th>Arrival</th>
        <th>Duration</th>
        <th>Class</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    	<?php while($row = mysqli_fetch_array($query_result)) { ?>
      <tr>
        <td></td>
        <input id="safa" type="email" class="safa" name="passNO" required>
          <!-- <td><?php echo $row['Airline']; ?></td>
          <td><?php echo $row['DepartureTime']; ?></td>
          <td><?php echo $row['ArrivalTime']; ?></td>
          <td><?php echo $row['Duration']; ?></td>
          <td><?php echo $row['Class']; ?></td>
          <td><?php echo $row['Price']; ?></td> -->
          

          <button type="submit" onclick="othername();" class="btn btn-success" name = "clickbtn" id = "btn">Confirm Booking</button>

          <!-- <form method = "post" action="bookpage.html">	
          		<td>
              </td>
          </form> -->

      </tr>
  <?php } ?>
    </tbody>
  </table>
</div>

</body>


</html>