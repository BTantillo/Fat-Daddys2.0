function createLoremIpsum(numWords = 50) {
    const loremIpsum = "Country Thursdays."
    
    const result = loremIpsum.split(/\s+/).slice(0,numWords).join(" ");
    return result;
  };

  dateConverter = function(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const result =  month + ' ' + date + ', ' + year 
    return result;
  };

  module.exports = {
      dateConverter,
      createLoremIpsum
  }