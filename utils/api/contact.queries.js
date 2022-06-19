import Call from "../call";

export const sendContact = async (payload) => {
    try {
      if (!payload) throw "Training data must be provided";
  
      const res = await Call("POST", "/contact", payload);
      return res;
    } catch (err) {
      console.error(err);
      
      return;
    }
  };