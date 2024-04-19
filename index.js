import Contacts from "./contacts.js";
import { program } from "commander";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await Contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await Contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await Contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContactItem = await Contacts.removeContact(id);
      console.log(removeContactItem);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <action>", "choose action")
  .option("-i, --id <id>", "user id")
  .option("-n, --name <name>", "user name")
  .option("-e, --email <email>", "user email")
  .option("-p, --phone <phone>", "user phone");

program.parse();
const options = program.opts();

invokeAction(options);
