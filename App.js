// stage 1 - show all the items in the flats array of objects
import React from 'react';

function App() {
    // make your code here
    const apartmentList = [
        {
            id: 1,
            name: 'Cozy Apartment',
            location: 'Downtown',
            price: '$1500/month',
            available: true,
            image: 'https://example.com/cozy-apartment.jpg',
        },
        {
            id: 2,
            name: 'Modern Loft',
            location: 'Midtown',
            price: '$1800/month',
            available: false,
            image: 'https://example.com/modern-loft.jpg',
        },
        {
            id: 3,
            name: 'Charming Studio',
            location: 'Uptown',
            price: '$1200/month',
            available: true,
            image: 'https://example.com/charming-studio.jpg',
        },
    ]

    return (
        <div className={App}>
            <header>
                <h1>SuperFlats</h1>
            </header>

            <main>
                <h2>Flat List</h2>
                <ul style={{listStyle: "none"}}>
                    {apartmentList.map((apartment) => (
                            <li key={apartment.id} style={{listStyleType: "disc"}}>
                                <h3>{apartment.name}</h3>
                                <p>Location: {apartment.location}</p>
                                <p>Price: {apartment.price}</p>
                                <p>Availability: {apartment.available === true ? 'Available' : 'Not Available'}</p>
                                <img
                                    src={apartment.image}
                                    alt={apartment.name}
                                />
                            </li>
                        ))}
                </ul>
            </main>
        </div>
    )
}

export default App;

