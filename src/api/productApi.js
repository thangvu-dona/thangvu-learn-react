import axiosClient from "./axiosClient";

// use stragiAPi, so that have to custom for getting pagination
const productApi = {
  async getAll(params) {
    const newParams = { ...params };
    newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);

    // remove un-needed key
    delete newParams._page;

    // Fetch product list + count
    const productList = await axiosClient.get('/products', { params: newParams });
    const count = await axiosClient.get('/products/count', { params: newParams });

    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      }
    }
  },
}

export default productApi;