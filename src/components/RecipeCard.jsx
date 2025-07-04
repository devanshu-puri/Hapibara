const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-green-900 mb-1">{recipe.title}</h3>
      <p className="text-xs text-gray-500 mb-2">Calories: {recipe.calories}</p>
      <p className="text-sm text-gray-700 mb-1">
        <strong>Protein:</strong> {recipe.protein} | <strong>Carbs:</strong> {recipe.carbs} | <strong>Fat:</strong> {recipe.fat}
      </p>
      <p className="text-sm font-semibold text-gray-800 mt-2">Ingredients:</p>
      <ul className="text-sm list-disc list-inside text-gray-600 mb-2">
        {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <p className="text-sm font-semibold text-gray-800 mt-2">How to Make:</p>
      <ol className="text-sm list-decimal list-inside text-gray-600">
        {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </div>
  );
};

export default RecipeCard;
