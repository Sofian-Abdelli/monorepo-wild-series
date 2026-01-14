// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const query = req.query.q as string;

    const filteredcategories = categories.filter((categories) =>
      // On vérifie si le NOM de la catégorie contient la recherche
      categories.name
        .toLowerCase()
        .includes(query.toLowerCase()),
    );

    res.json(filteredcategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

/* Here you code */

// Export them to import them somewhere else

/* Here you export */

export default { browse, read };
