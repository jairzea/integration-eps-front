import React, { Component, useEffect, useState } from "react";
import Card from "components/Card/Card";
import Chart from "react-apexcharts";
import { barChartData, barChartOptions } from "variables/charts";

const BarChart = ({data}) => {
    return (
      <Card
        py="1rem"
        height={{ sm: "200px" }}
        width="100%"
        bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
        position="relative"
      >
        <Chart
          options={data && barChartOptions(data?.alls?.[1])}
          series={data && barChartData(data?.alls?.[0])}
          type="bar"
          width="100%"
          height="100%"
        />
      </Card>
    );
  
}

export default BarChart;
