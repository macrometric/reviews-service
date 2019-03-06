const faker = require("faker");
const momentRandom = require("moment-random");
const objectsToCSV = require("objects-to-csv");

const desiredFakeReviews = 1000000;

// Increment review_id in createFakeReview and createFakeUser
// in one million increments for proper incrementing and matching

// Make a fake review

const createFakeReview = i => ({
  // review_id: i + 1,
  product_id: i + 1,
  date: momentRandom(),
  rating: faker.random.number({ min: 1, max: 5 }),
  review: faker.lorem.sentences(3)
});

const makeCSV1 = async function() {
  const fakeReviews = [];

  for (let i = 0; i < desiredFakeReviews; i++) {
    fakeReviews.push(createFakeReview(i));
  }

  await new objectsToCSV(fakeReviews).toDisk("./csvFolder/reviews2.csv", {
    append: true
  });
};

// Make a fake product

const createFakeProduct = i => ({
  product_id: i + 1,
  product_name: faker.commerce.productName()
});

const makeCSV2 = async function() {
  const fakeProducts = [];

  for (let i = 0; i < desiredFakeReviews; i++) {
    fakeProducts.push(createFakeProduct(i));
  }

  await new objectsToCSV(fakeProducts).toDisk("./csvFolder/products2.csv", {
    append: true
  });
};

// Make a fake user

const createFakeUser = i => ({
  // review_id: i + 1,
  author: faker.name.firstName() + " " + faker.name.lastName()
});

const makeCSV3 = async function() {
  const fakeUsers = [];

  for (let i = 0; i < desiredFakeReviews; i++) {
    fakeUsers.push(createFakeUser(i));
  }

  await new objectsToCSV(fakeUsers).toDisk("./csvFolder/users2.csv", {
    append: true
  });
};

makeCSV1();
makeCSV2();
makeCSV3();
