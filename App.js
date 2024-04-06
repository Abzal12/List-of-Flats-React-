// stage 1 - show all the items in the flats array of objects
import React, {useState} from 'react';
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

    const createForm = () => {
        setFormToInput(
            <div>
                <h2>Add New Flat</h2>
                <form action="">
                    <label htmlFor="name">Name:</label><input type="text" id="name" name="name" value="name"/>
                    <label htmlFor="location">Location:</label><input type="text" id="location" name="location"
                                                                      value="location"/>
                    <label htmlFor="price">Price:</label><input type="text" id="price" name="price"
                                                                value="price"/>
                    <label htmlFor="image">Image URL:</label><input type="text" id="image" name="image"
                                                                    value="image"/>
                    <label htmlFor="available">Availability:</label><input type="checkbox" id="available"
                                                                              name="available" value="" checked/>
                    <button id='addFlatButton' onClick={createForm}>Add Flat</button>
                </form>
            </div>
        );
    };

    const [addFlatButton, setFormToInput] = useState(<button id='addFlatButton' onClick={createForm}>Add Flat</button>);

    return (
        <div className={App}>

            <header>
                <h1>SuperFlats</h1>
            </header>

            <main>
                {addFlatButton}
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