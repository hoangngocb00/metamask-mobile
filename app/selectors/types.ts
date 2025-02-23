import {
  AccountTrackerState,
  CurrencyRateState,
  NftDetectionController,
  NftState,
  TokenBalancesState,
  TokenDetectionController,
  TokenListState,
  TokenRatesState,
  TokensState,
} from '@metamask/assets-controllers';
import SwapsController from '@metamask/swaps-controller';
import { NetworkState } from '@metamask/network-controller';
import { AddressBookState } from '@metamask/address-book-controller';
import { BaseState } from '@metamask/base-controller';
import { KeyringControllerMemState } from '@metamask/keyring-controller';
import { PreferencesState } from '@metamask/preferences-controller';
import { PhishingState } from '@metamask/phishing-controller';
import { TransactionState } from '@metamask/transaction-controller';
import { GasFeeController } from '@metamask/gas-fee-controller';
import { PPOMState } from '@metamask/ppom-validator';
import { ApprovalControllerState } from '@metamask/approval-controller';

export interface EngineState {
  engine: {
    backgroundState: {
      AccountTrackerController: AccountTrackerState;
      AddressBookController: AddressBookState;
      AssetsContractController: BaseState;
      NftController: NftState;
      TokenListController: TokenListState;
      CurrencyRateController: CurrencyRateState;
      KeyringController: KeyringControllerMemState;
      NetworkController: NetworkState;
      PreferencesController: PreferencesState;
      PhishingController: PhishingState;
      PPOMController: PPOMState;
      TokenBalancesController: TokenBalancesState;
      TokenRatesController: TokenRatesState;
      TransactionController: TransactionState;
      SwapsController: SwapsController;
      GasFeeController: GasFeeController;
      TokensController: TokensState;
      TokenDetectionController: TokenDetectionController;
      NftDetectionController: NftDetectionController;
      ApprovalController: ApprovalControllerState;
    };
  };
}
