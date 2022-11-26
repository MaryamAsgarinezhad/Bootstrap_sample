--
-- Database: `airlinebooking`
--

-- --------------------------------------------------------

--
-- Table structure for table `passenger_details`
--

CREATE TABLE `passenger_details` (
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Source` varchar(100) NOT NULL,
  `Destination` varchar(100) NOT NULL,
  `FlightName` varchar(30) NOT NULL,
  `Date` date NOT NULL,
  `Departure` time NOT NULL,
  `Arrival` time NOT NULL,
  `Price` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `passenger_details`
--

INSERT INTO `passenger_details` (`FirstName`, `LastName`, `Gender`, `Source`, `Destination`, `FlightName`, `Date`, `Departure`, `Arrival`, `Price`) VALUES
('Shivani ', 'Managleswaran', 'female', 'Chennai, IN - Chennai Airport (MAA)', 'Bangalore, IN - Kempegowda International Airport (BLR)', 'SpiceJet', '2018-07-26', '02:30:00', '03:30:00', 'Rs.1,000'),
('Tanuj', 'Dey', 'Male', 'Chennai, IN - Chennai Airport (MAA)', 'Bangalore, IN - Kempegowda International Airport (BLR)', 'SpiceJet', '2018-07-26', '02:30:00', '03:30:00', 'Rs.1,000'),
('Shivani', 'Mangal', 'Female', 'Chennai, IN - Chennai Airport (MAA)', 'Bangalore, IN - Kempegowda International Airport (BLR)', 'SpiceJet', '2018-07-26', '00:00:00', '03:30:00', 'Rs.1,000');

-- --------------------------------------------------------

--
-- Table structure for table `search_details`
--

CREATE TABLE `search_details` (
  `ID` int(3) NOT NULL,
  `Start` varchar(100) NOT NULL,
  `Destination` varchar(100) NOT NULL,
  `Departure_Date` date NOT NULL,
  `Airline` varchar(50) NOT NULL,
  `DepartureTime` time NOT NULL,
  `ArrivalTime` time NOT NULL,
  `Duration` varchar(10) NOT NULL,
  `Stops` varchar(20) DEFAULT NULL,
  `Price` varchar(15) NOT NULL,
  `Seats` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `search_details`
--

INSERT INTO `search_details` (`ID`, `Start`, `Destination`, `Departure_Date`, `Airline`, `DepartureTime`, `ArrivalTime`, `Duration`, `Stops`, `Price`, `Seats`) VALUES
(101, 'Chennai, IN - Chennai Airport (MAA)', 'Bangalore, IN - Kempegowda International Airport (BLR)', '2018-07-26', 'SpiceJet', '02:30:00', '03:30:00', '1hr', 'Non Stop', 'Rs.1,000', 50),
(102, 'Chennai, IN - Chennai Airport (MAA)', 'Hyderabad, IN - Rajiv Gandhi International (HYD)', '2018-07-31', 'Air India', '22:30:00', '23:45:00', '1hr 15m', 'Non-Stop', 'Rs.1,291', 50),
(103, 'Chennai, IN - Chennai Airport (MAA)', 'Hyderabad, IN - Rajiv Gandhi International (HYD)', '2018-07-31', 'IndiGo', '23:30:00', '00:00:00', '1hr 30m', 'Non-Stop', 'Rs.1,291', 50),
(104, 'Chennai, IN - Chennai Airport (MAA)', 'New York, US - La Guardia (LGA)', '2018-07-30', 'Cathay Pacific', '01:40:00', '22:45:00', '30hr 35m', 'One-Stop', 'Rs.71,800', 45),
(105, 'Bangalore, IN - Kempegowda International Airport (BLR)', 'Chennai, IN - Chennai Airport (MAA)', '2018-08-01', 'IndiGo', '06:25:00', '07:25:00', '1hr', 'Non-Stop', 'Rs.1,400', 35),
(106, 'Bangalore, IN - Kempegowda International Airport (BLR)', 'Chennai, IN - Chennai Airport (MAA)', '2018-07-09', 'Jet Airways', '20:35:00', '21:55:00', '1hr 25m', 'Non-Stop', 'Rs.1,401', 50),
(107, 'Bangalore, IN - Kempegowda International Airport (BLR)', 'New York, US - La Guardia (LGA)', '2018-07-16', 'Jet Airways', '04:55:00', '16:10:00', '20hr 45m', 'One-Stop', 'Rs.73,000', 50),
(108, 'Bangalore, IN - Kempegowda International Airport (BLR)', 'Hyderabad, IN - Rajiv Gandhi International (HYD)', '2018-07-27', 'SpiceJet', '08:50:00', '10:10:00', '1h 20m', 'Non-Stop', 'Rs.1,453', 50),
(109, 'Hyderabad, IN - Rajiv Gandhi International (HYD)', 'New York, US - La Guardia (LGA)', '2018-07-21', 'Etihad Airways', '20:00:00', '16:10:00', '29hr 40m', '29hr 40m', 'Rs.60,980', 50),
(110, 'Hyderabad, IN - Rajiv Gandhi International (HYD)', 'Chennai, IN - Chennai Airport (MAA)', '2018-07-24', 'Jet Airways', '02:30:00', '03:35:00', '1hr 5m', 'Non-Stop', 'Rs.1,500', 45),
(111, 'Hyderabad, IN - Rajiv Gandhi International (HYD)', 'Bangalore, IN - Kempegowda International Airport (BLR)', '2018-07-29', 'IndiGo', '08:00:00', '09:00:00', '1hr', 'Non-Stop', 'Rs.1,299', 35);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `search_details`
--
ALTER TABLE `search_details`
  ADD UNIQUE KEY `ID` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
