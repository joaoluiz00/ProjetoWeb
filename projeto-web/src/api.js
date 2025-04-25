import axios from 'axios';
import React, {useState} from 'react';

const api = axios.create({

    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    headers: {'Content-Type': 'application/json',}

});

export default api;