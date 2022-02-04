abstract class TransportationHub extends Site {
  private name;
  private Location location;


}

class Airport extends TransportationHub {

}

class Train extends TransportationHub {

}

class Attraction {
  private name;
  private Location location;
  private price;

  constructor() {

  }

  getPrice() {

  }

  showDetails() {

  }
}

class Traveler {
  private name;
  private money;
  private itinery;

  getLocationsCanAfford() {

  }

}

class Location {
  private country;
  private city;
  private coord;

  constructor(country, city, coord) {
    this.country = county;
    this.city = city;
    this.coord = coord;
  }

}

class SiteList {
  private AirportList;
  private TrainList;
  private AttractionList;

  constructor() {

  }

  //getter + setters

  sort(list, sortType) {

  }

  retrieveList(list) {

  }
}

