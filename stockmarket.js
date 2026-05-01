/** @param {NS} ns */
export async function main(ns) {
  function init() {

  }
  function stockAlgo(stock) {
    const stockArr = ns.stock.getSymbols
    for (let i = 0; i < stockArr.length; i ++) {
      
    }
  }
  while (true) {
    await ns.stock.nextUpdate
  }
}