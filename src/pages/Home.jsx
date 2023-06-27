
import { ResponsiveRadar } from '@nivo/radar'
import '../pages/home.css'
import api from '../pages/api'
const MyResponsiveRadar = ({ data /* see data tab */ }) => (
    <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
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
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
export function Home() {
	api()
	return (
	  <div style={{backgroundColor:'azure', width: '50vw',height: '70vh', display:'flex', flexDirection:'column', alignItems:'center', border:'3px solid blue'}}>
		
		<MyResponsiveRadar
		  data={[
			{
			  taste: 'fruity',
			  chardonay: 56,
			  carmenere: 66,
			  syrah: 90,
			},
			{
			  taste: 'bitter',
			  chardonay: 77,
			  carmenere: 75,
			  syrah: 82,
			},
			{
			  taste: 'heavy',
			  chardonay: 40,
			  carmenere: 73,
			  syrah: 90,
			},
			{
			  taste: 'strong',
			  chardonay: 86,
			  carmenere: 61,
			  syrah: 103,
			},
			{
			  taste: 'sunny',
			  chardonay: 33,
			  carmenere: 29,
			  syrah: 119,
			},
		  ]}
		/>
	  </div>
	);
  }
