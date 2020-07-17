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
  column: {
    width: '50%',
    paddingBottom: 10,
  },
  item: {
    paddingBottom: 10,
  },
  keyTitle: {
    fontWeight: 'bold',
  },
});

const column1: { title: string; key: keyof DataDomain.Quote }[] = [
  {
    title: 'Previous close',
    key: 'previousClose',
  },
  {
    title: 'Open',
    key: 'open',
  },
  {
    title: 'High',
    key: 'high',
  },
  {
    title: '52 Week High',
    key: 'week52High',
  },
  {
    title: 'Market capital',
    key: 'marketCap',
  },
  {
    title: 'Avg total volume',
    key: 'avgTotalVolume',
  },
];

const column2: { title: string; key: keyof DataDomain.Quote }[] = [
  {
    title: 'Previous volume',
    key: 'previousVolume',
  },
  {
    title: 'Close',
    key: 'close',
  },
  {
    title: 'Low',
    key: 'low',
  },
  {
    title: '52 Week Low',
    key: 'week52Low',
  },
  {
    title: 'PE ratio',
    key: 'peRatio',
  },

  {
    title: 'Volume',
    key: 'volume',
  },
];

const StocksKeyStats: React.FC<OwnProps> = (props: OwnProps) => {
  const { data } = props;

  return (
    <View style={styles.root}>
      <H2 style={{ fontWeight: 'bold' }}>Key stats</H2>
      <View style={styles.statsContainer}>
        <View style={styles.column}>
          {column1.map((cur) => (
            <View key={`keyStat-${cur.title}`} style={styles.item}>
              <H3 style={styles.keyTitle}>{cur.title}</H3>
              <Text>
                {data[cur.key] === (undefined || null)
                  ? 'N/A'
                  : Number(data[cur.key]).toLocaleString()}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.column}>
          {column2.map((cur) => (
            <View key={`keyStat-${cur.title}`} style={styles.item}>
              <H3 style={styles.keyTitle}>{cur.title}</H3>
              <Text>
                {data[cur.key] === (undefined || null)
                  ? 'N/A'
                  : Number(data[cur.key]).toLocaleString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default StocksKeyStats;
