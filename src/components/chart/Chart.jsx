import React, { useState, useEffect } from 'react'

import { fetchDailyData } from '../../api'

const Chart = () => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        async function fetchApi() {
            setDailyData(await fetchDailyData())
        }
        fetchApi()
    }, [])

    return <h1>Chart</h1>
}

export default Chart