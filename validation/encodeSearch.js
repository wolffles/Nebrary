const encodeSearch = (data) => {
    data.trim()
    if(data.includes(" ")) {
      data =  data.replace(" ", "%20")
    }
    return data
}
module.exports = encodeSearch;


