import { getElementNames } from '~/utils/elements'

const REGEX = /[wfea]/

export default defineEventHandler(async (event) => {
    const { els }: { els: string } = getQuery(event)

    let title = "What's Your Elemental Sign? 🔮"
    let description =
        'Discover the element that rules your birth chart — are you Fire, Earth, Air or Water? Built by github.com/yanari'

    if (els && REGEX.test(els)) {
        let { text } = getElementNames(els)
        title = `My chart is ruled by ${text} — it kind of explains everything.`

        description =
            'Discover what elements rule your chart and what it reveals about you 🌌 Made by github.com/yanari'
    }

    return {
        ogTitle: title,
        ogDescription: description,
        ogType: 'website',
        ogImage:
            'https://wallpapers.com/images/hd/aesthetic-astrology-dbat1z9z5gyspsp4.jpg',
        ogUrl: 'https://calculate-astrology.netlify.app',
        twitterCard: 'summary_large_image',

        twitterTitle: title,
        twitterDescription: description,
        twitterImage:
            'https://wallpapers.com/images/hd/aesthetic-astrology-dbat1z9z5gyspsp4.jpg',
        ogLocale: 'en_US',
        ogSiteName: "What's Your Elemental Sign?",
    }
})
