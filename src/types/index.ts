export interface Portfolio {
  id: number
  name: string
  symbol: string
  value: number
  change: number
  allocation: number
}

export interface ChartDataPoint {
  month: string
  value: number
  profit: number
}

export interface AllocationItem {
  name: string
  value: number
}
