import './App.css';
import Container from './components/Container/Container';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeItem from './components/RecipeItem/RecipeItem';
import Difficulty from './components/Difficulty/Difficulty';
import recipes from './recipes.json';
import styled from "styled-components";

const RecipePhoto = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 25px;
`;

const RecipeName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const RecipeInfos = styled.ul`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 40px;
  width: 100%;
  border-radius: 25px;
  background-color: #FFF;
`;

const RecipeInfo = styled.li`
  display: flex;
  gap: 2px;
`;

const RecipeText = styled.span`
  font-size: 17px;
  font-weight: 400;
`;



function App() {
  return (
    <>
      <Container>
        <RecipeList>
          {
            recipes.map(recipe => 
              <RecipeItem key={recipe.id} data-id={recipe.id} style={{"border": recipe.difficulty === 3 ? '5px solid #eb3452' : 'none'}}>
                <RecipePhoto src={recipe.img} alt={recipe.name}></RecipePhoto>
                <RecipeName>{recipe.name}</RecipeName>
                <RecipeInfos>
                  <RecipeInfo>
                    <RecipeText>{recipe.cookingTime} min</RecipeText>
                  </RecipeInfo>
                  <RecipeInfo>
                    <RecipeText>{recipe.servings} servings</RecipeText>
                  </RecipeInfo>
                  <RecipeInfo>
                    <RecipeText>{recipe.calories} calories</RecipeText>
                  </RecipeInfo>
                </RecipeInfos>
                <Difficulty difficulty={recipe.difficulty} />
              </RecipeItem>
            )
          }
        </RecipeList>
      </Container>
    </>
  );
}

export default App;
