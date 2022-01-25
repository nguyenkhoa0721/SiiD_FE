import { Box, Text } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";
import { GREEN_DARKER } from "utils/const/ColorChoice";

export default function StatChart() {
  const state = {
    series: [
      {
        name: "STOCK ABC",
        data: [0, 100, 300, 200],
      },
    ],

    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      colors: [GREEN_SHOPIFY],
      fill: {
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: [GREEN_DARKER],
      },
      title: {
        text: "Number of changes",
        align: "left",
      },
      subtitle: {
        text: "In the last 30 days",
        align: "left",
      },
      labels: ["Day 0", "Day 1", "Day 2", "Day 3"],
      xaxis: {
        type: "category",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };
  return (
    <Box shadow="lg" bg="white" p={4} ml={4} mb={4} borderRadius="lg">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </Box>
  );
}
