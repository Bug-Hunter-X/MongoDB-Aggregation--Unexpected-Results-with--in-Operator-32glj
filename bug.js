```javascript
//Incorrect usage of $in operator in MongoDB aggregation
db.collection.aggregate([
  {
    $match: {
      field: { $in: [1,2,3] }
    }
  }
])
```