```javascript
//Correct usage of $in operator in MongoDB aggregation
db.collection.aggregate([
  {
    $match: {
      field: { $in: [ "1", "2", "3" ] }
    }
  }
])

//Or if the field is a number type
db.collection.aggregate([
  {
    $match: {
      field: { $in: [1, 2, 3] }
    }
  }
])
```