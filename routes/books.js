const express = require("express");
const router = express.Router();
const Book = require("../models/model").Book;

console.log("excute booksjs Router");

/**
 * @swagger
 * /books/booklist:
 *   get:
 *     summary: "도서목록 전체 조회"
 *     description: "도서 목록을 전체 조회합니다."
 *     tags: [Books]
 *     responses:
 *       "200":
 *         description: 도서 목록 전체 조회 완료
 *         schema:
 *           $ref: '#/components/schemas/findBook'
 */
// 도서 전체 조회
router.get("/booklist", (req, res, next) => {
  Book.findAll()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

/**
 * @swagger
 * /books/addbook:
 *   post:
 *     summary: "도서 등록"
 *     description: "새로운 도서를 등록합니다."
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addBook'
 *     responses:
 *       "200":
 *         description: 도서 등록 완료
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/addBook'
 */
// 도서 등록
router.post("/addbook", (req, res, next) => {
  const params = req.body;

  Book.create({
    isbn: params.isbn,
    title: params.title,
    auth_id: params.auth_id,
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

/**
 * @swagger
 * /books/updatebook/{book_id}:
 *   patch:
 *     summary: "도서 정보 수정"
 *     description: "도서의 정보를 수정합니다."
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateBook'
 *     responses:
 *       "200":
 *         description: 도서 정보 수정 완료
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/updateBook'
 */
// 도서 정보 수정
router.patch("/updatebook/:book_id", (req, res, next) => {
  const params = req.body;

  Book.update(
    {
      isbn: params.isbn,
      title: params.title,
      auth_id: params.auth_id,
    },
    {
      where: { book_id: params.book_id },
    }
  )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

/**
 * @swagger
 * /books/deletebook/{book_id}:
 *   delete:
 *     summary: "도서 정보 삭제"
 *     description: "도서의 정보를 삭제합니다."
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/deleteBook'
 *     responses:
 *       "200":
 *         description: 도서 정보 삭제 완료
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/deleteBook'
 */
// 도서 정보 삭제
router.delete("/deletebook/:book_id", (req, res, next) => {
  const params = req.body;

  Book.destroy({
    where: { book_id: params.book_id },
  })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
