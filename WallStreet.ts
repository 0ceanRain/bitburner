import { NS } from '@ns';

export async function main(ns: NS) {
    const syms = ns.stock.getSymbols()
    function currentPortFolio(stock: string) {
        ns.stock.getPosition(stock)
    }
    function formula(stock: string, W: number, A: number, B: number) {
      const optimalOutcome: number =  W / A - (1 - W) / B

      return optimalOutcome
    }
    function formula2(stock: string) {
        const variance = ns.stock.getVolatility(stock) * ns.stock.getVolatility(stock)
        const optimal = ns.stock.getForecast(stock) / variance

        return optimal * 0.5
    }
  function StockAlgo() {
    for (let i = 0; i < syms.length; i++) {
        let sym = syms[i]
        currentPortFolio(sym)
        if (formula2(sym) > ns.stock.getPosition(sym)[0] ) {
            
        }
    }
  }
}
