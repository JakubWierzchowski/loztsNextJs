// function handler(req, res) {
//   const { playersId } = req.query;
//   const filePath = buildFeedbackPath();
//   const players = JSON.parse(
//     fs.readFileSync(path.join(process.cwd(), "data/kalendarz.json"))

//   if (req.method === "DELETE") {
//     const index = players.findIndex((player) => player.id === playersId);

//     players.splice(index, 1); //deleting the record
//     fs.writeFileSync(
//       path.join(process.cwd(), "data/kalendarz.json"),
//       JSON.stringify(players)
//     );
//     res.status(200).json("Record deleted");
//   }
// }

import { buildFeedbackPath, extractFeedback } from "../index";
import path from "path";
import fs from "fs";

function handler(req, res) {
  const { playerId } = req.query;
  const filePath = buildFeedbackPath();
  const calendar = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/kalendarz.json"))
  );

  if (req.method === "GET") {
    const selectedPlayers = calendar.calendar.map((item) =>
      item.details.map((item) =>
        item.players?.find((player) => player.id === playerId)
      )
    );
    res.status(200).json({
      selectedPlayers,
    });
  }

  if (req.method === "DELETE") {
    const index = calendar.calendar.map((item) =>
      item.details.map((item) =>
        item.players?.findIndex((players) => players.id === playerId)
      )
    )[0][0];

    calendar.calendar.map((item) =>
      item.details.map((item) => item?.players?.splice(index, 1))
    );

    fs.writeFileSync(
      path.join(process.cwd(), "data/kalendarz.json"),
      JSON.stringify(calendar)
    );
    res.status(201).json({
      message: "Usunięto zawodnika.",
    });

    res.status(200).json("Record deleted");
  }
}

export default handler;
