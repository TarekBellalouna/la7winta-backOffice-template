import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material

import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from 'src/redux/slices/userSlice';
import { fetchEventsCount, getEventCount, selectEventCount } from 'src/redux/slices/eventSlice';
import { useEffect } from 'react';
import moment from 'moment';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Events',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: 'Donations',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'Users',
    type: 'column',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];

export default function AppWebsiteVisits() {
  const [eventCount,err] =useSelector(selectEventCount)
const dispatch = useDispatch()
const getCharts=(startDate)=>{
  let data=[]
  let startDay= moment(startDate,"YYYY-MM-DD")
  let endDate = moment(startDate,"YYYY-MM-DD").add(1,"week")
  console.log(endDate.toDate())
 // let endDate = startsDate.toDate().add(7,"days");
  // for (let index = 1; index < 5; index++) {
  //   console.log(startsDate,"-------->",endDate)
  //   data.push({startDate:startsDate,endDate:endDate})
  //   endDate = endDate.add(7,"days")
  
  //   startsDate =  endDate

    
    
  // }
  // console.log(data)
  dispatch(fetchEventsCount('2022-03-01','2022-04-25'))
}
  useEffect(() => {
    
    getCharts('2022-03-01')
    console.log(eventCount)
  }, [])
  
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
