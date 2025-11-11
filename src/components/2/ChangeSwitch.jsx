

export default function ChangeSwitch({ onChangeColor }) {
  return (
    <button
      onClick={e => {
        e.stopPropagation(); // 🔹 event parent পর্যন্ত bubble হবে না
        onChangeColor();     // 🔹 parent থেকে আসা function call
      }}
    >
      Change color
    </button>
  );
}