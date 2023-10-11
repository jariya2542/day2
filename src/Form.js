import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'; // เปลี่ยนการนำเข้า useHistory เป็น useNavigate เวอร์ชัน6 ขึ้น

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    date: '',
    type: 'general',
    note: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSubmit(formData);
    navigate('/list'); // เปลี่ยนจาก history.push('/list') เป็น navigate('/list')
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">แบบฟอร์ม</h1>
      <form>
        {/* 1. กรอกข้อมูล date โดยใช้ calender */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="date">
            1. กรอกข้อมูล date โดยใช้ calender
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        {/* 2. กรอกข้อมูล type */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="type">
            2. กรอกข้อมูล type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          >
            <option value="general">ทั่วไป</option>
            <option value="important">สำคัญ</option>
            <option value="notification">แจ้งเตือน</option>
          </select>
        </div>
        {/* 3. กรอกข้อมูล note */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="note">
            3. กรอกข้อมูล note
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            rows="4"
          ></textarea>
        </div>
        {/* ปุ่ม Save */}
        <button type="button" onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
          บันทึก
        </button>
      </form>
    </div>
  );
}

export default Form;
