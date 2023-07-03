import React from "react";

interface Data {
  id: number;
  name: string;
  amount: number;
  category: string;
}

interface Props {
  data: Data[];
}

const AccountTable = ({ data }: Props) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td align="center">
                <button className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AccountTable;
