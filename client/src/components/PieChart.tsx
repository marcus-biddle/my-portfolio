
import { Pie, PieChart } from "recharts"
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


export function ChartPieDonut({ chartData }: { chartData: any[] }) {
  return (
    <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-[200px] "
    >
        <PieChart>
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
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