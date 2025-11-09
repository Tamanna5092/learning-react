const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
const baseUrl = "https://i.imgur.com/";
const person = {
  name: "John Doe",
  imageId: "7vQD0fP",
  imageSize: "s",
  age: 30,
  occupation: "Software Developer",
  work: {
    clean: "House",
    cook: "Meals",
  },
  theme: {
    backgroundColor: "lightblue",
    color: "green",
  },
};

export default function TodoList() {
  return (
    <div>
      <h1>To Do List for {formatDate(today)}</h1>
      <h1>{person.name}</h1>
      <p>Today he work: {person.work.clean}</p>
      <img src={baseUrl + person.imageId + person.imageSize + ".jpg"} alt="" />
      <ul style={person.theme}>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a Marathon</li>
        <li>Feed the Dogs</li>
      </ul>
    </div>
  );
}
