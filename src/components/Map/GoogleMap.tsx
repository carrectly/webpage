import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import styled from '@emotion/styled';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;


const defaultLocation = [34.0522, -118.2437]

const places =[{
    "formatted_address": "3818 Sunset Blvd, Los Angeles, CA 90026, USA",
    "geometry": {
        "location": {
            "lat": 34.091158,
            "lng": -118.2795188
        },
        "viewport": {
            "northeast": {
                "lat": 34.09258172989272,
                "lng": -118.2780556701073
            },
            "southwest": {
                "lat": 34.08988207010728,
                "lng": -118.2807553298927
            }
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
    "id": "1113d3dd7339f965caae39387dd808a9e877bc2e",
    "name": "Flore Vegan",
    "opening_hours": {
        "open_now": false,
        "weekday_text": []
    },
    "photos": [{
        "height": 2336,
        "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/100540448898812651487/photos\">Roman Roze</a>"
        ],
        "photo_reference": "CmRaAAAA69UVwaJnUQXQUSSX9IfB3b29opNIohkexsGAGoHTD5Lyg24lhpBtaiNlrgihstR-k7Su9Vgbc8-eE5qHEdeLVY1QTfiuyS9TPp3e2GMM_grW2FtrgrFQGtMJSeJ336cPEhCVHYfFzoOgrrKdXlk34rJiGhSXSv_XG1q1CtOrWJjWQrxJmLvIPg",
        "width": 3504
    }],
    "place_id": "ChIJj62e80jHwoARusJT4mjohWw",
    "price_level": 2,
    "rating": 4.6,
    "reference": "CmRbAAAAM9_YQ6Dt9T69zucczidzOd6HU2vmzaXvTG-lJ89KyBlJVBJ0aEfar2Exre4iDWKHjExUshYSpAXEzA-YqotVnOt4XznKY_vkD520XK5nzFz5v5IefUe6FDBqZPzYlxRDEhAgQvwzNjwC49WWlyoMKza5GhS6r-VIl1lXdMl_JEW67yL7fPkZdg",
    "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
    ]
},
{
    "formatted_address": "1700 Sunset Blvd, Los Angeles, CA 90026, USA",
    "geometry": {
        "location": {
            "lat": 34.0771192,
            "lng": -118.2587199
        },
        "viewport": {
            "northeast": {
                "lat": 34.07856197989273,
                "lng": -118.2573112201073
            },
            "southwest": {
                "lat": 34.07586232010728,
                "lng": -118.2600108798928
            }
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
    "id": "d8bc8d867ccf72cbc552e100238a0820628963ee",
    "name": "Sage Plant Based Bistro and Brewery Echo Park",
    "opening_hours": {
        "open_now": false,
        "weekday_text": []
    },
    "photos": [{
        "height": 3024,
        "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/105756638182226336287/photos\">Anurag Singhai</a>"
        ],
        "photo_reference": "CmRaAAAAW6v0EyZa77vrG5Aq8zbnU1sR7pljqfoDpSxXhISFgWoYWLkFY5hh7YCFbzYLj1XzflTJOrCXJa-q5jPT4L0vMY8cjXrhCzB5y7Z--qJTWOO_NxaRUBbB5QhpxyUT-R6tEhBru_ZZ_xcCxFueYrRxI6pFGhRgiExnWWOhU2Ii_NnW6M8R4xs4IQ",
        "width": 4032
    }],
    "place_id": "ChIJ6T9ggBvHwoARc3aegK3PBe0",
    "price_level": 2,
    "rating": 4.6,
    "reference": "CmRbAAAAy5CT3sE8bRlADeIeMYtC7NRdE58vKOCjOvhZNUs0QwBD7kSS6WIfo3wmxvt4EGZm5TJ6WdqOCRSnnnFoXAVpz9F3EyZPosUDCN2LJIvtYxwS3BYkwh6uVQRSj-OPLak6EhBRf8xOpcuc5WWWBgGNbGGbGhSYiomy4iNV-g_KzzqNrpymm3MxQw",
    "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
    ]
}]

export const GoogleMap = () => {

    // const [places, setPlaces] = useState([])

    // const fetchPlaces = async () => {
    //   fetch('places.json')
    //   .then((response) => response.json())
    //   .then((data) => setPlaces(data.results))
    // }
  
    // useEffect(() => {
    //   fetchPlaces();
    // }, [])
  
    // if (!places || places.length === 0) {
    //   return null;
    // }


  return (
    <div>
      <GoogleMapReact defaultZoom={10} defaultCenter={defaultLocation}>
        {/* {places.map((place) => (
          <Marker
            key={place.id}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          /> */}
        ))}
      </GoogleMapReact>
    </div>
  );
};
