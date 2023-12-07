import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Input, Button } from 'antd';
import './search.scss';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState([]);
  const [customMessage, setCustomMessage] = useState('');

  const updateCustomMessage = (message) => {
    setCustomMessage(message);
  };

  const search = async (city) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/user/find/${city}`);
      const data = response.data;

      if (data.status === false) {
        setUserData([]);
        updateCustomMessage("City not found. Please try another city.");
      } else {
        setUserData(data.data);
        updateCustomMessage('');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const city = event.currentTarget.elements.city.value.trim();
    setSearchTerm(city);
    search(city);
  };

  useEffect(() => {
    // You can add additional logic or fetch data when the component mounts
    // For example, fetch some initial data
    search('initialCity');
  }, []);

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <form onSubmit={handleSearch}>
        <Input.Search
          placeholder="Search..."
          allowClear
          name="city"
          style={{ width: '100%', marginBottom: 16 }}
        />
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </form>
      
      {customMessage && (
        <div style={{ color: 'red', textAlign: 'center', marginBottom: '16px' }}>
          {customMessage}
        </div>
      )}

      <Row gutter={16}>
        {userData.map((user) => (
          <Col key={user._id} span={8}>
            <Card title={user.name} bordered={false}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Phone Number: {user.phone_no}</p>
              <p>Blood Group: {user.blood_group}</p>
              {/* Add more user details as needed */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Search;
