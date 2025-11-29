import React, { useState } from "react";

function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export default function FeedBack() {
  const [text, setText] = useState("");
  //   const [isSending, setIsSending] = useState(false);
  //   const [isSent, setIsSent] = useState(false);
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    // setIsSending(true);
    setStatus("sending");
    await sendMessage(text);
    // setIsSending(false);
    // setIsSent(true);
    setStatus("sent");
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}
