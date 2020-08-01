import axios from "axios"
 
export default {
    // getAPILyrics: function(artist, song, APIKey) {
    //     return axios.get("https://orion.apiseeds.com/api/music/lyric/" + artist + "/" + song + "?apikey=" + REACT_APP_API_KEY)
    // },

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

    //Update gig by id
    updateGig: function(id) {
        return axios.put("/api/gigs" + id)
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

    //Update setlist by id
    updateSetlist: function(id) {
        return axios.put("/api/setlist" + id)
    },

    //Songs

    //Get all songs
    getLyrics: function() {
        return axios.get("/api/lyrics/")
    },

    //Get specific song by id
    getGigLyrics: function(id) {
        return axios.get("/api/lyrics/" + id)
    },

    //Save song to the database
    saveLyrics: function(savedSongs) {
        return axios.post("/api/lyrics/", savedSongs)
    },

    //Delete song by id
    deleteLyrics: function(id) {
        return axios.delete("/api/lyrics/" + id)
    },

}