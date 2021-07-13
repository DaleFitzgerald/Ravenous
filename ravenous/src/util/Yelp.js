const apiKey = "ADD API KEY HERE";

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(
            `***CORS ANYWHERE***/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { headers: { Authorization: `Bearer ${apiKey}` } }
        )
            .then(
                (response) => {
                return response.json();
            }
                
            )
            .then(
                (jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        };
                    });
                }
            })
    }
}

export default Yelp;