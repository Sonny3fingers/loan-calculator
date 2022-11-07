import { describe, it, expect, vi, beforeEach } from "vitest";
import { getInputValue, showError } from "./DOMmanipulations";

import fs from "fs"; //file system module from node js so we can open a file
import path from "path"; // and load a file index html

import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
// document.write(htmlDocContent); // to write html content to into virtual document
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocContent);
});

describe("showError()", () => {
  it("should add an error div to the class='card' element", () => {
    showError("Test error");

    const cardEl = document.querySelector(".card");
    const errorDivEl = cardEl.querySelector(".alert-danger");

    expect(errorDivEl).not.toBeNull();
  });
  it("should not contain errorDivEl initially.", () => {
    const cardEl = document.querySelector(".card");
    const errorDivEl = cardEl.querySelector(".alert");

    expect(errorDivEl).toBeNull();
  });
});
