import { getElementNames } from "~/utils/elements";

const REGEX = /[wfea]/

export default defineEventHandler(async (event) => {
    const { els }: { els: string } = getQuery(event)

    let title = 'Find out the dominant elements on your birth chart! 💫';
    let description = 'by github.com/yanari';
    
    if (REGEX.test(els)) {
        let {text, plural} = getElementNames(els);
        title = `The element${plural? 's' :''} that dominate my birth chart ${plural? 'are' :'is'} ${text} 💫`
        description = 'Find out yours too! by github.com/yanari';
    }

    return {
        ogTitle: title,
        ogDescription: description,
        ogType: 'website',
        ogImage: 'https://wallpapers.com/images/hd/aesthetic-astrology-dbat1z9z5gyspsp4.jpg',
        ogUrl: 'https://calculate-astrology.netlify.app',
        twitterCard: 'summary_large_image'
    }
})
