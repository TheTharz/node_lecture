const weatherApp = (address) => {
  console.log(address);
  return new Promise((resolve, reject) => {
    const info = {
      url: `http://api.weatherapi.com/v1/current.json?key=04be1096868245f4860134938232908&q=${address}&aqi=no`,
      json: true,
    };
    request(info, (error, { body }) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};
module.exports = weatherApp;
