const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207],
  },
}

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
)
//It will take the values from the person object with lat=person.coordinates[0] and lng = person.corrdinates[1]