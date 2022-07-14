# hackday

This is an application I made during a so called "hackday" where the challenge was to create a 
full stack application in one day. The application was supposed to have a sql-server as it's 
database, a webapi backend and a single-page react frontend. For this challenge, I chose to make 
a horizon calculator that calculates the geographical distance to the horizon given a certain 
height above sea level on different planets. I created a react-app by running npx create-react
and the backend by running dotnet new webapi.

The database consists of one table with the columns Name and Radius, where Name is the name of
the planet and Radius the radius of the planet. In the application, the user can get all avail-
able planets, but also add and delete planets. When selecting a planet, the user can enter the
height above ground (in meters) and calculate the geographical distance, that is the distance 
along earth's surface between the observer and the horizon. In order to store data, get a sql 
server and connect to it by adding the connection string in the PlanetsController controller.

Only values greater than 0 will be registered by the application, to avoid errors. Two planets
with the same name cannot be added, and a planet without a name cannot be added.

The challenge was really fun and I was surprised about what I was able to create in just one
day!

The application was designed to be used on a labtop or a computer (no mobile first approach).
There are no tests, the applications was not created using TDD.

TODO

In the PlanetsController controller in Horizon-Calculator/Controllers, add a connectionstring in
line 12 to connect to your sql-server. Read the README in Horizon-Calculator/horizon-calculator,
you will have to run some commands to get the react app running.
