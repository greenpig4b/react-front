export const login = () => ({ type: "LOGIN" });
export const logout = () => ({ type: "LOGOUT" });

const initState = {
    isLogin: false,
    jwt: "",

};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { isLogin: true , jwt: action.jwt }; // 리턴되는 값이 state 로저장
            
        case "LOGOUT":
            return { isLogin: false };
        default:
            return state;
    }
};




export default reducer;