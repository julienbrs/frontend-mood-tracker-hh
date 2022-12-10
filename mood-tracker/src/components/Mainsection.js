import Header from "./Header";
import Card from "./Card";
import CardMeteo from "./CardMeteo";
import CardSetMood from "./CardSetMood";
import DateDisplay from "./DateDisplay";
import CardLunarCycle from "./CardLunarCycle";

export default function Mainsection() {
  return (
    <div>
      <Header />
      <DateDisplay />
      <div className="flex flex-row justify-around space-x-6 ">
        <CardMeteo />
        <CardSetMood />
        <CardLunarCycle />
        <Card />
      </div>
    </div>
  );
}
