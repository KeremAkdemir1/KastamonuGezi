
const CategoryDetailService = () => ({

    async getAllCategoryPosts(params,id) {
        const requestOptions = {
            method: 'POST',
        };
        return await fetch(`https://api.kastamonutravelguide.com.tr:8080/api/v1/post/all?languageCode=${params}&categoryId=` + id,requestOptions)
    }
})

export default CategoryDetailService