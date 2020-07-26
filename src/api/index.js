import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    try {

        let changebleUrl = url

        if (country) {
            changebleUrl = `${url}/countries/${country}`
        }

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changebleUrl)

        return { confirmed, recovered, deaths, lastUpdate }
    } catch (err) {
        console.log('ERROR =>', err)
    }
}

export const fetchDailyData = async () => {
    try {

        const { data } = await axios.get(`${url}/daily`)

        //console.log('[(', data)

        const modifedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            data: dailyData.reportDate
        }))

        return modifedData

    } catch (err) {
        console.log(err)
    }
}

export const fetchCountries = async () => {
    try {
        //console.log('RECUPERATION DES PAYS')

        const { data: { countries } } = await axios.get(`${url}/countries`)

        return countries.map(country => country.name)

    } catch (err) {
        console.log(err)
    }
}