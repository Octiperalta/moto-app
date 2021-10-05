class Order {
  constructor(id, totalPrice, trackingCode, coordinates, address) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.trackingCode = trackingCode;
    this.coordinates = coordinates;
    this.address = address;
  }
}

export default Order;
