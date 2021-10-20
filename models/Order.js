class Order {
  constructor(id, totalPrice, trackingCode, coordinates, address, userId) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.trackingCode = trackingCode;
    this.coordinates = coordinates;
    this.address = address;
    this.userId = userId
  }
}

export default Order;
