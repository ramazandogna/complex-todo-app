export const initialState = {
   todos: [],
};

const reducer = (state, action) => {
   // console.log(action); //for debug control

   switch (action.type) {
      case 'ADD_TODO':
         return {
            ...state,
            todos: [...state.todos, action.payload],
         };
      case 'REMOVE_TODO':
         return {
            ...state,
            todos: [...state.todos].filter(
               (todo) => todo.id !== action.payload
            ),
         };
      case 'COMPLETE_TODO':
         return {
            ...state,
            todos: state.todos.map((todo) => {
               if (todo.id !== action.payload) {
                  return todo;
               }

               return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
               };
            }),
         };
      case 'UPTADE_TODO':
         return {
            ...state,
            todos: state.todos.map((todo) => {
               if (todo.id !== action.payload.todoId) {
                  return todo;
               }

               return {
                  ...todo,
                  content: action.payload.newValue,
               };
            }),
         };

      default:
         return {
            ...state,
         };
   }
};
export default reducer;
