import axios from 'axios'

const CategoryCardService = () => ({

    async getAllCategory(params) {
        return await fetch('https://api.kastamonutravelguide.com.tr:8080/api/v1/post/categoryMap?languageCode=' + params)
    }
})

export default CategoryCardService  