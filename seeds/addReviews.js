const faker = require("faker");

const createFakeReview = () => ({
  product_id: faker.random.number(100),
  author: faker.name.firstName() + " " + faker.name.lastName(),
  date: faker.date.recent(7),
  rating: faker.random.number(5),
  review: faker.lorem.sentences(3, 5),
  product_name: faker.commerce.productName()
});

exports.seed = async function(knex, Promise) {
  const fakeReviews = [];
  const desiredFakeReviews = 10000;

  for (let i = 0; i < desiredFakeReviews; i++) {
    fakeReviews.push(createFakeReview());
  }

  await knex("reviews").insert(fakeReviews);
};
