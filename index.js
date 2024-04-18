import { getContactById } from "./src/contacts.js";
import { listContacts } from "./src/contacts.js";
import { addContact } from "./src/contacts.js";
import { removeContact } from "./src/contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const removeContactItem = await removeContact(id);
      return console.log(removeContactItem);
  }
};

// invokeAction({ action: "list" });
// invokeAction({
//   action: "get",
//   id: "05olLMgyVQdWRwgKfg5J1",
// });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com ",
//   phone: "322-22-22",
// });
invokeAction({ action: "remove", id: "witOmdXHu__f_3vvcee7-" });
