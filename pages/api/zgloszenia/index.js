import fs from "fs";
import path from "path";
import moment from "moment";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "kalendarz.json");
}
export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function Turnieje(req, res) {
  const { method } = req;
  const myDate = moment().format("YYYY-DD-MM HH:mm:ss");

  const filePath = buildFeedbackPath();
  const { calendar } = extractFeedback(filePath);

  if (!calendar) {
    return res.status(404).json({
      message: "Events data not found",
    });
  }

  if (method === "POST") {
    const { player, club, turnament, gender, users } = req.body;
    const detailsBoolien = calendar.map((item) => item.details);
    const newPlayer = {
      id: new Date().toISOString(),
      player: player,
      club: club,
      timeadd: myDate,
      turnament: turnament,
      gender: gender,
      users: users,
    };

    const newAllDetails = calendar.map((item) => {
      return {
        month: item.month,
        details: item.details.map((item2) => {
          if (item2.title === turnament) {
            if (
              item2.players
                .map((item3) => item3.player)
                .includes(newPlayer.player)
            ) {
              res
                .status(409)
                .json({ message: "Zawodnik o takich danych już istnieje" });
              return item2;
            }
            return {
              ...item2,
              players: [...item2.players, newPlayer],
            };
          }
          return item2;
        }),
      };
    });

    if (!detailsBoolien) {
      res.status(404).json({ message: "Nie znaleziono turnieju" });
    }
    fs.writeFileSync(filePath, JSON.stringify({ calendar: newAllDetails }));
    res.status(201).json({
      message: "Dodano zawodnika.",
      newPlayer,
    });
  }
  if (req.method === "GET") {
    res.status(200).json({ players: calendar });
  }
}

export default Turnieje;
