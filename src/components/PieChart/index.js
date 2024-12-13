import {
    PieChart as RechartsPieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
  } from 'recharts'
  
  import './index.css'
  
  const COLORS = ['green', 'red', 'blue']
  
  const PieChart = props => {
    const {data} = props
  
    return (
      <div className="pie-chart-container">
        <ResponsiveContainer aspect={1}>
          <RechartsPieChart width={500} height={50}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="60%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </RechartsPieChart>
        </ResponsiveContainer>
  
        <div className="custom-legend">
          {data.map((entry, index) => (
            <div key={entry.name} className="legend-item">
              <span
                className="legend-color"
                style={{backgroundColor: COLORS[index % COLORS.length]}}
              />
              <span className="legend-text">{`${entry.name}: ${entry.value}`}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default PieChart
  