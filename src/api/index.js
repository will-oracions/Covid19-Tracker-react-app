import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)

        return { confirmed, recovered, deaths, lastUpdate }
    } catch (err) {
        console.log('ERROR =>', err)
    }
}

export const fetchDailyData = async () => {
    try {

        const data = await axios(`${url}/daily`)

        console.log(data)
        return data

    } catch (err) {
        console.log(err)
    }
}