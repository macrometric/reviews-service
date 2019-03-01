const faker = require("faker");

const createFakeReview = () => ({
  product_id: faker.random.number({ min: 0, max: 1000000 }),
  author: faker.name.firstName() + " " + faker.name.lastName(),
  date: faker.date.recent(7),
  rating: faker.random.number({ min: 1, max: 5 }),
  review: faker.lorem.sentences(3),
  product_name: faker.commerce.productName()
});

exports.seed = async function(knex, Promise) {
  const fakeReviews = [];
  const desiredFakeReviews = 100000;

  for (let i = 0; i < desiredFakeReviews; i++) {
    fakeReviews.push(createFakeReview());
  }

  await knex("reviews").insert(fakeReviews);
};
