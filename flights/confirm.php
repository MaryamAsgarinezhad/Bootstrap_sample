<!-- THIS PAGE DISPLAYS THE LIST OF ALL BOOKINGS DONE SO FAR -->
<?php 
// Connecting to the Database
 $conn = mysqli_connect("localhost","root","","airlinebooking")or die(mysqli_error($conn));

//Assigning data entered in bookpage.php to variable names
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$gender = $_POST['gender'];
$source = $_POST['source'];
$destination = $_POST['dest'];
$departure = $_POST['departure'];
$arrival = $_POST['arrival'];

//Retrieving 3 reqiured fields from search_details table
$select_query = "SELECT Airline, Departure_Date, Price FROM search_details";

$query_result = mysqli_query($conn,$select_query) or die(mysqli_error($conn));
$row = mysqli_fetch_array($query_result);

$price = $row['Price'];
$flightname = $row['Airline'];
$date = $row['Departure_Date'];

// Inserting $select_query values and values received from the form in bookpage.php into passenger_details table

$insert_into = "INSERT INTO passenger_details(FirstName,LastName,Gender,Source,Destination,FlightName,Date,Departure,Arrival,Price) VALUES('$firstname','$lastname','$gender','$source','$destination','$flightname','$date','$departure','$arrival','$price')";
$insert_query = mysqli_query($conn,$insert_into);

// Printing the Table's Content

$print = "select FirstName, LastName,Gender,Source,Destination,FlightName,Date,Departure,Arrival,Price from passenger_details";
$print_query = mysqli_query($conn,$print) or die(mysqli_error($conn));

?>

<html lang="en">
<head>
  <title>Booking Confirmation</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap Headers -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <div class="jumbotron">
      <center>
        <h2>Thank You For Booking</h2>      
        <p><a href="form.php">Click Here </a>to book another flight</p>  
        <p>Below is a list of all bookings made so far</p>
      </center>
  </div>
</div>
    
<div class="container">
    <div class="jumbotron">
        <table class="table">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Flight Name</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Price</th>
            </tr>
 <!-- Loop to print details of booked tickets and passengers -->           
  <?php while($row = mysqli_fetch_array($print_query    )) { ?>
      <tr>
          <td><?php echo $row['FirstName']; ?></td>
          <td><?php echo $row['LastName']; ?></td>
          <td><?php echo $row['Gender']; ?></td>
          <td><?php echo $row['Source']; ?></td>
          <td><?php echo $row['Destination']; ?></td>
          <td><?php echo $row['FlightName']; ?></td>
          <td><?php echo $row['Departure']; ?></td>
          <td><?php echo $row['Arrival']; ?></td>
          <td><?php echo $row['Price']; ?></td>
      </tr>
  <?php } ?>
        </table>
    </div>
</div>

</body>
</html>