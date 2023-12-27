const encodeSearch = (data) => {
    data.trim()
    if(data.includes(" ")) {
      data =  data.replaceAll(" ", "%20")
    }
    return data
}
module.exports = encodeSearch;


