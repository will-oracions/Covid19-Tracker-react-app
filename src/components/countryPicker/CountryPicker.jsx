import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'

import styles from './CountryPicker.css'

import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function fetchAPI() {
            setCountries(await fetchCountries())
        }

        fetchAPI()

    }, [])

    //console.log(countries)

    return <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="global">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>
}

export default CountryPicker