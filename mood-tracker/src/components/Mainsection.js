import Header from "./Header";
import Card from "./Card";

export default function Mainsection() {
  return (
    <div>
      <Header />
      <div className="flex flex-row space-x-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
