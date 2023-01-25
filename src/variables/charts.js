export const barChartData = (data = []) =>[
  {
    name: "Documentos",
    data: data,
  },
];

export const barChartOptions = (data = []) => ({
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      backgroundColor: "red",
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        backgroundColor: "red",
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: data,
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#fff",
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
  },
  fill: {
    colors: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "12px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
});

export const lineChartData = ({data}) => [
  {
    name: "Resoluciones",
    data: data?.resolutions?.[0],
  },
  {
    name: "Otros documentos",
    data: data?.others?.[0],
  },
];

export const lineChartOptions = ({data}) => ({
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: data?.alls?.[1] ?? [],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#4FD1C5", "#2D3748"],
  },
  colors: ["#4FD1C5", "#2D3748"],
});
