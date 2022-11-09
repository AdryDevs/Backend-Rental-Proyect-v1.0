'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movies', 
    [{
      "title": "The Tree, the Mayor and the Mediatheque",
      "release_date": "2022-11-28 16:18:21",
      "rating": 2,
      "OnCinemas": 1,
      "genre": "Drama",
      "id_article": 1
    }, {
      "title": "The Body",
      "release_date": "2022-11-14 18:10:54",
      "rating": 3,
      "OnCinemas": 1,
      "genre": "Drama",
      "id_article": 2
    }, {
      "title": "Mother, Jugs & Speed",
      "release_date": "2022-11-11 14:50:47",
      "rating": 3,
      "OnCinemas": 1,
      "genre": "Comedy",
      "id_article": 3
    }, {
      "title": "Father and Son (Otets i syn)",
      "release_date": "2022-11-20 03:37:33",
      "rating": 3,
      "OnCinemas": 0,
      "genre": "Comedy",
      "id_article": 4
    }, {
      "title": "Alone in the Wilderness",
      "release_date": "2022-11-22 22:56:15",
      "rating": 2,
      "OnCinemas": 1,
      "genre": "Horror",
      "id_article": 5
    }, {
      "title": "Jackass 3D",
      "release_date": "2022-11-11 21:14:54",
      "rating": 5,
      "OnCinemas": 0,
      "genre": "Horror",
      "id_article": 6
    }, {
      "title": "Crossing Guard, The",
      "release_date": "2022-11-13 12:36:43",
      "rating": 2,
      "OnCinemas": 1,
      "genre": "Horror",
      "id_article": 7
    }, {
      "title": "Man of Marble (Czlowiek z Marmuru)",
      "release_date": "2022-11-08 01:08:24",
      "rating": 1,
      "OnCinemas": 0,
      "genre": "Action",
      "id_article": 8
    }, {
      "title": "Brighter Summer Day, A (Gu ling jie shao nian sha ren shi jian)",
      "release_date": "2022-11-09 16:57:54",
      "rating": 5,
      "OnCinemas": 0,
      "genre": "Action",
      "id_article": 9
    }, {
      "title": "Hitting Home",
      "release_date": "2022-11-07 01:32:02",
      "rating": 5,
      "OnCinemas": 0,
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
