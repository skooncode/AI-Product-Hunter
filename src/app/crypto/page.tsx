import Image from "next/image"
import { Info, Star } from "lucide-react"

interface CryptoData {
  id: string
  rank: number
  name: string
  symbol: string
  price: number
  hourChange: number
  dayChange: number
  weekChange: number
  marketCap: number
  volume: number
  volumeSymbol: string
  supply: number
}

interface CryptoTableProps {
  cryptoData: CryptoData[]
}

export default function Crypto({ cryptoData }: CryptoTableProps) {
  cryptoData = [
    { id: '1', rank: 1, name: 'Bitcoin', symbol: 'BTC', price: 50000, hourChange: 0, dayChange: 0, weekChange: 0, marketCap: 0, volume: 0, volumeSymbol: 'BTC', supply: 0 },
    { id: '2', rank: 2, name: 'Ethereum', symbol: 'ETH', price: 3500, hourChange: 0, dayChange: 0, weekChange: 0, marketCap: 0, volume: 0, volumeSymbol: 'ETH', supply: 0 },
    { id: '3', rank: 3, name: 'Ripple', symbol: 'XRP', price: 1.00, hourChange: 0, dayChange: 0, weekChange: 0, marketCap: 0, volume: 0, volumeSymbol: 'XRP', supply: 0 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="table-header">#</th>
            <th className="table-header">Name</th>
            <th className="table-header text-right">Price</th>
            <th className="table-header text-right">1h %</th>
            <th className="table-header text-right">24h %</th>
            <th className="table-header text-right">7d %</th>
            <th className="table-header text-right">
              <div className="flex items-center justify-end">
                Market Cap
                <Info className="w-4 h-4 ml-1" />
              </div>
            </th>
            <th className="table-header text-right">
              <div className="flex items-center justify-end">
                Volume(24h)
                <Info className="w-4 h-4 ml-1" />
              </div>
            </th>
            <th className="table-header text-right">
              <div className="flex items-center justify-end">
                Circulating Supply
                <Info className="w-4 h-4 ml-1" />
              </div>
            </th>
            <th className="table-header text-right">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id} className="table-row">
              <td className="table-cell">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-gray-300 mr-2" />
                  {crypto.rank}
                </div>
              </td>
              <td className="table-cell">
                <div className="flex items-center">
                  <div className="crypto-symbol">
                    {crypto.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{crypto.name}</div>
                    <div className="text-gray-500 text-sm">{crypto.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="table-cell text-right">{crypto.price}</td>
              <td className={`table-cell text-right ${crypto.hourChange > 0 ? "text-green-500" : "text-red-500"}`}>
                {crypto.hourChange > 0 ? "+" : ""}
                {crypto.hourChange}%
              </td>
              <td className={`table-cell text-right ${crypto.dayChange > 0 ? "text-green-500" : "text-red-500"}`}>
                {crypto.dayChange > 0 ? "+" : ""}
                {crypto.dayChange}%
              </td>
              <td className={`table-cell text-right ${crypto.weekChange > 0 ? "text-green-500" : "text-red-500"}`}>
                {crypto.weekChange > 0 ? "+" : ""}
                {crypto.weekChange}%
              </td>
              <td className="table-cell text-right">{crypto.marketCap}</td>
              <td className="table-cell text-right">
                <div>{crypto.volume}</div>
                <div className="text-gray-500 text-sm">{crypto.volumeSymbol}</div>
              </td>
              <td className="table-cell text-right">{crypto.supply}</td>
              <td className="table-cell">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt={`${crypto.name} 7 day chart`}
                  width={120}
                  height={40}
                  className="ml-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}