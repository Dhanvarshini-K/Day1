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

function calculateMinimumVehiclesRequired(vehicles, parcels) {
  parcels.forEach(parcel => {
    let remainingWeight = parcel.weight;
    let vehicleString = '';

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

calculateMinimumVehiclesRequired(vehicles, parcels);

parcels.forEach(parcel => {
  console.log(`To deliver to ${parcel.location}, you need: ${parcel.vehiclesRequired} = ${parcel.weight}`);
});
