import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "./Spinner";
import { FadeLoader } from "react-spinners";
import { LoaderCircle } from "lucide-react";

interface InputWithButtonProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  loading: boolean;
}

export function InputWithButton({
  value,
  onChange,
  onKeyDown,
  onSubmit,
  loading,
}: InputWithButtonProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Ask about your plant..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button type="submit" onClick={onSubmit} disabled={loading}>
        {loading ? <LoaderCircle className="animate-spin"/> : "Send"}
      </Button>
    </div>
  );
}