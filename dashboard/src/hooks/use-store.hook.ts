import React from "react";
import storeContext from "../contexts/store.context";

const useStore = () => React.useContext(storeContext);

export default useStore;
