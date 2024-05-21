import React from 'react';
import Layout from '../../components/business/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Total Posts</h2>
          <p>123</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Total Comments</h2>
          <p>456</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Total Credits</h2>
          <p>789</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Total Shares / Total Likes</h2>
          <p>Shares: 300 / Likes: 500</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Total Disapproved Comments</h2>
          <p>30</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Active / Inactive Posts</h2>
          <p>Active: 50 / Inactive: 10</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Credit Consumption Rate</h2>
          <p>100 Credits / Day</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Most Engaged Post</h2>
          <p>Post Title #1</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Recent Comments</h2>
          <ul>
            <li>Comment 1...</li>
            <li>Comment 2...</li>
            <li>Comment 3...</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Average Comment Length</h2>
          <p>25 Words</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Top Commenters</h2>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
