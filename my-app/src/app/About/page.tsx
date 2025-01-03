import { Directortype } from "@/types/directorType";

export default function About() {
  let director_details = ["OWAIS ", "Hanif", "Zahid", "Ali"];
  let director: Directortype[] = [
    {
      name: "owais",
      age: 20,
      address: "karachi",
    },
    {
      name: "ZAHID",
      age: 32,
      address: "karachi",
    },
    {
      name: "Asif",
      age: 40,
      address: "karachi",
    },
  ];

  return (
    <div>
      {/* {director_details.map((index, value) => {
        return (
          <div>
            <h1>
              {value + 1}- {index}
            </h1>
          </div>
        );
      })} */}
      <div>
        <h1>My Objects</h1>
        {/* Map through the array and render its content */}
        <ul>
          {director.map((item, index) => (
            <li>
              Name:{index + 1} {item.name}, Age: {item.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
