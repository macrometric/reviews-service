const faker = require("faker");
const momentRandom = require("moment-random");
const objectsToCSV = require("objects-to-csv");

const createFakeReview = i => ({
  review_id: i + 8000001,
  product_id: i + 1,
  author: faker.name.firstName() + " " + faker.name.lastName(),
  date: momentRandom(),
  rating: faker.random.number({ min: 1, max: 5 }),
  review: faker.lorem.sentences(3),
  product_name: faker.commerce.productName()
});

const makeCSV = async function() {
  const desiredFakeReviews = 2000000;
  const fakeReviews = [];

  for (let i = 0; i < desiredFakeReviews; i++) {
    fakeReviews.push(createFakeReview(i));
  }

  await new objectsToCSV(fakeReviews).toDisk("./csvFolder/mongoReviews.csv", {
    append: true
  });
};

makeCSV();
