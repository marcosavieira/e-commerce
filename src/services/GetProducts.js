import productsData from "../mock/productsData.json";

export const GetProducts = () => {
    const response = productsData.response;
    const list = response.map((item) => ({
        id: item.id,
        description: item.description,
        picture: item.picture,
        price: item.price,
    }));
    return list;
};
