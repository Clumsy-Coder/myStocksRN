import * as React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, H1, H2, H3, View } from 'native-base';
import { Dispatch } from 'redux';

import { StockDetailsRouteProp } from '@routes/Types';
import { AppState, AppActions } from '@redux/index.reducers';
import { Actions, Selectors } from '@redux/Stocks/Types';
import { fetchStockChart } from '@redux/Stocks/Actions';
import { selectStockDetailsTrim } from '@redux/Stocks/Selectors';
import StocksKeyStats from '@components/StocksKeyStats';

interface SelectorProps {
  data: Selectors.SelectStockDetailsTrim;
}

interface DispatchProps {
  fetchChart: (symbol: string) => Actions.Chart.FetchAction;
}

type NavigationProps = {
  route: StockDetailsRouteProp;
};

type Props = NavigationProps & SelectorProps & DispatchProps;

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
});

class StockDetailsScreen extends React.Component<Props> {
  componentDidMount(): void {
    const { route, fetchChart } = this.props;

    fetchChart(route.params.symbol);
  }

  render(): JSX.Element {
    const { route, data } = this.props;
    const { symbol } = route.params;

    if (data.fetching) {
      return (
        <Container>
          <Content>
            <Text>Loading</Text>
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
          <H1 style={styles.price}>{data.quote.latestPrice}</H1>
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
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  fetchChart: (symbol: string): Actions.Chart.FetchAction => dispatch(fetchStockChart(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockDetailsScreen);
