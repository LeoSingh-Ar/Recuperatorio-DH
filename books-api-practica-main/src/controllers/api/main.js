const db = require('../../database/models'); //Se guardan todos los modelos existentes creados a través de Sequelize.

const mainController = {
  listBooks: function(req, res) {
    // Utilizamos Promise para manejar la asincronía
    db.Book.findAll({
        include: [{ association: 'authors' }]
    }).then(function(books) {
        // Respondes con un JSON que incluye el código de estado 200 y la lista de libros
        res.status(200).json({
            status: 'Exitoso',
            code: 200,
            message: "Lista de libros obtenida exitosamente",
            data: {
                books
            }
        });
    }).catch(function(error) {
        // Si hay un error, respondes con un JSON que incluye el código de estado 500 y un mensaje de error
        console.error(error);
        res.status(500).json({
            status: 'Error',
            code: 500,
            message: 'Error del servidor',
            data: null
        });
    });
  },

  showBook: function(req, res) {
  const { id } = req.params;
  db.Book.findByPk(id).then(function(book) {
      if (book) {
          res.json(book);
      } else {
          res.status(404).json({ error: 'Book no encontrado' });
      }
  }).catch(function(error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
  });
  },

  listUsers: function(req, res) {
  db.User.findAll().then(function(users) {
      res.json(users);
  }).catch(function(error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
  });
  },

  showUser: function(req, res) {
  const { id } = req.params;
  db.User.findByPk(id).then(function(user) {
      if (user) {
          res.json(user);
      } else {
          res.status(404).json({ error: 'User no encontrado' });
      }
  }).catch(function(error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
  });
  },

  listCategories: function(req, res) {
  db.Categorie.findAll().then(function(categories) {
      res.json(categories);
  }).catch(function(error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
  });
  },

  listAuthors: function(req, res) {
  db.Author.findAll().then(function(authors) {
      res.json(authors);
  }).catch(function(error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
  });
  },

};

module.exports = mainController;
