/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const BASEURL = "https://randomuser.me/api/?results=10"

export default {
    getEmployee: function() {
        return axios.get(BASEURL)
    }
};