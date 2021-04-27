import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import axios from 'axios';

import env from '../../../../env';


function Recipe ({ recipe, navigation }) {
  return (
    <TouchableOpacity
    onPress={ () => navigation.navigate('Details', { id: recipe.id, title: recipe.title, image: recipe.image }) }
    style={{backgroundColor: "#fff", marginBottom: 2}}>
      <View style={{flexDirection: "row", alignItems: 'center', width: '100%'}}>
        <Image  source={{
          uri: recipe.image,
          width: 75,
          height: 75
        }} />
        <Text style={{color: "black", flex: 1, height: '100%', padding: 10}}>{recipe.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

function RecipesList ({ recipes, navigation }) {
  return (
    <View>
      {recipes.map((elm, i) => {
        return <Recipe recipe={elm} navigation={navigation} key={i} />
      })}
    </View>
  )
}

function RecipesListScreen ({ navigation }) {

  const [recipes, setRecipes] = useState([]);

  const renderItem = ({ item }) => (
    <Recipe recipe={item} navigation={navigation} />
  );

  useEffect(() => {
      axios.get(env.baseApiURL + '/recipes/complexSearch', {
        params: {
          apiKey: '378d0bf636654b7db6ec4add1cda5101'
        }
      })
      .then(function (response) {
        setRecipes(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);

  return recipes.length > 0 ? (
    <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id + ''}
      />
  ) : (
    <View>
      <Text>RecipesListScreen</Text>
    </View>
  )
};

export default RecipesListScreen;
