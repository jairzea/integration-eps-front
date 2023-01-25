import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "variables/charts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.timerID =  setTimeout(() => this.reload(), 1000);
  }
    
  reload() {
    this.setState({
      chartData: lineChartData(this.props),
      chartOptions: lineChartOptions(this.props),
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
