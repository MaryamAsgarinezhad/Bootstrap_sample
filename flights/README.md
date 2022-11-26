# OneDirect Assignment - Flight Reservation

This is a website called "Winged Wanderer" built from scratch to book airplane tickets using PHP, HTML, Bootstrap and MYSQL.

Platform Required : Xampp, MySQL and Apache

Instuctions on how to run the code : 
1. Run Apache and MySQL
2. Clone into this git repository, save contents in a file under xampp->htdocs
3. Save the .sql files in xampp->mysql
4. View the website on localhost

Order of viewing pages :
home.php -> form.php -> flights.php -> bookpage.php -> confirm.php

1. Screenshot of home.php:
   Homepage is for representational purposes. The user can click on "Book Now" to navigate to the ticket booking page.


![alt text](https://raw.githubusercontent.com/ShivaniMangal/OneDirectAssignment/master/imgs/screenshot1.jpg)



2. Screenshot of form.php:
This page prompts the user to enter From, To, Date of Departure and Number of Seats. 
The following combinations of From and To Locations will provide proper output :
From	      To
1.Chennai	to    Bangalore
2.Chennai	to    Hyderabad
3.Chennai	 to   New York
4.Bangalore	to  Chennai
5.Bangalore	to  New York
6.Hyderabad	 to New York
7.Hyderabad	 to Chennai
8.Hyderabad	 to Bangalore

The rest will result in printing an empty table  


![alt text](https://raw.githubusercontent.com/ShivaniMangal/OneDirectAssignment/master/imgs/screenshot2.jpg)



3. Screenshot of flights.php:
This page displays the list of available flights, with book buttons.

![alt text](https://raw.githubusercontent.com/ShivaniMangal/OneDirectAssignment/master/imgs/screenshot3.jpg)



4. Screenshot of bookpage.php: 
This page displays a form asking the user to enter his/her name and gender. It displays details of selected flight, and prompts the user to hit confirm button. 

![alt text](https://raw.githubusercontent.com/ShivaniMangal/OneDirectAssignment/master/imgs/screenshot4.jpg)




5. Screenshot of confirm.php: 
This page displays a confirmation message. It also prints the details of all passengers who have booked tickets so far.


![alt text](https://raw.githubusercontent.com/ShivaniMangal/OneDirectAssignment/master/imgs/screenshot5.jpg)





Tasks Achieved :
1. Getting user's input from the form and printing available flights
2. Booking a ticket and updating passengers_details table with details of booked tickets
3. Using an insertion script to update passenger details

Bugs Disclosed :
1. If no flight is present, it prints an empty table.
2. In the confirmation form, it displays the first row of the search_details table. This is just a static representation, as the dynamic approach using button ID's did not prove to be successful.
3. Flight images not printed.


