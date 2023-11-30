const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
} = require("../../controllers/contacts");

const { schemas } = require("../../models/contact");

const { validateBody } = require("../../middlewares/validateBody");
const { schema } = require("../../schema/contacts");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", addContact);

router.delete("/:contactId", validateBody(schema.schema), removeContact);

router.put("/:contactId", validateBody(schema.schema), updateContact);

module.exports = router;
