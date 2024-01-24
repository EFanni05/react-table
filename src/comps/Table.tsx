import { people } from "./people";
import * as data from "./people.json"

const x : people[] = data as people[]
const peoples = Array.from(x)


export function Table(){
    return <div>
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </thead>
            <tbody>
                {
                    peoples.sort((a, b) => {
                        const nameA = a.name.toUpperCase()
                        const nameB = b.name.toUpperCase()
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        return 0;
                      }).map(x => 
                      <tr>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.age}</td>
                        <td>{x.city}</td>
                      </tr>)
                }
            </tbody>
        </table>
    </div>
}