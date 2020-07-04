import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, H2, H3, View } from 'native-base';
import { LineChart } from 'react-native-chart-kit';
import { LineChartProps } from 'react-native-chart-kit/dist/line-chart/LineChart';
import { VictoryLine, VictoryAxis, VictoryChart, VictoryTheme } from 'victory-native';

import { DataDomain } from '@redux/Stocks/Types';

type OwnProps = {
  data: { date: string; price: number }[];
};

const LineChartView: React.FC<OwnProps> = (props: OwnProps) => {
  const { data } = props;

  return (
    <View>
      {/* <LineChart {...data} /> */}
      <VictoryChart
        width={Dimensions.get('window').width}
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis
          fixLabelOverlap
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            tickLabels: { fill: 'transparent' },
          }}
        />
        <VictoryAxis dependentAxis />
        <VictoryLine data={data} x='date' y='price' />
      </VictoryChart>
    </View>
  );
};

export default LineChartView;
