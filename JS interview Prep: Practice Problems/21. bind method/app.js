this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance() {
    return this.distance;
  },
};


const getTripDistance = roadTrip1.getDistance;
const getTripDistance2 = roadTrip1.getDistance.bind(roadTrip1);

console.log(getTripDistance());
console.log(getTripDistance2());
getTripDistance();
