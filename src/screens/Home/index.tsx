import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, List } from 'native-base';

import { AppActions, AppState } from 'src/redux/index.reducers';
import { RootStackParamList } from 'src/routes/AppRouteTypes';
import { fetchStockQuoteBatch } from 'src/redux/Stocks/Actions';
import { Actions as StocksActions, Selectors as StocksSelectors } from 'src/redux/Stocks/Types';
import { selectStockQuoteTrim } from 'src/redux/Stocks/Selectors';
import StockCard from 'src/components/StockCard';

interface OwnProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

interface SelectorProps {
  selectedStockQuoteTrim: StocksSelectors.SelectQuoteTrim[];
}

interface DispatchProps {
  fetchQuoteBatch: () => StocksActions.Batch.FetchQuoteAction;
}

type Props = SelectorProps & DispatchProps & OwnProps;

export class Home extends React.Component<Props> {
  componentDidMount(): void {
    const { fetchQuoteBatch } = this.props;
    fetchQuoteBatch();
  }

  render(): JSX.Element {
    const { selectedStockQuoteTrim } = this.props;

    return (
      <Container>
        <Content>
          <List>
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

const mapStateToProps = (state: AppState): SelectorProps => ({
  selectedStockQuoteTrim: selectStockQuoteTrim(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps => ({
  fetchQuoteBatch: (): StocksActions.Batch.FetchQuoteAction => dispatch(fetchStockQuoteBatch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
