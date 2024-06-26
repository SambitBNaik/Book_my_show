const {
    makePayment,
    bookAShow,
    getBooking,
  } = require("../Controller/bookingController");
  const { validateJWTToken } = require("../Middleware/authMiddleware");
  
  const bookingRouter = require("express").Router();
  
  bookingRouter.post("/make-payment", validateJWTToken, makePayment);
  bookingRouter.post("/book-show", validateJWTToken, bookAShow);
  bookingRouter.get("/get-booking", validateJWTToken, getBooking);
  
  module.exports = bookingRouter;