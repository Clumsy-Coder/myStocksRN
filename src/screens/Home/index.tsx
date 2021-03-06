import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Content, List, Spinner } from 'native-base';

import { AppActions, AppState } from 'src/redux/index.reducers';
import { fetchStockQuoteBatch, fetchSymbolsMetadata } from 'src/redux/Stocks/Actions';
import { Actions as StocksActions, Selectors as StocksSelectors } from 'src/redux/Stocks/Types';
import { selectStockQuoteTrim } from 'src/redux/Stocks/Selectors';
import StockCard from 'src/components/StockCard';

interface SelectorProps {
  selectedStockQuoteTrim: StocksSelectors.SelectQuoteTrim[];
}

interface DispatchProps {
  fetchQuoteBatch: () => StocksActions.Batch.FetchQuoteAction;
  fetchSymbolsMeta: () => StocksActions.SymbolsMetadata.FetchAction;
}

type Props = SelectorProps & DispatchProps;

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export class Home extends React.Component<Props> {
  private fetchQuoteInterval: NodeJS.Timeout | undefined;

  private fetchQuoteIntervalTimeout = 10;

  componentDidMount = (): void => {
    const { fetchQuoteBatch, fetchSymbolsMeta } = this.props;

    fetchSymbolsMeta();
    this.fetchQuoteInterval = setInterval(fetchQuoteBatch, this.fetchQuoteIntervalTimeout * 1000);
  };

  componentWillUnmount = (): void => {
    if (this.fetchQuoteInterval !== undefined) clearInterval(this.fetchQuoteInterval);
  };

  render(): JSX.Element {
    const { selectedStockQuoteTrim } = this.props;

    if (selectedStockQuoteTrim.some((cur) => cur.fetching === true)) {
      return (
        <Container style={styles.loadingView}>
          <Content>
            <Spinner />
          </Content>
        </Container>
      );
    }

    return (
      <Container>
        <Content>
          <List testID='stocks-home-list'>
            {selectedStockQuoteTrim.map((stockQuoteTrim: StocksSelectors.SelectQuoteTrim) => {
              return (
                <StockCard
                  data={stockQuoteTrim}
                  key={`stock-quote-trim-${stockQuoteTrim.symbol}`}
                />
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

export const mapStateToProps = (state: AppState): SelectorProps => ({
  selectedStockQuoteTrim: selectStockQuoteTrim(state),
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  fetchQuoteBatch: () => dispatch(fetchStockQuoteBatch()),
  fetchSymbolsMeta: () => dispatch(fetchSymbolsMetadata()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
