const pointsOfStudent = 105;
const nameOfStudent = "Katka";
const minOfPoints = 75;
if (pointsOfStudent <= 75) {
  console.log(`${nameOfStudent} neprošel ve zkoušce.`);
} else if (pointsOfStudent >= 75) {
  console.log(`${nameOfStudent} prošel ve zkoušce.`);
} else {
  console.error("CHYBA: zadaný počet bodů je neplatný!");
}

//od ucitele cviceni 24/24 jacascript 1git add

const actualPoints = 80;
const graduateLimit = 75;
const studentName = "Milan Dlouhý";

if (actualPoints >= 75) {
  console.log(
    `${studentName} prospěl s ${actualPoints} body, minimum bylo ${graduateLimit} bodů`
  );
} else {
  console.log(
    `${studentName} neprospěl s ${actualPoints} body, chybělo mu ${
      graduateLimit - actualPoints
    } bodů. Minimum bylo ${graduateLimit} bodů`
  );
}
