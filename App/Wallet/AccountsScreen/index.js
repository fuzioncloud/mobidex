import * as _ from 'lodash';
import React, { Component } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import {
  loadTokens,
  updateForexTickers,
  updateTokenTickers
} from '../../../thunks';
import Row from '../../components/Row';
import Tabs from '../Tabs';
import TokenList from './TokenList';
import TokenDetails from './TokenDetails';

class AccountsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      token: null
    };
  }

  async componentDidMount() {
    await this.onRefresh();
  }

  render() {
    if (!this.props.web3) {
      return <View />;
    }

    if (!this.props.assets.length) {
      return <View />;
    }

    let ethToken = _.find(this.props.assets, { symbol: 'ETH' });
    let filteredTokens = _.without(this.props.assets, ethToken);
    filteredTokens = _.without(this.props.assets, { symbol: 'WETH' });

    return (
      <View style={{ width: '100%' }}>
        <Tabs index={0} />
        <ScrollView
          style={{ width: '100%' }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          <View style={{ height: '100%', paddingTop: 25 }}>
            <Row style={{ height: 200 }}>
              <TokenDetails token={this.state.token || ethToken} />
            </Row>
            <Row>
              <TokenList
                token={this.state.token}
                tokens={filteredTokens}
                onPress={token => this.setState({ token })}
              />
            </Row>
          </View>
        </ScrollView>
      </View>
    );
  }

  onRefresh = async () => {
    this.setState({ refreshing: true });
    await this.props.dispatch(updateForexTickers());
    await this.props.dispatch(updateTokenTickers());
    this.setState({ refreshing: false });
  };

  updateIndex(index) {
    switch (index) {
      case 0:
        break;
    }
  }
}

export default connect(
  state => ({ ...state.wallet, ...state.device.layout }),
  dispatch => ({ dispatch })
)(AccountsScreen);