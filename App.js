import React, { useState } from 'react';
import "./App.css"

function App() {

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        price: '',
        available: false,
        image: '',
    });
    const [buttonVisible, setButtonVisible] = useState(true);

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({...formData, [name]: inputValue});
    };

    const [formVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(!formVisible);
    }

    const [flats, setFlats] = useState([
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
    ])
    const handleAddFlat = (e) => {
        e.preventDefault();

        const newFlat = {
            id: flats.length + 1,
            name: formData.name,
            location: formData.location,
            price: formData.price,
            available: formData.available,
            image: formData.image,
        };
        setFlats(prevList=>[...flats, newFlat]);
        setFormData(
            {
                name: '',
                location: '',
                price: '',
                available: false,
                image: '',
            }
        )
        setFormVisible(false);
    };

    const createForm = () => {
        return (
            <div>
                <h2>Add New Flat</h2>
                <form onSubmit={handleAddFlat}>
                    <label htmlFor="name">Name:</label><input type="text" id="name" name="name" value={formData.name}
                                                              onChange={handleInputChange}/>
                    <label htmlFor="location">Location:</label><input type="text" id="location" name="location"
                                                                      value={formData.location}
                                                                      onChange={handleInputChange}/>
                    <label htmlFor="price">Price:</label><input type="text" id="price" name="price"
                                                                value={formData.price} onChange={handleInputChange}/>
                    <label htmlFor="image">Image URL:</label><input type="text" id="image" name="image"
                                                                    value={formData.image}
                                                                    onChange={handleInputChange}/>
                    <label htmlFor="available">Availability:</label><input type="checkbox" id="available"
                                                                           name="available" checked={formData.available}
                                                                           onChange={handleInputChange}/>
                    <button type="submit">Add Flat</button>
                </form>
            </div>
        );
    };

    return (
        <div className={App}>

            <header>
                <h1>SuperFlats</h1>
            </header>

            <main>
                {formVisible && createForm()}
                {!formVisible && <button id="addFlatButton" onClick={handleButtonClick}>Add Flat</button>}
                <h2>Flat List</h2>
                <ul style={{listStyle: "none"}} key="form">
                    {flats.map((flat, index) => (
                        <li key={index} style={{listStyleType: "disc"}}>
                            <h3>{flat.name}</h3>
                            <p>Location: {flat.location}</p>
                            <p>Price: {flat.price}</p>
                            <p>Availability: {flat.available ? 'Available' : 'Not Available'}</p>
                            <img
                                src={flat.image}
                                alt={flat.name}
                            />
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}
export default App;