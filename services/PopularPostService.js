const getAllPopulars = () => ({

    async getAllPopulars(params) {
        return await fetch('https://api.kastamonutravelguide.com.tr:8080/api/v1/post/tag/3?&languageCode=' + params)
    }
})

export default getAllPopulars