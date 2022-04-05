let inventory = [
  { id: 1, car_make: 'Lincoln', car_model: 'Navigator', car_year: 2009 },
  { id: 2, car_make: 'Mazda', car_model: 'Miata MX-5', car_year: 2001 },
  { id: 3, car_make: 'Honda', car_model: 'Accord', car_year: 1983 },
  {
    id: 4,
    car_make: 'Land Rover',
    car_model: 'Defender Ice Edition',
    car_year: 2010,
  },
  { id: 5, car_make: 'Honda', car_model: 'Accord', car_year: 1995 },
]


const getCarHonda = (carInventory) =>{
    for(let i = 0 ; i < carInventory.length ; i++){
        if (carInventory[i].car_make === 'Honda') {
            let str = `This is a ${carInventory[i].car_make} ${carInventory[i].car_model} from ${carInventory[i].car_year}`
            return str
        }
    }
}


inventory.sort((a, b)=>{
    return a.car_year - b.car_year
})