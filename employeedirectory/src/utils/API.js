/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const BASEURL = "https://randomuser.me/api/?results=20"

export default {
    getEmployee: function() {
        return axios.get(BASEURL)
    }
};