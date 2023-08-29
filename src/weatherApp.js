const weatherApp = (address) => {
  return new Promise((resolve, reject) => {
    const info = {
      url:
        'http://api.weatherstack.com/v1/current.json?key=73738c532e5e834ee689c143151231508?location=' +
        address,
      json: true,
    };
    request(info, (error, response) => {
      if (error) {
        reject(error);
      } else if (response.body.error) {
        reject(response.body.error);
      } else {
        resolve(response.body);
      }
    });
  });
};
module.exports = weatherApp;
