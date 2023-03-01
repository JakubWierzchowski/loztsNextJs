import React from "react";
import fs from "fs";
import path from "path";
import moment from "moment";
export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "artykuly.json");
}
export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function Turnieje(req, res) {
  const myDate = moment().format("DD.MM.YYYY");
  if (req.method === "POST") {
    const title = req.body.title;
    const text = req.body.text;
    const signature = req.body.signature;
    // if ((!zawodnik && !klub) === "") {
    //   res.status(422).json({ message: "Uzupełnij dane!" });
    // }
    const newPlayer = {
      id: new Date().toISOString(),
      title: title,
      text: text,
      timeadd: myDate,
      signature: signature,
    };
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newPlayer);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Dodano artykul.", players: newPlayer });
  }
  if (req.method === "GET") {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ players: data });
  }
}

export default Turnieje;
