module.exports = (req, res) => {
    const mock = {
        'openingHours' : [
            { 
                'dayOfWeek': 'Mo',
                'hours': {
                    'start': '09:00:00',
                    'end': '11:30:00'
                }
            },
            { 
                'dayOfWeek': 'Mo',
                'hours': {
                    'start': '12:00:00',
                    'end': '18:00:00'
                }
            }
        ]
    };

    res.json(mock);
}