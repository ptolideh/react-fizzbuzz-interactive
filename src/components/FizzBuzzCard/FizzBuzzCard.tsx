import { fizzbuzz } from "@/lib/fizzbuzz-logic";
import * as React from "react";

function FizzBuzzCard({ num }: { num: number }) {
  return (
    <div className="p-2 mb-4">
      <pre className="mb-2">fizzbuzz({num})</pre>
      <div className="flex items-center py-2 px-4 w-full bg-stone-200">
        <pre className="flex items-center">
          {" "}
          <span className="text-2xl">➡️</span> {fizzbuzz(num)}
        </pre>
      </div>
    </div>
  );
}

export default FizzBuzzCard;
