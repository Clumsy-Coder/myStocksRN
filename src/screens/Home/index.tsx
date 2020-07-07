import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Content, List } from 'native-base';

import { AppActions, AppState } from 'src/redux/index.reducers';
import { fetchStockQuoteBatch } from 'src/redux/Stocks/Actions';
import { Actions as StocksActions, Selectors as StocksSelectors } from 'src/redux/Stocks/Types';
import { selectStockQuoteTrim } from 'src/redux/Stocks/Selectors';
import StockCard from 'src/components/StockCard';

interface SelectorProps {
  selectedStockQuoteTrim: StocksSelectors.SelectQuoteTrim[];
}

interface DispatchProps {
  fetchQuoteBatch: () => StocksActions.Batch.FetchQuoteAction;
}

type Props = SelectorProps & DispatchProps;

export class Home extends React.Component<Props> {
  private fetchQuoteInterval: NodeJS.Timeout | undefined;

  private fetchQuoteIntervalTimeout = 10;

  componentDidMount = (): void => {
    const { fetchQuoteBatch } = this.props;

    this.fetchQuoteInterval = setInterval(fetchQuoteBatch, this.fetchQuoteIntervalTimeout * 1000);
  };

  componentWillUnmount = (): void => {
    if (this.fetchQuoteInterval !== undefined) clearInterval(this.fetchQuoteInterval);
  };

  render(): JSX.Element {
    const { selectedStockQuoteTrim } = this.props;

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
  fetchQuoteBatch: (): StocksActions.Batch.FetchQuoteAction => dispatch(fetchStockQuoteBatch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
