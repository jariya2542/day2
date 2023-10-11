import React from 'react';
import { Link } from 'react-router-dom';


function List({ data, onDelete }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">รายการข้อมูล</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Note</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2">{item.date}</td>
              <td className="border border-gray-300 p-2">{item.type}</td>
              <td className="border border-gray-300 p-2">{item.note}</td>
              <td className="border border-gray-300 p-2">
                <button onClick={() => onDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  ลบ
                </button>
            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">กลับ</Link>
    </div>
   
  );
}

export default List;
