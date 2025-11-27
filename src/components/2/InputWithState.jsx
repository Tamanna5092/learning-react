export default function InputWithState({ status = "empty" }) {
  if (status === "success") return <><h1>That's right!</h1> <hr /></>;
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {status === "error" && (
          <p className="Error">There was an error. Try again!</p>
        )}
      </form>
      <hr />
    </>
  );
}
