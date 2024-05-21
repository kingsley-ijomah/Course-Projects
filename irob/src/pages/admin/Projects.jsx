import React, { useState } from 'react';
import Layout from '../../components/Admin/Layout';
import { Link } from 'react-router-dom';

const zones = [
  { name: 'IP Addressing Project 12LH', progress: '80%', status: 'Active' },
  {
    name: 'Configuring Turntables Project 14LH',
    progress: '40%',
    status: 'Pending',
  },
  {
    name: 'Measuring in Robots Project 18LH',
    progress: '90%',
    status: 'Pending',
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              All Projects
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              A list of all projects in the system.
            </p>
          </div>
          <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex space-x-2'>
            <button
              type='button'
              className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Add New Project
            </button>
            <button
              type='button'
              className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Import Project CSV
            </button>
          </div>
        </div>
        <div className='mt-8 flow-root'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Progress
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='relative py-3.5 pl-3 pr-4 sm:pr-3'
                    >
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {zones.map((zone) => (
                    <tr key={zone.name} className='even:bg-gray-50'>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
                        {zone.name}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {zone.progress}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {zone.status}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                        <button className='text-indigo-600 hover:text-indigo-900'>
                          Edit<span className='sr-only'>, {zone.name}</span>
                        </button>

                        <button className='text-indigo-600 hover:text-indigo-900 ml-6'>
                          Delete<span className='sr-only'>, {zone.name}</span>
                        </button>

                        <Link
                          to='/admin/zone-tasks'
                          className='text-indigo-600 hover:text-indigo-900 ml-5'
                        >
                          View Zones
                          <span className='sr-only'>, {zone.name}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
