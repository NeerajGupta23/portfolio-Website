const colors = [
  "red",
  "green",
  "orange",
  "purple",
  "blue",
  "amber",
  "pink",
  "lime",
  "yellow",
  "violet",
];

export default function getRandomColor() {
  return colors[Math.floor(Math.random() * 10)];
}
