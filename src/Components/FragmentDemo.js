import React from "react";
export default function FragmentDemo() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Column() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Mubarak</td>
    </React.Fragment>
  );
}
