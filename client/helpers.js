module.exports = {
  average: reviews => {
    return (
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    );
  },

  formatDate: date => {
    // Postgres Database Info
    const year = date.substring(1, 5);
    const month = date.substring(6, 8);
    const day = date.substring(9, 11);

    // Mongo Database Info
    // const year = date.substring(0, 4);
    // const month = date.substring(5, 7);
    // const day = date.substring(8, 10);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return `${months[parseInt(month) - 1]} ${day}, ${year}`;
  },

  sortBy: (reviews, sortBy) => {
    if (sortBy === "dateDesc")
      return reviews.sort((a, b) =>
        a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      );
    if (sortBy === "dateAsc")
      return reviews.sort((a, b) =>
        a.date > b.date ? 1 : a.date < b.date ? -1 : 0
      );
    if (sortBy === "rateDesc")
      return reviews.sort((a, b) =>
        a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
      );
    if (sortBy === "rateAsc")
      return reviews.sort((a, b) =>
        a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0
      );
  },

  breakdown: reviews => {
    const data = [];
    const storage = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    for (review of reviews) {
      storage[review.rating] = storage[review.rating] + 1;
    }

    for (rating in storage) {
      const info = {};
      info.x = rating;
      info.y = storage[rating];
      data.push(info);
    }

    return data;
  },

  filterBy: (reviews, filter) => {
    if (filter === "none") return [];
    return reviews.filter(review => review.rating === filter);
  }
};
