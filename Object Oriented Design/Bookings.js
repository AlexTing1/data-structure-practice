abstract class HospitalityBuilding {
  constructor(id, xCoord, yCoord, amenities, priceRange, roomTypes) {
    this.id = id;
    this.xCoord = yCoord;
    this.yCoord = yCoord;
    this.amenities = amenities; // {guest seniority: {amenitiy}}
    this.priceRange = priceRange; // {room type: price}
    this.roomTypes = roomTypes; //{roomType : number of avaliable rooms}
  }

  bookHotel(roomType) {

  }

  reportRoomUnavaliable() {

  }

  getAvaliablity() {

  }

  getCountry() {

  }

  getCity() {

  }

  getAmeneityList() {

  }

  isAmenityAvaliable() {

  }


}

class Hotel extends HospitalityBuilding {

}

class Motel extends HospitalityBuilding {

}