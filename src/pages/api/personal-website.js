import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "src/data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function handler(req, res) {
  const filePath = buildPath();
  const { personalInformations } = extractData(filePath);

  return res.status(200).json({ personalInformations });
}
