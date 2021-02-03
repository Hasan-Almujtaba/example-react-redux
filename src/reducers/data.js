const initialState = [
  {
    name: "Axo Nuclear",
    age: "52",
    status: "alive",
  },
  {
    name: "Igo Maguero",
    age: "33",
    status: "dead",
  },
];

const data = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = [
        ...state,
        {
          name: action.data.name,
          age: action.data.age,
          status: action.data.status,
        },
      ];

      return state;
    default:
      return state;
  }
};

export default data;
