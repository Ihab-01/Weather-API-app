const weatherType = {
    Thunderstorm:{
        icon: 'zap',
        message: 'it could get noisy',
        backgroundImage: require("../assets/images/thunder.jpg"),
    },
    Drizzle:{
        icon: 'rain',
        message: 'it might rain a little',
        backgroundImage: require("../assets/images/rain.jpg"),
    },
    Rain:{
        icon: 'umbrella',
        message: 'you will need an umbrella',
        backgroundImage: require("../assets/images/rain.jpg"),
    },
    Snow:{
        icon: 'cloud-snow',
        message: 'lets build a snow man',
        backgroundImage: require("../assets/images/snow.jpg"),
    },
    Clear:{
        icon: 'sun',
        message: 'its perfect t-shirt weather',
        backgroundImage: require("../assets/images/clear.jpg"),
    },
    Clouds:{
        icon: 'cloud',
        message: 'you could live in the clouds',
        backgroundImage: require("../assets/images/clouds.jpg"),
    },
    Haze:{
        icon: 'wind',
        message: 'it might be a bit damp',
        backgroundImage: require("../assets/images/mist.jpg"),
    },
    Mist:{
        icon: 'align-justify',
        message: 'it might be hard to see',
        backgroundImage: require("../assets/images/mist.jpg"),
    }
}

export default weatherType;