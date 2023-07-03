import { ResponsiveRadar } from '@nivo/radar';
import { useEffect, useState } from 'preact/hooks';
import '../style.css';

// const url = 'https://api-football-beta.p.rapidapi.com/players/topscorers?season=2019&league=39';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const RadarChart = () => {
  const [chartData, setChartData] = useState([]);

  // Update the chartData with the provided JSON data
  useEffect(() => {
    const jsonData = [
      {
        "ability": "speed",
        "ronaldo": 90,
        "messi": 70,
        "neymar": 78,
        "speed":50
      },
      {
        "ability": "shooting",
        "ronaldo": 95,
        "messi": 80,
        "neymar": 70,
        "speed":30
      },
      {
        "ability": "passing",
        "ronaldo": 86,
        "messi": 60,
        "neymar": 66,
        "speed":50
      },
      {
        "ability": "dribbling",
        "ronaldo": 87,
        "messi": 80,
        "neymar": 79,
        "speed":20
      },
      {
        "ability": "defense",
        "ronaldo": 38,
        "messi": 30,
        "neymar": 60,
        "speed":30
      },
      {
        "ability": "physicality",
        "ronaldo": 91,
        "messi": 50,
        "neymar": 40,
        "speed":20
      }
    ];

    // Transform the JSON data to the desired format
    const transformedData = jsonData.map(data => ({
      ability: data.ability,
      Ronaldo: data.ronaldo,
      Messi: data.messi,
      Neymar: data.neymar,
      Speed: data.speed
    }));

    // Update the chartData state
    setChartData(transformedData);
  }, []);

  return (
    <>
  <div style={{
    width:'100%',
    height:'100%',
    display:'flex',
    
  }} 
  className="flex sm:flex-col "  >
      <div style={{ 
        marginLeft:'20px',
        backgroundColor: 'azure',
        width: '40%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid black' }}>

        <ResponsiveRadar
          data={chartData}
          keys={['Ronaldo', 'Messi', 'Neymar']}
          indexBy="ability"
          valueFormat=">-.2f"
          margin={{ top: 70, right: 80, bottom: 60, left: 80 }}
          borderColor="black"
          gridLabelOffset={36}
          dotSize={10}
          dotColor={{ from: 'color', modifiers: [] }}
          dotBorderWidth={2}
          colors={{ scheme: 'pastel1' }}
          fillOpacity={0.4}
          borderWidth={1}
          blendMode="multiply"
          motionConfig="wobbly"
          legends={[
            {
              anchor: 'top-left',
              direction: 'column',
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
      </div>
          <div className=" ml-16  w-1/2 h-5/6 bg-yellow-200 px-3 py-2 flex flex-col justify-content-center " >
            <div className="text-2xl">
              1.Cristiano Ronaldo<br/>
              Ronaldo is known for his lightning-fast speed, allowing him to outrun defenders and create scoring opportunities.
            </div>
            <br />
            <div className="text-2xl">
              2. Lionel Messi <br />
              Shooting: 80
              Messi possesses exceptional shooting skills, with great accuracy and the ability to score from various positions on the field.
            </div>
            <br />
            <div className="text-2xl">
              3. Neymar <br />
              Passing: 66
              Neymar has excellent passing abilities, showcasing his vision and precision in distributing the ball to his teammates.
            </div>
            
          </div>
    </div>
    </>
    
  );
};

export function Home() {
  return <RadarChart />;
}
