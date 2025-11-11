function Button({ onSmah, children }) {
  return (
    <>
      <button
        onClick={(e) => {
          console.log("hello from conslole");
          e.stopPropagation()
          onSmah();
        }}
      >
        {children}
      </button>
    </>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        console.log("You clicked on the toolbar!");
      }}
    >
      <Button onSmah={() => console.log("Playing!")}>Play Movie</Button>
      <Button onSmah={() => console.log("Uploading!")}>Upload Image</Button>
    </div>
  );
}
