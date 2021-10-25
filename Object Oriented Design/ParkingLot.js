class ParkingLot {
  public floors = []

  constructor(numberOfFloors, farePrice) {
    this.numberOfFloors = numberOfFloors;
    this.farePrice = farePrice;
    for (var i = 1; i <= numberOfFloors; i++) {
      floors.push(new ParkingFloor(i, this.numberOfFloors));
    }
  }

  getFloor(number) {
    return floors[number + 1];
  }

  addFloor(numberOfFloors) {
    floors.push(new ParkingFloor(floors.length, numberOfFloors));
  }

  setFarePrice(price) {
    this.farePrice = price;
  }
}

class ParkingFloor extends ParkingLot{
  public spotTracker = []; // { ParkingSpace: 1}

  constructor(floor, parkingSpots) {
    this.floor = floor;
    this.parkingSpots = parkingSpots;
    this.spots = {};
    for (var i = 1; i <= parkingSpots; i++) {
      const spotId = `${floor}-${i}`;
      const ParkingSpace = new ParkingSpace(spotId, false);
      spots[ParkingSpace] = 1;
    }
  }

  isSpotAvaliable(spaceID) {
    return spots[spaceID].getIsFilled();
  }

  fillSpot(spaceId) {
    if (isSpotAvaliable()) {
      this.spots[spaceID].setIsFilled(true);
    } else {
      console.log("Spot has been filled");
    }
  }

  leaveSpot(spaceId) {
    if (!isSpotAvaliable()) {
      this.spots[spaceID].setIsFilled(true);
    } else {
      console.log("Spot is empty");
    }
  }
}

class ParkingSpace extends ParkingFloor {
  constructor(id, isFilled) {
    this.id = id;
    this.isFilled = isFilled;
  }

  getIsFilled() {
    return this.isFilled;
  }

  setIsFilled(isFilled) {
    this.isFilled = isFilled;
  }
}

class Car extends ParkingLot {

  constructor(id, type, timeInLot) {
    this.id = id;
    this.timeInLot = timeInLot;
    this.currentFloor = 0;
    this.currentSpot = null;
  }

  updateLot(floorNumber) {
    this.currentFloor = floorNumber;
  }

  getCurrentSpot() {
    return this.currentSpot;
  }

  setCurrentSpot(spotID) {
    this.currentSpot = spotID;
  }

  leaveLot() {
    const fare = calculateFare();
    payFare(fare);
    updateLot(-1);
    setCurrentSpot(null);
  }

  payFare() {

  }

  calculateFare() {
    return this.timeInLot * farePricePerMin;
  }
}
