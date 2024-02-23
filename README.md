>I am confident that I can complete the task of developing a NESTjs API with CRUD operations for managing Vehicles, including authentication, data validation, error handling, security measures, and additional functionalities such as allowing marking a vehicle as active, under maintenance, or retired, as well as providing endpoints for assigning drivers and managing maintenance tasks for each vehicle.

## To install dependencies, run:
   > **npm install**

## To start the development server, run:
  > **npm run start:dev**

## To set Environment Variables
  > make **.env** file and add PORT=5000

## Following are the endPoints of all apis

1. For Register (http://localhost:5000/auth/register) POST Request

``
{
	"email":"gautambinod9@gmail.com",
	 "password":"lkjhg"
}
``

2. For Login(http://localhost:5000/auth/login) POST Request

``
{
	"email":"gautambinod9@gmail.com",
	 "password":"lkjhg"
}
``
> **Expected:**
```
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdXRhbWJpbm9kOUBnbWFpbC5jb20iLCJzdWIiOiI2NWQ4Yzg5NWI1ZTY3YWIzNjBmOWI0OTAiLCJpYXQiOjE3MDg3MDYwMTUsImV4cCI6MTcwODc0MjAxNX0.NbJawEl_ALvm3jqBXbsle6hZ_N-KkpuBJxsJh3vEwDY"
}
```

3. For createVehicle(http://localhost:5000/vehicles) POST Request
```
{
  "make": "Toyota",
  "vehicleModel": "Camry",
  "year": 2022,
  "registrationNumber": "ABC1236",
  "status": "active",
  "location": "Parking Lot A"
}

```

4. For get all vehicles(http://localhost:5000/vehicles) GET Request

5. For get single vehicles(http://localhost:5000/vehicles/65d8ab3c91c463c6a74d2a0d) GET Request

6. For updateVehicle (http://localhost:5000/vehicles/65d8ab3c91c463c6a74d2a0d) Patch Request
```
{
  "make": "Toyot",
  "vehicleModel": "Camry",
  "year": 2022,
  "registrationNumber": "ABC123",
  "status": "active",
  "location": "Parking Lot A"
}

```

7. For DeleteVehicle(http://localhost:5000/vehicles/65d8ab3c91c463c6a74d2a0d) DELETE Reuest

8. For Assign Driver(http://localhost:5000/vehicles/65d8bd33516bb4992a1761c9/assign-driver) POST Request

```
{
	"driverId":"65d8bf341909787ef43bddf3"
}
```

9. For maintenance Vehicle(http://localhost:5000/vehicles/65d8bd33516bb4992a1761c9/maintenance) POST Request

> **NOTE**:"All endpoints except for Login and Register require protection. When a user logs in, they receive an access token. This token should be included in the Authorization Header to access all endpoints."