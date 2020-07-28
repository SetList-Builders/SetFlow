import axios from "axios"
 
export default {
    getAPILyrics: function(artist, song, APIKey) {
        return axios.get("https://orion.apiseeds.com/api/music/lyric/" + artist + "/" + song + "?apikey=" + REACT_APP_API_KEY)
    },

    //Gigs
    
    //Get all gigs
    getGigs: function() {
        return axios.get("/api/gigs/")
    },

    //Get specific gig by id
    getGig: function(id) {
        return axios.get("/api/gigs/" + id)
    },

    //Save gig to the database
    saveGig: function(savedGigs) {
        return axios.post("/api/gigs/", savedGigs)
    },

    //Delete gig by id
    deleteGig: function(id) {
        return axios.delete("/api/gigs/" + id)
    },

    //Setlists

    //Get all setlists
    getSetlists: function() {
        return axios.get("/api/setlists/")
    },

    //Get specific setlist by id
    getSetlist: function(id) {
        return axios.get("/api/setlists/" + id)
    },

    //Save setlist to the database
    saveSetlist: function(savedSetlists) {
        return axios.post("/api/setlists/", savedSetlists)
    },

    //Delete setlist by id
    deleteSetlist: function(id) {
        return axios.delete("/api/setlists/" + id)
    },

    //Songs

    //Get all songs
    getSongs: function() {
        return axios.get("/api/songs/")
    },

    //Get specific song by id
    getSong: function(id) {
        return axios.get("/api/songs/" + id)
    },

    //Save song to the database
    saveSong: function(savedSongs) {
        return axios.post("/api/songs/", savedSongs)
    },

    //Delete song by id
    deleteSong: function(id) {
        return axios.delete("/api/songs/" + id)
    },

}