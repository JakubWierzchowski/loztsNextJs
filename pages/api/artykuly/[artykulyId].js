import path from "path";
import fs from "fs";

function handler(req, res) {
  const { artykulyId } = req.query;
  const articles = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/artykuly.json"))
  );

  if (req.method === "GET") {
    const selectedPlayers = articles.find(
      (article) => article.id === artykulyId
    );
    res.status(200).json({ player: selectedPlayers });
  }

  if (req.method === "DELETE") {
    const index = articles.findIndex((article) => article.id === artykulyId);
    articles.splice(index, 1);
    fs.writeFileSync(
      path.join(process.cwd(), "data/artykuly.json"),
      JSON.stringify(articles)
    );
    res.status(200).json("Record deleted");
  }
}

export default handler;
