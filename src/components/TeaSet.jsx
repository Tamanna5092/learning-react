
// function Cup() {
//   return <h2>Cup of Tea</h2>;  
// }

export default function TeaSet() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<h2>Cup of Tea: {i}</h2>)
  }
  return <div>{cups}</div>;
}
