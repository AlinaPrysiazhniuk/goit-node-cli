import path from "path";
import fs from "node:fs/promises";
import { nanoid } from "nanoid";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const contactsPath = path.join(__dirname, "contacts.json");

export async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

export async function getContactById(id) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
}

export async function addContact(data) {
  const contacts = await listContacts();
  const newBook = { id: nanoid(), ...data };
  contacts.push(newBook);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newBook;
}

export async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}
