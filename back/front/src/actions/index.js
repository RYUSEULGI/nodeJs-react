import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    axios
        .get('/api/current_user')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};