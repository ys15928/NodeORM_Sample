const express = require("express");
const router = express.Router();
const Author = require("../models/model").Author;

console.log("excute authorsjs Router ");

/**
 * @swagger
 * /authors/authorlist:
 *   get:
 *     summary: "작가 목록 전체 조회"
 *     description: "작가 목록을 전체 조회합니다."
 *     tags: [Authors]
 *     responses:
 *       "200":
 *         description: 작가 목록 전체 조회 완료
 *         schema:
 *           $ref: '#/components/schemas/findAuthor'
 */
// 작가 전체 조회
router.get("/authorlist", (req, res, next) => {
  Author.findAll()
    .then((authors) => {
      res.json(authors);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

/**
 * @swagger
 * /authors/addauthor:
 *   post:
 *     summary: "작가 등록"
 *     description: "새로운 작가를 등록합니다."
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addAuthor'
 *     responses:
 *       "200":
 *         description: 작가 등록 완료
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/addAuthor'
 */
// 작가 등록
router.post("/addauthor", (req, res, next) => {
  const params = req.body;

  Author.create({
    first_name: params.first_name,
    last_name: params.last_name,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
