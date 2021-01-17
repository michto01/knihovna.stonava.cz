module.exports = (req, res) => {
    const botAnswer = {
        user_id: req.body.user_id,
        bot_id: req.body.bot_id,
        module_id: req.body.module_id,
        message: "Test Message",
        cards: [
            {
                "type": "text",
                "value": "Test Text Card",
                "buttons": [
                    {
                        "type": "url",
                        "value": "https://google.com",
                        "name": "google"
                    },
                    {
                        "type": "module",
                        "value": "4600",
                        "name": "Change Module"
                    }
                ]
            },
            {
                "type": "image",
                "value": "http://link_on_image.png"
            },
            {
                "type": "gallery",
                "value": "gallery",
                "gallery": [
                    {
                        "image": "http://link_on_image.png",
                        "heading": "Test Gallery Heading",
                        "subtitle": "Test Gallery Subtitle",
                        "url": "http://some_test_url.com",
                        "buttons": [
                            {
                                "type": "url",
                                "value": "https://google.com",
                                "name": "google"
                            },
                            {
                                "type": "module",
                                "value": "4600",
                                "name": "Change Module"
                            }
                        ]
            }
            ]
        }
        ]
    }

    res.json(botAnswer);
}