# has()

Determine if a javascript object has a key.
Allows for nested key detection.

# Usage

```
var user = {
  firstname: 'John',
  lastname: 'Smith',
  address: {
    street1: '123 Road Way Blvd',
    street2: 'APT 21',
    city: 'Brooklyn',
    state: 'NY'
  }
}

const hasFirstname = has(user, 'firstname');
console.log(firstname); // true

const hasCity = has(user, 'address', 'city');
console.log(city); // true

const hasZip = has(user, 'address', 'zip');
console.log(zip); // false
```
