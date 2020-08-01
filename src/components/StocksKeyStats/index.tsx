import React from 'react';
import { Text, H2, H3, View } from 'native-base';
import { StyleSheet } from 'react-native';

import { DataDomain } from '@redux/Stocks/Types';

type OwnProps = {
  data: DataDomain.Quote;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  item: {
    paddingBottom: 10,
    flexBasis: '50%', // make flexbox fit two key stats per row.
  },
  boldFont: {
    fontWeight: 'bold',
  },
});

// key stats to display. Will display data in two columns.
// every index % 2 === 0 is a new row.
const keyStats: { title: string; key: keyof DataDomain.Quote }[] = [
  {
    title: 'Previous close',
    key: 'previousClose',
  },
  {
    title: 'Previous volume',
    key: 'previousVolume',
  },
  {
    title: 'Open',
    key: 'open',
  },
  {
    title: 'Close',
    key: 'close',
  },
  {
    title: 'High',
    key: 'high',
  },
  {
    title: 'Low',
    key: 'low',
  },
  {
    title: '52 Week High',
    key: 'week52High',
  },
  {
    title: '52 Week Low',
    key: 'week52Low',
  },
  {
    title: 'Market capital',
    key: 'marketCap',
  },
  {
    title: 'PE ratio',
    key: 'peRatio',
  },
  {
    title: 'Avg total volume',
    key: 'avgTotalVolume',
  },
  {
    title: 'Volume',
    key: 'volume',
  },
];

const StocksKeyStats: React.FC<OwnProps> = ({ data }: OwnProps) => (
  <View style={styles.root}>
    <H2 style={styles.boldFont}>Key stats</H2>
    <View style={styles.statsContainer}>
      {keyStats.map((cur) => (
        <View key={`keyStat-${cur.title}`} style={styles.item}>
          <H3 style={styles.boldFont}>{cur.title}</H3>
          <Text>
            {data[cur.key] === (undefined || null) ? 'N/A' : Number(data[cur.key]).toLocaleString()}
            {/* NOTE: cannot unit test if data[cur.key] === (undefined || null)
             * This due to the way DataDomain.Quote was designed. It assumes the data is always available.
             * Changing it to allow nullables will require refactor for Reducer, selectors to handle nullables
             */}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

export default StocksKeyStats;
