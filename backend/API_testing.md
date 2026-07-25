AUTH MODULE

1. Register User
POST
http://localhost:3000/auth/register

2. Login User
POST
http://localhost:3000/auth/login

3. Profile
GET
http://localhost:3000/auth/profile


HARVEST MODULE

4. Create Harvest
POST
http://localhost:3000/harvest

5. Get All Harvests
GET
http://localhost:3000/harvest

6. Get Harvest By ID
GET
http://localhost:3000/harvest/1

7. Update Harvest
PATCH
http://localhost:3000/harvest/1

8. Delete Harvest
DELETE
http://localhost:3000/harvest/1

# MarketBridge Backend API Testing

---

# Sprint 1 - Authentication Module

## 1. Register User

**Method**

POST

**URL**

http://localhost:3000/auth/register

**Body**

```json
{
  "name": "Samiksha",
  "email": "samiksha@gmail.com",
  "password": "123456",
  "role": "Farmer"
}
```

**Expected Response**

```json
{
  "message": "User Registered Successfully"
}
```

---

## 2. Login User

**Method**

POST

**URL**

http://localhost:3000/auth/login

**Body**

```json
{
  "email": "samiksha@gmail.com",
  "password": "123456"
}
```

**Expected Response**

```json
{
  "message": "Login Successful",
  "access_token": "your_jwt_token",
  "user": {
    "id": 1,
    "name": "Samiksha",
    "email": "samiksha@gmail.com",
    "role": "Farmer"
  }
}
```

---

## 3. Get Profile

**Method**

GET

**URL**

http://localhost:3000/auth/profile

**Headers**

```
Authorization: Bearer your_jwt_token
```

**Expected Response**

```json
{
  "message": "Protected Route",
  "user": {
    "userId": 1,
    "email": "samiksha@gmail.com",
    "role": "Farmer"
  }
}
```

---

# Sprint 2 - Harvest Module

## 4. Create Harvest

**Method**

POST

**URL**

http://localhost:3000/harvest

**Headers**

```
Authorization: Bearer your_jwt_token
```

**Body**

```json
{
  "cropName": "Onion",
  "quantity": 500,
  "unit": "Kg",
  "expectedPrice": 25,
  "harvestDate": "2026-08-10",
  "village": "Sangamner",
  "district": "Ahmednagar",
  "state": "Maharashtra",
  "latitude": 19.567,
  "longitude": 74.209
}
```

**Expected Response**

```json
{
  "message": "Harvest created successfully"
}
```

---

## 5. Get All Harvests

**Method**

GET

**URL**

http://localhost:3000/harvest

**Headers**

```
Authorization: Bearer your_jwt_token
```

---

## 6. Get Harvest By ID

**Method**

GET

**URL**

http://localhost:3000/harvest/1

**Headers**

```
Authorization: Bearer your_jwt_token
```

---

## 7. Update Harvest

**Method**

PATCH

**URL**

http://localhost:3000/harvest/1

**Headers**

```
Authorization: Bearer your_jwt_token
```

**Body**

```json
{
  "expectedPrice": 30,
  "quantity": 700
}
```

---

## 8. Delete Harvest

**Method**

DELETE

**URL**

http://localhost:3000/harvest/1

**Headers**

```
Authorization: Bearer your_jwt_token
```

**Expected Response**

```json
{
  "message": "Harvest deleted successfully"
}
```