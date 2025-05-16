const SHIPS_KEY = 'ships';

export const getShips = () => {
  const ships = localStorage.getItem(SHIPS_KEY);
  return ships ? JSON.parse(ships) : [];
};

export const saveShip = (ship) => {
  const ships = getShips();
  const existingIndex = ships.findIndex(s => s.id === ship.id);
  
  if (existingIndex >= 0) {
    ships[existingIndex] = ship;
  } else {
    ships.push(ship);
  }
  
  localStorage.setItem(SHIPS_KEY, JSON.stringify(ships));
  return ship;
};