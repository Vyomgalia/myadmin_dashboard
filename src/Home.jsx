import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Sunday',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REVENUE</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>$56,945</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>USERS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>76.8%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NEW SIGNUPS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>116</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>RETENSION</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>12.67%</h1>
            </div>
        </div>

        <div className='charts' style={{ display: 'flex', flexDirection: 'column' }}>
    {/* <ResponsiveContainer width="100%" height={300}>
        <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer> */}
<div class='container'style={{ paddingTop: '60px' }}>

<ResponsiveContainer width="100%" height={400} >
    <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
    >
        <CartesianGrid stroke="#f5f5f5" strokeWidth={0} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="pv"
            name="INSTAGRAM"
            stroke="#8884d8"
            dot={false} // Remove points from the line
            activeDot={{ r: 8 }}
        />
        <Line
            type="monotone"
            dataKey="uv"
            name="FACEBOOK"
            stroke="#82ca9d"
            dot={false} // Remove points from the line
            activeDot={{ r: 8 }}
        />
        <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="40" floodColor="#8884d8" floodOpacity="140" />
            </filter>
        </defs>
    </LineChart>
</ResponsiveContainer>

</div>

    
    <div class= "container"  style={{ paddingTop: '80px' }}>
      <div className="installed-apps-container">
      <h2>Installed apps</h2>
      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Amount</th>
            <th>Status</th>
            <th>User ID</th>
            <th>Joined</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zeppin</td>
            <td>668.0</td>
            <td>Active</td>
            <td>11234</td>
            <td>October</td>
            <td>Design</td>
          </tr>
          <tr> <td>Figma</td>
            <td>611.00</td>
            <td>Pending</td>
            <td>455</td>
            <td>January</td>
            <td>Finance</td>
          </tr>
          <tr> <td>Meta</td>
            <td>112.6</td>
            <td>Cancelled</td>
            <td>9934</td>
            <td>April</td>
            <td>Marketing</td>
          </tr>
          <tr> <td>Angular</td>
            <td>67.0</td>
            <td>Pending</td>
            <td>343</td>
            <td>March</td>
            <td>Finance</td>
          </tr>
          <tr> <td>vue</td>
            <td>777.0</td>
            <td>Active</td>
            <td>112345</td>
            <td>May</td>
            <td>Coding</td>
          </tr>
        </tbody>
      </table>
      </div>
    
    </div>
    
    </div>
    </main>
  )
}

export default Home