# Shelter API
## Is a simple API for shelter, where u can catalog animals.

### Animal Model
* **Type:** "Cat" or "Dog"*
* **Name:***
* **Race:***
* **Age:*** In months
* **Sex:*** "Male" or "Female"
* **Weight:*** In grams
* **Place of found:***
    * **City***
    * **Street***
* **Photos** Arrays of photos links

'*' - Required

### Routes
#### Animals
* `Method:GET Route: /api/v1/animals`
    Gives you list of all animals
* `Method:GET Route: /api/v1/animals/:id`
    Gives you animal of specific id

#### Cats
* `Method:GET Route: /api/v1/animals/cats`      Gives you list of all cats
* `Method:GET Route: /api/v1/animals/cats/:id`  Gives you cat of specific id
* `Method:POST Route: /api/v1/animals/cats`     Adds new cat to the collection
Example of request body
```
{
    "race": "European",
    "age": "30",
    "name": "Tony,
    "sex": "Female",
    "weight": 3000,
    "placeOfFound": {
        "city": "Warszawa",
        "street": "Aksamitna"
    }
}
```




