import React from 'react';
import Layout from '../../components/business/Layout';

function MyCredits() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Credits</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">Current Balance</h2>
            <p>1000 credits</p>
          </div>
          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">Add More Credits</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Credits
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Credit History</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Credits Added</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">2023-07-01</td>
                <td className="border px-4 py-2">500</td>
              </tr>
              {/* More rows as necessary */}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default MyCredits;
