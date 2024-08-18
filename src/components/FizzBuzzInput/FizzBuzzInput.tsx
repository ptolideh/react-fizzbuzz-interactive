import { ChangeEvent, ComponentProps, FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

function FizzBuzzInput({
  handleSubmitNumber,
  className = "",
  ...delegatedProps
}: ComponentProps<"div"> & {
  handleSubmitNumber: (num: number) => void;
}) {
  const [num, setNum] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value);
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (num) {
      handleSubmitNumber(parseInt(num));
      setNum("");
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className={cn("flex flex-col mb-4", className)} {...delegatedProps}>
        <Input type="number" value={num} onChange={handleChange} />
      </div>
    </form>
  );
}

export default FizzBuzzInput;
