import { ResponsiveRadar } from '@nivo/radar';
import { useEffect, useState } from 'preact/hooks';

const RadarChart = () => {
  const [chartData, setChartData] = useState([]);
  const playerIndices = [1,2]; 
  const baseUrl = 'https://sportscore1.p.rapidapi.com/players/';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af0ff56796msh245c42a6090e163p115a7djsnb7aee9fbcf6b',
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = [];
        for (const index of playerIndices) {
          const url = `${baseUrl}${index}`;
          const response = await fetch(url, options);
          const result = await response.json();
		  console.log(result);
		//   const playerName= result.data.name;
		  
          const transformedData = result.data.ability.map((item) => ({
			name: item.name,
            value: item.value,
            // full_average: item.full_average,
          }));
          playerData.push(...transformedData);
		  
        }
        setChartData(playerData);
    	// console.log(playerData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'azure', width: '50vw', height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '3px solid blue' }}>
      <ResponsiveRadar
        data={chartData}
        keys={['value']}
        indexBy="name"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor="black"
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'accent' }}
		fillOpacity={0.6}
		borderWidth={2}
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
			// 	data: chartData.map((data) => ({
			// 	id: data.player,
			// 	label: data.player,
			//   })),
          },
        ]}
      />
    </div>
  );
};

export function Home() {
  return <RadarChart />;
}
