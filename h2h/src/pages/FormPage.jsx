import Button from '../components/Button';
import Card from '../components/card';
import Header from "../components/header";
import { useState } from "react";


export default function FormPage() {
    // State to hold form input values
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    // Handle change for each input field
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can handle the form submission logic
      console.log(formData);
    };
  
    return (
      <div>
        <Header />
        <Card>
          <h2>Form Page</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
            <label htmlFor="description">Description:</label>
            <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    );
  }