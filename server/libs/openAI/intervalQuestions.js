require("dotenv").config();
const {
    generateArticle,
    createImage,
} = require("./openAi");
const { upload } = require("../pictures/pictures");
const axios = require('axios')

const { SERVER_ADDRESS, SERVER_PORT } = process.env;

async function intervalQuestions(language, theme) {
    try {
        const { title, text } = await generateArticle(language, theme);
        const thumb = await createImage(theme, "256x256");
        const thumbUrl = thumb.data.data[0].url;
        const thumbImageUpload = await upload(thumbUrl);
        const thumbImage = thumbImageUpload.data.display_url;
        const metaCover = await createImage(theme, "1024x1024");
        const metaCoverUrl = metaCover.data.data[0].url;
        const metaCoverUpload = await upload(metaCoverUrl);
        const metaImage = metaCoverUpload.data.display_url;
        const article = {
            id: Date.now(),
            title,
            text,
            thumbImage,
            metaImage
        }

        axios.post(`${SERVER_ADDRESS}:${SERVER_PORT}/article`, {article}).then((response) => {
            console.log(response.status, response.data);
        });

    } catch (error) {
        console.log("articles", error.message);
    }
}

module.exports = intervalQuestions;
