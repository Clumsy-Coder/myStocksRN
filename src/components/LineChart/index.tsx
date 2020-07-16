import React from 'react';
import { Dimensions } from 'react-native';
import { View } from 'native-base';
import { VictoryLine, VictoryAxis, VictoryChart, VictoryTheme } from 'victory-native';

type OwnProps = {
  data: { date: string; price: number }[];
};

const LineChartView: React.FC<OwnProps> = (props: OwnProps) => {
  const { data } = props;

  return (
    <View>
      <VictoryChart
        width={Dimensions.get('window').width}
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis fixLabelOverlap />
        <VictoryAxis dependentAxis />
        <VictoryLine data={data} x='date' y='price' />
      </VictoryChart>
    </View>
  );
};

export default LineChartView;
