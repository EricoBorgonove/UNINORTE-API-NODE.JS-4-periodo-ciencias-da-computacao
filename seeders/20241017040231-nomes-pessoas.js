'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', 
      [
        { "nome": "Carlos Assis" },
        { "nome": "Camila Souza" },
        { "nome": "Alberto Ferreira"},
        { "nome": "Lucas Oliveira" },
        { "nome": "Fernanda Lima" },
        { "nome": "Ricardo Silva" },
        { "nome": "Mariana Costa" },
        { "nome": "João Pedro Santos" },
        { "nome": "Gabriel Baraúna"},
        { "nome": "Bruna Fernandes" },
        { "nome": "Pedro Henrique Carvalho" },
        { "nome": "Ana Beatriz Martins" },
        { "nome": "Thiago Almeida" },
        { "nome": "Carla Pereira" },
        { "nome": "Rodrigo Gonçalves" },
        { "nome": "Juliana Castro" },
        { "nome": "Felipe Ribeiro" },
        { "nome": "Paula Correia" },
        { "nome": "Daniel Cardoso" },
        { "nome": "Larissa Teixeira" },
        { "nome": "Gabriel Mendes" },
        { "nome": "Renata Rocha" },
        { "nome": "André Farias" },
        { "nome": "Viviane Araújo" },
        { "nome": "Eduardo Lima" },
        { "nome": "Sara Duarte" },
        { "nome": "Matheus Nascimento" },
        { "nome": "Aline Carvalho" },
        { "nome": "Leonardo Barbosa" },
        { "nome": "Isabela Miranda" },
        { "nome": "Bruno Costa" },
        { "nome": "Tatiane Freitas" }
      ]
      , {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
