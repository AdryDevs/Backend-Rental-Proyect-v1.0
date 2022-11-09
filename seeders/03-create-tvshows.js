'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tvshows',
    [{
      "title": "Acid House, The",
      "release_date": "2022-11-14 01:29:05",
      "rating": 1,
      "genre": "Drama",
      "id_article": 1
    }, {
      "title": "Lady Vanishes, The",
      "release_date": "2022-11-09 20:30:31",
      "rating": 3,
      "genre": "Drama",
      "id_article": 2
    }, {
      "title": "Angels of the Universe (Englar alheimsins)",
      "release_date": "2022-11-13 04:43:37",
      "rating": 1,
      "genre": "Comedy",
      "id_article": 3
    }, {
      "title": "High School Musical",
      "release_date": "2022-11-11 12:36:02",
      "rating": 4,
      "genre": "Comedy",
      "id_article": 4
    }, {
      "title": "It Runs in the Family (My Summer Story)",
      "release_date": "2022-11-22 02:48:37",
      "rating": 4,
      "genre": "Horror",
      "id_article": 5
    }, {
      "title": "Stand-In",
      "release_date": "2022-11-25 04:19:39",
      "rating": 3,
      "genre": "Horror",
      "id_article": 6
    }, {
      "title": "Mayor of Hell, The",
      "release_date": "2022-11-24 09:02:08",
      "rating": 2,
      "genre": "Horror",
      "id_article": 7
    }, {
      "title": "Four Eyes and Six-Guns",
      "release_date": "2022-11-24 13:38:06",
      "rating": 2,
      "genre": "Horror",
      "id_article": 8
    }, {
      "title": "Million, Le (Million, The)",
      "release_date": "2022-11-05 17:20:17",
      "rating": 1,
      "genre": "Animation",
      "id_article": 9
    }, {
      "title": "Shadows in Paradise (Varjoja paratiisissa)",
      "release_date": "2022-11-11 05:46:52",
      "rating": 3,
      "genre": "Thriller",
      "id_article": 10
    }]
    , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
