import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Image, FlatList } from "react-native";
import axios from 'axios';

import env from '../../../../env';

const ing = {
  "ingredients": [
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 6,
        },
        "us": {
          "unit": "cup",
          "value": 0.25,
        },
      },
      "image": "basil.jpg",
      "name": "basil",
    },
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 125,
        },
        "us": {
          "unit": "cup",
          "value": 1,
        },
      },
      "image": "flour.png",
      "name": "flour",
    },
    {
      "amount": {
        "metric": {
          "unit": "",
          "value": 0.25,
        },
        "us": {
          "unit": "",
          "value": 0.25,
        },
      },
      "image": "garlic-powder.png",
      "name": "garlic powder",
    },
    {
      "amount": {
        "metric": {
          "unit": "servings",
          "value": 2,
        },
        "us": {
          "unit": "servings",
          "value": 2,
        },
      },
      "image": "garlic-salt.jpg",
      "name": "garlic salt",
    },
    {
      "amount": {
        "metric": {
          "unit": "",
          "value": 4,
        },
        "us": {
          "unit": "",
          "value": 4,
        },
      },
      "image": null,
      "name": "fresh potatoes",
    },
    {
      "amount": {
        "metric": {
          "unit": "servings",
          "value": 2,
        },
        "us": {
          "unit": "servings",
          "value": 2,
        },
      },
      "image": "vegetable-oil.jpg",
      "name": "vegetable oil",
    },
  ],
}

const RecipeDetailsScreen = ({ route }) => {
  const [ingredients, setIngredients] = useState([]);
    
  const renderItem = ({ item }) => (
    <Ingredient ingredient={item} />
  );

  useEffect(() => {
      axios.get(env.baseApiURL + '/recipes/' + route.params.id + '/ingredientWidget.json', {
        params: {
          apiKey: '378d0bf636654b7db6ec4add1cda5101'
        }
      })
      .then(function (response) {
        setIngredients(response.data.ingredients)
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);

  return ingredients.length > 0 ? (
    <View style={{ flex: 1}}>
      <ImageBackground source={{ uri: route.params.image }} style={{ flex: 0.20, width: '100%', resizeMode: "cover", justifyContent: "center" }}>
        <View style={{flex: 1, padding: 10 ,backgroundColor: 'rgba(0,0,0,.5)', justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>{route.params.title}</Text>
        </View>
      </ImageBackground>
      <FlatList
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name + index}
        style={{flex: 0.80}}
      />
    </View>
  ) : (
    <View>
      <Text>RecipeDetailsScreen</Text>
    </View>
  )
};

function Ingredient ({ ingredient }) {
  return (
      <View style={{flexDirection: "row", alignItems: 'center', width: '100%', backgroundColor: '#fff', marginBottom: 2}}>
        <Image  source={{
          uri: ingredient.image ? "https://spoonacular.com/cdn/ingredients_500x500/" + ingredient.image : "https://www.logolynx.com/images/logolynx/db/db2fe30df72dc25a95146340c50d3e0c.png",
          width: 75,
          height: 75,
        }} style={{margin: 5}} />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ padding: 10 }}>{ingredient.name}</Text>
          <Text style={{ padding: 10, fontWeight: 'bold' }}>{ingredient.amount.metric.value + ' ' + ingredient.amount.metric.unit}</Text>
        </View>
      </View>
  )
}

export default RecipeDetailsScreen;
