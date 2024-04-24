const express = require("express");
// const uuidv4 = require("uuid");
const router = express.Router();
const students = [
  {
    id: "F1402PHM02003",
    name: "Ahmad Elham",
    fatherName: "Naqibullah",
    Province: "WARDAK",
    faculty: "Pharmacy",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_4277_1694686792.jpg`,
  },
  {
    id: "F1402PHA01987",
    name: "Ahmad Mosawer",
    fatherName: "Mashal",
    faculty: "Pharmacy",
    Province: "KABUL",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_5619_1690631452.jpg`,
  },
  {
    id: "F1402PHA01953",
    Province: "KABUL",
    name: "Ahmad Sear",
    fatherName: "",
    faculty: "Pharmacy",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_2535_1690623119.jpg`,
  },
  {
    id: "F1402PHA01985",
    name: "Ali khan",
    fatherName: "Fazel rahman",
    faculty: "Pharmacy",
    semester: "Second",
    Province: "KABUL",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_6339_1691053533.jpg`,
  },
  {
    id: "F1402PHA01988",
    name: "Ekramudin",
    fatherName: "Muhammad Akbar",
    Province: "KABUL",
    faculty: "Pharmacy",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_1010_1690863976.jpg`,
  },
  {
    id: "F1402PHM01999",
    name: "Farzad",
    Province: "KAPISA",
    faculty: "Pharmacy",
    fatherName: "Bashir Ahmad",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/default.jpg`,
  },
  {
    id: "F1402PHA02004",
    name: "Hameed Ullah",
    fatherName: "Haji shir gul",
    Province: "LOGAR",
    faculty: "Pharmacy",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_3149_1690950673.jpg`,
  },
  {
    id: "F1402PHA01984",
    name: "Hilal",
    faculty: "Pharmacy",
    fatherName: "Mohammad Amin",
    Province: "NANGARHAR",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_3545_1692264003.jpg`,
  },
  {
    id: "F1402PHA01959",
    name: "Juma Gul",
    faculty: "Pharmacy",
    semester: "Second",
    fatherName: "Hayatullah",
    Province: "LOGAR",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_7166_1690610564.jpg`,
  },
  {
    id: "F1402PHM02002",
    name: "Khan Mohammad",
    faculty: "Pharmacy",
    fatherName: "Jan Mohammad",
    Province: "GHAZNI",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_2996_1694669004.jpg`,
  },
  {
    id: "F1402PHA01980",
    name: "Mirwais",
    faculty: "Pharmacy",
    Province: "KABUL",
    fatherName: "Shah wali",
    semester: "Second",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_9986_1691388717.jpg`,
  },
  {
    id: "F1402PHA01977",
    name: "Mohammad Anwar",
    faculty: "Pharmacy",
    Province: "KABUL",
    semester: "Second",
    fatherName: "",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_9466_1692333139.jpg`,
  },
  {
    id: "F1402PHA01971",
    name: "Nasirullah",
    faculty: "Pharmacy",
    semester: "Second",
    fatherName: "Hamidullah	",
    Province: "KABUL",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_1439_1692334651.jpeg`,
  },
  {
    id: "F1402PHA02009",
    name: "Roohullah",
    fatherName: "",
    faculty: "Pharmacy",
    semester: "Second",
    Province: "PANJSHIR",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_7871_1692338550.jpg`,
  },
  {
    id: "F1402PHA01995",
    name: "Suliman",
    fatherName: "Mirzamohammad",
    faculty: "Pharmacy",
    semester: "Second",
    Province: "LOGAR",
    profile: `https://mis.cheragh.edu.af/_uploads_/user/umis_6896_1692344765.jpg`,
  },
];
exports.module = students;

router.get("/", (req, res) => {
  res.send(students);
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const findUser = students.find((data) => data.id === id);
  res.send(findUser);
});
// router.post("/", (req, res) => {
//   const user = req.body;
//   const userId = uuidv4;
//   users.push({ ...user, id: userId });
//   res.send(users);
// });
module.exports = router;
