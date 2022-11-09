const adventure = {
  name: 'Alice',
  pet: {
      species: 'Cat'
  }
}

if (adventure && adventure.name && adventure.pet.species) {
  console.log(adventure.pet.species, '----- Longhand ------');
}

if (adventure?.pet?.species) {
  console.log(adventure.pet.species, '----- Shorthand ------');
}
