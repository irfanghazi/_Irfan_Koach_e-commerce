# 1 RUN SERVER

node server.js

# 2 OPEN MONGODB AND POSTMAN

# 3 POST REQUEST

URL: http://localhost:3000/insertSeller

Data:
{
"seller":"Cosmos Traders",
"sellerAddress": "Kolkata",
"discription":"Telivision",
"color": "Black",
"rating":"4.7",
"price":"14499"
}

# 4 GET REQUEST

// Getting all seller details
URL: http://localhost:3000/usersDetails

// Getting individual seller details(Replace the id from mongodb)
URL: http://localhost:3000/userDetails/61374554feefaaecd031d89c

# 5 PATCH REQUEST

// Replace id from db
URL: http://localhost:3000/updateSeller/61374554feefaaecd031d89c

Data:
{
"price":18999
}

# 6 PUT REQUEST

// Replace id
URL: http://localhost:3000/updateSeller/61374554feefaaecd031d89c

Body:
{
"seller": "Cosmos Traders",
"sellerAddress": "Kolkata",
"discription": "Telivision Set",
"color": "Black",
"rating": 4.8,
"price": 16499
}

# 7 DELETE REQUEST

// ReplaCE id
URL: http://localhost:3000/deleteSeller/6135fbb422a270b1155dd53b
