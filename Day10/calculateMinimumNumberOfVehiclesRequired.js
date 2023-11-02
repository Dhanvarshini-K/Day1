const vehicles = [
  { type: "cycle", weightCapacity: 1 },
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: "tempo", weightCapacity: 100 }
];

const parcels = [
  { location: 'velachery', weight: 30 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
];

function calculateMinimumNumberOfVehiclesRequired(vehicles, parcels) {
    
    if(!Array.isArray(vehicles) || !Array.isArray(parcels)){
        console.log("Invalid format");
    }

    // if(!vehicles.some((vehicle)=> typeof vehicle.type ==='string' && typeof vehicle.weightCapacity === 'number' && !(vehicle.weightCapacity <=0))){
    //   console.log(`Invalid value in vehicles`);
    //   return false;
    // }

  parcels.forEach(parcel => {
    let remainingWeight = parcel.weight;
    let vehicleString = '';

    if (isNaN(remainingWeight) || remainingWeight <= 0 || !Number.isFinite(remainingWeight)) {
      console.log(`Invalid weight for parcel at ${parcel.location}`);
      return;
    }

    if (typeof parcel.location !== 'string') {
      console.log(`Invalid location type for parcel at ${parcel.location}`);
      return;
    }

    vehicles.sort((a, b) => b.weightCapacity - a.weightCapacity).forEach(vehicle => {

    const count = Math.floor(remainingWeight / vehicle.weightCapacity);
      if (count > 0) {
        vehicleString += (vehicleString === '' ? '' : ' + ') + (count > 1 ? `${count}(${vehicle.type})` : vehicle.type);
        remainingWeight %= vehicle.weightCapacity;
      }
    });

    parcel.vehiclesRequired = vehicleString;
  });
}

calculateMinimumNumberOfVehiclesRequired(vehicles, parcels);

parcels.forEach(parcel => {
  if (parcel.vehiclesRequired !== undefined) {
    console.log(`To deliver to ${parcel.location}, you need: ${parcel.vehiclesRequired} = ${parcel.weight}`);
  }
});
