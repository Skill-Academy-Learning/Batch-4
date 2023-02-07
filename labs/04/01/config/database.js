const users = [
  {
    id: 100,
    username: "buyerUser",
    passwordHash:
      "$2b$10$4c./m4Ch14QJ5WQ7Zvxnfu2nuQvAehuvj5ht0PGNz7Y3HtUT.f7Qa",
    role: "buyer",
  },
  {
    id: 200,
    username: "sellerUser",
    passwordHash:
      "$2b$10$3LV5T1C.lUTK4y4fyGdezuQ7n.629WQ2Uz.2iVJAMAfxLbbur7ASG",
    role: "seller",
  },
  {
    id: 300,
    username: "adminUser",
    passwordHash:
      "$2b$10$VojEhbsz5WDPQ6BhR2TfPeVNT8lggThQ5psGSFsSOp86sNZGPPHQq",
    role: "admin",
  },
];

module.exports = { users };
