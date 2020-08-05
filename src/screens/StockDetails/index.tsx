import * as React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, H1, View, Button, Spinner } from 'native-base';
import { Dispatch } from 'redux';

import { StockDetailsRouteProp } from '@routes/Types';
import { AppState, AppActions } from '@redux/index.reducers';
import { Actions, Selectors, DataDomain } from '@redux/Stocks/Types';
import { fetchStockChart } from '@redux/Stocks/Actions';
import { selectStockDetailsTrim, selectStockDetailsLineChart } from '@redux/Stocks/Selectors';
import { defaultQuote } from '@redux/Stocks/Reducer';
import StocksKeyStats from '@components/StocksKeyStats';
import LineChartView from '@components/LineChart';

interface SelectorProps {
  data: Selectors.SelectStockDetailsTrim;
  lineChartData: { date: string; price: number }[];
}

interface DispatchProps {
  fetchChart: (symbol: string, chartRange: DataDomain.ChartRange) => Actions.Chart.FetchAction;
}

type NavigationProps = {
  route: StockDetailsRouteProp;
};

type Props = NavigationProps & SelectorProps & DispatchProps;

type State = {
  chartRange: DataDomain.ChartRange;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 20,
  },
  chartRange: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingBottom: 10,
    flexGrow: 1,
    flexBasis: '100%',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export class StockDetailsScreen extends React.Component<Props, State> {
  private fetchChartInterval: NodeJS.Timeout | undefined;

  private fetchChartIntervalTimeout = 10;

  constructor(props: Props) {
    super(props);
    this.state = {
      chartRange: DataDomain.ChartRange.ONE_MONTH,
    };
  }

  componentDidMount = (): void => {
    const { route, fetchChart } = this.props;
    const { chartRange } = this.state;

    fetchChart(route.params.symbol, chartRange); // setInterval won't fetch chart. It will wait until time runs out.
    this.fetchChartInterval = setInterval(
      fetchChart.bind(this, route.params.symbol, chartRange),
      this.fetchChartIntervalTimeout * 1000,
    );
  };

  componentDidUpdate = (prevProps: Props, prevState: State): void => {
    const { chartRange } = this.state;

    if (prevState.chartRange !== chartRange) {
      const { route, fetchChart } = this.props;

      fetchChart(route.params.symbol, chartRange);

      this.fetchChartInterval = setInterval(
        fetchChart.bind(this, route.params.symbol, chartRange),
        this.fetchChartIntervalTimeout * 1000,
      );
    }
  };

  componentWillUnmount = (): void => {
    if (this.fetchChartInterval) clearInterval(this.fetchChartInterval);
  };

  onChartRangeChange = (newChartRange: DataDomain.ChartRange): void => {
    if (this.fetchChartInterval) clearInterval(this.fetchChartInterval);
    this.setState({ chartRange: newChartRange });
  };

  render(): JSX.Element {
    const { data, lineChartData } = this.props;
    const { chartRange } = this.state;

    const chartRangeList: DataDomain.ChartRange[] = [
      DataDomain.ChartRange.FIVE_DAYS,
      DataDomain.ChartRange.ONE_MONTH,
      DataDomain.ChartRange.SIX_MONTHS,
      DataDomain.ChartRange.YEAR_TO_DATE,
      DataDomain.ChartRange.ONE_YEAR,
      DataDomain.ChartRange.FIVE_YEARS,
      DataDomain.ChartRange.MAX,
    ];

    if (data.fetching && data.quote === defaultQuote && data.chart.length === 0) {
      return (
        <Container>
          <Content>
            <Spinner />
          </Content>
        </Container>
      );
    }

    return (
      <Container style={styles.root}>
        <Content>
          <View>
            <H1>{data.quote?.companyName}</H1>
          </View>
          <H1 style={styles.price}>{data.quote.latestPrice.toFixed(2)}</H1>
          <LineChartView data={lineChartData} />
          <View style={styles.chartRange}>
            {chartRangeList.map((cur) => (
              <Button
                key={`chartRange-${cur.toUpperCase()}`}
                bordered={chartRange === cur ? undefined : true}
                onPress={(): void => this.onChartRangeChange(cur)}
              >
                <Text>{cur.toUpperCase()}</Text>
              </Button>
            ))}
          </View>
          <StocksKeyStats data={data.quote} />
        </Content>
      </Container>
    );
  }
}

export const mapStateToProps = (state: AppState, ownProps: Props): SelectorProps => ({
  data: selectStockDetailsTrim(state, {
    stockSymbol: ownProps.route.params.symbol,
  }),
  lineChartData: selectStockDetailsLineChart(state, {
    stockSymbol: ownProps.route.params.symbol,
  }),
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  fetchChart: (symbol: string, chartRange: DataDomain.ChartRange): Actions.Chart.FetchAction =>
    dispatch(fetchStockChart(symbol, chartRange)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockDetailsScreen);
