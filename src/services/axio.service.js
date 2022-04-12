import axios from "axios";

import baseURl from "../constants/urls";

const axiosService = axios.create({baseURl});

export {
    axiosService
}