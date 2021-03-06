import React, { Component } from 'react'
import { Row, Button } from 'reactstrap'
import Chart from 'chart.js'
import 'chartjs-plugin-zoom'

const styles = {
  row: {
    maxHeight: '500px',
    padding: '0 50px',
    position: 'relative'
  },
  chart: {
    height: '450px',
    width: '1050px'
  },
  reset: {
    position: 'absolute',
    fontSize: '0.7em',
    padding: '5px',
    right: '65px'
  }
}

export default class DataChart extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.createChart()
  }

  componentDidUpdate() {
    this.updateChart()
  }

  createChart() {
    const { years, netEquity, investment } = this.props.data
    
    const data = {
      labels: years,
      datasets: [
        {
          label: 'Home Equity',
          data: netEquity,
          borderColor: 'rgb(55, 165, 229)',
          backgroundColor: 'rgba(55, 165, 229, 0)',
          pointStyle: 'line',
          pointRadius: 0
        },
        {
          label: 'Rent Savings',
          data: investment,
          borderColor: 'rgb(43, 70, 96)',
          backgroundColor: 'rgba(43, 70, 96, 0)',
          pointStyle: 'line',
          pointRadius: 0
        }
      ]
    }

    const options = {
      responsive: true,
      maintainAspectRatio: true,
      tooltips: {
        mode: 'index',
        intersect: false,
        position: 'nearest',
        callbacks: {
          title: data => `Year ${data[0].xLabel}`,
          label: (data, label) => `${label.datasets[data.datasetIndex].label}: ${data.yLabel.toLocaleString()}`
        }
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      legend: {
        labels: {
          usePointStyle: true
        }
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: { display: false },
          scaleLabel: {
            display: true,
            labelString: 'Years'
          }
        }],
        yAxes: [{
          display: true,
          gridLines: { display: false },
          scaleLabel: {
            display: true,
            labelString: 'Equity ($)'
          },
          ticks: {
            callback: value => value.toLocaleString()
          }
        }]
      },
      pan: {
        enabled: true,
        mode: 'y'
      },
      zoom: {
        enabled: true,
        mode: 'xy'
      }
    }

    const ctx = this.refs.canvas.getContext('2d');
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data,
      options
    })
  }

  updateChart() {
    const { netEquity, investment } = this.props.data
    const { datasets } = this.lineChart.config.data
    datasets[0].data = netEquity
    datasets[1].data = investment
    this.lineChart.update()
  }

  resetZoom = () => {
    this.lineChart.resetZoom()
  }

  render() { 
    return (
      <Row style={styles.row}>
        <Button color="link" style={styles.reset} onClick={this.resetZoom}>Reset Zoom</Button>
        <canvas ref="canvas" style={styles.chart}></canvas>
      </Row>
    )
  }
}