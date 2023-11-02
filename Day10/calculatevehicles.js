const vehicles = [
    { type: 'cycle', weightCapacity: 1 },
    { type: 'bike', weightCapacity: 5 },
    { type: 'auto', weightCapacity: 20 },
    { type: 'ace', weightCapacity: 50 },
    { type: 'tempo', weightCapacity: 100 }
  ];
  
  const parcels = [
    { location: 'velachery', weight: 30 },
    { location: 'madipakkam', weight: 17 },
    { location: 'sholinganallur', weight: 240 }
  ];

  function calculateMinimumNumberOfVehicles(vehicles,parcels){

    const sortedVehicles = vehicles.sort((a,b)=>b.weightCapacity-a.weightCapacity);
  
    let vehicleString = '';

    for(let weight in parcels.weight){
        for(let weightCapacity in vehicles.weightCapacity){
        
            const count = Math.floor(sortedVehicles / weightCapacity);
            if(count > 0){
               vehicleString += (vehicleString === '' ? '' : '+' )+`${parcels.weight}`;
                weight %= vehicles.weightCapacity;
            }
        }
        parcels.vehicleString = vehicleString;
    }
  }
  calculateMinimumNumberOfVehicles(vehicles,parcels);
  console.log(`${parcels.vehicleString}`)