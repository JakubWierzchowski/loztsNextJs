import { buildFeedbackPath, extractFeedback } from "./index";
import path from "path";
import fs from "fs";

function handler(req, res) {
  const { playersId } = req.query;
  const filePath = buildFeedbackPath();
  // const { calendar } = extractFeedback(filePath);
  const calendar = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/kalendarz.json"))
  );

  if (req.method === "GET") {
    const details = calendar.calendar.map((item) =>
      item.details.find((player) => player.title === playersId)
    );
    res.status(200).json([details]);
  }
}

export default handler;
