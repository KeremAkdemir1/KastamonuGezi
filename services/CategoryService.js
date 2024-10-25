import axios from 'axios'

const CategoryService = () => ({

    async getAllCategory(params) {
        return await fetch('https://api.kastamonutravelguide.com.tr:8080/api/v1/post/categories?languageCode=' + params)
    }
})

export default CategoryService