import React from 'react'
import serviceArray from '../data/services.json'
import Layout from '../components/Layout/Layout';

const services = () => {
    return (
        <Layout>
        <div>
            <h1>Pick form a wide variety of services offered</h1>

            <h3>{serviceArray[0].name}</h3>
        </div>
        </Layout>
    )
}

export default services
