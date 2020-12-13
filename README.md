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
* `Method:POST Route: /api/v1/animals/cats`     Adds new cat to the collection

* `Method:GET Route: /api/v1/animals/cats/:id`  Gives you cat of specific id
* `Method:PUT Route: /api/v1/animals/cats/:id`  Updates cat with specific id
* `Method:DELETE Route: /api/v1/animals/cats/:id`  Deletes cat with specific id

#### DOGS
* `Method:GET Route: /api/v1/animals/dogs`      Gives you list of all dogs
* `Method:POST Route: /api/v1/animals/dogs`     Adds new dog to the collection
* 
* `Method:GET Route: /api/v1/animals/dogs/:id`  Gives you dog of specific id
* `Method:PUT Route: /api/v1/animals/dogs/:id`  Updates dog with specific id
* `Method:DELETE Route: /api/v1/animals/dogs/:id`  Deletes dog with specific id

##### Example of request body
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




