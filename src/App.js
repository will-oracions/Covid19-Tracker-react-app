import React, { Component } from 'react'

import styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components'

import { fetchData } from './api'

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({ data: fetchedData })

        //console.log('-->', fetchedData)
    }

    handleCountryChange = async (country) => {
        //console.log(country)

        this.setState({ country: country })
        const fetchedData = country === 'global' ? await fetchData() : await fetchData(country)
        //console.log(fetchedData)
        this.setState({ data: fetchedData })

    }

    render() {

        const { data, country } = this.state

        return <div className={styles.container}>
            <img className={styles.image} src={require('./assets/image.png')} alt='corona' />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    }
}

export default App
