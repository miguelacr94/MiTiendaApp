import Call from "../call";



export const getProduct = async (page = 1) => {
    try {
      const res = await Call("GET", `/products`);
      if (res.success) {
        return res;
      }
      return;
    } catch (err) {
      console.error(err);
      return;
    }
  };