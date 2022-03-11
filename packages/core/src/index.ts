// NOTE: We explicitly export the symbols in the root index.ts file to have better control over package's public API.

export {
  ChainId,
  BNB,
  BUSD,
  Chain,
  Config,
  DEFAULT_SUPPORTED_CHAINS,
  Dai,
  ERC20,
  ERC20Interface,
  ERC20Mock,
  ERC20MockInterface,
  Ether,
  FullConfig,
  KovanDai,
  KovanEther,
  MultiCall,
  MultiCall2,
  MultiCall2ABI,
  MultiCallABI,
  MulticallAddresses,
  NATIVE_CURRENCY,
  NodeUrls,
  TestBNB,
  TestBUSD,
} from './constants'
export {
  Action,
  AddNotificationPayload,
  BlockNumberChanged,
  BlockNumberContext,
  BlockNumberProvider,
  ChainState,
  ChainStateAction,
  ConfigContext,
  ConfigProvider,
  DAppProvider,
  DAppProviderProps,
  DEFAULT_NOTIFICATIONS,
  DEFAULT_STORED_TRANSACTIONS,
  InjectedNetworkProvider,
  MultiChainState,
  MultiChainStateProvider,
  MultiChainStatesContext,
  Network,
  NetworkActivator,
  NetworkProvider,
  Notification,
  Notifications,
  RawCall,
  RawCallResult,
  RemoveNotificationPayload,
  SingleChainState,
  State,
  StoredTransaction,
  StoredTransactions,
  blockNumberReducer,
  callsReducer,
  chainStateReducer,
  getStoredTransactionState,
  multicall,
  multicall2,
  useBlockNumber,
  useConfig,
  useInjectedNetwork,
  useMultiChainStates,
  useNetwork,
  useNotificationsContext,
  useTransactionsContext,
  useUpdateConfig,
  ChainCall,
} from './providers'
export {
  Call,
  ContractCall,
  Web3Ethers,
  connectContractToSigner,
  useBlockMeta,
  useCall,
  useCalls,
  useChainMeta,
  useChainState,
  useContractCall,
  useContractCalls,
  useContractFunction,
  useDebounce,
  useDebouncePair,
  useEtherBalance,
  useEthers,
  useGasPrice,
  useInterval,
  useLocalStorage,
  useLookupAddress,
  useMulticallAddress,
  useNotifications,
  useSendTransaction,
  useToken,
  useTokenAllowance,
  useTokenBalance,
  useTokenList,
  useTransactions,
  useChainCall,
  useChainCalls,
} from './hooks'
export {
  Currency,
  CurrencyValue,
  FiatCurrency,
  NativeCurrency,
  Token,
  TransactionOptions,
  TransactionState,
  TransactionStatus,
  transactionErrored,
} from './model'
export * from './model/chain'
export {
  CallResult,
  addressEqual,
  compareAddress,
  decodeCallResult,
  encodeCallData,
  getChainById,
  getChainMeta,
  getChainName,
  getExplorerAddressLink,
  getExplorerTransactionLink,
  getUniqueCalls,
  isLocalChain,
  isTestChain,
  shortenAddress,
  shortenIfAddress,
  shortenIfTransactionHash,
  shortenTransactionHash,
  warnOnInvalidCall,
} from './helpers'
