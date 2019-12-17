exports.seed = function (knex) {
  return knex("users").insert([
    { username: "Bill", password: "pass" },
    { username: "Bob", password: "pass" },
    { username: "Ben", password: "pass" },
  ]);
};
