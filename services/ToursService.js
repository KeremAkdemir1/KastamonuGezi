const getAllTours = () => ({

    async getAllTours(params) {
        return await fetch('https://api.kastamonutravelguide.com.tr:8080/api/v1/post/tag/4?&languageCode=' + params)
    }
})

export default getAllTours