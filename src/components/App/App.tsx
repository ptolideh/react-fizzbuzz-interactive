import { useState } from "react";
import FizzBuzzInput from "../FizzBuzzInput";
import FizzBuzzCard from "../FizzBuzzCard";

type NumberEntryType = {
  id: string;
  num: number;
};

function App() {
  const [entries, setEntries] = useState<NumberEntryType[]>([]);
  const handleSubmitNumber = (num: number) => {
    const nextEntry: NumberEntryType = { id: crypto.randomUUID(), num };
    setEntries([nextEntry, ...entries]);
  };
  console.log(entries);

  return (
    <div className="container flex flex-col mx-auto h-screen border-2 border-red-300">
      <header className="flex flex-shrink-0 items-center justify-center p-4 border-b-2 border-slate-100">
        <h1 className="mx-4 font-bold">FizzBuzz</h1>
      </header>
      <main className="flex-grow overflow-scroll bg-neutral-50">
        {entries.map((item) => {
          return <FizzBuzzCard key={item.id} num={item.num} />;
        })}
      </main>
      <FizzBuzzInput handleSubmitNumber={handleSubmitNumber} />
    </div>
  );
}

export default App;
