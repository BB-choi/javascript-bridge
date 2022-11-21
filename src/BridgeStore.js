class BridgeStore {
  #bridge;

  #tryCount;

  #userInputResults = [];

  constructor(bridge, tryCount) {
    // REMOVE: 임시 다리 확인
    console.log(bridge);
    this.#bridge = bridge;
    this.#tryCount = tryCount;
  }

  isSameWithBridgeLength(number) {
    return this.#bridge.length === number;
  }

  isMovable(count, command) {
    // TODO: 이미 완료한 경우 추가
    return this.#bridge[count] === command;
  }

  addUserInputResult(result) {
    this.#userInputResults = [...this.#userInputResults, result];
  }

  resetUserInputResult() {
    this.#userInputResults = [];
  }

  getUserInputResultLength = () => this.#userInputResults.length;

  getUserInputResult = (idx) => this.#userInputResults[idx];

  isGameClear() {
    return this.isSameWithBridgeLength(this.getUserInputResultLength())
    && this.#userInputResults.every(({ result }) => result);
  }

  updateTryCount() {
    this.#tryCount += 1;
  }

  retry() {
    this.updateTryCount();
    this.resetUserInputResult();
  }

  getGameResult() {
    return {
      isGameClear: this.isGameClear(),
      tryCount: this.#tryCount,
    };
  }
}

module.exports = BridgeStore;
