import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ departments }) => {
  return (
    <div className="space-y-20 bg-gradient-to-t from-teal-700 via-teal-600 to-teal-400 p-10 rounded-lg sm:mt-10 xl:mt-0 sticky top-0">
      <div className="space-y-5 ">
        <h1 className="text-2xl font-bold text-white">Our Departments</h1>
        <ul className="space-y-3 text-white text-base">
          {departments.map((department) => (
            <>
              <li key={department.cat_id}>
                <Link>{department.name}</Link>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-white">Opening Hours</h1>
        <ul className="space-y-3 text-white text-base">
          <li>Monday - Friday: 8.00 - 17.00</li>
          <hr />
          <li>Saturday:9.30 - 18.30</li>
          <hr />
          <li>Sunday:9.30 - 18.30</li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-white">Contacts</h1>
        <ul className="space-y-3 text-white text-base">
          <li>227 Marion street</li>
          <hr />
          <li>medical-clinic@mail.com</li>
          <hr />
          <li>1-888-333-444-222</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;