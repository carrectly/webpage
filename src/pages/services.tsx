import React from 'react'
import serviceArray from '../data/services.json'
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/ServiceCards/ServiceCard';


const services = () => {
    return (
        <Layout>
        <div>
            <h1>Pick form a wide variety of services offered</h1>

            <h3>{serviceArray[0].name}</h3>

            <ServiceCard />
        </div>
        </Layout>
    )
}

export default services
