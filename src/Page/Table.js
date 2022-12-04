import React, { useState } from "react";
import { useNavigate } from "react-router";
import Loading from "./Loading";

const Table = () => {
  const [oders, setOrders] = useState([]);
  const navigate = useNavigate();

  fetch(`https://test.nexisltd.com/test `, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  })
    .then((res) => {
      console.log("res", res);
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
      }

      return res.json();
    })
    .then((data) => {
      if (data) {
        return <Loading></Loading>;
      }
      setOrders(data);
    });

  return (
    <div>
      <h2 className="text-center p-5 bg-[#1678CB] text-white ">
        Attendance Information
      </h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Date
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Employee
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                status
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {oders.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{o.data}</td>
                <td>{o.employee_name}</td>
                <td>{o.status}</td>
                <td>
                  <button class="btn btn-xs bg-[#001858]">pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
