const express = require("express");
const router = express.Router(); // router 객체를 사용하면 훨씬 코드가 간단해집니다. 틀로 찍어낸 인스턴스라고 생각하자

router
  .route("/")
  .get((req, res) => {
    res.send("Contacts Page");
  })
  .post((req, res) => {
    res.send("Create Contents");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`View Contact for ID : ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete Contact for ID : ${req.params.id}`)
  });

  module.exports = router;