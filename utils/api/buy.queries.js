import Call from "../call";

export const buy = async (payload) => {
    try {
      if (!payload) throw "Training data must be provided";
  
      const res = await Call("POST", "/purchase", payload);
      return res;
    } catch (err) {
      console.error(err);
      
      return;
    }
  };



  
  export const getProduct = async (id) => {
    try {
      const res = await Call("GET", `/purchase/one/${id}`);
      if (res.success) {
        return res;
      }
      return;
    } catch (err) {
      console.error(err);
      return;
    }
  };