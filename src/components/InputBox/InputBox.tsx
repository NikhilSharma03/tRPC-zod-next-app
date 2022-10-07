import { NextPage } from "next";
import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMsg: (e: React.FormEvent<HTMLFormElement>) => void;
  isSending: boolean;
};

const InputBox: NextPage<Props> = ({
  value,
  onChange,
  onSendMsg,
  isSending,
}) => {
  return (
    <form className="p-3 flex" onSubmit={onSendMsg}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="cursor-text rounded p-2 flex-1 border-2 focus:outline-none"
        placeholder="Type..."
      />
      <button
        disabled={isSending}
        type="submit"
        className="ml-2 rounded bg-black px-4 p-2 bg-gradient-to-r from-primary to-secondary text-white"
      >
        {isSending ? "..." : "Send"}
      </button>
    </form>
  );
};

export default InputBox;
