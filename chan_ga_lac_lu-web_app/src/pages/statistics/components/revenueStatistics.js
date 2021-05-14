import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import {Button} from 'antd'
const data = [
    {
      "id": "japan",
      "color": "hsl(208, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 179
        },
        {
          "x": "helicopter",
          "y": 9
        },
        {
          "x": "boat",
          "y": 254
        },
        {
          "x": "train",
          "y": 115
        },
        {
          "x": "subway",
          "y": 268
        },
        {
          "x": "bus",
          "y": 193
        },
        {
          "x": "car",
          "y": 86
        },
        {
          "x": "moto",
          "y": 107
        },
        {
          "x": "bicycle",
          "y": 44
        },
        {
          "x": "horse",
          "y": 86
        },
        {
          "x": "skateboard",
          "y": 240
        },
        {
          "x": "others",
          "y": 158
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(352, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 10
        },
        {
          "x": "helicopter",
          "y": 269
        },
        {
          "x": "boat",
          "y": 248
        },
        {
          "x": "train",
          "y": 218
        },
        {
          "x": "subway",
          "y": 138
        },
        {
          "x": "bus",
          "y": 242
        },
        {
          "x": "car",
          "y": 23
        },
        {
          "x": "moto",
          "y": 251
        },
        {
          "x": "bicycle",
          "y": 194
        },
        {
          "x": "horse",
          "y": 73
        },
        {
          "x": "skateboard",
          "y": 165
        },
        {
          "x": "others",
          "y": 218
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(145, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 280
        },
        {
          "x": "helicopter",
          "y": 263
        },
        {
          "x": "boat",
          "y": 252
        },
        {
          "x": "train",
          "y": 213
        },
        {
          "x": "subway",
          "y": 222
        },
        {
          "x": "bus",
          "y": 219
        },
        {
          "x": "car",
          "y": 93
        },
        {
          "x": "moto",
          "y": 182
        },
        {
          "x": "bicycle",
          "y": 35
        },
        {
          "x": "horse",
          "y": 58
        },
        {
          "x": "skateboard",
          "y": 135
        },
        {
          "x": "others",
          "y": 144
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(292, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 175
        },
        {
          "x": "helicopter",
          "y": 155
        },
        {
          "x": "boat",
          "y": 196
        },
        {
          "x": "train",
          "y": 112
        },
        {
          "x": "subway",
          "y": 181
        },
        {
          "x": "bus",
          "y": 254
        },
        {
          "x": "car",
          "y": 13
        },
        {
          "x": "moto",
          "y": 62
        },
        {
          "x": "bicycle",
          "y": 119
        },
        {
          "x": "horse",
          "y": 35
        },
        {
          "x": "skateboard",
          "y": 265
        },
        {
          "x": "others",
          "y": 174
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(121, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 297
        },
        {
          "x": "helicopter",
          "y": 41
        },
        {
          "x": "boat",
          "y": 269
        },
        {
          "x": "train",
          "y": 259
        },
        {
          "x": "subway",
          "y": 208
        },
        {
          "x": "bus",
          "y": 59
        },
        {
          "x": "car",
          "y": 178
        },
        {
          "x": "moto",
          "y": 222
        },
        {
          "x": "bicycle",
          "y": 281
        },
        {
          "x": "horse",
          "y": 262
        },
        {
          "x": "skateboard",
          "y": 121
        },
        {
          "x": "others",
          "y": 296
        }
      ]
    }
  ]

const RevenueStatistics = () =>{
    return(
        
        <div>
            <h1>Revenue Statistics</h1>
            <Button
              onClick={()=>{
                const time = Date.now()

                var datum = new Date(Date.UTC(time.getFullYear(),time.getMonth()-1,time.getDate(),0,0,0));
                console.log(datum)
              }}
            >Test</Button>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default RevenueStatistics