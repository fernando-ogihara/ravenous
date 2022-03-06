/*
Client ID

0cs4OGVbZXwvD_tu4hsFTQ
API Key

92p_9MR_84rwt7p6AXlZGeE6dakcneFFkX5nDqXJrX2rdbXiehrL4uNhprUfBtCmNI2RN--mVTwLZQjZ6C3w6E1vqIhCO-uRUN6DB43Vnbjj67YS6c9EEsboAkoNYHYx

*/

const apiKey =
  '92p_9MR_84rwt7p6AXlZGeE6dakcneFFkX5nDqXJrX2rdbXiehrL4uNhprUfBtCmNI2RN--mVTwLZQjZ6C3w6E1vqIhCO-uRUN6DB43Vnbjj67YS6c9EEsboAkoNYHYx';

/*
const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }).then((response) => {
        return response.json()
      }).then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zipCode,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.reviewCount,

        }));
      }
    });
  }
};
    
export default Yelp;
*/

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

export default Yelp;
