"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  languages: {
    label: "Languages",
  },
  javascript: {
    label: "Javascript",
    color: "var(--chart-1)",
  },
  typescript: {
    label: "Typescript",
    color: "var(--chart-2)",
  },
  html: {
    label: "HTML",
    color: "var(--chart-3)",
  },
  css: {
    label: "CSS",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

function labelFormatter(label, payload) {
  if (payload && payload.length > 0) {
    const percent = payload[0].payload.percent;
    return `${(percent * 100).toFixed(2)}%`;
  }
  return label;
}


export function ChartPieDonut({ chartData }: { chartData: any[] }) {
  return (
    <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-[200px] "
    >
        <PieChart>
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel labelFormatter={labelFormatter} />}
        />
        <Pie
            data={chartData}
            dataKey="allocation"
            nameKey="language"
            innerRadius={60}
        />
        </PieChart>
    </ChartContainer>
  )
}